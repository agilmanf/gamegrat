import Image from "next/image";
import Logo from "../public/logo.png";
import { AiFillGift } from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/link";
import styles from "../styles/Utils.module.css";
import React from "react";

const NavbarWhite = () => {
  return (
    <nav
      className={
        styles.navbarwhite +
        " flex h-14 w-full fixed z-10 justify-between px-16 bg-slate-200/90 shadow"
      }
    >
      <div className="w-52 logo relative">
        <Image src={Logo} alt="logo" layout="fill" objectFit="contain"></Image>
      </div>
      <ul className="menu text-slate-800 font-roboto flex items-center gap-7">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/browse">Browse</Link>
        </li>
        <li>
          <Link href="/gift">
            <div>
              <IconContext.Provider
                value={{
                  color: "#FE9656",
                  size: "1.5em",
                  className: styles.navbar,
                }}
              >
                <AiFillGift />
              </IconContext.Provider>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarWhite;
