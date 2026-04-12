import type { Metadata } from "next";

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
  return (
    <div className="min-h-[60vh] bg-[#f7f5f1] px-4 pb-6 pt-[calc(5rem+env(safe-area-inset-top))] text-[#171310] md:px-8 md:pb-12 md:pt-20 overflow-x-hidden">
      <div className="relative mx-auto w-full max-w-4xl">
        <section className="mb-6 max-w-2xl">
          <h1 className="text-[calc(18px+2.2vw)] md:text-3xl font-semibold tracking-tight">Book a photo session</h1>
          <p className="mt-3 text-[calc(12px+1.2vw)] md:text-base text-[#5f5348]">
            Choose a suitable date and time for your session. After booking, you will receive a
            confirmation email.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#171310]/12 bg-[#f6f2ec]/95 shadow-[0_12px_36px_rgba(23,19,16,0.06)] p-3 sm:p-4">
          <div className="w-full h-[62vh] md:h-[700px]">
            <iframe
              src="https://www.cal.eu/poliak2016/photo-session?user=poliak2016&overlayCalendar=true"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Booking calendar"
            />
          </div>
        </section>

        <div className="mt-6 flex items-center justify-between border-t border-[#171310]/12 pt-4 text-[0.62rem] uppercase tracking-[0.22em] text-[#6f6257]">
          <p>Konrad Kalinowski</p>
        </div>
      </div>
    </div>
  );
}