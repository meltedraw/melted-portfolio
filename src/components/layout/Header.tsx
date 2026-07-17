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

  const fs = scrolled ? "0.65rem" : "0.75rem";
  const transition = "font-size 350ms cubic-bezier(0.16,1,0.3,1)";

  return (
    <header
      style={{
        backgroundColor: scrolled ? "oklch(0.17 0.003 250)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background-color 350ms cubic-bezier(0.16,1,0.3,1), padding 350ms cubic-bezier(0.16,1,0.3,1)",
        padding: scrolled ? "0.55rem 1.5rem" : "1.25rem 1.5rem",
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center"
    >
      {/* Sinistra — Graphic Designer */}
      <div className="flex-1">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: fs,
            letterSpacing: "0.06em",
            color: "oklch(0.42 0.005 250)",
            transition,
          }}
          className="uppercase"
        >
          Graphic Designer
        </span>
      </div>

      {/* Centro — nome */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: fs,
          letterSpacing: "0.12em",
          color: "oklch(0.93 0.006 250)",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          transition,
          whiteSpace: "nowrap",
        }}
        className="uppercase"
      >
        Gioele Ranallo
      </Link>

      {/* Destra — nav links */}
      <div className="flex gap-7 flex-1 justify-end">
        {[
          { label: "Home", href: "/" },
          { label: "Work", href: "/#work" },
          { label: "About", href: "/about" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: fs,
              letterSpacing: "0.06em",
              color: "oklch(0.62 0.007 250)",
              transition,
            }}
            className="uppercase hover:text-[oklch(0.92_0.006_250)] transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
