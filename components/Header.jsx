import Image from "next/image";
import { data } from "../constants";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="w-full h-30 gap-10 flex items-center px-10">
      <Image width={150} height={50} src={"/images/logo.svg"} alt="logo" />

      <div className="flex gap-5 items-center flex-1">
        {data.navLinks.map((nav, i) => {
          return <NavLink key={i} nav={nav} />;
        })}
      </div>
      <button className=" cursor-pointer text-lg font-semibold">Login</button>
      <button className="cursor-pointer outline font-semibold rounded-lg p-2 py-1 text-lg">
        Register
      </button>
    </div>
  );
};

export default Header;
