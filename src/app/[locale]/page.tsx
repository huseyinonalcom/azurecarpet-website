import homepagebg from "../../../public/assets/images/homepagebg.png";
import { getLocale, getTranslations } from "next-intl/server";
import { getClient } from "@/utils/creategraphqlclient";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "@/i18n/routing";
import { gql } from "@apollo/client";
import Image from "next/image";

const getCollections = async () => {
  let collections: any[] = [];

  let client = await getClient();

  await client
    .query({
      query: gql`
        query Tags($where: TagWhereInput!) {
          tags(where: $where) {
            id
            name
            description
            image {
              name
              url
            }
            materials {
              name
              files {
                name
                url
              }
            }
          }
        }
      `,
      variables: {
        where: {
          type: {
            equals: "collection",
          },
          materials: { some: {} },
          NOT: {
            image: null,
          },
        },
      },
    })
    .then((data) => {
      console.log(data);
      collections = data.data.tags;
    });

  return collections;
};

export default async function Home() {
  const t = await getTranslations("home");
  const locale = await getLocale();
  const collections = await getCollections();
  collections.forEach((collection) => {
    console.log(collection);
  });
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
      <div className="max-w-screen-md absolute mt-24 text-white bg-gray-600/50 p-8 md:p-12 pb-8 rounded-xl backdrop-blur-sm flex flex-col items-center mx-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center">{t("title")}</h2>
        <h3 className="text-lg md:text-2xl font-semibold text-center">{t("subtitle")}</h3>
        <Link href="#collections" className="text-2xl font-semibold">
          <SlArrowDown size={52} className="text-azure-grey mt-4 md:mt-6" />
        </Link>
      </div>
      <div className="w-full flex items-center pt-6 pb-10 px-12 -mt-12 rounded-xl bg-white shadow-xl max-w-screen-xl flex-col relative gap-6">
        <a id="collections" className="absolute -top-[100px]" />
        <div className="w-full flex flex-col gap-12 items-center">
          {collections.map((collection, i) => (
            <Link
              key={i}
              type="button"
              className="flex flex-col max-h-fit lg:odd:flex-row items-center lg:even:flex-row-reverse gap-8 hover:bg-gray-500/30 duration-500 px-2 py-1 w-full"
              href={"/collections/" + encodeURIComponent(collection.name.toLowerCase())}
            >
              <div className="w-full lg:w-1/2 aspect-[8/5] relative">
                <Image
                  sizes="(max-width: 768px) 90vw, 45vw"
                  src={collection.image.url}
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
