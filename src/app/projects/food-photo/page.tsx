import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { foodGalleryPhotos } from "@/src/data/gallery";

export default function FoodPhotoPage() {
  return <PhotoGallery photos={foodGalleryPhotos} />;
}
