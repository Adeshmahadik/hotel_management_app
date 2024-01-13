import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = () => {

    const linklist = [{
        id:1,
        link: "/",
        name: "home",

    }, {
        id:2,
        link: "/rooms",
        name: "Rooms",
    }, 
    {
        id:3,
        link: "/contact",
        name: "Conatct",
    },
]
  return (
    <header className="py-10 px-5 conatiner mx-auto text-xl justify-between item-center flex flex-wrap md:flex-nowrap">
      <div className="flex item-center w-full md:2/3">
        <Link href="/" className="font-black text-[#f27405]">
          Hotelzz
        </Link>
        <ul className="flex item-center ml-5">
          <li className="flex item-center">
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-2">
            <MdDarkMode className="cursor-pointer" />
          </li>
        </ul>
      </div>
      <ul className="lfex item-center justify-between w-full md:w-1/3 mt-4">
<li className="hover:-trasnlate-y-2 duration-500 transition-all">
    <Link href="/">
        Home
    </Link>

</li>
      </ul>
    </header>
  );
};

export default Header;
