"use client";
import "./globals.css";
import {Inter} from "next/font/google";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Footer} from "./components/footer";

const inter = Inter({subsets: ["latin"]});
const queryClient = new QueryClient();

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          <div className="px-4">
            {children}
            <Footer />
          </div>
        </body>
      </QueryClientProvider>
    </html>
  );
}
