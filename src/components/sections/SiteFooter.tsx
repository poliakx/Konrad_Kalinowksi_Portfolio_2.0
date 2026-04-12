import Link from "next/link";
import { Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/src/config/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/15 bg-white text-black">
      {/* Desktop / tablet footer (visible md+) */}
      <div className="hidden md:grid mx-auto w-full max-w-7xl gap-6 px-6 py-7 text-[0.7rem] uppercase tracking-[0.24em] text-black/60 md:grid-cols-3 md:items-center md:px-10">
        <div className="flex items-center gap-6">
          <Link href="/" className="transition-opacity hover:opacity-65">
            Home
          </Link>
          <Link href="/projects" className="transition-opacity hover:opacity-65">
            Projects
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Link href="/contact" className="transition-opacity hover:opacity-65">
            {SITE_CONFIG.email}
          </Link>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-65"
          >
            Instagram
          </a>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p>All rights reserved {year}</p>
        </div>
      </div>

      {/* Mobile footer: centered, minimalist (logo, small text, social icons, copyright, credit) */}
      <div className="flex md:hidden mx-auto w-full max-w-xs flex-col items-center gap-3 px-4 py-6 text-center text-black/90">

        <div className="mt-3 flex items-center justify-center gap-6">
          <Link href="/contact" className="opacity-80 hover:opacity-100" aria-label="Contact">
            <svg width="22" height="18" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v11A1.5 1.5 0 0 1 17.5 15h-15A1.5 1.5 0 0 1 1 13.5v-11z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 3.5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </div>

        <p className="mt-3 text-xs text-black/60">© {year} Konrad Kalinowski</p>
        
      </div>
    </footer>
  );
}