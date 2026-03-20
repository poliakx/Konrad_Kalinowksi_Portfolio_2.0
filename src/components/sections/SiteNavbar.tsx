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

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        onLightSection
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="relative flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={scrollHomeToTop}
            className="text-sm font-light uppercase tracking-[0.35em]"
          >
            KONRAD
          </Link>

          {/* CENTER NAV */}
          <nav className="absolute left-1/2 -translate-x-1/2">
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

          {/* INSTAGRAM */}
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
    </header>
  );
}