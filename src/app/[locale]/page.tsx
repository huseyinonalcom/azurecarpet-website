import homepagebg from "../../../public/assets/images/homepagebg.jpg";
import { getLocale, getTranslations } from "next-intl/server";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const collectionsHomePage = [
  {
    name: "Kermansah",
    description: {
      en: "Kermansah is a collection of carpets with authentic oriental designs. Available in different colors and sizes.",
      nl: "Kermansah is een collectie van tapijten met authentieke orientale ontwerpen. Beschikbaar in verschillende kleuren en grootten.",
      fr: "Kermansah est une collection de tapis avec des designs authentiques orientaux. Disponible dans différentes couleurs et tailles.",
      de: "Kermansah ist eine Sammlung von Tapieren mit authentischen orientalen Designs. Verfügbar in verschiedenen Farben und Größen.",
    },
    files: [
      {
        url: "https://r2.hocecomv1.com/kermansah-cover.jpg",
        name: "kermansah-cover.png",
      },
    ],
  },
  {
    name: "Rubi",
    description: {
      en: "Rubi is a collection of oriental inspired modern carpets. Available in different colors and sizes.",
      nl: "Rubi is een collectie van orientale geïnspireerde moderne tapijten. Beschikbaar in verschillende kleuren en grootten.",
      fr: "Rubi est une collection de tapis inspirés d'oriental modernes. Disponible dans différentes couleurs et tailles.",
      de: "Rubi ist eine Sammlung von orientalisch inspirierten modernen Tapieren. Verfügbar in verschiedenen Farben und Größen.",
    },
    files: [
      {
        url: "https://r2.hocecomv1.com/rubi-cover.png",
        name: "rubi-cover.png",
      },
    ],
  },
];

export default async function Home() {
  const t = await getTranslations("home");
  const locale = await getLocale();
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={homepagebg}
        alt="background image for homepage - oriental rug"
        className="-mt-24 h-[500px] w-full -z-10"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="max-w-screen-md absolute mt-24 text-white bg-gray-600/50 p-12 pb-8 rounded-xl backdrop-blur-sm flex flex-col items-center mx-12">
        <h2 className="text-4xl font-bold">{t("title")}</h2>
        <h3 className="text-2xl font-semibold">{t("subtitle")}</h3>
        <Link href="#collections" className="text-2xl font-semibold">
          <SlArrowDown size={52} className="text-azure-grey mt-6" />
        </Link>
      </div>
      <div className="w-full flex items-center pt-6 pb-10 px-12 -mt-12 rounded-xl bg-white shadow-xl max-w-screen-xl flex-col relative gap-6">
        <a id="collections" className="absolute -top-[100px]" />
        <div className="w-full flex flex-col gap-12 items-center">
          {collectionsHomePage.map((collection, i) => (
            <Link
              key={i}
              type="button"
              className="flex flex-col max-h-fit lg:odd:flex-row items-center lg:even:flex-row-reverse gap-8 hover:bg-gray-500/30 duration-500 px-2 py-1 w-full"
              href={"/collections/" + encodeURIComponent(collection.name.toLowerCase())}
            >
              <div className="w-full lg:w-1/2 aspect-[8/5] relative">
                <Image
                  sizes="(max-width: 768px) 90vw, 45vw"
                  src={collection.files[0].url}
                  fill
                  alt="background image for homepage - oriental rug"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start h-full">
                <p className="text-2xl font-semibold">{collection.name}</p>
                <p className="text-center">{collection.description[locale as "en" | "nl" | "fr" | "de"]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center pt-6 mx-12">
        <div className="w-full max-w-screen-2xl px-4 flex flex-col items-center gap-12">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-semibold mx-auto w-min whitespace-nowrap mb-6">{t("why-us")}</h2>
            <p className="max-w-[800px] w-full mx-auto">{t("why-us-text")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
