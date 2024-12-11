import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Azure Carpet",
  description: "High quality carpets for a luxury lifestyle",
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>azure carpet</header>
      <main>{children}</main>
      <footer>website by digital forge</footer>
    </>
  );
}
