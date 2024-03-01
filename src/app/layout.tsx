import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ISideNavigationBarItems } from "@/components/SideNavigationBar/SideNavigationBar_types";
import SideNavigationBar from "@/components/SideNavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nav: ISideNavigationBarItems[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Home",
      url: "/",
      submenu: [
        {
          label: "Home",
          url: "/",
        }, {
          label: "Home",
          url: "/",
        },
      ]
    },
    {
      label: "Home",
      url: "/",
    },
  ];
  return (
    <html lang="en">
      <body className={'flex'}>
        <SideNavigationBar navigations={nav} canBeClosed />
        {children}
      </body> 
    </html>
  );
}
