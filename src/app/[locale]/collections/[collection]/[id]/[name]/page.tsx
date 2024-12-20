import { notFound, permanentRedirect } from "next/navigation";
import { allCollections } from "../../../page";
import ImageViewer from "./imageviewer";

const getProduct = ({ param }: { param: { locale?: string; collection?: string; id?: string; name?: string } }) => {
  const allProducts = allCollections.flatMap((collection) =>
    collection.products.map((product) => ({
      ...product,
      collection: collection.name.toLowerCase(),
    }))
  );
  const product = allProducts.find((prod) => prod.id == param.id);
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
  const param = await params;

  const product = getProduct({
    param: param,
  });

  return (
    <>
      <ImageViewer product={product} />
      <div className="h-[50px] mt-6">
        <p className="font-semibold text-xl text-center">{product.collection.substring(0, 1).toUpperCase() + product.collection.substring(1)}</p>
        <p className="font-semibold text-xl text-center">{product.name}</p>
        <p className="text-sm text-center">{product.code}</p>
      </div>
    </>
  );
}
