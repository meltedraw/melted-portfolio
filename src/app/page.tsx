export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-32 min-h-[80vh] flex flex-col justify-end">
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(2rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-fg)",
          }}
        >
          Gioele Ranallo
        </h1>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--color-fg-muted)",
            letterSpacing: "0.05em",
            marginTop: "1rem",
          }}
          className="uppercase"
        >
          Graphic Designer
        </p>
      </section>

      {/* Griglia progetti */}
      <section id="work" className="px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--color-border)]">
          {/* Placeholder — i progetti verranno aggiunti qui */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{ borderColor: "var(--color-border)", aspectRatio: "4/3" }}
              className="relative border flex items-end p-4"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--color-fg-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                {String(i + 1).padStart(3, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
