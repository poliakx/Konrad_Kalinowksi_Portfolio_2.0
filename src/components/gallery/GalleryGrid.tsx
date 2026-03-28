import Image from "next/image";

import type { GalleryPhoto } from "./gallery.types";

type GalleryGridProps = {
  photos: GalleryPhoto[];
  onPhotoClick: (index: number) => void;
};

export default function GalleryGrid({ photos, onPhotoClick }: GalleryGridProps) {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="grid auto-rows-[240px] grid-cols-2 gap-2 md:auto-rows-[280px] md:gap-3 xl:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            type="button"
            key={photo.src}
            onClick={() => onPhotoClick(index)}
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
  );
}
