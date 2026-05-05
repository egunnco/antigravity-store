export const products = [
  {
    id: 'red-ringer',
    name: 'Red Ringer T-Shirt (Women)',
    category: ['women'],
    tags: ['vintage', 'tailgate', 'hog', 'game day', 'graphic t', 'graphic t-shirt', 't-shirt', 'cropped tee', 'crop t-shirt'],
    price: 40.00,
    image: '/Product-Red Ringer-ArkanHOG_Antigravity.png',
    description: `The vintage-inspired, ArkanHOG® Ringer Tee you'll keep reaching for — effortless, flattering, and full of personality. With its classic ringer trim and relaxed unfinished hem, it has that perfectly worn-in feel from day one.\n* Retro red ringer neckline and sleeve trim for a timeless throwback look\n* Soft cotton-tee, relaxed fit, hits at hip\n* Unfinished bottom edge gives an easy, lived-in vibe\n* Made with sustainably sourced, US-grown 100% ring-spun cotton\n\nCare: Cold wash, hang dry, do not bleach, do not iron decoration.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'little-rock',
    name: 'Cowboy — Little Rock',
    category: ['men', 'women', 'unisex'],
    price: 48.00,
    image: '/PRODUCT_COWBOY-LITTLE ROCK_Antigravity.png',
    description: `The T-shirt you'll reach for all year long — soft, timeless, and made to get even better with wear.\n* Garment-dyed for a vintage-washed softness\n* Made with sustainably sourced, US-grown 100% ring-spun cotton\n* Comfortable, durable, and ready for every season\n\nCare: Cold wash, hang dry, do not bleach, do not iron decoration.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'fayetteville',
    name: 'Cowboy — Fayetteville',
    category: ['men', 'women', 'unisex'],
    price: 48.00,
    image: '/PRODUCT_COWBOY-FAYETTEVILLE_Antigravity.png',
    description: `The T-shirt you'll reach for all year long — soft, timeless, and made to get even better with wear.\n* Garment-dyed for a vintage-washed softness\n* Made with sustainably sourced, US-grown 100% ring-spun cotton\n* Comfortable, durable, and ready for every season\n\nCare: Cold wash, hang dry, do not bleach, do not iron decoration.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'boxy-tee',
    name: 'Plain White Boxy Tee (Unisex)',
    category: ['men', 'women', 'unisex'],
    price: 42.00,
    image: '/PRODUCT_Plain White Boxy Tee_Unisex_Antigravity.png',
    description: `Your new favorite everyday essential. This boxy tee features a relaxed, vintage-inspired drop shoulder fit.\n* Ultra-soft cotton blend\n* Relaxed, unisex fit perfect for pairing with denim or lounging\n* Minimalist design for maximum versatility\n\nCare: Cold wash, hang dry for best results.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'arkanhog-snapback',
    name: 'ArkanHOG Snapback Hat',
    category: ['hats', 'men', 'women', 'unisex'],
    price: 35.00,
    image: '/Claude_product_snapback.png',
    description: `The hat that started it all. The ArkanHOG® Snapback is a structured, classic baseball cap built for anyone who reps Arkansas with pride.\n* Structured snapback with flat brim and adjustable fit\n* Premium embroidered ArkanHOG® logo on the front crown\n* One size fits most\n* Durable, everyday construction built to last\n\nCare: Spot clean only. Do not machine wash or tumble dry. Shape and air dry.`,
    sizes: ['One Size']
  }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category) {
  return products.filter(p => {
    if (Array.isArray(p.category)) {
      return p.category.includes(category);
    }
    return p.category === category;
  });
}

export function searchProducts(query) {
  if (!query) return [];
  
  // Split the search query into individual words
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.trim() !== '');

  return products.filter(p => {
    // For a product to show up, it must match EVERY word the user typed
    return searchTerms.every(term => {
      // Create a "base term" to handle plurals (e.g., "womens" -> "women", "shirts" -> "shirt")
      // If the word ends in 's', we chop it off so we search for the root word.
      // Since we use .includes(), "women" will still match "womens" perfectly!
      const baseTerm = term.endsWith('s') ? term.slice(0, -1) : term;

      const nameMatch = p.name.toLowerCase().includes(baseTerm);
      const descMatch = p.description.toLowerCase().includes(baseTerm);
      
      const categoryMatch = Array.isArray(p.category) 
        ? p.category.some(c => c.toLowerCase().includes(baseTerm))
        : p.category?.toLowerCase().includes(baseTerm);
        
      const tagsMatch = Array.isArray(p.tags)
        ? p.tags.some(t => t.toLowerCase().includes(baseTerm))
        : false;
        
      // As long as the base word is found ANYWHERE on the product, it's a match
      return nameMatch || descMatch || categoryMatch || tagsMatch;
    });
  });
}
