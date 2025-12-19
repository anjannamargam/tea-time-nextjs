import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tea Time Franchise | Fresh Chai & Snacks",
  description:
    "Tea Time is a modern tea franchise serving fresh chai, quick snacks, and popular combos. Explore menu highlights, franchise details, and locations.",
  metadataBase: new URL("https://teal-chough-883153.hostingersite.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tea Time Franchise | Fresh Chai & Snacks",
    description:
      "Start your Tea Time outlet with brand support, training, and standardized menu.",
    url: "/",
    siteName: "Tea Time",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
