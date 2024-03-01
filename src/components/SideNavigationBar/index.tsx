"use client";
import Link from "next/link";
import { ISideNavigationBarProps } from "./SideNavigationBar_types";
import { useState } from "react";

export default function SideNavigationBar({
  navigations,
  CustomTop,
  absolute = true,
}: ISideNavigationBarProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleOpen = (index: number) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  return (
    <>
 {!absolute &&   <div className={`transition-all max-lg:hidden ease-linear duration-300 ${navIsOpen ? ' w-80' : 'overflow-hidden w-0'}`}/>}
        <aside className={`fixed transition-all ease-linear duration-300  shadow-lg shadow-black/30 lg:max-w-[90%]  bg-white h-screen py-5 ${navIsOpen ? 'w-full sm:w-80' : 'overflow-hidden w-0'}`}>
          <div>
          {CustomTop && CustomTop()}
          </div>
          <div className="flex flex-col w-full items-center h-full bg-white overflow-y-auto px-2">
            {navigations.map((items, index) => (
              <>
                {items.Cell ? (
                  items.Cell()
                ) : items.submenu ? (
                  <div className="w-full">
                    <button
                      onClick={() => toggleOpen(index)}
                      className={`${open[index] && navIsOpen && 'border-b border-gray'} flex cursor-pointer z-20 relative items-center justify-center text-gray-600 bg-white hover:bg-gray-100 rounded transition-all duration-300 p-2 w-full text-center`}
                    >
                      <p className="w-fit text-lg mx-auto">{items.label}</p>
                    </button>
                    <div
                      className={`flex w-full z-0 flex-col  transition-all duration-500  h-fit relative ${
                        open[index] && navIsOpen
                          ? `max-h-96 left-0`
                          : "max-h-0 -left-80"
                      } `}
                    >
                      {items.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          className="text-gray-600 px-3  bg-white hover:bg-gray-100 rounded transition-all duration-300 p-1 w-full text-left"
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
       <div
          onClick={() => {
            setNavIsOpen(!navIsOpen);
          }}
          className={`icon cursor-pointer max-sm:right-3 ease-linea flex items-center justify-center  fixed top-3 duration-[450ms]  z-[21] bg-white shadow-md shadow-black/30 rounded-full w-12 h-12 text-lg transition-all font-bold text-white ${
            navIsOpen ? "  sm:left-72 " : " sm:left-3 "
          }`}
        >
          <div className={` transition-all menu ${navIsOpen ? "menu2" : ""}`}/>
          
        </div>
    </>
  );
}
