import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shutonu Mitra | Software · Cloud · AI",
  description:
    "Backend-leaning Software Engineer building scalable APIs, cloud-native services, and applied AI systems. MS Computer Science, Virginia Tech.",
  keywords: [
    "Shutonu Mitra",
    "Software Engineer",
    "Backend Engineer",
    "Cloud",
    "Applied AI",
    "Portfolio",
  ],
  openGraph: {
    title: "Shutonu Mitra | Software · Cloud · AI",
    description:
      "Backend-leaning Software Engineer building scalable APIs, cloud-native services, and applied AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          <PortfolioShell>{children}</PortfolioShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
