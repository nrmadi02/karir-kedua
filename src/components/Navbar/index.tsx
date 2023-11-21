"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path ? "text-[#FF6700]" : "text-gray-600";
  };

  return (
    <div className=" sticky top-0 border-b border-[#FF6700] bg-white z-[20]">
      <div className="w-full flex justify-between items-center container mx-auto lg:px-10">
        <Link href={"/"}>
          <div className="flex cursor-pointer items-center">
            <Image
              alt="_logo"
              width={80}
              height={30}
              src={"/icons/logo.png"}
              className=""
            />
            <h1 className="text-3xl font-bold text-gray-600">Karir Kedua</h1>
          </div>
        </Link>
        <div className="gap-5 flex items-center">
          <Link href={"/institut-purna-bakti"}>
            <div
              className={`text-lg text-center font-semibold px-2 py-1 hover:text-[#FF6700] transition-all cursor-pointer ${isActive(
                "/institut-purna-bakti"
              )}`}
            >
              <p>IPB</p>
              <p className="text-sm">Institut Purna Bakti</p>
            </div>
          </Link>
          <Link href={"/purna-loker"}>
            <p
              className={`text-lg font-semibold px-2 py-1 hover:text-[#FF6700]  transition-all cursor-pointer ${isActive(
                "/purna-loker"
              )}`}
            >
              Purna Loker
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
