"use client";

import * as React from "react";

import { motion } from "framer-motion";
import { CardPayment, CardUserID, Container, Img } from "@/components/ui";

import { CiSearch } from "react-icons/ci";
import { IoMdPricetag } from "react-icons/io";
import { PiCaretRightBold, PiCaretUpBold } from "react-icons/pi";

import { motionVariants } from "@/static";

import { formatCurrency } from "@/utils";

import { FormUserTypes } from "@/types";

const initValues = { userId: "", zoneId: "", whatsappNumber: "" };
const initState = { values: initValues, loading: false, error: false };

const paymentMethod = [
  { name: "QRIS", items: [{ name: "QRIS", pathImg: "/images/qris.webp" }], collapsed: true },
  {
    name: "E-Wallets",
    items: [
      { name: "DANA", pathImg: "/images/dana.webp" },
      { name: "OVO", pathImg: "/images/ovo.webp" },
      { name: "Shopee Pay", pathImg: "/images/shopee-pay.webp" },
      { name: "LinkAja", pathImg: "/images/link-aja.webp" },
    ],
    collapsed: true,
  },
];

const Form = () => {
  const [selected, setSelected] = React.useState<string>("");
  const [items, setItems] = React.useState(paymentMethod);
  const [formState, setFormState] = React.useState<FormUserTypes>(initState);

  const handleSelected = (select: string) => {
    setSelected(select);
  };

  const toggleCollapse = (name: string) => {
    setItems((prevItems) => prevItems.map((item) => (item.name === name ? { ...item, collapsed: !item.collapsed } : item)));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [id]: value },
    }));
  };

  return (
    <div className="col-span-1 overflow-hidden md:space-y-4 lg:col-span-2">
      <div className="hidden p-8 rounded-lg md:block bg-background">
        <CardUserID handleChangeInput={handleChangeInput} formState={formState} />
      </div>
      <div className="p-4 pb-8 space-y-4 rounded-t-lg lg:p-6 xl:p-8 md:rounded-lg bg-background md:pb-8">
        <div className="relative flex overflow-hidden">
          <i className="absolute left-2 lg:left-2.5 top-2.5 lg:top-3">
            <CiSearch className="size-5 lg:size-6" />
          </i>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Ketik kode promo (opsional)"
            className="w-full py-2.5 lg:py-4 pr-4 text-xs outline-none lg:text-sm ps-8 lg:ps-10 rounded-s-lg bg-light/10"
          />
          <button className="btn-light rounded-e-xl">Gunakan</button>
        </div>
        <div className="flex items-center justify-between gap-4 p-3 border rounded-lg lg:p-4 border-light/20">
          <IoMdPricetag className="-rotate-90 size-5 lg:size-6 min-w-6" />
          <p className="w-full text-sm lg:text-base">Lihat promo tersedia</p>
          <button>
            <PiCaretRightBold />
          </button>
        </div>
      </div>
      <div className="p-4 pt-2 space-y-6 border-t rounded-b-lg lg:space-y-8 md:pt-8 md:rounded-lg lg:p-6 xl:p-8 bg-background border-light/20 md:border-none">
        <h4 className="hidden px-1 text-base font-semibold lg:text-lg md:block">Pilih Metode Pembayaran</h4>
        {items.map((payment, index) => (
          <div key={index} className="space-y-4">
            <button className="flex items-center justify-between w-full p-3 text-sm uppercase rounded-lg sm:p-4 bg-light/10" onClick={() => toggleCollapse(payment.name)}>
              {payment.name} <PiCaretUpBold className={`${payment.collapsed && "rotate-180 duration-300"}`} />
            </button>

            <motion.div initial={false} animate={payment.collapsed ? "open" : "closed"} variants={motionVariants} className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-background">
              {payment.items.map((wallet, index) => (
                <CardPayment key={index} name={wallet.name} pathImg={wallet.pathImg} tax={1500} selected={selected} handleSelected={handleSelected} collapsed={payment.collapsed} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 flex items-center w-full h-24 bg-dark/50 backdrop-blur z-100">
        <Container className="flex items-center justify-between gap-16">
          <div className="flex items-center gap-4 max-w-48 sm:max-w-full">
            <Img src={"/images/diamond.webp"} alt="icon diamond" className="hidden size-12 sm:block" cover />
            <div className="space-y-1 sm:whitespace-nowrap">
              <p className="text-xs font-semibold text-light sm:text-sm md:text-base">12976 Diamonds (10839 + 2137 Bonus)</p>
              <small className="text-light/50 text-xxs sm:text-xs md:text-base">
                Price: <strong className="text-light">{formatCurrency(2755000)}</strong>
              </small>
            </div>
          </div>
          <div className="items-center hidden w-full gap-4 lg:flex">
            <Img src="/images/qris.webp" alt="icon payment method" className="w-20 rounded-lg aspect-video" />
            <div className="space-y-1 whitespace-nowrap">
              <p className="font-semibold text-light">QRIS</p>
              <small className="text-light/50">
                Tax: <strong className="text-light">Rp {formatCurrency(1500, "decimal")},-</strong>
              </small>
            </div>
          </div>
          <div className="relative whitespace-nowrap">
            <button className="rounded-lg btn-light relative">Buy Now</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Form;
