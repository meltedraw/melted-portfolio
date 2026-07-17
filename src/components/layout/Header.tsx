"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        fontFamily: "var(--font-mono)",
        backgroundColor: scrolled ? "#111111" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "background-color 400ms var(--ease-out), border-color 400ms var(--ease-out), padding 400ms var(--ease-out)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between ${scrolled ? "px-6 py-2" : "px-6 py-5"}`}
    >
      <nav className="flex gap-6">
        <Link
          href="/#work"
          style={{
            color: "var(--color-fg-muted)",
            fontSize: scrolled ? "0.7rem" : "0.8rem",
            letterSpacing: "0.05em",
            transition: "font-size 400ms var(--ease-out)",
          }}
          className="uppercase hover:text-[var(--color-fg)] transition-colors"
        >
          Work
        </Link>
        <Link
          href="/about"
          style={{
            color: "var(--color-fg-muted)",
            fontSize: scrolled ? "0.7rem" : "0.8rem",
            letterSpacing: "0.05em",
            transition: "font-size 400ms var(--ease-out)",
          }}
          className="uppercase hover:text-[var(--color-fg)] transition-colors"
        >
          About
        </Link>
      </nav>

      <Link
        href="/"
        style={{
          color: "var(--color-fg)",
          fontSize: scrolled ? "0.7rem" : "0.8rem",
          letterSpacing: "0.08em",
          transition: "font-size 400ms var(--ease-out)",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className="uppercase"
      >
        Gioele Ranallo
      </Link>

      <span
        style={{
          color: "var(--color-fg-muted)",
          fontSize: scrolled ? "0.7rem" : "0.8rem",
          letterSpacing: "0.05em",
          transition: "font-size 400ms var(--ease-out)",
        }}
        className="uppercase"
      >
        Graphic Designer
      </span>
    </header>
  );
}
