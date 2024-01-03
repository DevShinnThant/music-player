import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ParentLayout from "@/components/layout/ParentLayout";

const poppins = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Music Player",
  description: "NextJs 14, ShadcnUI, Strapi & ReactQuery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <ParentLayout>{children}</ParentLayout>
        </Provider>
      </body>
    </html>
  );
}
