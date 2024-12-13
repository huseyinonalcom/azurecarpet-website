import homepagebg from "../../../public/assets/images/homepagebg.jpg";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("home");
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={homepagebg}
        alt="background image for homepage - oriental rug"
        className="-m-24 h-[500px] -z-10"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-full bg-white flex flex-col items-center pt-6">
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
