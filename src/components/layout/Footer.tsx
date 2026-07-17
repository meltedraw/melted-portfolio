export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        fontFamily: "var(--font-mono)",
        borderTop: "1px solid oklch(0.18 0.005 250)",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Contatti */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <a
          href="mailto:ranallogioele@gmail.com"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.06em",
            color: "oklch(0.72 0.008 250)",
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
            fontSize: "0.72rem",
            letterSpacing: "0.06em",
            color: "oklch(0.72 0.008 250)",
          }}
          className="uppercase hover:text-[oklch(0.93_0.006_250)] transition-colors"
        >
          @meltedraw
        </a>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.05em",
            color: "oklch(0.38 0.004 250)",
          }}
          className="uppercase"
        >
          © {year} Gioele Ranallo
        </span>
        <span
          style={{
            fontSize: "0.62rem",
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
