import { getLocale } from "next-intl/server";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="antialiased flex flex-col items-center">{children}</body>
    </html>
  );
}
