import { Link } from "@/i18n/routing";
import { getClient } from "@/utils/creategraphqlclient";
import { gql } from "@apollo/client";
import Image from "next/image";
import { notFound } from "next/navigation";

const getCollection = async ({ collectionName }: { collectionName: string }) => {
  let collections: any[] = [];

  const client = await getClient();

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
              id
              ean
              code
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
          name: {
            equals: collectionName,
            mode: "insensitive",
          },
          materials: { some: {} },
          NOT: {
            image: null,
          },
        },
      },
    })
    .then((data) => {
      collections = data.data.tags;
      if (collections.length == 0) {
        notFound();
      }
    });

  return collections;
};

export default async function Home({ params }: { params: Promise<{ collection?: string }> }) {
  const collectionNameToFind = ((await params).collection as string)?.toLowerCase();
  const allCollections = await getCollection({ collectionName: collectionNameToFind });
  return (
    <>
      <div className="w-full flex items-center pt-6 pb-10 px-12 rounded-xl bg-white shadow-xl max-w-screen-xl flex-col relative gap-6">
        <div className="text-4xl font-black text-center">{collectionNameToFind.substring(0, 1).toUpperCase() + collectionNameToFind.substring(1)}</div>
        <div className="w-full flex flex-wrap bg-white max-w-screen-xl items-center justify-center mb-6">
          {allCollections
            .find((collection) => collection.name.toLowerCase() === collectionNameToFind)!
            .materials.map((prod: any) => (
              <Link
                href={
                  "/collections/" +
                  encodeURIComponent(collectionNameToFind.toLowerCase()) +
                  "/" +
                  encodeURIComponent(prod.id) +
                  "/" +
                  encodeURIComponent(prod.name.toLowerCase())
                }
                key={prod.id}
                className="h-[300px] md:h-[400px] w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 pb-4"
              >
                <div className="h-full duration-500 pb-4 group rounded-xl border-3 shadow-md border-gray-700 flex flex-col gap-2 items-center overflow-hidden hover:shadow-azure-blue">
                  {prod.files.length > 1 ? (
                    <>
                      <div className="relative w-full h-[300px]">
                        <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 duration-300">
                          <Image
                            sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                            src={prod.files[0].url}
                            fill
                            alt="background image for homepage - oriental rug"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-300 transform scale-110 group-hover:scale-100">
                          <Image
                            sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                            src={prod.files[1].url}
                            fill
                            alt="background image for homepage - oriental rug"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="relative w-full h-[300px]">
                      <div className="absolute top-0 left-0 w-full h-full duration-300">
                        <Image
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                          src={prod.files[0].url}
                          fill
                          alt="background image for homepage - oriental rug"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="h-[50px] mb-2">
                    <p className="font-semibold text-center group-hover:text-azure-blue">{prod.name}</p>
                    <p className="text-sm text-center">{prod.code}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
