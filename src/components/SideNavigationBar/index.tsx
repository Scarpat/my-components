"use client";
import Link from "next/link";
import { ISideNavigationBarProps } from "./SideNavigationBar_types";
import { useState } from "react";

export default function SideNavigationBar({
  navigations,
  CustomTop,
  canBeClosed = false,
}: ISideNavigationBarProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [navIsOpen, setNavIsOpen] = useState(true);
  const toggleOpen = (index: number) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  return (
    <>
      <div className="flex">
        <aside className={` transition-all duration-500 relative min-w-60 w-full shadow-lg lg:max-w-[90%]  bg-white h-screen py-5 ${navIsOpen ? ' left-0' : '-left-80'}`}>
          {CustomTop && CustomTop()}
          <div className="flex flex-col w-full items-center h-full bg-white overflow-y-auto px-2">
            {navigations.map((items, index) => (
              <>
                {items.Cell ? (
                  items.Cell()
                ) : items.submenu ? (
                  <div className="w-full">
                    <button
                      onClick={() => toggleOpen(index)}
                      className="flex cursor-pointer z-20 relative items-center justify-center text-gray-600 bg-white hover:bg-gray-100 rounded transition-all duration-300 p-2 w-full text-center"
                    >
                      <p className="w-fit text-lg mx-auto">{items.label}</p>
                    </button>
                    <div
                      className={`flex w-full z-0 flex-col  transition-all duration-500 border-gray-200 h-fit relative ${
                        open[index]
                          ? `max-h-96 border-t left-0`
                          : "max-h-0 -left-80"
                      } `}
                    >
                      {items.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          className="text-gray-600 border-b px-3 border-gray-200 bg-white hover:bg-gray-100 rounded transition-all duration-300 p-1 w-full text-left"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={items.url}
                    className=" text-lg text-gray-600 bg-white hover:bg-gray-100 rounded transition-all duration-300 p-2 w-full text-center"
                  >
                    {items.label}
                  </Link>
                )}
              </>
            ))}
          </div>
        </aside>
    {canBeClosed &&    <p
          onClick={() => {
            setNavIsOpen(!navIsOpen);
          }}
          className={`cursor-pointer  relative flex items-center duration-[600ms] justify-center text-center z-[21] p-4 bg-red-500 rounded-full w-12 h-12 text-lg transition-all font-bold text-white ${
            navIsOpen ? "rotate-90 -left-5 " : "-rotate-90 -left-60 "
          }`}
        >
          {" "}
          V
        </p>}
      </div>
    </>
  );
}
