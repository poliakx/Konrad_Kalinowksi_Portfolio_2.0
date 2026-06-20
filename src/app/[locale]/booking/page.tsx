import type { Metadata } from "next";
import { redirect } from "@/src/i18n/navigation";

export const metadata: Metadata = {
  title: "Booking",
  description: "Book a photo session with Konrad Kalinowski.",
};

export default function BookingPage() {
  redirect("/");
}
