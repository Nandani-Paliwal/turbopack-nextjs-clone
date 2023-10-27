// import "../global.css";
import Providers from "@/components/providers";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index - TurboRepo",
  description: "Generated by create next app",
};

export default function RepoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        {/* {children} */}
      </body>
    </html>
  );
}