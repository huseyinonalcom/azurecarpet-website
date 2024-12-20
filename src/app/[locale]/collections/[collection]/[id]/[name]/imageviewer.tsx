"use client";

import { useState } from "react";
import Image from "next/image";
import { BiChevronLeft } from "react-icons/bi";

export default function ImageViewer({ product }: { product: { name: string; files: { url: string; name: string }[] } }) {
  const [imageIndex, setImageIndex] = useState(0);

  const changeIndex = ({ direction }: { direction: "next" | "previous" }) => {
    if (direction === "next") {
      if (imageIndex == product.files.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    } else {
      if (imageIndex === 0) {
        setImageIndex(product.files.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    }
  };

  return (
    <div className="w-full flex flex-row items-center justify-center max-w-screen-xl px-4 mx-auto mt-12">
      <div className="hidden md:flex flex-col items-center gap-2 w-1/3 md:w-[240px]">
        {product.files.map((file, i) => (
          <button type="button" onClick={() => setImageIndex(i)} key={i} className="relative w-1/3 aspect-square md:w-[240px]">
            <Image
              fill
              key={i}
              sizes="(max-width: 768px) 60vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
              src={file.url}
              alt={"image for " + product.name}
              style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
      <div className="w-[1/6] md:hidden flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() =>
            changeIndex({
              direction: "previous",
            })
          }
          className="relative w-full aspect-square"
        >
          <BiChevronLeft size={48} className="text-black" />
        </button>
      </div>
      <div className="w-2/3 md:w-full relative h-96">
        <Image fill key={imageIndex} sizes="100vw" src={product.files[imageIndex].url} alt={"image for " + product.name} style={{ objectFit: "contain" }} />
      </div>
      <div className="w-[1/6] md:hidden flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() =>
            changeIndex({
              direction: "next",
            })
          }
          className="relative w-full aspect-square"
        >
          <BiChevronLeft size={48} className="text-black rotate-180" />
        </button>
      </div>
    </div>
  );
}
