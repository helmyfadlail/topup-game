"use client";

import * as React from "react";

import { ResponsePayload, TabValue } from "@/types";
import { CardGames, Tabs } from "@/components/ui";

const SELECT_ALL = "ALL";

const tabs: TabValue[] = [
  { display: "Recommendation", value: SELECT_ALL },
  { display: "Pc Game", value: "PC" },
  { display: "Mobile Game", value: "MOBILE" },
];
const Products = ({ data }: { data: ResponsePayload[] }) => {
  const [selected, setSelected] = React.useState<string>(SELECT_ALL);

  const filteredData = data.filter((product) => {
    if (selected === SELECT_ALL) {
      return product;
    }
    return product.category === selected;
  });

  const handleSelected = (value: string) => setSelected(value);
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <Tabs data={tabs} handleSelect={handleSelected} selected={selected} />
      <div className="grid grid-cols-3 gap-2 text-light sm:gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {filteredData.map((product) => (
          <CardGames key={product.id} id={product.id} name={product.name} image={product.image} publisher={product.publisher} />
        ))}
      </div>
    </div>
  );
};

export default Products;
