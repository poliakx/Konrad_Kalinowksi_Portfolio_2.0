import SiteNavbar from "@/src/components/sections/SiteNavbar";
import SiteFooter from "@/src/components/sections/SiteFooter";
import SetVh from "@/src/components/SetVh";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Konrad Kalinowski | Visual Portfolio",
    template: "%s | Konrad Kalinowski",
  },
  description:
    "Portfolio website featuring food photography and creative visual projects by Konrad Kalinowski.",
  openGraph: {
    title: "Konrad Kalinowski | Visual Portfolio",
    description:
      "Explore photography and creative project collections by Konrad Kalinowski.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konrad Kalinowski | Visual Portfolio",
    description:
      "Explore photography and creative project collections by Konrad Kalinowski.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-black text-white">
        <SetVh />
        <SiteNavbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}