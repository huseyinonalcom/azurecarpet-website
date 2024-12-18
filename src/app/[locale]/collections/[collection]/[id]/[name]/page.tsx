import { notFound, permanentRedirect } from "next/navigation";
import { collections } from "@/app/[locale]/page";
import Image from "next/image";

const getProduct = ({ param }: { param: { locale?: string; collection?: string; id?: string; name?: string } }) => {
  const allProducts = collections.flatMap((collection) =>
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
      <div className="w-full flex flex-row items-center max-w-screen-xl px-4 mx-auto mt-12">
        <div className="flex flex-col items-center gap-2 w-[180px]">
          {product.files.map((file, i) => (
            <div key={i} className="relative w-[150px] h-[150px]">
              <Image fill key={i} sizes="150px" src={file.url} alt={"image for " + product.name} style={{ objectFit: "contain" }} />
            </div>
          ))}
        </div>
        <div className="flex flex-row overflow-scroll no-scrollbar"></div>
      </div>
    </>
  );
}
