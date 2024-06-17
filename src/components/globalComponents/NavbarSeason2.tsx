"use client"

import Image from "next/image";
import navLogo from "../../../public/nav-logo.svg"
import menuBurger from "../../../public/menu-burger.svg"
import closeIcon from "../../../public/cross-navbar.svg"
import { useState } from "react";
import Link from "next/link";
const NavbarSeason2 =() =>{

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };


    return(
        <div className="w-full lg:px-2.938rem lg:pt-2.125rem fixed z-50 flex justify-center items-center">
        <div className="w-full flex items-center justify-between px-1.25rem py-0.938rem lg:bg-#1A1A1A66 lg:backdrop-blur-md rounded-lg max-w-[1440px]">
          <div><Image color="white" src={navLogo} alt="navlogo"/></div>
          <div className="w-63.5% items-center justify-between lg:flex hidden ">
            <div className="flex gap-2.125rem">
                <Link className="text-white opacity-65% text-xs helvetica-medium-font" href="">ESPORTS</Link>
                <Link className="text-white opacity-65% text-xs helvetica-medium-font" href="">TRUCK LOCATOR</Link>
                <Link className="text-white opacity-65% text-xs helvetica-medium-font" href="">PRESS</Link>
                <Link className="text-white opacity-65% text-xs helvetica-medium-font" href="">ABOUT US</Link>
                <Link className="text-white opacity-65% text-xs helvetica-medium-font" href="">STORE</Link>
            </div>
            <button className="bg-#E7327C px-1.75rem py-1.125rem rounded-md text-white text-xs helvetica-medium-font">REGISTER NOW</button>
          </div>
          <div className="lg:hidden flex mobilenav ">
        <div onClick={toggleNavbar}  >
          <Image  src={menuBurger} alt="menu"/>
        </div>

{ isNavbarVisible && (
        <div className="w-full top-0 left-0 absolute h-[50vh] bg-#141619 z-50">
          <div className="flex flex-col w-full items-center h-full">
          <div onClick={toggleNavbar} className="w-full flex justify-end mt-1.813rem mr-8 mb-6"> <Image src={closeIcon} alt="closeIcon"/></div>
          <div className="flex flex-col gap-10 text-center">
          <Link className="text-white opacity-65% text-xs helvetica-medium-font"  href="">ESPORTS</Link>
          <Link className="text-white opacity-65% text-xs helvetica-medium-font"  href="">TRUCK LOCATOR</Link>
          <Link className="text-white opacity-65% text-xs helvetica-medium-font"  href="">PRESS</Link>
          <Link className="text-white opacity-65% text-xs helvetica-medium-font"  href="">ABOUT US</Link>
          <Link className="text-white opacity-65% text-xs helvetica-medium-font"  href="">STORE</Link>
          <button className="bg-#E7327C px-1.75rem py-1.125rem rounded-md text-white text-xs helvetica-medium-font">REGISTER NOW</button>
          </div>
          </div>
        </div>
)}

          </div>
        </div>
        </div>
    )
}
export default NavbarSeason2;