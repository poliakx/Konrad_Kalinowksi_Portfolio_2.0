import type { Metadata } from "next";

import HomeHero from "../components/hero/HomeHero";
import FooterShowcase from "../components/sections/FooterShowcase";
import PhotoSlider from "../components/slider/PhotoSlider";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover the visual portfolio of Konrad Kalinowski, from editorial food photography to modern creative projects.",
  openGraph: {
    title: "Konrad Kalinowski | Home",
    description:
      "Discover the visual portfolio of Konrad Kalinowski, from editorial food photography to modern creative projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konrad Kalinowski | Home",
    description:
      "Discover the visual portfolio of Konrad Kalinowski, from editorial food photography to modern creative projects.",
  },
};

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <HomeHero />
      </section>

      <section id="slider-section" className="min-h-screen">
        <PhotoSlider />
      </section>

      <section id="footer-section" className="min-h-screen">
        <FooterShowcase />
      </section>
    </main>
  );
}