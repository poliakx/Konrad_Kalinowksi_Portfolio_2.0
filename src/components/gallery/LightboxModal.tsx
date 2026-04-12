import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

import type { GalleryPhoto } from "./gallery.types";

type LightboxModalProps = {
  photos: GalleryPhoto[];
  activePhotoIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function LightboxModal({
  photos,
  activePhotoIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxModalProps) {
  const [imageNaturalSize, setImageNaturalSize] = useState<{ width: number; height: number } | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setImageNaturalSize(null);
  }, [activePhotoIndex]);

  useEffect(() => {
    if (activePhotoIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrevious();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePhotoIndex, onNext, onPrevious, onClose]);

  if (activePhotoIndex === null) {
    return null;
  }

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

  const activePhoto = photos[activePhotoIndex];

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/90 p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/15 text-sm text-white transition-colors hover:bg-white hover:text-black md:right-6 md:top-6"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 md:left-6 flex items-center justify-center p-2 text-white/90 hover:text-white transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 hover:scale-105"
        aria-label="Previous photo"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 md:right-6 flex items-center justify-center p-2 text-white/90 hover:text-white transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 hover:scale-105"
        aria-label="Next photo"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="flex h-full items-center justify-center">
        <div
          ref={imageFrameRef}
          className="relative h-[94vh] w-[96vw] max-w-6xl"
          onClick={handleLightboxContentClick}
        >
          <Image
            src={activePhoto.src}
            alt={activePhoto.alt}
            fill
            onLoad={(e) => {
              const img = e.currentTarget as HTMLImageElement;
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
  );
}
