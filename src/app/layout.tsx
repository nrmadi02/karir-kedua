import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Karir Kedua",
  description:
    "Karir Kedua adalah sebuah platform yang membantu para pensiunan untuk mendapatkan pekerjaan yang sesuai dengan keahlian dan pengalaman mereka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
