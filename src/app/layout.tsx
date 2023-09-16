"use client";
import "./globals.css";
import {Inter} from "next/font/google";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Header} from "./components/Header";
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});
const queryClient = new QueryClient();

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [headerOpen, setHeaderOpen] = useState(false);
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <main
          className="md:grid md:grid-cols-[1fr,3fr] gap-4 relative px-4 py-4"
          onClick={() => headerOpen && setHeaderOpen(false)}
        >
          <Header
            headerOpen={headerOpen}
            setHeaderOpen={() => setHeaderOpen(!headerOpen)}
          />
          <body className={inter.className}>{children}</body>
        </main>
      </QueryClientProvider>
    </html>
  );
}
