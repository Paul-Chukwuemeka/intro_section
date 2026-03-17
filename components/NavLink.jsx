"use client";
import Image from "next/image";
import React, { useState } from "react";

const NavLink = ({ nav }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="font-medium relative  flex text-lg gap-5 items-center text-[#696969] cursor-pointer  w-fit"
      onClick={() => setActive(!active)}
    >
      <p className="hover:text-[#141414]">{nav.name}</p>
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
        <div className="p-5 border rounded-lg border-gray-200 flex flex-col gap-1 w-fit bg-white absolute left-0 top-full">
          {nav.subLinks.map((n, i) => {
            return (
              <div key={i} className="w-fit items-center gap-2 flex hover:text-[#141414]">
                {n.icon && (
                  <Image src={n.icon} width={20} height={20} alt={n.name} />
                )}
                <p className="text-nowrap">{n.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavLink;
