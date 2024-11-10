"use client";

import * as React from "react";

import { CardDiamond, CardUserID, Img } from "@/components/ui";

import { FormUserTypes, ResponsePayload } from "@/types";

interface DiamondsProps {
  product: Partial<ResponsePayload>;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectItem: number;
  handleSelectItem: (selected: number) => void;
  formState: FormUserTypes;
}

const Diamonds = ({ product, handleChangeInput, selectItem, handleSelectItem, formState }: DiamondsProps) => {
  return (
    <>
      <div className="block p-4 -mt-64 rounded-lg md:hidden bg-background">
        <CardUserID handleChangeInput={handleChangeInput} formState={formState} />
      </div>
      <div className="col-span-1 p-4 rounded-lg sm:p-6 md:p-8 lg:col-span-3 bg-background h-max">
        <h4 className="hidden mb-8 text-2xl font-semibold md:block">Choose Products</h4>
        <menu className="grid grid-cols-2 mb-8 overflow-hidden rounded-lg lg:gap-4 xl:grid-cols-4 bg-dark md:bg-transparent md:rounded-none">
          <div className="flex items-center justify-center gap-2 p-3 duration-300 border-b-2 cursor-pointer lg:p-4 md:justify-start md:rounded-lg md:border border-light group hover:bg-light">
            <Img src={product?.items?.[0].iconUrl || "/images/diamond.webp"} alt="icon diamond" className="size-6" cover />
            <span className="text-sm duration-300 group-hover:text-dark lg:text-base">Diamonds</span>
          </div>
        </menu>
        <menu className="grid grid-cols-2 gap-2 md:pt-8 md:border-t sm:gap-4 md:grid-cols-1 lg:grid-cols-3 md:border-light/50">
          {product?.items?.map((item) => {
            const discountAmount = item.price - item.priceDiscount;
            const discount = (discountAmount / item.price) % 100;

            return (
              <CardDiamond
                key={item.id}
                name={item.name}
                discount={discount}
                selectItem={selectItem || 0}
                iconUrl={item.iconUrl}
                id={item.id}
                price={item.price}
                priceDiscount={item.priceDiscount}
                handleSelectItem={handleSelectItem}
              />
            );
          })}
        </menu>
      </div>
    </>
  );
};

export default Diamonds;
