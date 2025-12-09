
export type Language = 'en' | 'es';

export interface BilingualString {
  en: string;
  es: string;
}

export interface Property {
  id: string;
  ref: string;
  title: BilingualString;
  category: 'villas' | 'townhouses' | 'apartments' | 'new-developments';
  subcategory: BilingualString;
  location: BilingualString;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  plot?: number; // in sqm, optional
  shortDescription: BilingualString;
  fullDescription: BilingualString;
  features: BilingualString[];
  images: string[]; // URLs to images
  featured: boolean;
}

export interface NewsPost {
  id: string;
  title: BilingualString;
  date: string; // YYYY-MM-DD
  category: BilingualString;
  excerpt: BilingualString;
  content: BilingualString;
  author: string;
  image: string; // URL to image
}

export interface Service {
  icon: string; // SVG path or component name
  title: BilingualString;
  description: BilingualString;
}

export interface Theme {
  accentColor: string;
  backgroundColor: string;
  font: {
    headings: string;
    body: string;
  };
}
