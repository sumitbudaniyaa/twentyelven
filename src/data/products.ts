// Single source of truth for the product family. The home page renders cards from this list
// and the expanded product page (/products/:slug) reads the same data by slug.

export type ProductStatus = 'live' | 'soon';

export interface Product {
  /** Display index, e.g. "01". */
  index: string;
  /** URL slug; only used for `live` products that have an expanded page. */
  slug: string;
  status: ProductStatus;
  name: string;
  tagline: string;
  /** Short blurb shown on the home-page card. */
  summary: string;
  /** Longer description shown on the expanded product page. */
  description: string;
  features: string[];
  /** External live-product URL. */
  url: string;
  /** Logo asset in /public. */
  logo: string;
  /** Optional landing screenshot in /public, shown in a browser frame. */
  shot?: string;
  /** Optional owner/admin dashboard screenshot (browser frame). */
  dashboard?: string;
  /** Optional customer app screenshot (phone frame). */
  app?: string;
}

export const products: Product[] = [
  {
    index: '01',
    slug: 'feedu',
    status: 'live',
    name: 'Feedu',
    tagline: 'The operating system for modern restaurants.',
    summary:
      'QR ordering, kitchen, staff, payments, loyalty and multi-branch analytics — in one real-time platform.',
    description:
      'Feedu replaces a dozen disconnected restaurant tools with one calm, connected system. A diner scans a QR at the table to browse, order and pay — no app install — and that single scan flows live to the kitchen display, the waiter floor and the owner’s dashboard, while payments, loyalty and multi-branch analytics run in the background.',
    features: [
      'QR ordering',
      'Kitchen display',
      'Waiter floor',
      'Owner dashboard',
      'Payments & loyalty',
      'Multi-branch analytics',
    ],
    url: 'https://feedu.in',
    logo: '/feedu_logo.png',
    shot: '/feedu_landing.png',
    dashboard: '/admin.png',
    app: '/userapp.png',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
