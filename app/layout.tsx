import "./globals.css";
import Providers from "@/components/providers";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Header from '@/components/header/turbo-pack'
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Index - TurboPack",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{colorScheme: "light"}}>
      <body>
        <Providers><Header />{children} <Footer /></Providers>
      </body>
    </html>
  );
}
