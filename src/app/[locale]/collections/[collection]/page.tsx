import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ collection: string }> }) {
  const t = await getTranslations("common");
  const collection = (await params).collection;
  return (
    <div>
      <Link href="/">Home</Link>
      {t("about-us")}: {collection}
    </div>
  );
}
