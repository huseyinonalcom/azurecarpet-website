"use client";
import { Link, usePathname } from "@/i18n/routing";
import DE from "../../public/assets/flags/DE.svg";
import EN from "../../public/assets/flags/EN.svg";
import FR from "../../public/assets/flags/FR.svg";
import NL from "../../public/assets/flags/NL.svg";
import { StaticImageData } from "next/image";
import Image from "next/image";

type flagsEntry = {
  code: string;
  alt: string;
  img: StaticImageData;
};
const flags: flagsEntry[] = [
  {
    code: "en",
    alt: "Flag of the United Kingdom",
    img: EN,
  },
  {
    code: "nl",
    alt: "Vlag van Nederland",
    img: NL,
  },
  {
    code: "fr",
    alt: "Le drapeau français",
    img: FR,
  },
  {
    code: "de",
    alt: "Die deutsche Flagge",
    img: DE,
  },
];

export const LocaleSwitcher = () => {
  const path = usePathname();
  return (
    <>
      {flags.map((flag) => (
        <a key={flag.code} href={"/" + flag.code + path} hrefLang={flag.code} className="text-azure-grey w-24">
          <Image priority width={96} height={64} src={flag.img} alt={flag.alt} />
        </a>
      ))}
    </>
  );
};
