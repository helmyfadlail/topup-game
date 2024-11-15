"use client";

import * as React from "react";

import { Link } from "@/i18n/routing";

import { Border } from "./border";
import { Ribbon } from "./ribbon";
import { Img } from "./image";

import { imgLogoBroken } from "@/static";

import { WiTime3 } from "react-icons/wi";
import { PiWarningCircle } from "react-icons/pi";

import { formatCurrency } from "@/utils";

import { CardDiamondProps, CardPaymentProps, CardPromoProps, CardUserIDProps, ResponsePayload } from "@/types";
import { useTranslations } from "next-intl";

export const CardFlashSale = () => {
  return (
    <div className="w-full rounded-lg bg-dark group min-w-80 sm:min-w-40">
      <div className="flex items-center gap-2 p-4 rounded-lg bg-gradient-to-r from-dark to-light/50 group-hover:from-light group-hover:to-light group-hover:text-dark">
        <Img src="/images/ml.webp" alt="icon mobile legends" className="rounded-lg min-w-12 aspect-square" cover />
        <div className="flex flex-col gap-1">
          <span>200 Diamonds</span>
          <small className="line-clamp-1">Mobile Legends Bang Bang</small>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-2">
        <Link href="/products/1" className="block px-3 py-1 text-xs duration-300 bg-red-600 hover:bg-red-700 rounded-3xl">
          Promo
        </Link>
        <small>-15,0%</small>
      </div>
    </div>
  );
};

export const CardGames = ({ id, image, name, publisher }: Partial<ResponsePayload>) => {
  return (
    <div className="max-w-sm mx-auto rounded-lg md:p-4">
      <div className="relative p-1 mx-2 border-2 rounded-lg border-light/80 sm:mx-6 z-1">
        {+id! < 3 ? (
          <Img src={image || ""} alt={name || ""} className="w-20 rounded-lg sm:w-24 md:w-28 aspect-square" cover />
        ) : (
          <Img src={imgLogoBroken[+id! - 3] || ""} alt={name || ""} className="w-20 rounded-lg sm:w-24 md:w-28 aspect-square" cover />
        )}
      </div>
      <div className="relative px-2 pt-12 pb-4 -mt-8 text-center rounded-lg bg-background">
        <i className="absolute left-0 bottom-0 border-dark border-t-[16px] border-t-transparent border-l-[16px] hidden md:block"></i>
        <i className="absolute right-0 top-0 border-dark border-b-[16px] border-b-transparent border-r-[16px] hidden md:block"></i>
        <Link href={`/products/${id}`} className="block">
          <h2 className="mx-auto mb-1 text-xs font-bold text-light sm:text-sm line-clamp-1 max-w-20 sm:max-w-32">{name}</h2>
        </Link>
        <p className="text-light/50 text-xxs sm:text-xs">{publisher}</p>
      </div>
    </div>
  );
};

