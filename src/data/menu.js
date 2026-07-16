// Real Citron Baltimore dinner menu (transcribed from their published menu).
export const MENU = [
  {
    id: 'first-plate',
    title: 'First Plate',
    items: [
      { name: 'Ahi Tuna Tartare', price: 26, desc: 'Sesame black garlic vinaigrette, cucumber radish, avocado, wonton crisps' },
      { name: 'Jumbo Skillet Harrington River Mussels', price: 26 },
      { name: 'Crispy Fresh Calamari', price: 24, desc: 'Blistered chilis, spicy passion fruit glaze' },
      { name: 'Crispy Brussels Sprouts & Cauliflower', price: 18, desc: 'Pomegranate glaze, shaved parmesan' },
      { name: 'Colossal Chilled Shrimp', price: 29, desc: 'Cocktail sauce, citrus' },
      { name: 'Shrimp Spring Rolls', price: 24, desc: 'Asian tso sauce' },
      { name: 'Seared Rare Filet Mignon Sashimi', price: 36, desc: 'Orange asian glaze' },
      { name: 'Artisan Cheese Board', price: 30, desc: 'Daily cheese, dried fruit, candied pecans, ciabatta, wafers' },
      { name: 'Caprese Salad', price: 18, desc: 'Heirloom tomatoes, local watermelon, hearts of palm, cucumber, basil, mozzarella, balsamic glaze' },
      { name: 'Caesar Salad', price: 17, desc: 'White romaine hearts, croutons, parmesan, lemon zest' },
      { name: 'The Wedge', price: 18, desc: 'Iceberg heart, Maytag bleu crumbles, cajun maple bacon, egg, herb vinaigrette' },
      { name: 'Colossal Chilled Crabmeat', price: 34, desc: 'Stone mustard sauce' },
      { name: 'Chilled Fresh Seafood Platter', price: 78, desc: 'Colossal Maryland crabmeat, Texas gold shrimp, diver jumbo sea scallops, remoulade sauce' },
    ],
  },
  {
    id: 'sushi',
    title: 'Designer Sushi',
    items: [
      { name: '3 Piece Nigiri', price: 22 },
      { name: '4 Piece Sashimi', price: 25 },
      { name: 'Atlantic Wild Salmon, Avocado', price: 35 },
      { name: 'California', price: 40, desc: 'Fresh jumbo lump crab meat, avocado, cucumber' },
      { name: 'Eel Roll', price: 36, desc: 'Eel & cucumber, seaweed salad, eel sauce' },
      { name: 'Vegetarian Delight', price: 30, desc: 'Avocado, inside out, cucumber, daikon, seaweed salad' },
      { name: 'Triple Roll', price: 45, desc: 'Salmon, tuna, hamachi' },
      { name: 'Rainbow Roll', price: 46, desc: 'California roll, nori inside, wrapped salmon, tuna, hamachi, avocado' },
      { name: 'Goyang Roll', price: 48, desc: 'Jumbo lump crab meat, shrimp tempura, ginger tobiko, avocado, eel sauce' },
      { name: 'Janbo Sushi Platter', price: 80, desc: '1 jumbo rainbow roll, 1 jumbo California roll, 3 pieces nigiri, 4 pieces sashimi · substitutions available' },
    ],
  },
  {
    id: 'entrees',
    title: 'Entrées',
    items: [
      { name: 'Grilled Faroe Island Salmon Center Cut', price: 50, desc: 'Pineapple glaze, blistered sesame string beans, rice pilaf' },
      { name: 'Jumbo Diver Sea Scallops', price: 65, desc: 'Tri color orzo, spiral primavera vegetables, sweet pepper relish' },
      { name: 'Gourmet Chilean Sea Bass', price: 69, desc: 'Center cut, fresh asparagus, sweet bell peppers, cauliflower mash, citrus beurre blanc' },
      { name: '8 oz Citron Jumbo Lump Crab Cake', price: 64, desc: 'Fresh asparagus, heirloom tomato cucumber salad, remoulade sauce · no substitutions' },
      { name: 'Grilled Tall Swordfish Mignon', price: 57, desc: 'Baby spinach & cauliflower mash, charred sweet petite pepper' },
      { name: 'Roasted Statler Chicken Breast', price: 46, desc: 'Broccolini, tri color orzo, honey pineapple glaze' },
      { name: 'Agnolotti Ricotta & Spinach Fresh Pasta', price: 44, desc: 'Lemon-basil cream, blistered tomatoes, sweet petite peppers, pesto drizzle' },
      { name: 'Center Cut Mahi Mahi & Jumbo Lump Crabmeat', price: 69, desc: 'Fresh jumbo asparagus, tri colore orzo, scampi beurre blanc' },
      { name: '16 oz French Herb Marbled Veal Chop', price: 73, desc: 'Broccolini, pee wee potatoes, caramelized onion, mushroom demi-glace' },
      { name: '9 oz Prime Center Cut Angus Filet Mignon', price: 65, desc: 'Marbled pee wee potatoes, asparagus, cipollini onions, wild mushroom demi-glace' },
      { name: '14 oz Prime Thick New York Strip', price: 68, desc: 'Marbled pee wee potatoes, asparagus, cipollini onions, wild mushroom demi-glace' },
      { name: '16 oz Prime Boneless Cowboy Rib Eye', price: 70, desc: 'Marbled pee wee potatoes, asparagus, cipollini onions, wild mushroom demi-glace' },
      { name: '26 oz Prime Porterhouse Steak', price: 88, desc: 'Broccolini, pee wee potatoes, caramelized onion, mushroom demi-glace' },
      { name: 'French Cut Australian Lamb Chops', price: 75, desc: 'Black currant demi-glace, parmesan herb mashed potatoes, rainbow baby carrots' },
    ],
  },
  {
    id: 'add-ons',
    title: 'Add Ons',
    note: 'each 58',
    items: [
      { name: 'Broiled 8 oz Jumbo Lump Crab Cake' },
      { name: 'Prime 9 oz Center Cut Filet Mignon' },
      { name: '8 oz Lobster Tail, Jumbo Lump Crabmeat Stuffed' },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    note: 'each 15',
    items: [
      { name: 'Hand Cut Truffle Salt Fries' },
      { name: 'Broccolini Spears' },
      { name: 'Parmesan Herb Mashed Potatoes' },
      { name: 'Aged Deer Creek Mac N Cheese' },
    ],
  },
];

export const MENU_NOTES = [
  'Meat ordered beyond medium will be cooked well, and is a final purchase regardless of texture or appearance.',
  '20% service charge & 3% credit card transaction fee added. No separate checks. Citron accepts up to 4 credit card payments.',
];
