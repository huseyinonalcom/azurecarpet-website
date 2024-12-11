import type { Metadata } from "next";
import "./globals.css";
import { getLocale } from "next-intl/server";
export const metadata: Metadata = {
  title: "Azure Carpet",
  description: "High quality carpets for a luxury lifestyle",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
