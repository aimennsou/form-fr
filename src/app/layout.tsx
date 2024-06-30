import type { Metadata } from "next";

import "./globals.css";
import { Ubuntu } from 'next/font/google'
import Head from "next/head";
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Formulaire",
  description: "Formulaire a remplire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</Head>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
