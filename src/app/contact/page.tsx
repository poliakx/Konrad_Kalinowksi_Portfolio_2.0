import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/src/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Konrad Kalinowski for photography commissions, collaborations, or any enquiries.",
  openGraph: {
    title: "Contact | Konrad Kalinowski",
    description:
      "Get in touch with Konrad Kalinowski for photography commissions, collaborations, or any enquiries.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Konrad Kalinowski",
    description:
      "Get in touch with Konrad Kalinowski for photography commissions, collaborations, or any enquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] px-6 pb-20 pt-24 text-[#171310] md:px-10 md:pb-24 md:pt-28">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="absolute -right-16 top-20 h-56 w-56 rounded-full bg-[#d8c7b8]/35 blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-[#e5d8cd]/45 blur-3xl" />

        <section className="relative overflow-hidden border border-[#171310]/12 bg-[#f6f2ec]/95 shadow-[0_18px_60px_rgba(23,19,16,0.08)]">
          <div className="grid lg:grid-cols-[1fr_1.08fr]">
            <div className="relative hidden min-h-[620px] lg:block">
              <Image
                src="/images/hero/konrad-kalinowski-food-hero1.jpg"
                alt="Photographer working with a professional camera"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
            </div>

            <div className="flex min-h-[620px] flex-col p-8 md:p-12 lg:p-14">
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.34em] text-[#6f6257]">
                Contact Us
              </p>
              <h1 className="max-w-lg text-4xl font-light leading-[1] md:text-5xl">
                Let&apos;s Connect, Collaborate,
                <br />
                and Create Together
              </h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#5f5348] md:text-base">
                Share your project details and I&apos;ll reply with availability, timeline, and next steps.
              </p>

              <div className="mt-10 max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 flex items-center justify-between border-t border-[#171310]/12 pt-4 text-[0.62rem] uppercase tracking-[0.22em] text-[#6f6257]">
          <p>Konrad Kalinowski</p>
        </div>
      </div>
    </main>
  );
}
