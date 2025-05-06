import type { Metadata } from "next";
import { Roboto, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-Bricolage",
  subsets: ["latin"],
});

// seo part
export const metadata: Metadata = {
  title: "Mosharof Hosain | Frontend Developer & Next.js Expert",
  description:
    "Explore the portfolio of Mosharof Hosain, a passionate Frontend Developer specializing in modern web technologies like React, Next.js, Tailwind CSS, and more.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Mosharof Hosain",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Web Portfolio",
    "JavaScript Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Mosharof Hosain", url: "https://yourportfolio.com" }],
  creator: "Mosharof Hosain",
  metadataBase: new URL("https://yourportfolio.com"), // replace with your domain
  openGraph: {
    title: "Mosharof Hosain | Frontend Developer Portfolio",
    description:
      "Portfolio of Mosharof Hosain, expert in building performant, responsive, and accessible web apps using Next.js and modern frontend tech.",
    url: "https://yourportfolio.com", // replace with your domain
    siteName: "Mosharof Hosain Portfolio",
    images: [
      {
        url: "/og-image.png", // Optional Open Graph image
        width: 1200,
        height: 630,
        alt: "Mosharof Hosain Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${bricolage.variable} antialiased flex flex-col min-h-svh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
