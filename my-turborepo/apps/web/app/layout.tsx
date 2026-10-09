import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Udhayakumar — Python Full Stack Developer",
  description: "Portfolio of Udhayakumar, a Python full-stack developer building useful things with thoughtful code.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
