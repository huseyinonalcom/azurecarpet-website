import { getTranslations } from "next-intl/server";
import { collections } from "@/app/[locale]/page";
import { notFound, permanentRedirect } from "next/navigation";

const getProduct = ({ param }: { param: { locale?: string; collection?: string; id?: string; name?: string } }) => {
  let allProducts = collections.flatMap((collection) =>
    collection.products.map((product) => ({
      ...product,
      collection: collection.name.toLowerCase(),
    }))
  );
  let product = allProducts.find((prod) => prod.id == param.id);
  if (product) {
    if (
      decodeURIComponent(param.collection ?? "").toLowerCase() != product.collection.toLowerCase() ||
      decodeURIComponent(param.name ?? "").toLowerCase() != product!.name.toLowerCase()
    ) {
      permanentRedirect("/" + param.locale + "/collections/" + product.collection.toLowerCase() + "/" + product.id + "/" + product.name.toLowerCase());
    } else {
      return product;
    }
  } else {
    notFound();
  }
};

export default async function Home({ params }: { params: Promise<{ locale?: string; collection?: string; id?: string; name?: string }> }) {
  const t = await getTranslations("home");
  const param = await params;

  const product = getProduct({
    param: param,
  });

  console.log(product);

  return (
    <>
      <div className="bg-red-500">a</div>
    </>
  );
}
