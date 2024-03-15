import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wide Crew",
  description: "WideCrew offers professional web design and development services, tailored to your business needs. From responsive design to custom development, we create user-friendly websites that drive results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{inter.css}</style>
      </head>
      <body className={`${inter.className} max-w-screen max-h-screen overflow-x-hidden overflow-y-hidden`}>
        {children}
      </body>
    </html>
  );
}
