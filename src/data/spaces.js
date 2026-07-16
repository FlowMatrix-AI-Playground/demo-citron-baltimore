// The nine Citron event spaces, shared source for the checkout portals.
// Booking inventory lives in the PORTALS (not the marketing site pages).
export const SPACES = [
  { key: 'fireplace', name: 'Fireplace Room', cap: 20, band: 's', img: 'room-fireplace.jpg',
    best: 'Intimate dinners, milestone birthdays, small boards', layout: 'One long fireside table or two rounds', cater: 'Plated multi-course or family-style',
    desc: 'The most intimate room in the house: a single fireside table for twenty, for the dinner that should feel like it is in someone’s (very good) home.',
    q: ['Seated dinner or cocktail reception?', 'Is this a milestone (birthday, anniversary)?', 'Add a dedicated wine pairing?'] },
  { key: 'mirror', name: 'Mirror Room', cap: 26, band: 's', img: 'room-mirror.jpg',
    best: 'Luncheons, showers, rehearsal dinners', layout: 'Rounds or U-shape, bright and mirrored', cater: 'Plated or buffet',
    desc: 'A bright, mirrored room for twenty-six, the favorite for ladies’ luncheons, showers, and rehearsal dinners that want daylight and a little sparkle.',
    q: ['Daytime or evening?', 'Seated meal or grazing stations?', 'Any AV for toasts or a slideshow?'] },
  { key: 'club', name: 'Club Room', cap: 50, band: 's', img: 'room-club.jpg',
    best: 'Corporate dinners, cocktail parties', layout: 'Rounds, theater, or reception flow', cater: 'Plated, buffet, or stations',
    desc: 'A flexible fifty-seat room that shifts from a seated corporate dinner to a standing cocktail party without missing a beat.',
    q: ['Guest count, seated vs. standing?', 'Presentation / AV needs?', 'Open bar or consumption?'] },
  { key: 'terrace', name: 'Waterfront Terrace', cap: 50, band: 's', img: 'room-terrace.jpg',
    best: 'Ceremonies, cocktail hours, al fresco dinners', layout: 'Open-air, heated, at the water’s edge', cater: 'Passed hors d’oeuvres, plated, stations',
    desc: 'Fifty guests on a heated, open-air terrace at the water’s edge, where the Quarry Lake sunset does half the decorating.',
    q: ['Ceremony, cocktail hour, or full dinner?', 'Need a weather backup plan?', 'Preferred season / date?'] },
  { key: 'bar', name: 'Citron Bar', cap: 125, band: 'm', img: 'room-bar.jpg',
    best: 'Cocktail receptions, networking, launches', layout: 'Standing reception with lounge seating', cater: 'Passed + stations, full bar',
    desc: 'The bar, given over to your party: up to 125 for a cocktail reception with passed bites, stations, and the full Wine Spectator-honored list.',
    q: ['Standing reception or partial seating?', 'Full open bar or wine + beer?', 'Branded or step-repeat signage?'] },
  { key: 'courtyard', name: 'Waterfront Courtyard', cap: 200, band: 'm', img: 'room-courtyard.jpg',
    best: 'Weddings, galas, large receptions', layout: 'Open-air courtyard on the lake', cater: 'Stations, buffet, plated at scale',
    desc: 'Two hundred guests, open sky, and the lake as backdrop: the courtyard is where Citron throws its biggest outdoor celebrations.',
    q: ['Guest count (up to 200)?', 'Ceremony + reception, or reception only?', 'Tenting / weather contingency?'] },
  { key: 'cove', name: 'The COVE', cap: 200, band: 'm', img: 'room-cove.jpg',
    best: 'Weddings, galas, speaker dinners', layout: 'Indoor signature space, staging-capable', cater: 'Full plated, stations, custom menus',
    desc: 'Citron’s signature indoor event space: 200 guests, staging and AV for a speaker or a first dance, and a kitchen that treats a gala like a Tuesday.',
    q: ['Seated dinner or standing reception?', 'Guest count over 150?', 'Staging / podium / AV needs?'] },
  { key: 'venue', name: 'Entire Venue', cap: 500, band: 'l', img: 'room-venue.jpg',
    best: 'Full buyouts, large weddings, takeovers', layout: 'Whole property, indoor + outdoor + water', cater: 'Multi-station, multi-room service',
    desc: 'The whole property, indoors and out, for up to five hundred: every room, terrace, and the waterfront, yours for the night.',
    q: ['Total guest count?', 'Buyout date (peak spring/fall books early)?', 'Flow across multiple spaces?'] },
  { key: 'offpremise', name: 'Off-Premise Catering', cap: '∞', band: 'l', img: 'room-offpremise.jpg',
    best: 'Catering at your location, tented events', layout: 'Your venue, tent, home, or office', cater: 'Full Citron Caterers off-premise operation',
    desc: 'Forty years and ~14,000 events of off-premise experience: Citron Caterers brings the restaurant’s standard to your tent, home, or office, at any scale.',
    q: ['Event location and date?', 'Approximate guest count?', 'Need rentals / tenting handled?'] },
];

export const VENDORS = [
  { name: 'Floral & Decor', note: 'In-house design consult' },
  { name: 'Linens & Tabletop', note: 'Curated rental partners' },
  { name: 'AV & Production', note: 'Savant-powered systems' },
  { name: 'Event Planning', note: 'Full or day-of coordination' },
  { name: 'Photography Partners', note: 'Preferred local studios' },
  { name: 'Entertainment & Music', note: 'DJs, live bands, quartets' },
];

// Book-a-Call target for a room card (swap to TripleSeat lead form later).
export function bookCall(roomName) {
  return 'mailto:events@citronbaltimore.com?subject=Event%20Inquiry%3A%20' + encodeURIComponent(roomName);
}
