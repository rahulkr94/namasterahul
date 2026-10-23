import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://namasterahul.in"),
  title: "Rahul Kumar — Frontend Engineer",
  description:
    "Frontend Engineer with 7+ years of experience building responsive web applications and reusable UI systems with React, Next.js, and TypeScript.",
  keywords: ["Rahul Kumar", "Frontend Engineer", "React", "Next.js", "TypeScript", "Bengaluru"],
  openGraph: {
    title: "Rahul Kumar — Frontend Engineer",
    description: "Reliable, reusable product interfaces built with clarity and care.",
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
