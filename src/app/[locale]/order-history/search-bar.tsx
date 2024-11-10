import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleChangeInput }: { handleChangeInput: (value: string) => void }) => {
  return (
    <div className="p-4 pb-8 space-y-4 rounded-t-lg lg:p-6 xl:p-8 md:rounded-lg bg-background md:pb-8">
      <div className="relative flex overflow-hidden rounded-lg">
        <i className="absolute left-2 sm:left-2.5 top-2 sm:top-3">
          <CiSearch className="size-5 lg:size-6" />
        </i>
        <input
          type="text"
          inputMode="numeric"
          onChange={(e) => handleChangeInput(e.target.value)}
          placeholder="Input your invoice number"
          className="w-full py-2.5 lg:py-4 pr-4 text-xs outline-none lg:text-sm ps-8 sm:ps-10 rounded-s-lg bg-light/10"
        />
        <button className="hidden btn-light rounded-e-xl sm:block">Search</button>
      </div>
      <p className="text-xs text-light/50">
        Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan? harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu dapat menghubungi kami via{" "}
        <a href="/" className="duration-300 text-light hover:text-light/80 hover:underline">
          Whatsapp
        </a>
      </p>
    </div>
  );
};

export default SearchBar;
