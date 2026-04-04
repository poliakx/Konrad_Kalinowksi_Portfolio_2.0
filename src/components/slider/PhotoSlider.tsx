import Image from "next/image";

const photos = [
  {
    src: "/images/slider/photo-1.jpg",
    alt: "Editorial food photography of a plated dish",
  },
  {
    src: "/images/slider/photo-2.jpg",
    alt: "Modern restaurant food composition photographed in studio light",
  },
  {
    src: "/images/slider/photo-3.jpg",
    alt: "Dessert close-up from Konrad Kalinowski photography portfolio",
  },
  {
    src: "/images/slider/photo-4.jpg",
    alt: "Cocktail photography with cinematic bar styling",
  },
];

export default function PhotoSlider() {
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section
      className="relative overflow-hidden bg-transparent md:bg-[#f6f3ee] text-black"
      style={{ height: 'calc(var(--vh, 1vh) * 100)', minHeight: '60vh' }}
    >
      <div className="relative flex h-full items-center px-6 md:px-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-transparent md:from-[#f6f3ee] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-transparent md:from-[#f6f3ee] to-transparent" />

        <div className="slider-track flex w-max items-center gap-6">
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="group relative h-[52vh] w-[66vw] shrink-0 overflow-hidden sm:w-[48vw] md:h-[72vh] md:w-[36vw]"
              style={{ minHeight: '220px' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                sizes="(max-width: 768px) 65vw, 36vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}