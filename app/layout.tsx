import { LitSSRProvider } from "@/components/lit-ssr-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <LitSSRProvider>{children}</LitSSRProvider>
      </body>
    </html>
  );
}
