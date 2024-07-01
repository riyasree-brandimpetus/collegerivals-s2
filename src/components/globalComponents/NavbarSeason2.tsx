'use client';
import { UserContext } from '@/utils/context/user.context';
import Image from 'next/image';
import navLogo from '../../../public/nav-logo.svg';
import menuBurger from '../../../public/menu-burger.svg';
import closeIcon from '../../../public/cross-navbar.svg';
import { useContext, useState } from 'react';
import Link from 'next/link';
const NavbarSeason2 = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { state } = useContext(UserContext);
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="w-full lg:px-2.938rem lg:pt-2.125rem fixed z-50 flex justify-center items-center">
      <div className="w-full flex items-center justify-between px-1.25rem py-3 lg:bg-#1A1A1A66 lg:backdrop-blur-md rounded-lg max-w-[1440px]">
        <Link href="/">
          <div>
            <Image color="white" src={navLogo} alt="navlogo" />
          </div>
        </Link>
        <div className="w-[60%] items-center justify-between lg:flex hidden ">
          <div className="flex gap-2.125rem">
            <Link
              className="text-white opacity-65% text-xs helvetica-medium-font hover:text-#DBFD67"
              href="/esports"
            >
              ESPORTS
            </Link>
            {/* <Link
              className="text-white opacity-65% text-xs helvetica-medium-font hover:text-#DBFD67"
              href="/"
            >
              TRUCK LOCATOR
            </Link>
            <Link
              className="text-white opacity-65% text-xs helvetica-medium-font hover:text-#DBFD67"
              href="/"
            >
              PRESS
            </Link> */}
            <Link
              className="text-white opacity-65% text-xs helvetica-medium-font hover:text-#DBFD67"
              href="/"
            >
              ABOUT US
            </Link>
            <Link  target="_blank"
              className="text-white opacity-65% text-xs helvetica-medium-font hover:text-#DBFD67"
              href="https://store.collegerivals.com/"
            >
              STORE
            </Link>
          </div>
          {!state.isLoggedIn ? (
            <Link
              href="/sign-up"
              className="bg-#E7327C  px-1.75rem py-1.125rem rounded-md text-white text-xs helvetica-medium-font"
            >
              REGISTER NOW
            </Link>
          ) : (
            <div className="  h-fit w-fit gradient-border">
              <Link
                href="/my-profile"
                className="inner bg-[#0F1011] bg-opacity-80 md:px-12 md:py-1.125rem px-12 py-2.5 helvetica-medium-font text-xs  text-#E7327C "
              >
                <div className="flex gap-1">
                  <Image src="/navbar-dot.svg" alt="" width={6} height={6} />
                  MY PROFILE
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="lg:hidden flex mobilenav ">
          <div onClick={toggleNavbar}>
            <Image src={menuBurger} alt="menu" />
          </div>

          {isNavbarVisible && (
            <div className="w-full top-0 left-0 absolute pb-10 bg-#141619 z-50">
              <div className="flex flex-col w-full items-center h-full">
                <div
                  onClick={toggleNavbar}
                  className="w-full flex justify-end mt-1.813rem mr-8 mb-6"
                >
                  {' '}
                  <Image src={closeIcon} alt="closeIcon" />
                </div>
                <div className="flex flex-col gap-10 text-center">
                  <Link
                    className="text-white opacity-65% text-xs helvetica-medium-font"
                    href="/esports"
                  >
                    ESPORTS
                  </Link>
                  {/* <Link
                    className="text-white opacity-65% text-xs helvetica-medium-font"
                    href="/#truck-locator"
                  >
                    TRUCK LOCATOR
                  </Link>
                  <Link
                    className="text-white opacity-65% text-xs helvetica-medium-font"
                    href="/"
                  >
                    PRESS
                  </Link> */}
                  <Link
                    className="text-white opacity-65% text-xs helvetica-medium-font"
                    href="/"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    className="text-white opacity-65% text-xs helvetica-medium-font"
                    href="/"
                  >
                    STORE
                  </Link>
                  {!state.isLoggedIn ? (
                    <Link
                      href="/sign-up"
                      className="bg-#E7327C  px-1.75rem py-1.125rem rounded-md text-white text-xs helvetica-medium-font"
                    >
                      REGISTER NOW
                    </Link>
                  ) : (
                    <div className="  h-fit w-fit gradient-border">
                      <Link
                        href="/my-profile"
                        className="inner bg-[#0F1011] bg-opacity-80 md:px-12 md:py-1.125rem px-12 py-2.5 helvetica-medium-font text-xs  text-#E7327C "
                      >
                        <div className="flex gap-1">
                          <Image
                            src="/navbar-dot.svg"
                            alt=""
                            width={6}
                            height={6}
                          />
                          MY PROFILE
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavbarSeason2;
