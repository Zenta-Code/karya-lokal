import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  const useImageLogo = true;

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container flex flex-col sm:flex-row justify-between items-center">

        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blakish">
          {useImageLogo ? (
            <img src="/Logo KaryaLokal.svg" alt="Logo" width="100" height="100" />
          ) : (
            "Logo"
          )}
        </div>

        <div className="sm:flex justify-between items-center font-bold text-4xl text-center pb-4 sm:pb-0 text-blakish">
        KaryaLokal
      </div>

        <div className="w-full sm:w-[300px] md:w-[70%] lg:w-[50%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Cari item..."
          />
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
        </div>

        <div className="flex gap-4 items-center justify-end lg:space-x-4 text-gray-500 text-[30px]">
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-[#1E3A8A] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <BiUser />
        </div>

      </div>
    </div>
  );
};

export default Header;
