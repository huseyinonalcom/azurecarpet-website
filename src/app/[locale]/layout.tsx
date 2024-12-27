import { FaBars, FaGlobe, FaLocationArrow, FaPhone, FaTiktok } from "react-icons/fa6";
import logo from "../../../public/assets/logo/azure-logo.png";
import { getLocale, getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/localeswitcher";
import { Link, redirect, routing } from "@/i18n/routing";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const lang = (await params).locale;
  const t = await getTranslations({ lang, namespace: "meta" });

  return {
    title: "Azure Carpet",
    description: t("metadata-description-general"),
  };
}

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href} className="text-3xl text-azure-blue font-bold group relative px-1">
    <span className="absolute left-0 bottom-0 w-full h-0 transition-all bg-azure-grey group-hover:h-full"></span>
    <span className="px-1 relative transition-all group-hover:text-azure-blue">{text}</span>
  </Link>
);
export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getTranslations("layout");
  const locale = await getLocale();

  if (!routing.locales.includes(locale as "en" | "nl" | "fr" | "de")) {
    redirect({ href: "/", locale: "en" });
  }
  return (
    <>
      <header className="w-full flex flex-col items-center sticky top-0 z-10 backdrop-blur-md bg-white/80">
        <div className="flex p-4 w-full flex-row justify-between max-w-screen-2xl items-center">
          <Link href="/" className="max-w-[30%] w-52 flex-shrink-0">
            <Image priority width={208} src={logo} alt="Azure Carpet Logo" />
          </Link>
          <div className="flex group relative ml-auto mr-6 md:mr-12">
            <FaGlobe className="text-azure-blue text-2xl md:text-4xl" />
            <div className="hidden group-hover:flex absolute top-4 -left-16 p-6">
              <div className="flex flex-col bg-black p-2 gap-2">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
          <div className="group/menu max-w-[70%] relative">
            <FaBars className="text-azure-blue md:hidden text-2xl md:text-4xl" />
            <div className="hidden p-2 px-4 md:gap-12 flex-col md:flex-row items-center gap-2 justify-between group-hover/menu:flex top-10 md:top-0 md:flex md:w-full absolute md:relative right-2 md:right-0 bg-black md:bg-transparent">
              <NavLink href="/" text={t("collections")} />
              <NavLink href="#location" text={t("showroom")} />
              <NavLink href="#contact" text={t("contact")} />
            </div>
          </div>
        </div>
      </header>
      <main className="w-full flex flex-col items-center">{children}</main>
      <footer className="w-full mt-12 relative">
        <div className="w-full max-w-screen-2xl px-4 mx-auto">
          <a id="location" className="absolute -top-[100px]" />
          <h2 className="text-2xl font-semibold mx-auto w-min whitespace-nowrap mb-6">{t("visit-us")}</h2>
          <div className="w-full flex flex-col md:flex-row justify-center gap-12 mb-12">
            <iframe
              loading="lazy"
              className="md:w-5/12 h-96"
              id="google-map"
              title={t("location")}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.4077699171844!2d4.395165609492516!3d51.148752598524794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f1052f5297b3%3A0x8a11af3d52ec2084!2sIngberthoeveweg%204%2C%202630%20Aartselaar%2C%20Belgium!5e0!3m2!1sen!2str!4v1734725609170!5m2!1sen!2str"
            ></iframe>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">{t("location-address")}</h2>
                <p>Ingberthoeveweg 4</p>
                <p>2630 Aartselaar/Antwerpen</p>
              </div>
              <Link target="_blank" href={"https://maps.app.goo.gl/Po1zFKLzS2SXCAvJ6"}>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-azure-grey rounded hover:bg-azure-grey group py-1.5 px-2.5"
                >
                  <span className="w-56 h-48 rounded bg-azure-blue absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full flex flex-row items-center gap-1 text-left text-azure-blue transition-colors duration-300 ease-in-out group-hover:text-azure-grey">
                    <FaLocationArrow size={18} />
                    {t("location-get-directions")}
                  </span>
                </button>
              </Link>
              <h2 className="text-xl font-bold">{t("opening-hours")}</h2>
              <p className="text-lg font-semibold">{t("monday-to-thursday")}</p>
              <p>10:00 - 18:00</p>
              <p className="text-lg font-semibold">{t("friday")}</p>
              <p>10:00 - 12:30 & 14:00 - 18:30</p>
              <p className="text-lg font-semibold">{t("saturday-and-sunday")}</p>
              <p>{t("closed")}</p>
            </div>
          </div>
          <a id="contact" className="absolute" />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold mx-auto w-min whitespace-nowrap mb-6">{t("contact-us")}</h2>
            <div className="flex flex-col md:flex-row gap-12 justify-center text-xl items-center">
              <a className="flex flex-row items-center gap-2">
                <FaInstagramSquare />
                <p>azurecarpet</p>
              </a>
              <a className="flex flex-row items-center gap-2">
                <FaTiktok />
                <p>azurecarpet</p>
              </a>
              <a href="tel:+32475479136" className="flex flex-row items-center gap-2">
                <FaPhone />
                <p>+32 (0) 475 47 91 36</p>
              </a>
              <a href="mailto:info@azurecarpet.be" className="flex flex-row items-center gap-2">
                <MdEmail />
                <p>info@azurecarpet.be</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-8 gap-4 mt-12 bg-azure-grey justify-center text-azure-blue">
          <p>© Azure Carpet - {new Date().getFullYear()}</p>
          <Link href="/tc" className="underline hover:decoration-white">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </>
  );
}
