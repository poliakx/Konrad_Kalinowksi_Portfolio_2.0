import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { otherProjectsGalleryPhotos } from "@/src/data/gallery";

export default function OtherProjectsPage() {
  return <PhotoGallery photos={otherProjectsGalleryPhotos} />;
}
