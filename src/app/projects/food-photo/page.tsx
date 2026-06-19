import type { Metadata } from "next";
import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { getGalleryPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Food Photo",
  description:
    "Explore the complete food photography gallery by Konrad Kalinowski, featuring editorial dishes, cocktails, and restaurant visuals.",
  openGraph: {
    title: "Food Photo | Konrad Kalinowski",
    description:
      "Explore the complete food photography gallery by Konrad Kalinowski, featuring editorial dishes, cocktails, and restaurant visuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Photo | Konrad Kalinowski",
    description:
      "Explore the complete food photography gallery by Konrad Kalinowski, featuring editorial dishes, cocktails, and restaurant visuals.",
  },
};

export default async function FoodPhotoPage() {
  const photos = await getGalleryPhotos("konrad/gallery/food photos");
  return <PhotoGallery photos={photos} />;
}
