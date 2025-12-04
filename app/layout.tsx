import type { Metadata } from "next";
import { Rajdhani, Special_Elite } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Components/Navbar/ResponsiveNav";

const RajdhaniFont = Rajdhani({
  weight:['300', '400', '500', '600', '700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "renn15's Epic Portfolio Website",
  description: "Made specifically for the Pintu Tech Gang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RajdhaniFont.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}