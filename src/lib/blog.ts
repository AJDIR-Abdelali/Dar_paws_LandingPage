import { getCollection, type CollectionEntry } from 'astro:content';
import { t, type Lang } from '../i18n/ui';

// Entry ids look like "fr/my-post"; the URL slug is the part after the language.
export const postLang = (p: CollectionEntry<'blog'>) => p.id.split('/')[0] as Lang;
export const postSlug = (p: CollectionEntry<'blog'>) => p.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const all = await getCollection('blog', (p) => postLang(p) === lang && !p.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(t(lang).dateLocale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
