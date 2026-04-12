"use client";

import GalleryGrid from "./GalleryGrid";
import LightboxModal from "./LightboxModal";
import type { GalleryPhoto } from "./gallery.types";
import useLightboxNavigation from "./useLightboxNavigation";

export type { GalleryPhoto } from "./gallery.types";

type PhotoGalleryProps = {
  photos: GalleryPhoto[];
};

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const { activePhotoIndex, openLightbox, closeLightbox, showNext, showPrevious } =
    useLightboxNavigation(photos.length);

  return (
    <div className="min-h-screen bg-[#faf7f3] px-4 pb-16 pt-24 text-[#1e1813] md:px-8 md:pb-24">
      <GalleryGrid photos={photos} onPhotoClick={openLightbox} />

      <LightboxModal
        photos={photos}
        activePhotoIndex={activePhotoIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </div>
  );
}