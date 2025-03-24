import "@/styles/globals.css";

import { Poppins, Prata, Mulish } from "next/font/google";
import { type Metadata } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${prata.variable} ${mulish.variable} `}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
