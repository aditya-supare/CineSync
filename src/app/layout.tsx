import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinesync",
  description: "Movie recommendations/ratings",
};

interface props{
  children:any;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Provider>
          <Header />
          <Navbar />
          <SearchBox/>
          {children}
        
        </Provider>
        
        </body>
    </html>
  );
}
