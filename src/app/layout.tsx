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
      label: "Table",
      url: "/table",
    },
    {
      label: "Navigation",
      url: "/",
      submenu: [
        { label: "Sidebar", url: "/sidebar" },
        { label: "Topbar", url: "/topbar" },
      ],
    },
    {
      label: "Fast Image Carousel",
      url: "/fast-Image-carousel",
    }
  ];
  return (
    <html lang="en">
      <body className={"flex"}>
        <SideNavigationBar navigations={nav} absolute={false} />
        <div className="w-full bg-slate-100 text-black min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
