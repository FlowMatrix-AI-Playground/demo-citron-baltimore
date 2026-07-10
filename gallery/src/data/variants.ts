export interface VariantData {
  slug: string;
  name: string;
  templateId: string;
  tagline: string;
  theme: {
    primaryColor: string;
    accentColor: string;
    fontHeading: string;
  };
  previewUrl: string;
  sections: string[];
}

export const variants: VariantData[] = [
  {
    slug: 'variant-1',
    name: 'Quarry Minimal',
    templateId: '01-minimal-scroll',
    tagline: 'Understated luxury. Every element earns its place.',
    theme: { primaryColor: '#FAF9F5', accentColor: '#C4D809', fontHeading: 'DM Serif Display' },
    previewUrl: '/sites/variant-1/',
    sections: ['hero', 'logo-bar', 'features', 'media', 'testimonials', 'cta'],
  },
  {
    slug: 'variant-2',
    name: 'Citron, Loud',
    templateId: '02-bold-brutalist',
    tagline: '14,000 events. Five presidents. One lake.',
    theme: { primaryColor: '#000000', accentColor: '#C4D809', fontHeading: 'Bebas Neue' },
    previewUrl: '/sites/variant-2/',
    sections: ['hero', 'features', 'stats', 'testimonials', 'media', 'steps', 'cta'],
  },
  {
    slug: 'variant-3',
    name: 'The Citron Journal',
    templateId: '03-editorial-magazine',
    tagline: 'The Levine story, told like a magazine feature.',
    theme: { primaryColor: '#F4F2EC', accentColor: '#6B7A00', fontHeading: 'Libre Baskerville' },
    previewUrl: '/sites/variant-3/',
    sections: ['hero', 'rich-text', 'features', 'media', 'testimonials', 'stats', 'faq', 'cta'],
  },
  {
    slug: 'variant-4',
    name: 'The Spaces Grid',
    templateId: '04-bento-card-grid',
    tagline: 'Nine spaces. One address. Browse them like cards.',
    theme: { primaryColor: '#f4f4f5', accentColor: '#C4D809', fontHeading: 'Outfit' },
    previewUrl: '/sites/variant-4/',
    sections: ['hero', 'bento spaces', 'stats', 'portfolio + filters', 'testimonials', 'vendors', 'cta'],
  },
  {
    slug: 'variant-5',
    name: 'Lakeside at Dusk',
    templateId: '05-cinematic-hero',
    tagline: 'Where Baltimore celebrates. Full-screen atmosphere.',
    theme: { primaryColor: '#1F2A33', accentColor: '#B08D3E', fontHeading: 'Montserrat' },
    previewUrl: '/sites/variant-5/',
    sections: ['cinematic hero', 'media', 'features', 'testimonials', 'cta'],
  },
  {
    slug: 'variant-6',
    name: 'The Venue Explorer',
    templateId: '06-split-panel-explorer',
    tagline: 'Find your room. Sidebar-driven venue discovery.',
    theme: { primaryColor: '#1A1A1A', accentColor: '#C4D809', fontHeading: 'Josefin Sans' },
    previewUrl: '/sites/variant-6/',
    sections: ['split hero', 'features accordion', 'about', 'spaces gallery', 'contact'],
  },
  {
    slug: 'variant-7',
    name: 'Celebrations at Citron',
    templateId: '07-playful-illustrated',
    tagline: 'Every celebration deserves the water.',
    theme: { primaryColor: '#DCE8D4', accentColor: '#C4D809', fontHeading: 'Fredoka' },
    previewUrl: '/sites/variant-7/',
    sections: ['hero', 'features', 'steps', 'testimonials', 'faq', 'cta'],
  },
  {
    slug: 'variant-8',
    name: "The Members' Lounge",
    templateId: '08-dark-premium',
    tagline: "Baltimore's private events, elevated. Dark glass and glow.",
    theme: { primaryColor: '#0c0c0a', accentColor: '#C4D809', fontHeading: 'Plus Jakarta Sans' },
    previewUrl: '/sites/variant-8/',
    sections: ['fullscreen hero', 'awards', 'glass features', 'stats', 'testimonials', 'spaces', 'cta'],
  },
  {
    slug: 'variant-9',
    name: 'Classic Citron',
    templateId: '09-multi-page-corporate',
    tagline: 'Three pages. Familiar, trustworthy, established.',
    theme: { primaryColor: '#1F2A33', accentColor: '#B08D3E', fontHeading: 'Merriweather' },
    previewUrl: '/sites/variant-9/',
    sections: ['Home', 'Private Events page', 'About page', 'timeline', 'team', 'contact'],
  },
  {
    slug: 'variant-10',
    name: 'Ten Years at the Quarry',
    templateId: '10-storytelling-scroll',
    tagline: 'A scroll-driven story from 1985 to the 10th anniversary.',
    theme: { primaryColor: '#1F2A33', accentColor: '#B08D3E', fontHeading: 'Crimson Pro' },
    previewUrl: '/sites/variant-10/',
    sections: ['chapter hero', 'narrative', 'media', 'features', 'stats', 'timeline', 'testimonials', 'cta'],
  },
];

export const prospectName = 'Citron Baltimore';
export const prospectTagline = 'Ten design directions for your new website';
