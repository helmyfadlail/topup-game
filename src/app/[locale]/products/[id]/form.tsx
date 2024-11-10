"use client";

import * as React from "react";

import { useToggleState } from "@/hooks";

import { AnimatePresence, motion } from "framer-motion";
import { CardPayment, CardPromo, CardUserID, Modal } from "@/components/ui";

import { CiSearch } from "react-icons/ci";
import { IoMdPricetag } from "react-icons/io";
import { PiCaretRightBold, PiCaretUpBold } from "react-icons/pi";

import { motionVariants } from "@/static";

import { FormUserTypes } from "@/types";

interface FormProps {
  handleSelectPayment: (select: string) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formState: FormUserTypes;
  selectedPayment: string;
}

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

const Form = ({ handleSelectPayment, formState, selectedPayment, handleChangeInput }: FormProps) => {
  const [ref, modal, toggleModal] = useToggleState();

  const [items, setItems] = React.useState(paymentMethod);

  const toggleCollapse = (name: string) => {
    setItems((prevItems) => prevItems.map((item) => (item.name === name ? { ...item, collapsed: !item.collapsed } : item)));
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
        <div className="flex items-center justify-between gap-4 p-3 border rounded-lg lg:p-4 border-light/20" ref={ref}>
          <IoMdPricetag className="-rotate-90 size-5 lg:size-6 min-w-6" />
          <p className="w-full text-sm lg:text-base">Lihat promo tersedia</p>
          <button onClick={toggleModal}>
            <PiCaretRightBold />
          </button>
          <AnimatePresence>
            {modal && (
              <Modal isVisible={modal} onClose={toggleModal}>
                <div className="space-y-8">
                  <h3 className="text-lg font-medium text-center">Promo yang tersedia</h3>
                  <CardPromo
                    minimumLimit="Promo ini sudah mencapai limit penggunaan untuk hari ini, digunakan 50/50"
                    minimumPurchase="Minimum pembelian Rp. 10.000"
                    deadline="Promo berlaku hingga 30/10/2024"
                    discount={5000}
                    minimumAccount="Batas penggunaan 2 kali untuk setiap akun."
                    codePromo="OKTOBERTOPUP"
                  />
                  <CardPromo
                    minimumLimit="Promo ini masih tersedia dan terbatas"
                    minimumPurchase="Minimum pembelian Rp. 30.000"
                    deadline="Promo berlaku hingga 30/11/2024"
                    discount={5000}
                    minimumAccount="Batas penggunaan 2 kali untuk setiap akun."
                    codePromo="NOVEMBERTOPUP"
                    isExist
                  />
                </div>
              </Modal>
            )}
          </AnimatePresence>
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
                <CardPayment key={index} name={wallet.name} pathImg={wallet.pathImg} tax={1500} selected={selectedPayment} handleSelected={handleSelectPayment} collapsed={payment.collapsed} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
