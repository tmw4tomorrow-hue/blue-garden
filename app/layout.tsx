import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Garden | Outdoor Events Reimagined",
  description:
    "Premium ecological experiences for unforgettable outdoor events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
