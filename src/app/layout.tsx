import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ahmed — Software Developer",
  description:
    "Passionate software developer specializing in React, Next.js, and QA methodologies. Currently expanding skills in Java, Unity C#, and test automation through DEPI training.",
  keywords: [
    "Ahmed",
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Unity",
    "C#",
    "QA Testing",
    "DEPI",
    "Web Development",
    "Frontend",
    "Full Stack",
    "Test Automation",
  ],
  authors: [{ name: "Ahmed" }],
  creator: "Ahmed",
  publisher: "Ahmed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-portfolio.vercel.app",
    title: "Ahmed - Software Developer",
    description:
      "Passionate software developer specializing in React, Next.js, and QA methodologies.",
    siteName: "Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed - Software Developer",
    description:
      "Passionate software developer specializing in React, Next.js, and QA methodologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
