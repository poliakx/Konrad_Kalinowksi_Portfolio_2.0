import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Booking",
  description: "Book a photo session with Konrad Kalinowski.",
  openGraph: {
    title: "Konrad Kalinowski | Booking",
    description: "Book a photo session with Konrad Kalinowski.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konrad Kalinowski | Booking",
    description: "Book a photo session with Konrad Kalinowski.",
  },
};

export default function BookingPage() {
  redirect("/");
}