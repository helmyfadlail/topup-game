"use client";

import { useState } from "react";

import { Link } from "@/i18n/routing";

import { useToggleState } from "@/hooks";

import { motion } from "framer-motion";
import { Container, LanguageSwitcher } from "./ui";

import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";

import { motionVariants } from "@/static";
import { RiLoginBoxFill } from "react-icons/ri";
import { useTranslations } from "next-intl";

export const Header = ({ className }: { className: string }) => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);

  const [refNavbar, navbar, toggleNavbar] = useToggleState();
  const [refDropdown, dropdown, toggleDropdown] = useToggleState();

  const products = ["Mobile Legends Bang Bang", "League of Legends", "PUBG Mobile", "Minecraft", "Among Us", "Genshin Impact", "Call of Duty: Mobile", "Apex Legends", "Roblox", "Valorant"];

  const handleSearchToggle = () => {
    setSearchToggle((prev) => !prev);
  };

  const t = useTranslations("Header");

  return (
    <header ref={refNavbar} className={`fixed top-0 w-full shadow bg-background z-1000 ${className ?? ""}`}>
      <Container className="flex items-center justify-between h-20 gap-8">
        <Link href="/" className="relative flex items-center gap-2 text-lg font-semibold whitespace-nowrap">
          <span className="rounded-full size-8 bg-light/20"></span>
          <span className="rounded-full size-8 bg-light/20 -ms-6"></span>
          ManiacGame
        </Link>

        <>
          {searchToggle && (
            <div className="relative hidden w-full bg-light/10 rounded-3xl sm:block">
              <i className="absolute left-4 top-2.5">
                <CiSearch size={20} />
              </i>
              <input type="search" className="w-full ps-12 py-2.5 pr-4 rounded-3xl bg-transparent outline-none text-sm" placeholder="Search ..." />
            </div>
          )}
        </>

        <div className="items-center hidden gap-4 sm:flex">
          {!searchToggle && (
            <button onClick={handleSearchToggle} className="h-10 pr-4 border-r border-light/20">
              <FaSearch size={20} />
            </button>
          )}
          <div className="flex items-center h-10 gap-2 pr-4 border-r border-light/20">
            <span className="p-2 rounded-xl bg-light/10">
              <RiLoginBoxFill />
            </span>
            <span className="text-sm duration-300 cursor-pointer hover:underline hover:text-light/80">{t("login-register")}</span>
          </div>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center sm:hidden">
          <button onClick={handleSearchToggle} className="h-10 pr-4">
            <FaSearch size={20} />
          </button>
          <button onClick={toggleNavbar} className={`relative flex flex-col justify-center overflow-hidden items-center p-2 ${navbar ? "space-y-1" : "space-y-1.5"}`}>
            <span className={`block h-0.5 w-6 rounded-full bg-light transition-transform ease-in-out ${navbar ? "translate-y-1.5 rotate-45" : ""}`}></span>
            <span className={`block h-0.5 w-6 rounded-full bg-light duration-200 ${navbar && "translate-x-16"}`}></span>
            <span className={`block h-0.5 w-6 rounded-full bg-light transition-transform ease-in-out ${navbar ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
          </button>
        </div>
      </Container>
      <div className="w-full h-px bg-light/10 sm:block"></div>
      <motion.div initial={false} animate={searchToggle ? "open" : "closed"} variants={motionVariants} className={`block sm:hidden ${searchToggle && "p-4"}`}>
        <div className="relative w-full bg-light/10 rounded-3xl">
          <i className="absolute left-4 top-2.5">
            <CiSearch size={20} />
          </i>
          <input type="search" className="w-full ps-12 py-2.5 pr-4 rounded-3xl bg-transparent outline-none text-sm" placeholder="Search ..." />
        </div>
      </motion.div>
      <motion.div initial={false} animate={navbar ? "open" : "closed"} variants={motionVariants} className={`block sm:hidden ${navbar && "p-4"}`}>
        <div className="flex items-center gap-2 h-14">
          <span className="p-2 rounded-xl bg-light/10">
            <RiLoginBoxFill />
          </span>
          <span className="text-sm duration-300 cursor-pointer hover:underline hover:text-light/80">{t("login-register")}</span>
        </div>
      </motion.div>
      <Container className="justify-between hidden h-16 sm:flex text-light">
        <div className="flex items-center gap-4 list-none">
          <li className="flex items-center gap-1">
            <AiOutlineHome />
            <Link href="/" className="text-sm font-semibold hover:text-primary">
              {t("home")}
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <FaSearch size={15} />
            <Link href="/order-history" className="text-sm font-semibold hover:text-primary">
              {t("tracker")}
            </Link>
          </li>
        </div>
        <div ref={refDropdown} className="relative flex items-center pr-2">
          <button onClick={toggleDropdown}>
            <PiCaretDoubleRightBold size={15} />
          </button>
          {dropdown && (
            <div className="right-0 py-2 mr-2 overflow-y-auto list-none h-80 top-12 popover min-w-64 scrollbar">
              <li className="flex items-center gap-2 px-1 hover:bg-light/10">
                <HiUserGroup size={24} />
                <Link href="/" className="block py-2 mt-2 text-sm">
                  {t("all-products")}
                </Link>
              </li>

              {products?.map((product, index) => (
                <li key={index} className="flex items-center gap-2 px-1 hover:bg-light/10">
                  <HiUserGroup size={24} />
                  <span className="block py-2.5 text-sm">{product}</span>
                </li>
              ))}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
