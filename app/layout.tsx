import type { Metadata } from "next";
import Providers from "./providers";
import "../src/index.css";

export const metadata: Metadata = {
  title: "Volterā - Digital Design & Strategy Agency",
  description: "Strategic design firm empowering brands with impact-driven digital experiences",
  authors: [{ name: "Volterā" }],
  openGraph: {
    title: "Volterā - Digital Design & Strategy Agency",
    description: "Strategic design firm empowering brands with impact-driven digital experiences",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Voltera",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
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
