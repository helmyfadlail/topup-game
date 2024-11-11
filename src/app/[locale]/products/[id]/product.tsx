"use client";

import * as React from "react";

import { useRouter } from "@/i18n/routing";
import { notFound } from "next/navigation";

import { usePersistedState } from "@/hooks";

import { useTranslations } from "next-intl";

import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import Diamonds from "./diamonds";
import Form from "./form";
import { Container, Img, Modal } from "@/components/ui";

import { imgLogoBroken, mergedPaymentMethods, usersAccount } from "@/static";

import { formatCurrency, generateRandomString } from "@/utils";

import { FaCheck } from "react-icons/fa6";

import { FormUserTypes, ResponsePayload } from "@/types";

const initValues = { userId: "", zoneId: "", whatsappNumber: "" };
const initState = { values: initValues, loading: false, error: false };

const DetailText = ({ desc, value }: { desc: string; value: string }) => {
  return (
    <div className="flex items-center w-full gap-1 text-xs text-light sm:text-sm text-start">
      <p className="min-w-36 text-light/50">{desc}</p>
      <p>{value}</p>
    </div>
  );
};

const Product = ({ product }: { product: Partial<ResponsePayload> }) => {
  const t = useTranslations("ProductPage");
  const { push } = useRouter();

  const [formState, setFormState] = React.useState<FormUserTypes>(initState);
  const [selectItem, setSelectItem] = React.useState<number | null>(null);
  const [selectPayment, setSelectPayment] = React.useState<string>("");
  const [selectProduct, setSelectProduct] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { userId, zoneId } = formState.values;

  const { setPayload } = usePersistedState();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [id]: value },
    }));
  };

  const handleSelectItem = (id: number) => {
    setSelectItem(id);
  };

  const handleSelectedPayment = (select: string) => {
    setSelectPayment(select);
  };

  const findItem = product.items?.find((item) => item.id === selectItem);
  const findPayment = mergedPaymentMethods.find((item) => item.name === selectPayment);
  const findAccountUser = usersAccount.find((user) => user.userId === +userId && user.zoneId === +zoneId);

  const handleRecapProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validation = !formState.values.zoneId || !formState.values.userId || !formState.values.whatsappNumber;
    setLoading(true);
    setTimeout(() => {
      if (validation) {
        setFormState((prev) => ({ ...prev, error: true }));
        setLoading(false);
        return;
      }
      if (!findAccountUser) {
        toast.error("Your account does not exist!");
        setLoading(false);
        return;
      }
      if (!selectPayment) {
        toast.error("Please select your payment!");
        setLoading(false);
        return;
      }
      if (!selectItem) {
        toast.error("Please select your diamond item!");
        setLoading(false);
        return;
      }
      setSelectProduct(true);
      setLoading(false);
    }, 3000);
  };

  const handleSubmitProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomStr = generateRandomString();
    setLoading(true);
    setTimeout(() => {
      setPayload({
        invoicesId: randomStr,
        userId: findAccountUser?.userId,
        zoneId: findAccountUser?.zoneId,
        username: findAccountUser?.username,
        whatsappNumber: formState.values.whatsappNumber,
        productName: product.name,
        productImage: +product.id! < 2 ? product.image : imgLogoBroken[+product.id! - 3],
        productPublisher: product.publisher,
        paymentMethod: selectPayment,
        items: findItem!,
        status: "pending",
        createdAt: new Date(),
      });
      setLoading(false);
      push(`/invoices/${randomStr}?status=pending`);
    }, 3000);
  };

  if (!product) {
    notFound();
  }

  return (
    <Container className="grid w-full grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-5">
      <Diamonds product={product} formState={formState} handleChangeInput={handleChangeInput} selectItem={selectItem || 0} handleSelectItem={handleSelectItem} />

      <Form handleSelectPayment={handleSelectedPayment} selectedPayment={selectPayment} handleChangeInput={handleChangeInput} formState={formState} />
      <>
        {findItem && (
          <div className="fixed bottom-0 left-0 flex items-center w-full h-24 bg-dark/50 backdrop-blur z-100">
            <Container className="flex items-center justify-between gap-16">
              <div className="flex items-center gap-4 max-w-48 sm:max-w-full">
                <Img src={findItem.iconUrl || "/image/diamond.webp"} alt={findItem.name} className="hidden size-12 sm:block" cover />
                <div className="space-y-1 sm:whitespace-nowrap">
                  <p className="text-xs font-semibold text-light sm:text-sm md:text-base">{findItem.name}</p>
                  <small className="text-light/50 text-xxs sm:text-xs md:text-base">
                    Price: <strong className="text-light">{formatCurrency(findItem.price)}</strong>
                  </small>
                </div>
              </div>
              <>
                {findPayment && (
                  <div className="items-center hidden w-full gap-4 lg:flex">
                    <Img src={findPayment?.iconUrl || "/image/diamond.webp"} alt="icon payment method" className="w-20 rounded-lg aspect-video" />
                    <div className="space-y-1 whitespace-nowrap">
                      <p className="font-semibold text-light">{findPayment?.name}</p>
                      <small className="text-light/50">
                        Tax: <strong className="text-light">Rp {formatCurrency(1500)},-</strong>
                      </small>
                    </div>
                  </div>
                )}
              </>
              <div className="relative whitespace-nowrap">
                <button onClick={handleRecapProduct} className={`relative rounded-lg btn-light`}>
                  {loading ? (
                    <div className="px-6">
                      <div className="loader size-4 after:size-4"></div>
                    </div>
                  ) : (
                    "Buy Now"
                  )}
                </button>
              </div>
            </Container>
          </div>
        )}
      </>
      <AnimatePresence>
        {selectProduct && (
          <Modal isVisible={selectProduct} onClose={() => setSelectProduct(false)}>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center justify-center rounded-full size-16 bg-green">
                <FaCheck className="bg-green/50" size={24} />
              </div>
              <h5 className="mt-4 font-semibold">{t("create-order")}</h5>
              <small>{t("create-order-msg")}</small>
              <div className="w-full p-2 mt-4 space-y-2 rounded bg-dark">
                <DetailText desc="Username" value={findAccountUser?.username || ""} />
                <DetailText desc="User ID" value={findAccountUser?.userId + ""} />
                <DetailText desc="Zone ID" value={findAccountUser?.zoneId + ""} />
                <DetailText desc="Item" value={findItem?.name || ""} />
                <DetailText desc="Product" value={product.name || ""} />
                <DetailText desc="Payment" value={selectPayment} />
              </div>
              <div className="flex justify-center w-full mt-2">
                <button onClick={handleSubmitProduct} className={`rounded-lg btn-light w-full ${loading && "animate-pulse"}`}>
                  {loading ? (
                    <div className="px-6">
                      <div className="loader size-4 after:size-4"></div>
                    </div>
                  ) : (
                    "Order"
                  )}
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Product;
