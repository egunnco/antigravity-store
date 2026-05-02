export const products = [
  {
    id: 'red-ringer',
    name: 'Red Ringer T-Shirt (Women)',
    price: 40.00,
    image: '/Claude_product_red_ringer.png',
    description: `The vintage-inspired, ArkanHOG® Ringer Tee you'll keep reaching for — effortless, flattering, and full of personality. With its classic ringer trim and relaxed unfinished hem, it has that perfectly worn-in feel from day one.\n* Retro red ringer neckline and sleeve trim for a timeless throwback look\n* Soft cotton-tee, relaxed fit, hits at hip\n* Unfinished bottom edge gives an easy, lived-in vibe\n* Made with sustainably sourced, US-grown 100% ring-spun cotton\n\nCare: Cold wash, hang dry, do not bleach, do not iron decoration.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'little-rock',
    name: 'Cowboy — Little Rock',
    price: 48.00,
    image: '/Claude_product_cowboy_littlerock.png',
    description: `The T-shirt you'll reach for all year long — soft, timeless, and made to get even better with wear.\n* Garment-dyed for a vintage-washed softness\n* Made with sustainably sourced, US-grown 100% ring-spun cotton\n* Comfortable, durable, and ready for every season\n\nCare: Cold wash, hang dry, do not bleach, do not iron decoration.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'fayetteville',
    name: 'Cowboy — Fayetteville',
    price: 48.00,
    image: '/Claude_product_cowboy_fayetteville.png',
    description: `The T-shirt you'll reach for all year long — soft, timeless, and made to get even better with wear.\n* Garment-dyed for a vintage-washed softness\n* Made with sustainably sourced, US-grown 100% ring-spun cotton\n* Comfortable, durable, and ready for every season\n\nCare: Cold wash, hang dry, do not bleach, do not iron decoration.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'arkanhog-snapback',
    name: 'ArkanHOG Snapback Hat',
    price: 35.00,
    image: '/Claude_product_snapback.png',
    description: `The hat that started it all. The ArkanHOG® Snapback is a structured, classic baseball cap built for anyone who reps Arkansas with pride.\n* Structured snapback with flat brim and adjustable fit\n* Premium embroidered ArkanHOG® logo on the front crown\n* One size fits most\n* Durable, everyday construction built to last\n\nCare: Spot clean only. Do not machine wash or tumble dry. Shape and air dry.`,
    sizes: ['One Size']
  }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}
