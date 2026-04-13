import type { Metadata } from "next";

import HomeHero from "@/src/components/hero/HomeHero";
import FooterShowcase from "@/src/components/sections/FooterShowcase";
import PhotoSlider from "@/src/components/slider/PhotoSlider";

export const metadata: Metadata = {
  title: {
    absolute: "Konrad Kalinowski | Food & Editorial Photography Portfolio",
  },
  description:
    "Discover the visual portfolio of Konrad Kalinowski, from editorial food photography to modern creative projects.",
  openGraph: {
    title: "Konrad Kalinowski | Food & Editorial Photography Portfolio",
    description:
      "Discover the visual portfolio of Konrad Kalinowski, from editorial food photography to modern creative projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konrad Kalinowski | Food & Editorial Photography Portfolio",
    description:
      "Discover the visual portfolio of Konrad Kalinowski, from editorial food photography to modern creative projects.",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <PhotoSlider />
      <FooterShowcase />
    </>
  );
}