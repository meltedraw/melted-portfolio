"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.06em",
    fontSize: scrolled ? "0.65rem" : "0.75rem",
    transition: "font-size 350ms cubic-bezier(0.16,1,0.3,1), color 200ms ease",
  };

  return (
    <header
      style={{
        backgroundColor: scrolled ? "oklch(0.13 0.002 250)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "oklch(0.22 0.003 250)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 350ms cubic-bezier(0.16,1,0.3,1), border-color 350ms cubic-bezier(0.16,1,0.3,1)",
        padding: scrolled ? "0.6rem 1.5rem" : "1.25rem 1.5rem",
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center"
    >
      {/* Sinistra */}
      <div className="flex gap-7 flex-1">
        <Link href="/" style={{ ...linkStyle, color: "oklch(0.72 0.008 250)" }}
          className="uppercase hover:text-[oklch(0.92_0.006_250)] transition-colors">
          Home
        </Link>
        <Link href="/#work" style={{ ...linkStyle, color: "oklch(0.72 0.008 250)" }}
          className="uppercase hover:text-[oklch(0.92_0.006_250)] transition-colors">
          Work
        </Link>
      </div>

      {/* Centro — nome */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: scrolled ? "0.65rem" : "0.75rem",
          letterSpacing: "0.12em",
          color: "oklch(0.93 0.006 250)",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "font-size 350ms cubic-bezier(0.16,1,0.3,1)",
          whiteSpace: "nowrap",
        }}
        className="uppercase"
      >
        Gioele Ranallo
      </Link>

      {/* Destra */}
      <div className="flex flex-1 justify-end">
        <Link href="/about" style={{ ...linkStyle, color: "oklch(0.72 0.008 250)" }}
          className="uppercase hover:text-[oklch(0.92_0.006_250)] transition-colors">
          About
        </Link>
      </div>
    </header>
  );
}
