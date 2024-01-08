import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

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
      <body
        className={`${poppins.className} max-width h-screen flex items-center justify-center bg-main`}
      >
        <div className="w-1/3 bg-gray-300 shadow-sm rounded-md py-6 px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
