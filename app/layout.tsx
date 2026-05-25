import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Garden",
  description: "Experiencias al aire libre — invitación interactiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
