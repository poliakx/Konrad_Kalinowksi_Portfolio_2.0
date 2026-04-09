"use client";

import { useEffect, useState, useRef, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
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

    const heroSection = document.getElementById("hero-section");
    const sliderSection = document.getElementById("slider-section");
    const footerSection = document.getElementById("footer-section");

    const isCenterInside = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
    };

    const pending = { timer: null as number | null, lastDesired: null as boolean | null };

    const scheduleSet = (desired: boolean) => {
      // if already scheduled for same desired state, keep it
      if (pending.lastDesired === desired && pending.timer) return;
      // clear existing
      if (pending.timer) {
        window.clearTimeout(pending.timer);
        pending.timer = null;
      }
      pending.lastDesired = desired;
      pending.timer = window.setTimeout(() => {
        setOnLightSection(desired);
        pending.timer = null;
      }, 180);
    };

    const updateNavbarState = () => {
      // If hero exists, consider navbar "light" when NOT over the hero
      if (heroSection) {
        const onHero = isCenterInside(heroSection);
        scheduleSet(!onHero);
        return;
      }

      // fallback: keep previous behavior (light on slider/footer)
      const onSlider = sliderSection ? isCenterInside(sliderSection) : false;
      const onFooter = footerSection ? isCenterInside(footerSection) : false;

      scheduleSet(onSlider || onFooter);
    };

    updateNavbarState();

    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("resize", updateNavbarState);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("resize", updateNavbarState);
      if (pending.timer) window.clearTimeout(pending.timer);
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

  // handle open/close with animation
  const openMenu = () => {
    setMenuOpen(true);
    // allow the element to mount before starting animation
    requestAnimationFrame(() => setMenuAnimating(true));
  };

  const closeMenu = () => {
    setMenuAnimating(false);
    // unmount after animation completes (match duration 300ms)
    setTimeout(() => setMenuOpen(false), 320);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 pt-[env(safe-area-inset-top)] w-full h-16 justify-center transition-all duration-300 ${
          onLightSection ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="relative flex items-center justify-between w-full">

            {/* LOGO (desktop) */}
            <Link href="/" onClick={scrollHomeToTop} className="text-sm font-light uppercase tracking-[0.35em] hidden md:inline-block">
              HOME
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
                <Link href="/" onClick={scrollHomeToTop} className="text-sm uppercase tracking-[0.2em] hover:opacity-70 transition">
                  HOME
                </Link>
              </div>

              <div className="ml-8 flex-shrink-0">
                <button
                  onClick={() => (menuOpen ? closeMenu() : openMenu())}
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

              <div className="flex-1" />
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
        <div className={`fixed inset-0 z-50 flex items-start justify-start bg-black/70 text-white backdrop-blur-sm transition-opacity duration-300 ${menuAnimating ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`w-[70vw] sm:w-[80vw] md:w-[90vw] max-w-none bg-black/80 text-white h-full p-6 relative transform transition-transform duration-300 ${menuAnimating ? 'translate-x-0' : '-translate-x-full'}`}>
              <nav className="h-full flex items-start pt-18 relative w-max">
                  <ul className="flex flex-col space-y-6 text-sm uppercase tracking-[0.2em] text-right">
                  <li>
                    <Link
                      href="/"
                      onClick={(e) => {
                        scrollHomeToTop(e as any);
                        setMenuOpen(false);
                      }}
                      className="block opacity-100"
                    >
                      Home
                    </Link>
                  </li>
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block opacity-60"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => closeMenu()}
                  aria-label="Close menu"
                  className="absolute top-2 right-0 translate-x-6 px-3 py-2 text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17 3L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </nav>
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/_konradkalinowski.photo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition w-10 h-10 flex items-center justify-center rounded-md"
                >
                  <Instagram size={24} strokeWidth={1.6} />
                </a>

                <Link href="/contact" aria-label="Contact" className="hover:opacity-80 transition w-10 h-10 flex items-center justify-center rounded-md">
                  <svg width="22" height="18" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v11A1.5 1.5 0 0 1 17.5 15h-15A1.5 1.5 0 0 1 1 13.5v-11z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 3.5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
      )}
    </>
  );
}