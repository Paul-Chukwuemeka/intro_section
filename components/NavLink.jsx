"use client";
import Image from "next/image";
import React, { useState } from "react";

const NavLink = ({ nav }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="font-medium relative hover:text-[#141414] flex gap-2 items-center text-[#696969] cursor-pointer  w-fit"
      onClick={() => setActive(!active)}
    >
      {nav.name}
      {nav.subLinks && (
        <Image
          width={10}
          height={10}
          src={
            active ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"
          }
          alt="icon arrow down"
        />
      )}

      {active && nav.subLinks && (
        <div className="p-5 border absolute left-0 top-full"></div>
      )}
    </div>
  );
};

export default NavLink;
