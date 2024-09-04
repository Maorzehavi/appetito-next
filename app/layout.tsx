import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import Footer from "@/components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["hebrew"], weight: ['300'] });

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
    <ClerkProvider  >
      <html lang="en">
        <body className={`${fredoka.className} selection:hover:bg-pink-400 dark:text-white`}>
          <ThemeProvider>
            <ClientThemeWrapper>
              <div className="mx-auto max-w-screen-2xl text-2xl min-h-screen flex flex-col justify-between">
                <Navbar />
                <main className="flex-grow min-h-screen">
                  {children}
                </main>
                <Footer />
              </div>
            </ClientThemeWrapper>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
