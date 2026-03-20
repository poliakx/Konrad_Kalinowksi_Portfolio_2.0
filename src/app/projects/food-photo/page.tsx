"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

type GalleryPhoto = {
  fileName: string;
  alt: string;
  className?: string;
};

const photoItems: GalleryPhoto[] = [
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
];

const photos = photoItems.map((photo) => ({
  src: `/images/gallery/food images/${encodeURIComponent(photo.fileName)}`,
  alt: photo.alt,
  className: photo.className,
}));

export default function FoodPhotoPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [imageNaturalSize, setImageNaturalSize] = useState<{ width: number; height: number } | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  const closeLightbox = () => setActivePhotoIndex(null);
  const openLightbox = (index: number) => setActivePhotoIndex(index);

  const showNext = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % photos.length);
  };

  const showPrevious = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + photos.length) % photos.length);
  };

  const handleLightboxContentClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!imageFrameRef.current || !imageNaturalSize) {
      event.stopPropagation();
      return;
    }

    const frameRect = imageFrameRef.current.getBoundingClientRect();
    const clickX = event.clientX - frameRect.left;
    const clickY = event.clientY - frameRect.top;

    const scale = Math.min(
      frameRect.width / imageNaturalSize.width,
      frameRect.height / imageNaturalSize.height,
    );

    const renderedWidth = imageNaturalSize.width * scale;
    const renderedHeight = imageNaturalSize.height * scale;
    const offsetX = (frameRect.width - renderedWidth) / 2;
    const offsetY = (frameRect.height - renderedHeight) / 2;

    const isInsideRenderedImage =
      clickX >= offsetX &&
      clickX <= offsetX + renderedWidth &&
      clickY >= offsetY &&
      clickY <= offsetY + renderedHeight;

    if (isInsideRenderedImage) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activePhotoIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhotoIndex]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activePhotoIndex]);

  return (
    <main className="min-h-screen bg-[#faf7f3] px-4 pb-16 pt-24 text-[#1e1813] md:px-8 md:pb-24">
      <section className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[240px] grid-cols-2 gap-2 md:auto-rows-[280px] md:gap-3 xl:grid-cols-4">
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-xl border border-[#1e1813]/10 bg-neutral-100 text-left ${photo.className ?? ""}`}
              aria-label={`Open ${photo.alt}`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 p-4 md:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/15 text-sm text-white transition-colors hover:bg-white hover:text-black md:right-6 md:top-6"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/15 text-base text-white transition-colors hover:bg-white hover:text-black md:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/15 text-base text-white transition-colors hover:bg-white hover:text-black md:right-6"
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="flex h-full items-center justify-center">
            <div
              ref={imageFrameRef}
              className="relative h-[94vh] w-[96vw] max-w-6xl"
              onClick={handleLightboxContentClick}
            >
              <Image
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].alt}
                fill
                onLoadingComplete={(img) => {
                  setImageNaturalSize({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                  });
                }}
                loading="eager"
                decoding="async"
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
