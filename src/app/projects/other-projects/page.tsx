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
];

const photos = photoItems.map((photo) => ({
  src: `/images/gallery/other projects/${encodeURIComponent(photo.fileName)}`,
  alt: photo.alt,
  className: photo.className,
}));

export default function OtherProjectsPage() {
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
