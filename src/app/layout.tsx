import "@/styles/globals.css";

import { Poppins, Prata, Mulish, Tinos } from "next/font/google";
import { type Metadata } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Pico ",
  description:
    "your cozy corner for speciality coffee and hand-tossedNeapolitan-style pizzas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: ["400"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const timesNewRoman = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  weight: ["400"],
  display: "swap",
  style: ["italic", "normal"],
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${prata.variable} ${mulish.variable} ${timesNewRoman.variable}`}
    >
      <body>
        <Header />

        {children}
        <Footer />
        {/* Whatsapp Popup */}
        <div className="fixed bottom-4 right-4 z-50 flex w-fit gap-2 rounded-2xl bg-green-500 p-4">
          <Link
            href="https://wa.me/918240912328"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <FaSquareWhatsapp size={24} className="text-white" />
            <h2 className="hidden text-md font-bold text-white">Contact Us</h2>
          </Link>
        </div>
      </body>
    </html>
  );
}
