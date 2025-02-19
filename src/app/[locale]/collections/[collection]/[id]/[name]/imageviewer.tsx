"use client";

import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import Lightbox from "yet-another-react-lightbox-lite";
import "yet-another-react-lightbox-lite/styles.css";
import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";

export default function ImageViewer({ product }: { product: { name: string; files: { url: string; name: string }[] } }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | undefined>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
      {lightboxOpen && (
        <Lightbox
          slides={product.files.map((file) => ({ src: file.url }))}
          index={lightboxIndex}
          setIndex={(v) => setLightboxIndex(v)}
          render={{
            slide: ({ slide }) => {
              return (
                <Image
                  src={slide.src}
                  alt={slide.alt || ""}
                  width={2000}
                  height={2000}
                  sizes="100vw"
                  loading="eager"
                  draggable={false}
                  style={{
                    minWidth: 0,
                    minHeight: 0,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              );
            },
          }}
        />
      )}
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
          <BiChevronLeft name="Previous Image" aria-label="Previous Image" size={48} className="text-black" />
        </button>
      </div>
      <button
        onClick={() => {
          setLightboxIndex(imageIndex);
          setLightboxOpen(true);
        }}
        className="w-2/3 md:w-full relative h-96 focus:outline-none"
      >
        <Image fill key={imageIndex} sizes="100vw" src={product.files[imageIndex].url} alt={"image for " + product.name} style={{ objectFit: "contain" }} />
        <div className="absolute bottom-0 left-5 rounded-full p-2 text-white bg-black md:text-black md:bg-transparent">
          <HiMiniMagnifyingGlassPlus name="Zoom" aria-label="Zoom" size={32} />
        </div>
      </button>
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
          <BiChevronLeft name="Next Image" aria-label="Next Image" size={48} className="text-black rotate-180" />
        </button>
      </div>
    </div>
  );
}
