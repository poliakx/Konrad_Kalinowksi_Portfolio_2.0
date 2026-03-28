import type { GalleryPhoto } from "@/src/components/gallery/gallery.types";

type GalleryPhotoItem = {
  fileName: string;
  alt: string;
  className?: string;
};

const buildGalleryPhotos = (directory: string, items: GalleryPhotoItem[]): GalleryPhoto[] => {
  return items.map((photo) => ({
    src: `/images/gallery/${directory}/${encodeURIComponent(photo.fileName)}`,
    alt: photo.alt,
    className: photo.className,
  }));
};

export const foodGalleryPhotos = buildGalleryPhotos("food images", [
  {
    fileName: "1919.jpg",
    alt: "Oyster served on crushed ice with lemon",
    className: "md:col-span-2 xl:row-span-2",
  },
  { fileName: "66.jpg", alt: "Dark plated dessert in studio light" },
  { fileName: "ARCZI OSTRGYA4.jpg", alt: "Close-up oyster composition on stone plate" },
  { fileName: "ARCZI OSTRYGA3.jpg", alt: "Fresh oyster still life with soft side lighting" },
  { fileName: "arczi pomarancz bw.jpg", alt: "Citrus cocktail scene in monochrome style" },
  { fileName: "ARCZI RYBA2 PO PHS.jpg", alt: "Fine dining fish dish with modern plating" },
  { fileName: "ARCZI RYBA3 PO PSH.jpg", alt: "Seafood plate with detailed garnish texture" },
  { fileName: "ARCZI SKORZO.jpg", alt: "Shellfish serving on a dark restaurant table" },
  { fileName: "brzoskwinie.jpg", alt: "Peach dessert composition with warm tones" },
  { fileName: "DOCKBAKLAZAN.jpg", alt: "Roasted eggplant dish in editorial style" },
  { fileName: "DRINK BROWAR DYM.jpg", alt: "Smoky signature drink with dramatic light" },
  { fileName: "drink.jpg", alt: "Minimal cocktail shot with glass reflections" },
  { fileName: "DSC05912-2.jpg", alt: "Restaurant plate captured in soft natural light" },
  { fileName: "food-photo.jpg", alt: "Signature food composition from portfolio series" },
  { fileName: "GOREWICZ3.jpg", alt: "Chef-style plated dish with modern presentation" },
  { fileName: "ICECUBE.jpg", alt: "Drink detail with ice cubes and backlight" },
  { fileName: "KOKTAIL KONRAD.jpg", alt: "Craft cocktail portrait with cinematic styling" },
  { fileName: "KONRAD KOKTAI.jpg", alt: "Bar drink composition with moody atmosphere" },
  { fileName: "lalou tatar.jpg", alt: "Beef tartare plate styled for editorial menu" },
  { fileName: "lalou tatar2 (2).jpg", alt: "Tartare close-up with textured garnish" },
  { fileName: "maciek.jpg", alt: "Chef-prepared dish with clean modern plating" },
  { fileName: "OLIWATB.jpg", alt: "Olive-toned dish composition with dark backdrop" },
  { fileName: "OLIWATB1.jpg", alt: "Refined plate detail in restaurant ambiance" },
  { fileName: "OSTRYGA ARCZI.jpg", alt: "Oyster serving styled for premium seafood menu" },
  { fileName: "OSTRYGA ARCZI2.jpg", alt: "Oyster plate shot with elegant side light" },
  { fileName: "pizza.jpg", alt: "Artisan pizza photographed in warm tones" },
  { fileName: "pomidor2.jpg", alt: "Tomato-based dish with minimal food styling" },
  { fileName: "TARTALETKA MISKA.jpg", alt: "Dessert tart in contemporary table setting" },
  { fileName: "tort.jpg", alt: "Layered cake presentation for menu campaign" },
  { fileName: "Warmut 2driny GOTOWE.jpg", alt: "Pair of vermouth cocktails ready to serve" },
  { fileName: "Warmut 2driny GOTOWE2.jpg", alt: "Dual cocktail setup with balanced composition" },
  { fileName: "WARMUT 2driny.jpg", alt: "Two-drink editorial shot for bar menu" },
  { fileName: "WARMUT DRINK 2.jpg", alt: "Vermouth cocktail close-up with citrus accent" },
  { fileName: "WARMUT DRINK.jpg", alt: "Classic vermouth drink in moody lighting" },
  { fileName: "WARMUT POMARANCZ DRINK.jpg", alt: "Orange vermouth cocktail with garnish detail" },
  { fileName: "Warmut.jpg", alt: "Single vermouth drink composition with reflections" },
  { fileName: "WARMUT2.jpg", alt: "Vermouth series frame with dark bar atmosphere" },
  { fileName: "ZUPKA BROWRA TB.jpg", alt: "Soup bowl presentation from restaurant menu" },
]);

export const otherProjectsGalleryPhotos = buildGalleryPhotos("other projects", [
  {
    fileName: "ARCZI PROFIL.jpg",
    alt: "Portrait frame from the other projects series",
    className: "md:col-span-2 xl:row-span-2",
  },
  { fileName: "DSC00676.jpg", alt: "Editorial portrait with soft natural light" },
  { fileName: "DSC00735.jpg", alt: "Lifestyle composition from a creative photo story" },
  { fileName: "DSC00828.jpg", alt: "Detailed portrait close-up with cinematic mood" },
  { fileName: "DSC00836 (1).jpg", alt: "Creative frame with minimalist styling" },
  { fileName: "DSC01112.jpg", alt: "Project visual with balanced light and shadow" },
  { fileName: "DSC01678.jpg", alt: "Modern editorial scene from other projects" },
  { fileName: "DSC03172.jpg", alt: "Portrait shot in a contemporary urban setting" },
  { fileName: "DSC03691.jpg", alt: "Visual storytelling frame with textured background" },
  { fileName: "DSC04458.jpg", alt: "Creative concept image with clean composition" },
  { fileName: "DSC05005.jpg", alt: "Lifestyle portrait from portfolio project collection" },
  { fileName: "DSC06726.jpg", alt: "Cinematic portrait with directional light" },
  { fileName: "DSC07448.jpg", alt: "Editorial still from the other projects gallery" },
  { fileName: "DSC07695.jpg", alt: "Creative campaign frame with modern color grading" },
  { fileName: "DSC07754.jpg", alt: "Portrait composition with depth and contrast" },
  { fileName: "DSC07914.jpg", alt: "Project scene captured in natural environment" },
  {
    fileName: "DSC08100.jpg",
    alt: "Art direction frame with strong visual rhythm",
    className: "md:col-span-2",
  },
  { fileName: "DSC09932.jpg", alt: "Final editorial image from the other projects set" },
]);