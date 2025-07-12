import type { Metadata } from "next";
import { Inter, Orbitron, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Robotics Club - MANIT Bhopal",
  description: "Pioneering innovation in robotics and automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${montserrat.variable} ${roboto.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
