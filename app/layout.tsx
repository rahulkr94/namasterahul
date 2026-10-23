import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.namasterahul.in"),
  title: "Rahul Kumar — Software Engineer",
  description:
    "Software Engineer with 7+ years of experience building responsive web applications and reusable UI systems with React, Next.js, and TypeScript.",
  keywords: ["Rahul Kumar", "Software Engineer", "Frontend Engineer", "React", "Next.js", "TypeScript", "Bengaluru"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rahul Kumar — Software Engineer",
    description: "Reliable, reusable product interfaces built with clarity and care.",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
