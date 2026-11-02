import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammad Sohail | Full Stack Developer",
  description:
    "Portfolio of Muhammad Sohail — Full Stack Developer building scalable apps with React, Next.js, Node.js, and NestJS. Client work includes FreightOperator (freightop.io).",
  openGraph: {
    title: "Muhammad Sohail | Full Stack Developer",
    description:
      "Full Stack Developer portfolio featuring client TMS work and AI practice projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col overflow-x-hidden font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
