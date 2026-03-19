"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const toSeoAlt = (fileName: string) => {
  const normalized = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/%20/g, " ")
    .replace(/[()_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `Food photography portfolio image: ${normalized}`;
};

const foodPhotoFiles = [
  "1919.jpg",
  "66.jpg",
  "ARCZI OSTRGYA4.jpg",
  "ARCZI OSTRYGA3.jpg",
  "arczi pomarancz bw.jpg",
  "ARCZI RYBA2 PO PHS.jpg",
  "ARCZI RYBA3 PO PSH.jpg",
  "ARCZI SKORZO.jpg",
  "brzoskwinie.jpg",
  "DOCKBAKLAZAN.jpg",
  "DRINK BROWAR DYM.jpg",
  "drink.jpg",
  "DSC05912-2.jpg",
  "food-photo.jpg",
  "GOREWICZ3.jpg",
  "ICECUBE.jpg",
  "KOKTAIL KONRAD.jpg",
  "KONRAD KOKTAI.jpg",
  "lalou tatar.jpg",
  "lalou tatar2 (2).jpg",
  "maciek.jpg",
  "OLIWATB.jpg",
  "OLIWATB1.jpg",
  "OSTRYGA ARCZI.jpg",
  "OSTRYGA ARCZI2.jpg",
  "pizza.jpg",
  "pomidor2.jpg",
  "TARTALETKA MISKA.jpg",
  "tort.jpg",
  "Warmut 2driny GOTOWE.jpg",
  "Warmut 2driny GOTOWE2.jpg",
  "WARMUT 2driny.jpg",
  "WARMUT DRINK 2.jpg",
  "WARMUT DRINK.jpg",
  "WARMUT POMARANCZ DRINK.jpg",
  "Warmut.jpg",
  "WARMUT2.jpg",
  "ZUPKA BROWRA TB.jpg",
];

const photos = foodPhotoFiles.map((fileName, index) => ({
  src: `/images/gallery/food images/${encodeURIComponent(fileName)}`,
  alt: toSeoAlt(fileName),
  className: index === 0 ? "md:col-span-2 xl:row-span-2" : undefined,
}));

export default function FoodPhotoPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

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

  return (
    <main className="min-h-screen bg-[#faf7f3] px-6 pb-16 pt-28 text-[#1e1813] md:px-10 md:pb-24">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[0.72rem] uppercase tracking-[0.34em] text-[#675548]">
              Food Photo
            </p>
            <h1 className="max-w-4xl text-4xl font-light uppercase leading-[0.92] md:text-6xl">
              Minimal food photography gallery
            </h1>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center justify-center border border-[#1e1813]/20 px-5 py-3 text-[0.7rem] uppercase tracking-[0.26em] transition-colors hover:bg-[#1e1813] hover:text-white"
          >
            Back to Projects
          </Link>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[250px] xl:grid-cols-4">
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
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close gallery from left side"
            onClick={closeLightbox}
            className="absolute inset-y-0 left-0 z-[5] hidden w-[29%] md:block"
          />

          <button
            type="button"
            aria-label="Close gallery from right side"
            onClick={closeLightbox}
            className="absolute inset-y-0 right-0 z-[5] hidden w-[29%] md:block"
          />

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded border border-white/30 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            Close
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded border border-white/30 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black md:left-8"
          >
            Prev
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded border border-white/30 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black md:right-8"
          >
            Next
          </button>

          <div
            className="relative mx-auto flex h-full w-full max-w-[96vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full max-h-[94vh] w-full">
              <Image
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].alt}
                fill
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
