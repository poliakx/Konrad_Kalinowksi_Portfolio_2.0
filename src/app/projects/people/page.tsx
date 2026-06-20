import type { Metadata } from "next";
import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { getGalleryPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "People",
  description:
    "Explore the people photography gallery by Konrad Kalinowski — portraits, events, and lifestyle visuals.",
  openGraph: {
    title: "People | Konrad Kalinowski",
    description:
      "Explore the people photography gallery by Konrad Kalinowski — portraits, events, and lifestyle visuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "People | Konrad Kalinowski",
    description:
      "Explore the people photography gallery by Konrad Kalinowski — portraits, events, and lifestyle visuals.",
  },
};

export default async function PeoplePage() {
  const photos = await getGalleryPhotos("konrad/gallery/people");
  return <PhotoGallery photos={photos} />;
}
