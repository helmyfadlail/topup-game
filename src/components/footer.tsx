import { Link } from "@/i18n/routing";

import { Container } from "./ui";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export const Footer = ({ className }: { className: string }) => {
  const t = useTranslations("Footer");
  const listFooter = [`${t("home")}`, `${t("all-games")}`, `${t("register")}`, `${t("login")}`];

  const products = ["Mobile Legends", "League of Legends", "PUBG Mobile"];

  return (
    <footer className={`bg-background mt-auto sm:divide-y sm:divide-light/10 ${className ?? ""}`}>
      <Container className="flex flex-col justify-between gap-8 py-8 sm:flex-row">
        <div className="font-semibold whitespace-nowrap">
          <Link href="/" className="relative flex items-center gap-2 text-xl sm:text-2xl">
            <span className="rounded-full size-10 sm:size-12 bg-light/50"></span>
            <span className="rounded-full size-10 sm:size-12 bg-light/50 -ms-4 sm:-ms-6"></span>
            ManiacGame
          </Link>
        </div>
        <div className="flex flex-wrap gap-y-8 whitespace-nowrap">
          <div className="hidden space-y-2 lg:block min-w-48">
            <h5 className="font-semibold">{t("sitemap")}</h5>
            <menu className="space-y-2">
              {listFooter.map((list, i) => (
                <span key={i} className="block text-sm">
                  {list}
                </span>
              ))}
            </menu>
          </div>
          <div className="hidden space-y-2 lg:block min-w-48">
            <h5 className="font-semibold">{t("other")}</h5>
            <menu className="space-y-2">
              {products.map((list, i) => (
                <span key={i} className="block text-sm">
                  {list}
                </span>
              ))}
            </menu>
          </div>
          <div className="flex flex-row justify-between w-full gap-4 sm:w-max sm:flex-col min-w-48">
            <menu className="space-y-2">
              <h5 className="font-semibold">{t("follow")}</h5>
              <li className="flex items-center gap-2">
                <span className="p-2 rounded-full bg-light/10">
                  <FaInstagram size={18} />
                </span>
                <span className="p-2 rounded-full bg-light/10">
                  <FaTiktok size={18} />
                </span>
                <span className="p-2 rounded-full bg-light/10">
                  <FaYoutube size={18} />
                </span>
              </li>
            </menu>
            <menu>
              <h5 className="font-semibold">Contact Us</h5>
              <span className="text-sm">contact@gmail.com</span>
            </menu>
          </div>
        </div>
      </Container>
      <Container className="flex justify-between py-4 text-sm">
        <span className="whitespace-nowrap">© PT ManiacGame, 2024</span>
        <span className="hidden whitespace-nowrap sm:block">{t("privacy")}</span>
        <span className="hidden whitespace-nowrap sm:block">{t("terms")}</span>
        <span className="hidden whitespace-nowrap sm:block">{t("contact")}</span>
      </Container>
    </footer>
  );
};