export const CardPayment = ({ name, pathImg, tax, selected, handleSelected, collapsed }: CardPaymentProps) => {
  if (collapsed) {
    return (
      <div className="relative rounded-lg cursor-pointer bg-light/10" onClick={() => handleSelected(name)}>
        {selected === name && <Border className="hidden md:block" />}
        <div className="flex flex-row items-center justify-between gap-2 p-2 text-sm lg:p-4 md:items-start md:flex-col">
          <Img src={pathImg} alt="icon payment" className="h-20 rounded-lg w-44 sm:w-full sm:h-24 max-w-32 md:max-w-full md:h-28" cover />
          <div className="flex flex-col w-full gap-2">
            <span className="text-sm font-semibold sm:text-base">{name}</span>
            <span className="hidden text-light/50 w-max md:block">Biaya Layanan</span>
            <span className="hidden w-max md:block">+ Rp {formatCurrency(tax, "decimal")},-</span>
            <span className="block w-full text-xxs text-light/50 whitespace-nowrap md:hidden">
              Biaya Layanan: <strong className="text-light">+ Rp {formatCurrency(tax, "decimal")},-</strong>
            </span>
          </div>
          <div className="block md:hidden">
            <div className="flex items-center justify-center border-2 rounded-full bg-light/10 border-light size-6">
              <i className={`block rounded-full size-4 ${selected === name ? "bg-light" : "bg-transparent"}`}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export const CardDiamond = ({ handleSelectItem, selectItem, price, priceDiscount, iconUrl, name, discount, id }: CardDiamondProps) => {
  return (
    <div onClick={() => handleSelectItem(id || 0)} className="card-diamond">
      {selectItem === id && <Border />}
      {priceDiscount ? <Ribbon value={`${Math.ceil(discount)}% OFF`} className="w-20 py-1 lg:w-24" parentClassName="w-14 lg:w-16" /> : null}
      <div className="space-y-1 text-xxs sm:text-xs">
        <p className="font-semibold">{name}</p>
        <p className="font-semibold text-green">{formatCurrency((priceDiscount ? priceDiscount : price) || 0)},-</p>
        <p className="line-through text-light/50">
          {formatCurrency((priceDiscount ? price : 0) || 0)}
          {priceDiscount ? ",-" : null}
        </p>
      </div>
      <Img src={iconUrl || "/images/diamond.webp"} alt="icon diamond" className="size-8 min-w-8" cover />
    </div>
  );
};

export const CardUserID = ({ handleChangeInput, formState }: CardUserIDProps) => {
  const t = useTranslations("ProductPage");
  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center rounded-2xl min-w-16 min-h-16 bg-light/10">
          <Img src="/icons/gamepad.svg" alt="icon gamepad" className="size-10" />
        </div>
        <div className="space-y-2">
          <h4 className="text-base font-semibold sm:text-xl lg:text-3xl text-light">Topup Game</h4>
          <p className="text-xs sm:text-sm lg:text-lg text-light/50">{t("complete-data")}</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 md:pt-8 md:border-t gap-y-4 gap-x-2 sm:gap-x-4 sm:gap-y-6 md:border-light/50">
        <div className="relative space-y-2">
          <label htmlFor="userId" className="text-xs lg:text-sm">
            User Id*
          </label>
          <input
            type="text"
            id="userId"
            inputMode="numeric"
            onChange={handleChangeInput}
            placeholder="Input User ID"
            className="w-full p-4 text-xs rounded-lg outline-none lg:text-sm bg-light/10"
            required
          />
          {formState.error && !formState.values.userId && <small className="text-red-600">Input your user id</small>}
        </div>
        <div className="relative space-y-2">
          <label htmlFor="zoneId" className="text-xs lg:text-sm">
            Zone Id*
          </label>
          <input
            type="text"
            id="zoneId"
            inputMode="numeric"
            onChange={handleChangeInput}
            placeholder="Input Zone ID"
            className="w-full p-4 text-xs rounded-lg outline-none lg:text-sm bg-light/10"
            required
          />
          {formState.error && !formState.values.zoneId && <small className="text-red-600">Input your zone id</small>}
        </div>
        <div className="relative col-span-2 space-y-2">
          <label htmlFor="whatsappNumber" className="text-xs lg:text-sm">
            Number WhatsApp*
          </label>
          <input
            type="tel"
            id="whatsappNumber"
            onChange={handleChangeInput}
            placeholder="Input number WA (081********63)"
            className="w-full p-4 text-xs rounded-lg outline-none lg:text-sm bg-light/10"
          />
          {formState.error && !formState.values.whatsappNumber && <small className="text-red-600">Input your whatsapp number</small>}
        </div>
        <div className="col-span-2">
          <p className="leading-normal text-justify text-xxs sm:text-xs md:leading-relaxed text-light/50">{t("description-note")}</p>
        </div>
      </div>
    </>
  );
};

export const CardPromo = ({ discount, deadline, minimumPurchase, minimumAccount, minimumLimit, codePromo, isExist }: CardPromoProps) => {
  return (
    <div className={`relative space-y-4 text-xs ${isExist ? "opacity-100" : "opacity-50"}`}>
      <h6 className="text-light/50">Discount of Rp {formatCurrency(discount, "decimal")},-</h6>
      <div className="space-y-1">
        <p className="flex gap-2">
          <WiTime3 size={20} className="min-w-5" />
          {deadline}
        </p>
        <p className="flex gap-2">
          <PiWarningCircle size={20} className="min-w-5" />
          {minimumPurchase}
        </p>
        <p className="flex gap-2">
          <PiWarningCircle size={20} className="min-w-5" />
          {minimumAccount}
        </p>
        <p className="flex gap-2">
          <PiWarningCircle size={20} className="min-w-5" />
          {minimumLimit}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-light/50">Kode Promo: {codePromo}</p>
        <button className={`px-4 py-1 rounded-lg ${isExist ? "bg-green" : "bg-red-500"}`}>{isExist ? "Available" : "Not Available"}</button>
      </div>
    </div>
  );
};
