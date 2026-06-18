"use client";

import { useEffect } from "react";

export default function SetVh() {
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
