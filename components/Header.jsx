import Image from "next/image";
import { data } from "../constants";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="w-full h-15 gap-10 flex items-center px-5">
      <Image width={100} height={50} src={"/images/logo.svg"} alt="logo" />

      <div className="flex gap-5 items-center flex-1">
        {data.navLinks.map((nav, i) => {
          return <NavLink key={i} nav={nav} />;
        })}
      </div>
      <button className=" cursor-pointer text-md">Login</button>
      <button className="cursor-pointer outline rounded-lg p-2 py-1 text-md">
        Register
      </button>
    </div>
  );
};

export default Header;
