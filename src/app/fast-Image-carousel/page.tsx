"use client";
import FastImageCarousel from "@/components/FastImageCarousel";
import RotateImage from "@/components/FastImageCarousel";
import Table from "@/components/Table";
import { ITableColumn } from "@/components/Table/Table_types";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { IoPeopleSharp } from "react-icons/io5";

export default function TablePage() {
  const images = [
    "https://corhexa.com/png/400x400/ffff00",
    "https://corhexa.com/png/400x400/ff0000",
    "https://corhexa.com/png/400x400/000000",
    "https://corhexa.com/png/400x400/ff00ff",
    "https://corhexa.com/png/400x400/0000ff",
    "https://corhexa.com/png/400x400/00ff00",
    "https://corhexa.com/png/400x400/00ffff",
  ];
  return (
    <div className="w-10/12 bg-white m-auto my-[7.5%] h-fit min-h-[70%] rounded-xl shadow-lg  p-10">
      <h1 className="w-full text-4xl text-blue-900">
        Introducing Our Fast Image Carousel Component
      </h1>
      <p className="text-lg text-slate-800 my-4 text-justify">
        Hello everyone, we&apos;re thrilled to introduce our innovative Fast
        Image Carousel component for Next.js!
      </p>

      <h1 className="w-full text-2xl text-blue-900">Overview</h1>
      <p className="text-lg text-slate-800 my-4 text-justify">
        Our Fast Image Carousel component is a dynamic and interactive solution
        for displaying a series of images in your Next.js applications.
        It&apos;s designed with ease of use and performance in mind, allowing
        you to effortlessly showcase your visual content. This component is
        especially useful for simulating the rotation of objects by displaying
        multiple images of the same item from different angles.
      </p>

      <h1 className="w-full text-2xl text-blue-900">Features</h1>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Drag-and-Slide Functionality</strong>: Our Fast Image Carousel
        component supports drag-and-slide functionality, enabling users to
        smoothly scroll through images by holding and dragging the mouse.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Customizable Transition Effects</strong>: You can easily
        customize the transition effects between images, including the speed and
        style of the slide.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Responsive Design</strong>: The Fast Image Carousel component
        is fully responsive, ensuring it looks stunning on devices of all sizes,
        from mobile phones to large desktops.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Array-Based Image Input</strong>: Pass an array of image URLs
        to the component, and it will dynamically generate the carousel, making
        it easy to manage and update your images.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Performance Optimized</strong>: Our component is optimized for
        performance, minimizing load times and ensuring a smooth, lag-free
        experience for users.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        This makes the Fast Image Carousel perfect for displaying products, art
        pieces, or any other items that benefit from a 360-degree view,
        providing your users with a more interactive and engaging experience.
      </p>

      <h1 className="w-full  text-2xl text-blue-900 my-5">Examples</h1>
      <div className="w-full justify-center flex items-center p-4">
        <FastImageCarousel imagesArr={images} width={400} height={400} />
      </div>
      <CodeMirror
        value={`export default function PageWithFastImageCarousel(){

    const images = [
    "https://corhexa.com/png/400x400/ffff00",
    "https://corhexa.com/png/400x400/ff0000",
    "https://corhexa.com/png/400x400/000000",
    "https://corhexa.com/png/400x400/ff00ff",
    "https://corhexa.com/png/400x400/0000ff",
    "https://corhexa.com/png/400x400/00ff00",
    "https://corhexa.com/png/400x400/00ffff",
    ];
  
    return <FastImageCarousel imagesArr={images} width={400} height={400} />
}`}
        theme={"dark"}
        height="400px"
      />
      <div className="w-full min-w-60 overflow-auto">
        <table className="w-max min-w-full mt-10 border border-blue-800">
          <thead>
            <tr>
              <th className="border border-blue-800 p-2">
                Fast Image Carousel Properties
              </th>
              <th className="border border-blue-800 p-2">Descriptions</th>
            </tr>
          </thead>
          <tr>
            <td className="border border-blue-800 p-2">imagesArr</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                string[] - Defines the images that will be displayed
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">width</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                number | string - Sets the width of the component (optional: set
                to default 400)
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">height</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                number | string - Sets the height of the component (optional:
                set to default 400)
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
