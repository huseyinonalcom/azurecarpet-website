import { notFound, permanentRedirect } from "next/navigation";
import ImageViewer from "./imageviewer";
import { gql } from "@apollo/client";
import { getClient } from "@/utils/creategraphqlclient";

const getProduct = async ({ param }: { param: { locale?: string; collection?: string; id?: string; name?: string } }) => {
  let product: any;

  let client = await getClient();

  await client
    .query({
      query: gql`
        query Tags($where: MaterialWhereUniqueInput!, $tagsWhere2: TagWhereInput!) {
          material(where: $where) {
            id
            code
            ean
            files {
              name
              url
            }
            description
            name
            tags(where: $tagsWhere2) {
              id
              type
              name
            }
          }
        }
      `,
      variables: {
        where: {
          id: param.id,
        },
        tagsWhere2: {
          type: {
            equals: "collection",
          },
        },
      },
    })
    .then((data) => {
      product = data.data.material;
    });

  if (product) {
    let collections: any[] = [];
    collections = product.tags.filter((tag: any) => tag.type === "collection");
    if (
      !param.collection ||
      collections.length == 0 ||
      collections.filter((collection) => collection.name.toLowerCase() == param.collection!.toLowerCase()).length == 0 ||
      decodeURIComponent(param.name ?? "").toLowerCase() != product!.name.toLowerCase()
    ) {
      if (collections.length == 0) {
        notFound();
      }
      permanentRedirect("/" + param.locale + "/collections/" + collections.at(0)!.name.toLowerCase() + "/" + product.id + "/" + product.name.toLowerCase());
    } else {
      return product;
    }
  } else {
    notFound();
  }
};

export default async function Home({ params }: { params: Promise<{ locale?: string; collection?: string; id?: string; name?: string }> }) {
  const param = await params;

  const product = await getProduct({
    param,
  });

  return (
    <>
      <ImageViewer product={product} />
      <div className="h-[50px] mt-6">
        <p className="font-semibold text-xl text-center">{param.collection!.substring(0, 1).toUpperCase() + param.collection!.substring(1)}</p>
        <p className="font-semibold text-xl text-center">{product.name}</p>
        <p className="text-sm text-center">{product.code}</p>
      </div>
    </>
  );
}
