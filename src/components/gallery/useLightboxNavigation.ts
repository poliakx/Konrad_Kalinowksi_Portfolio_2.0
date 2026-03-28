import { useEffect, useEffectEvent, useState } from "react";

type UseLightboxNavigationResult = {
  activePhotoIndex: number | null;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  showNext: () => void;
  showPrevious: () => void;
};

export default function useLightboxNavigation(totalPhotos: number): UseLightboxNavigationResult {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const showNext = () => {
    if (activePhotoIndex === null || totalPhotos === 0) return;
    setActivePhotoIndex((activePhotoIndex + 1) % totalPhotos);
  };

  const showPrevious = () => {
    if (activePhotoIndex === null || totalPhotos === 0) return;
    setActivePhotoIndex((activePhotoIndex - 1 + totalPhotos) % totalPhotos);
  };

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (activePhotoIndex === null) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext();
    if (event.key === "ArrowLeft") showPrevious();
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  return {
    activePhotoIndex,
    openLightbox,
    closeLightbox,
    showNext,
    showPrevious,
  };
}
