import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import UserProvider from "@/providers/UserProvider";
import SidebarProvider from "@/providers/SidebarProvider";
import MainLayout from "@/providers/MainLayout";
import MiniSidebar from "./Components/MiniSidebar/MiniSidebar";
import Header from "./Components/Header/Header";
import MainContentLayout from "@/providers/MainContentLayout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <UserProvider>
          <Toaster position="top-center" />
          <div className="flex flex-grow overflow-hidden">
            <MiniSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <MainContentLayout className="flex-1 overflow-auto">
                {" "}
                {/* Added className here */}
                <MainLayout>{children}</MainLayout>
                <SidebarProvider />
              </MainContentLayout>
            </div>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
