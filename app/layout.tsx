import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavpalawat.vercel.com"),
  alternates: {
    canonical: "https://arnavpalawat.vercel.com",
  },
  title: "Arnav Palawat",
  description:
    "Arnav Palawat",
  keywords:
    "Arnav Palawat",
  openGraph: {
    locale: "en_US",
    siteName: "Arnav Palawat",
    type: "website",
    title: "Arnav Palawat",
    description:
      "Arnav Palawat",
    url: "https://arnavpalawat.vercel.com",
    images: [
      {
        url: "./og-large-meik.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Palawat",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
