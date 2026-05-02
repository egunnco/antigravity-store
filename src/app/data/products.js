export const products = [
  {
    id: 'red-ringer',
    name: 'Red Ringer T-Shirt (Women)',
    price: 40.00,
    image: '/Claude_product_red_ringer.png',
    description: `The vintage-inspired, ArkanHOG® Ringer Tee you'll keep reaching for — effortless, flattering, and full of personality. With its classic ringer trim and relaxed unfinished hem, it has that perfectly worn-in feel from day one. Easy to style now, layer later.
* Retro red ringer neckline and sleeve trim for a timeless throwback look
* Soft cotton-tee, relaxed fit, hits at hip, size-up for a drapey oversized look
* Unfinished bottom edge gives an easy, lived-in vibe
* Made for year-round wear — casual, cute, and endlessly versatile
* Made with sustainably sourced, US-grown 100% ring-spun cotton

Rooted in the spirit, "FOR THE LOVE OF ALL THINGS ARKANSAS", "The ArkanHOG"®, came to life by artist Elizabeth Gunn. This pork-powered superstar has the confidence of someone who's never lost at a buffet, and an attitude of 'I woke up fabulous' — the ArkanHOG® looks ready to file taxes late, dig for diamonds, cut in line at the state fair, and still get a round of applause!

Care Instructions:
- Wash with like colors and in cold water
- Hang Dry
- Do Not Bleach
- Do not iron decoration

Please note: Slight variations in texture and fit are part of the charm and give each tee its own unique character.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'little-rock',
    name: 'Cowboy - Little Rock',
    price: 48.00,
    image: '/Claude_product_cowboy_littlerock.png',
    description: `The T-shirt you'll reach for all year long — soft, timeless, and made to get even better with wear. Perfect on its own now, and just as good layered later… which is exactly why grabbing two is never a bad idea.
* Garment-dyed for a vintage-washed softness and that perfectly lived-in feel
* Made with sustainably sourced, US-grown 100% ring-spun cotton
* Comfortable, durable, and ready for every season

Please note: The dyeing and washing process gives each garment its own unique character, so slight variations in color and fit are part of what makes every shirt one of a kind.

Care Instructions:
Due to the nature of pigment dye, loose pigments may remain on the surface of the garments.
- Wash with like colors and in cold water
- Hang Dry
- Do Not Bleach
- Do not iron decoration`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'fayetteville',
    name: 'Cowboy - Fayetteville',
    price: 48.00,
    image: '/Claude_product_cowboy_fayetteville.png',
    description: `The T-shirt you'll reach for all year long — soft, timeless, and made to get even better with wear. Perfect on its own now, and just as good layered later… which is exactly why grabbing two is never a bad idea.
* Garment-dyed for a vintage-washed softness and that perfectly lived-in feel
* Made with sustainably sourced, US-grown 100% ring-spun cotton
* Comfortable, durable, and ready for every season

Please note: The dyeing and washing process gives each garment its own unique character, so slight variations in color and fit are part of what makes every shirt one of a kind.

Care Instructions:
Due to the nature of pigment dye, loose pigments may remain on the surface of the garments.
- Wash with like colors and in cold water
- Hang Dry
- Do Not Bleach
- Do not iron decoration`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'arkanhog-snapback',
    name: 'ArkanHOG Snapback Hat',
    price: 35.00,
    image: '/Claude_product_snapback.png',
    description: `The hat that started it all. The ArkanHOG® Snapback is a structured, classic baseball cap built for anyone who reps Arkansas with pride — whether you're on the trail, at the tailgate, or grabbing coffee on Dickson Street.

Featuring the original ArkanHOG® embroidered logo by artist Elizabeth Gunn, this is the kind of hat you wear until it's perfectly broken in — and then wear some more.

* Structured snapback with a flat brim and adjustable fit
* Premium embroidered ArkanHOG® logo on the front crown
* One size fits most — snapback closure for a custom fit
* Durable, everyday construction built to last

Care Instructions:
- Spot clean only
- Do not machine wash
- Do not tumble dry
- Shape and air dry`,
    sizes: ['One Size']
  }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}
