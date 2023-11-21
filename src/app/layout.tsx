import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";

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
      <body>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
