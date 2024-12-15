import homepagebg from "../../../public/assets/images/homepagebg.jpg";
import { getTranslations } from "next-intl/server";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const getCollections = () => {
  return [
    {
      name: "Berlin",
      products: [
        {
          name: "Berlin Medallion Grey",
          code: "1000A-GRE/BLA",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1149086414.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1143054325.jpg",
            },
          ],
        },
        {
          name: "Berlin Medallion Turquoise",
          code: "1000A-TUR",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1184691863.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1184692170.jpg",
            },
          ],
        },
        {
          name: "Berlin Patchwork Beige",
          code: "1002A-BEI",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1184713083.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1184710495.jpg",
            },
          ],
        },
        {
          name: "Berlin Patchwork Grey",
          code: "1002A-GRE/BLA",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1184710665.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1184713376.jpg",
            },
          ],
        },
        {
          name: "Berlin Patchwork Orange",
          code: "1002A-ORA",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1185469112.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1185469147.jpg",
            },
          ],
        },
        {
          name: "Berlin Patchwork Red Yellow Green",
          code: "1005A-YEL/GRN",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1185487275.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1185485777.jpg",
            },
          ],
        },
        {
          name: "Berlin Patchwork Black Brown",
          code: "1009A-BLA/BRO",
          images: [
            {
              isCover: true,
              order: 1,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1185489022.jpg",
            },
            {
              isCover: false,
              order: 2,
              src: "https://d2j6dbq0eux0bg.cloudfront.net/images/17305554/1185489184.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Hayat",
      products: [],
    },
    {
      name: "Iranian Classics",
      products: [],
    },
    {
      name: "Parma",
      products: [],
    },
    {
      name: "Superverso",
      products: [],
    },
    {
      name: "Tiara",
      products: [],
    },
    {
      name: "Patchwork",
      products: [],
    },
    {
      name: "Florence",
      products: [],
    },
    {
      name: "Bari",
      products: [],
    },
  ];
};

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const t = await getTranslations("home");
  const collections = getCollections();

  const collectionNameToFind = ((await searchParams).collection as string)?.toLowerCase() ?? "berlin";

  const collectionToShow = (
    await Promise.all(
      collections.map(async (collection) => ({
        ...collection,
        matches: collection.name.toLowerCase() === collectionNameToFind,
      }))
    )
  ).find((result) => result.matches);
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
            <Link
              key={i}
              type="button"
              className="text-lg font-semibold hover:bg-gray-500/30 duration-500 px-2 py-1"
              href={"?collection=" + encodeURIComponent(collection.name.toLowerCase())}
            >
              {collection.name}
            </Link>
          ))}
        </div>

        <div className="w-full flex flex-wrap bg-white max-w-screen-xl items-center justify-center mb-6">
          {collectionToShow!.products.map((prod, j) => (
            <div key={j} className="h-[400px] w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 pb-4">
              <div className="h-full hover:shadow-azure-blue duration-500 pb-4 group rounded-xl border-3 shadow-md border-gray-700 flex flex-col gap-2 items-center overflow-hidden">
                <div className="relative w-full h-[300px]">
                  <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 duration-300">
                    <Image
                      priority
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                      src={prod.images[0].src}
                      fill
                      alt="background image for homepage - oriental rug"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-300 transform scale-110 group-hover:scale-100">
                    {prod.images.length > 1 && (
                      <Image
                        priority
                        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                        src={prod.images[1].src}
                        fill
                        alt="background image for homepage - oriental rug"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
                <div className="h-[50px] mb-2">
                  <p className="font-semibold text-center group-hover:text-azure-blue">{prod.name}</p>
                  <p className="text-sm text-center">{prod.code}</p>
                </div>
              </div>
            </div>
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
