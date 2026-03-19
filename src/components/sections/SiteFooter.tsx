import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/15 bg-white text-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-7 text-[0.7rem] uppercase tracking-[0.24em] text-black/60 md:flex-row md:items-center md:justify-between md:px-10">
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
    </footer>
  );
}