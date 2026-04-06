import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/15 bg-white text-black">
      {/* Desktop / tablet footer (visible md+) */}
      <div className="hidden md:flex mx-auto w-full max-w-7xl flex-col gap-6 px-6 py-7 text-[0.7rem] uppercase tracking-[0.24em] text-black/60 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-6">
          <Link href="/" className="transition-opacity hover:opacity-65">
            Home
          </Link>
          <Link href="/projects" className="transition-opacity hover:opacity-65">
            Projects
          </Link>
          <Link href="/projects/food-photo" className="transition-opacity hover:opacity-65">
            Food Photo
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:justify-end">
          <a href="mailto:hello@konradkalinowski.com" className="transition-opacity hover:opacity-65">
            hello@konradkalinowski.com
          </a>
          <a href="tel:+48600111222" className="transition-opacity hover:opacity-65">
            +48 600 111 222
          </a>
          <a
            href="https://www.instagram.com/_konradkalinowski.photo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-65"
          >
            Instagram
          </a>
          <p>All rights reserved {year}</p>
        </div>
      </div>

      {/* Mobile footer: centered, minimalist (logo, small text, social icons, copyright, credit) */}
      <div className="flex md:hidden mx-auto w-full max-w-xs flex-col items-center gap-3 px-4 py-6 text-center text-black/90">

        <p className="mt-1 text-xs text-black/60">This is the footer text</p>

        <div className="mt-3 flex items-center justify-center gap-6">
          <a href="mailto:hello@konradkalinowski.com" className="opacity-80 hover:opacity-100" aria-label="Email">
            <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3.5A2 2 0 0 1 4 2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-11zm2 .5v9.3l6.9-4.3L4 4zm8.4 4.8L22 14.8V4L12.4 9.3zM20 4l-7.6 5L4 4h16z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/_konradkalinowski.photo/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4.5 4.5 0 1 0 .001 9.001A4.5 4.5 0 0 0 12 8.5zM18.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <a href="tel:+48600111222" className="mt-3 text-sm font-medium text-black/80" aria-label="Phone">
          +48 600 111 222
        </a>

        <p className="mt-3 text-xs text-black/60">© {year} Konrad Kalinowski</p>
        
      </div>
    </footer>
  );
}