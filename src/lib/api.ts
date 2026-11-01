// Server-side reads from darpaws-api for the shared pages. Runs on Vercel only,
// so visitors never see the API address.
import { API_URL } from '../i18n/ui';

export type Photo = { url: string };
export type Post = {
  id: number; kind: 'missing' | 'adoption'; status: 'open' | 'closed';
  petName?: string | null; petType: string; breed?: string | null; gender?: 'male' | 'female' | null;
  ageYears?: number | null; ageMonths?: number | null; description?: string | null; photos: Photo[];
  city?: string | null; place?: string | null; eventDate?: string | null;
  vaccinated?: boolean | null; sterilized?: boolean | null; phone?: string | null;
  createdAt: string; poster?: { name: string } | null;
};
export type Sitter = {
  id: number; displayName: string; bio?: string | null; services: string[]; prices: Record<string, number>;
  currency: string; city?: string | null; rating: number; avatarUrl?: string | null; verified: boolean;
};
export type Review = { id: number; rating: number; comment?: string | null; createdAt: string; Owner?: { name: string } | null };

/** 'ok' with data, 'missing' (404 → page gone), or 'busy' (API asleep / error → retry later). */
export type Result<T> = { state: 'ok'; data: T } | { state: 'missing' } | { state: 'busy' };

// Render's free plan sleeps; a cold start can take ~30 s. Wait a while, then show a
// page that reloads itself rather than an error.
async function get<T>(path: string, ms = 9000): Promise<Result<T>> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  try {
    const res = await fetch(`${API_URL}/api${path}`, { signal: ctl.signal, headers: { Accept: 'application/json' } });
    if (res.status === 404 || res.status === 400) return { state: 'missing' };
    if (!res.ok) return { state: 'busy' };
    return { state: 'ok', data: (await res.json()) as T };
  } catch {
    return { state: 'busy' };
  } finally {
    clearTimeout(timer);
  }
}

const validId = (id?: string) => (id && /^\d{1,9}$/.test(id) ? id : null);

export async function loadPost(id?: string): Promise<Result<Post>> {
  const ok = validId(id);
  if (!ok) return { state: 'missing' };
  const r = await get<{ post: Post }>(`/community/posts/${ok}`);
  return r.state === 'ok' ? { state: 'ok', data: r.data.post } : r;
}

export async function loadSitter(id?: string): Promise<Result<{ sitter: Sitter; reviews: Review[]; total: number }>> {
  const ok = validId(id);
  if (!ok) return { state: 'missing' };
  const [s, r] = await Promise.all([
    get<{ caretaker: Sitter }>(`/caretakers/${ok}`),
    get<{ reviews: Review[]; total: number }>(`/caretakers/${ok}/reviews?limit=3`),
  ]);
  if (s.state !== 'ok') return s;
  const rv = r.state === 'ok' ? r.data : { reviews: [], total: 0 };
  return { state: 'ok', data: { sitter: s.data.caretaker, reviews: rv.reviews ?? [], total: rv.total ?? 0 } };
}

/** Cloudinary photo resized for a page or a link preview. */
export const cld = (url: string, t: string) => url.replace('/image/upload/', `/image/upload/${t}/`);
