import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gioele Ranallo — Graphic Designer",
  description: "Portfolio di Gioele Ranallo, Graphic Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
