import type { Metadata } from "next";
import Providers from "./providers";
import "../src/index.css";

export const metadata: Metadata = {
  title: "Volterā - Digital Design & Strategy Agency",
  description: "Strategic design firm empowering brands with impact-driven digital experiences",
  authors: [{ name: "Volterā" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Volterā - Digital Design & Strategy Agency",
    description: "Strategic design firm empowering brands with impact-driven digital experiences",
    type: "website",
    images: [""],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Voltera",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
