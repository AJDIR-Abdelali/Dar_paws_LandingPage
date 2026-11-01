// Link-preview text/image and caching for the shared pages (/p/<id>, /s/<id>).
import type { AstroGlobal } from 'astro';
import { cld, type Post, type Result, type Sitter } from './api';
import { share } from '../i18n/share';
import { breedName } from '../data/breeds';
import type { Lang } from '../i18n/ui';

const OG = 'c_fill,w_1200,h_630,g_auto,f_jpg,q_auto';
const clip = (t: string, n: number) => (t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t);

export function postMeta(lang: Lang, p: Post) {
  const s = share[lang];
  const type = s.petTypes[p.petType] ?? p.petType;
  const badge = p.kind === 'missing' ? s.lost : s.adoption;
  const name = p.petName ? `${p.petName} (${type})` : type;
  const breed = p.breed ? breedName(p.breed, lang) : '';
  const where = [p.place, p.city].filter(Boolean).join(', ');
  return {
    title: `${p.kind === 'missing' ? '🔴' : '💛'} ${badge} · ${name}${p.city ? ` – ${p.city}` : ''} | DarPaws`,
    description: clip([breed, where, p.description].filter(Boolean).join(' · '), 180),
    image: p.photos[0] ? cld(p.photos[0].url, OG) : undefined,
  };
}

export function sitterMeta(lang: Lang, c: Sitter, total: number) {
  const s = share[lang];
  const services = c.services.map((k) => s.serviceNames[k] ?? k).join(', ');
  return {
    title: `${c.displayName} · ${s.sitter}${c.city ? ` – ${c.city}` : ''} | DarPaws`,
    description: clip([total ? `★ ${c.rating.toFixed(1)} (${s.reviews(total)})` : '', services, c.bio].filter(Boolean).join(' · '), 180),
    image: c.avatarUrl && c.avatarUrl.includes('/image/upload/') ? cld(c.avatarUrl, OG) : undefined,
  };
}

/** Found pages are cached at Vercel's edge for a few minutes; a sleeping API is never cached. */
export function respond(Astro: AstroGlobal, r: Result<unknown>) {
  const h = Astro.response.headers;
  if (r.state === 'ok') h.set('Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400');
  else if (r.state === 'missing') { Astro.response.status = 404; h.set('Cache-Control', 'public, max-age=0, s-maxage=60'); }
  else { Astro.response.status = 503; h.set('Cache-Control', 'no-store'); h.set('Retry-After', '10'); }
}
