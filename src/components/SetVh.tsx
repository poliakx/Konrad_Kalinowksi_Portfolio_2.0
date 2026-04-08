"use client";

import { useEffect } from "react";

export default function SetVh() {
  useEffect(() => {
    let t: number | null = null;
    const setVh = () =>
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );

    const debounced = () => {
      if (t) window.clearTimeout(t);
      t = window.setTimeout(() => {
        setVh();
        t = null;
      }, 180);
    };

    setVh();
    // Update on orientation change immediately, and debounce on resize
    window.addEventListener("orientationchange", setVh);
    window.addEventListener("resize", debounced);

    return () => {
      if (t) window.clearTimeout(t);
      window.removeEventListener("orientationchange", setVh);
      window.removeEventListener("resize", debounced);
    };
  }, []);

  // Remove attributes injected by some devtools/extensions that can cause
  // React hydration mismatches (example: __gchrome_remoteframetoken).
  useEffect(() => {
    try {
      if (document?.documentElement?.hasAttribute("__gchrome_remoteframetoken")) {
        document.documentElement.removeAttribute("__gchrome_remoteframetoken");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
