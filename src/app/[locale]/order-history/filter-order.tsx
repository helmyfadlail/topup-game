"use client";

import * as React from "react";

import { usePersistedState } from "@/hooks";

import SearchBar from "./search-bar";
import History from "./history";

const FilterOrder = () => {
  const { payload } = usePersistedState();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const handleChangeInput = (value: string) => {
    setSearchTerm(value);
  };

  const filterPayloadData = payload?.filter((data) => data.invoicesId === searchTerm);

  return (
    <>
      <SearchBar handleChangeInput={handleChangeInput} />
      <History payloadData={searchTerm === "" ? payload : filterPayloadData} />
    </>
  );
};

export default FilterOrder;
