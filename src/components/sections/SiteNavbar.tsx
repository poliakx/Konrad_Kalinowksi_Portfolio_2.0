"use client";

import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [onLightSection, setOnLightSection] = useState(false);

  const scrollHomeToTop = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    const isHomePage = pathname === "/";

    if (!isHomePage) {
      setOnLightSection(true);
      return;
    }

    const sliderSection = document.getElementById("slider-section");
    const footerSection = document.getElementById("footer-section");

    if (!sliderSection && !footerSection) {
      setOnLightSection(false);
      return;
    }

    const isCenterInside = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
    };

    const updateNavbarState = () => {
      const onSlider = sliderSection ? isCenterInside(sliderSection) : false;
      const onFooter = footerSection ? isCenterInside(footerSection) : false;

      setOnLightSection(onSlider || onFooter);
    };

    updateNavbarState();

    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("resize", updateNavbarState);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("resize", updateNavbarState);
    };
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          onLightSection ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="relative flex items-center justify-between">

            {/* LOGO (desktop) */}
            <Link href="/" onClick={scrollHomeToTop} className="text-sm font-light uppercase tracking-[0.35em] hidden md:inline-block">
              KONRAD
            </Link>

            {/* CENTER NAV (desktop only) */}
            <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
              <ul className="flex items-center gap-10">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={item.label === "Home" ? scrollHomeToTop : undefined}
                      className="text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* MOBILE BAR: Hamburger (left), Home (center), Instagram (right) */}
            <div className="flex w-full items-center md:hidden">
              <div className="flex-shrink-0">
                <button
                  onClick={() => setMenuOpen((s) => !s)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm"
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <path d="M0 1H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M0 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M0 13H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex justify-center">
                <Link href="/" onClick={scrollHomeToTop} className="text-sm uppercase tracking-[0.2em]">
                  Home
                </Link>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="https://www.instagram.com/_konradkalinowski.photo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <Instagram size={22} strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* INSTAGRAM (desktop) */}
            <Link
              href="https://www.instagram.com/_konradkalinowski.photo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex hover:opacity-70 transition"
            >
              <Instagram size={22} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay menu (mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white backdrop-blur-sm">
          <div className="absolute top-6 right-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="px-3 py-2 text-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 3L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="w-1/4 flex items-center justify-center h-full">
            <ul className="flex flex-col items-center justify-center gap-6 text-xl uppercase tracking-[0.2em] text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.label === "Home") scrollHomeToTop(e as any);
                      setMenuOpen(false);
                    }}
                    className="block text-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}