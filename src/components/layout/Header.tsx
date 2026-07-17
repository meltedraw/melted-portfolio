import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        fontFamily: "var(--font-mono)",
        borderBottom: "1px solid var(--color-border)",
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
    >
      <Link
        href="/"
        style={{ color: "var(--color-fg)", fontSize: "0.8rem", letterSpacing: "0.05em" }}
        className="uppercase hover:opacity-60 transition-opacity"
      >
        Gioele Ranallo
      </Link>

      <nav className="flex gap-8">
        <Link
          href="/#work"
          style={{ color: "var(--color-fg-muted)", fontSize: "0.8rem", letterSpacing: "0.05em" }}
          className="uppercase hover:opacity-100 transition-opacity"
        >
          Work
        </Link>
        <Link
          href="/about"
          style={{ color: "var(--color-fg-muted)", fontSize: "0.8rem", letterSpacing: "0.05em" }}
          className="uppercase hover:opacity-100 transition-opacity"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
