import { notFound } from "next/navigation";

import { Background, Img } from "@/components/ui";

import { HiBadgeCheck } from "react-icons/hi";
import { MdHeadsetMic } from "react-icons/md";

import { imgBanner, imgLogoBroken } from "@/static";

import { ResponsePayload } from "@/types";
import Product from "./product";

export default async function ProductDetailPage({ params }: { params: { id: number } }) {
  const response = await fetch("https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products");
  const products: ResponsePayload[] = await response.json();

  const product = products.find((product) => product.id === params.id + "");

  if (!product) {
    notFound();
  }

  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-full bg-light md:h-72">
        <div className="block w-full pt-8 pb-64 text-center md:hidden text-dark">
          {+product.id < 3 ? (
            <Img src={product.image} alt={product.name || "icon games"} className="mx-auto rounded-lg size-40 aspect-square" cover />
          ) : (
            <Img src={imgLogoBroken[+product.id - 3]} alt={product.name || "icon games"} className="mx-auto rounded-lg size-40 aspect-square" cover />
          )}
          <p className="px-4 py-1 mx-auto my-4 text-xs font-semibold w-max rounded-2xl bg-dark/10">maniac-game.com</p>
          <h3 className="mb-1 text-xl font-semibold sm:text-2xl md:text-3xl">{product?.name}</h3>
          <p className="mb-4 text-sm sm:text-base md:text-lg text-dark/50">{product?.publisher}</p>
          <div className="flex items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 px-4 py-1 text-xs rounded-2xl bg-dark/10">
              <MdHeadsetMic size={15} />
              Customer Service 24/7
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1 text-xs rounded-2xl bg-dark/10">
              <HiBadgeCheck size={15} />
              Official Distributor
            </span>
          </div>
        </div>
      </div>
      <Background
        src={imgBanner[+product.id - 1]}
        className="items-end w-full min-h-400 lg:min-h-500 bg-gradient-to-b from-transparent to-dark/80"
        parentClassName="hidden md:block max-w-[1216px] mx-8 rounded-2xl -mt-48 2xl:mx-auto"
      >
        <div className="flex items-center w-full gap-8 sm:p-8 bg-gradient-to-b from-light/30 to-light/10 backdrop-blur-md">
          {+product.id < 3 ? (
            <Img src={product.image} alt={product.name || "icon games"} className="rounded-lg size-28 aspect-square" cover />
          ) : (
            <Img src={imgLogoBroken[+product.id - 3]} alt={product.name || "icon games"} className="rounded-lg size-28 aspect-square" cover />
          )}
          <div className="space-y-2 z-1">
            <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">{product?.name}</h3>
            <p className="text-sm sm:text-base md:text-lg">{product?.publisher}</p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-4 py-1 text-xs rounded-2xl bg-light/20">
                <MdHeadsetMic size={15} />
                Customer Service 24/7
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1 text-xs rounded-2xl bg-light/20">
                <HiBadgeCheck size={15} />
                Official Distributor
              </span>
            </div>
          </div>
        </div>
      </Background>
      <Product product={product} />
    </section>
  );
}
