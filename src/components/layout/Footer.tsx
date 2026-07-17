export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "oklch(0.17 0.003 250)",
        padding: "1.5rem",
      }}
    >
      {/* Contatti */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <a
          href="mailto:ranallogioele@gmail.com"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.05em",
            color: "oklch(0.65 0.007 250)",
          }}
          className="uppercase hover:text-[oklch(0.93_0.006_250)] transition-colors"
        >
          ranallogioele@gmail.com
        </a>
        <a
          href="https://www.instagram.com/meltedraw"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.05em",
            color: "oklch(0.65 0.007 250)",
          }}
          className="uppercase hover:text-[oklch(0.93_0.006_250)] transition-colors"
        >
          @meltedraw
        </a>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.05em",
            color: "oklch(0.38 0.004 250)",
          }}
          className="uppercase"
        >
          © {year} Gioele Ranallo
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.05em",
            color: "oklch(0.38 0.004 250)",
          }}
          className="uppercase"
        >
          Graphic Designer — Milano
        </span>
      </div>
    </footer>
  );
}
