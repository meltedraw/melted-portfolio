export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        fontFamily: "var(--font-mono)",
        borderTop: "1px solid var(--color-border)",
        color: "var(--color-fg-muted)",
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
      }}
      className="flex items-center justify-between px-6 py-4"
    >
      <span>© {year} Gioele Ranallo</span>
      <a
        href="mailto:ranallogioele@gmail.com"
        style={{ color: "var(--color-fg-muted)" }}
        className="uppercase hover:opacity-60 transition-opacity"
      >
        ranallogioele@gmail.com
      </a>
    </footer>
  );
}
