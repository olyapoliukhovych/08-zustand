import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description:
    "Manage, filter, and organize your notes efficiently with NoteHub.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "NoteHub - Your Personal Knowledge Base",
    description:
      "Manage, filter, and organize your notes efficiently with NoteHub.",
    url: "https://notehub.com",
    siteName: "NoteHub",
    images: [
      {
        url: "file:///Users/olyaa/Downloads/notehub-og-meta.png",
        width: 1200,
        height: 630,
        alt: "NoteHub Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
