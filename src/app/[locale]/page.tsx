import { Link } from "@/i18n/routing";
import homepagebg from "../../../public/assets/images/homepagebg.jpg";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";

const getCollections = () => {
  return ["Berlin", "Hayat", "Iranian Classics", "Parma", "Superverso", "Tiara", "Patchwork", "Bari", "Florence"];
};

export default async function Home() {
  const t = await getTranslations("home");
  const collections = getCollections();
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
        <div className="w-full flex flex-wrap gap-12 justify-center">
          {collections.map((collection, i) => (
            <button key={i} type="button" className="text-lg font-semibold hover:bg-gray-500/30 duration-500 px-2 py-1">
              {collection}
            </button>
          ))}
        </div>

        <div className="w-full gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white max-w-screen-xl justify-items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-[300px] w-full bg-azure-blue"></div>
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
