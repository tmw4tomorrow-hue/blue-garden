import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Garden | Eventos al aire libre",
  description:
    "Experiencias ecológicas premium para eventos inolvidables al aire libre.",
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
