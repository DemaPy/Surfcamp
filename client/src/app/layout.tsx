import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../sass/main.scss";
import { getGlobalLayout } from "@/data/loaders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sufrcamp",
  description: "Find Your Paradise Wave",
};

async function loader() {
  const data = await getGlobalLayout();
  if (!data) {
    throw new Error("Header/Footer component data not found.");
  }
  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await loader();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header data={data.header} />
        {children}
        <Footer data={data.footer} />
      </body>
    </html>
  );
}
