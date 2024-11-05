import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importing Navbar component

// Setting up custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated metadata for better SEO
export const metadata: Metadata = {
  title: "KibokoDAO Hub",
  description:
    "KibokoDAO is a decentralized autonomous organization aimed at empowering Africa’s blockchain community by providing a collaborative platform that enhances education, financial inclusion, and decentralized innovation.",
  icons: {
    icon: "https://i.postimg.cc/gXSRXWD8/kibokodaologo.png", 
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preloading Google Font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;700&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;700&display=swap"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Navbar for consistent navigation across pages */}
        <Navbar />
        
        {/* Main content */}
        <main>{children}</main>

       
      </body>
    </html>
  );
}
