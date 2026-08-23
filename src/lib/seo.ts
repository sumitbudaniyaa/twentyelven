import { useEffect } from 'react';
import { SITE_URL } from './site.js';

export interface SeoOptions {
  /** <title> for this route (site name is appended automatically). */
  title: string;
  /** Meta description, ~150-160 chars. */
  description: string;
  /** Canonical path for this route, e.g. "/" or "/products/feedu". */
  path?: string;
  /** Optional OG/social image URL (absolute or relative to SITE_URL). */
  image?: string;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

/**
 * Per-route SEO. Google ranks individual pages, so each route should declare
 * its own title, description, canonical URL and social tags.
 */
export function useSeo({ title, description, path = '/', image }: SeoOptions) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path}`;
    const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonical);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);

    // Twitter / X
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
  }, [title, description, path, image]);
}
