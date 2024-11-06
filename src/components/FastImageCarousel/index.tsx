"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FastImageCarousel({
  imagesArr,
  height = 400,
  width = 400,
}: {
  imagesArr: string[];
  height?: number|string;
  width?: number|string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (event: any) => {
    setInitialPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleDrag = (event: any) => {
    const deltaX =
      event.clientX - initialPosition.x > 0
        ? 1
        : event.clientX - initialPosition.x < 0
        ? -1
        : 0;
    let newIndex = selectedIndex + deltaX;

    // Garantir que o índice esteja dentro dos limites do array
    if (newIndex < 0) {
      newIndex = imagesArr.length! - 1;
    } else if (newIndex >= imagesArr.length!) {
      newIndex = 0;
    }

    setSelectedIndex(newIndex);
    setInitialPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    const handleDragOver = (event: any) => {
      event.preventDefault();
      handleDrag(event);
    };

    document.addEventListener("dragover", handleDragOver);

    return () => {
      document.removeEventListener("dragover", handleDragOver);
    };
  }, [initialPosition, selectedIndex]);

  return (
    <div
      className="w-full h-full"
      style={{
        maxHeight: height,
        maxWidth: width,
      }}
    >
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        className="absolute bg-none  w-full h-full z-20 "
        style={{
          maxHeight: height,
          maxWidth: width,
        }}
      />
      <Image
        draggable={false}
        width={400}
        height={400}
        src={imagesArr[selectedIndex]!}
        alt="Car Image"
        className="object-contain w-full  select-none pointer-events-none "
      />
    </div>
  );
}
