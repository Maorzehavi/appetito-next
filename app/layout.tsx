import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["hebrew"], weight:['300']});

export const metadata: Metadata = {
  title: "Appetito",
  description: "Pasta and Pizza Bar",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} selection:hover:bg-pink-400`}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="mx-auto max-w-[100rem] text-2xl min-h-screen ">
              <Navbar />
              {children}
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
