import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const Metadata = {
  title: "NoteHub",
  description: "NoteHub is a convenient and accessible tool where you can take notes, make summatirs and use it for everyday life - to record, store and edit your entries.",
  openGraph: {
    title: "NoteHub",
    description: "Stay organized and inspired with NoteHub — your smart digital space for capturing ideas, writing notes, and managing tasks with ease.",
    url:"https://08-zustand-nenn.vercel.app",

    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};




export const metadata: Metadata = {
  title: "NoteHub",
  description: "Simple note management app",
};

export default function RootLayout({
  children,
  modal, 
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          {modal}

          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
