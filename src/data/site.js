// Central site data, real production destinations for Citron Baltimore.
export const SITE = {
  name: 'Citron Baltimore',
  tagline: 'Waterfront dining, catering & events at Quarry Lake',
  address: '2605 Quarry Lake Dr, Baltimore, MD 21209',
  phone: '410-363-0900',
  phoneHref: 'tel:+14103630900',
  email: 'events@citronbaltimore.com',
  // real production links pulled from citronbaltimore.com
  reserveUrl: 'https://www.opentable.com/r/citron-reservations-baltimore?restref=265828',
  pickupUrl: 'https://order.toasttab.com/online/citron',
  portalUrl: '/plan', // Events & Private Dining portal (Phase 2 swaps in the chosen full portal)
};

// Primary nav (footer holds the "hidden" pages like /journal)
export const NAV = [
  { label: 'Menu', href: '/menu' },
  { label: 'Events & Private Dining', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
