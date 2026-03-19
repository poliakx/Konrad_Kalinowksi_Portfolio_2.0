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
    <section className="relative h-screen overflow-hidden bg-[#f6f3ee] text-black">
      <div className="relative h-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f6f3ee] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f6f3ee] to-transparent" />

        <div className="slider-track flex h-full w-max items-center gap-6 px-6 md:px-12">
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="group relative h-[72%] w-[36vw] shrink-0 overflow-hidden md:w-[36vw]"
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