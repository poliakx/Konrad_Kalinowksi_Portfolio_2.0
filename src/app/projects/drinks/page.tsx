import type { Metadata } from "next";
import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { getGalleryPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Drinks",
  description:
    "Explore the drinks photography gallery by Konrad Kalinowski — cocktails, spirits, and bar visuals.",
  openGraph: {
    title: "Drinks | Konrad Kalinowski",
    description:
      "Explore the drinks photography gallery by Konrad Kalinowski — cocktails, spirits, and bar visuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drinks | Konrad Kalinowski",
    description:
      "Explore the drinks photography gallery by Konrad Kalinowski — cocktails, spirits, and bar visuals.",
  },
};

export default async function DrinksPage() {
  const photos = await getGalleryPhotos("konrad/gallery/drinks");
  return <PhotoGallery photos={photos} />;
}
