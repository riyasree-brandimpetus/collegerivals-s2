'use client';
import { UserContext } from '@/utils/context/user.context';
import Image from 'next/image';
import navLogo from '../../../public/nav-logo.svg';
import menuBurger from '../../../public/menu-burger.svg';
import closeIcon from '../../../public/cross-navbar.svg';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavbarSeason2 = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [dropdown , setdropdown] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();

  const toogledropdown =()=>{
    setdropdown(!dropdown)
  }

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };


  /**
   * Function to handle logout
   */
  const handleLogout = () => {
    // Remove userId from localStorage
    localStorage.removeItem('userId');
    // Reset the user state
    dispatch({
      type: 'DELETE'
    });
    // Redirect to login page
    router.push('/login');
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
              href="/"
            >
             HOME
            </Link>
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
              href="/about"
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
            <div>
            <div onClick={toogledropdown} className=" relative gradient-border">
              <div
                className="inner bg-[#0F1011] hover:bg-[#0f1000] bg-opacity-80 md:pl-2 md:pr-3 py-2 helvetica-medium-font text-xs  text-#E7327C cursor-pointer"
              >
                <div className="flex gap-5">
                  <Image    src={state.profilePhoto || '/profile-img.svg'} className='rounded-full' alt="" width={32} height={32} />
                  <Image src="/dropdown-arrow-pink.svg" alt="" width={15} height={7} />
                </div>
              </div>
            </div>{
              dropdown && (
                <div className='absolute flex flex-col py-0.938rem bg-[#1b1d1f] rounded-lg right-0'>
                <Link className='text-[#A9AAAA] hover:opacity-80 text-xs uppercase helvetica-medium-font px-4 pb-3 border-b border-[#383C40] pt-2 flex gap-2'  href="/my-profile"> <Image src="/dashboard-icon.svg" alt="" width={11} height={14} /> Dashboard</Link>
                {/* <Link  className='text-[#A9AAAA] hover:opacity-80 text-xs uppercase helvetica-medium-font px-4 pb-3 border-b border-[#383C40] pt-2 flex gap-2' href="/"> <Image src="/edit-icon.svg" alt="" width={11} height={12} />Edit profile</Link> */}
                <div onClick={handleLogout} className='text-[#A9AAAA] hover:opacity-80 text-xs uppercase helvetica-medium-font px-4 pr-6 pt-2 flex gap-2 cursor-pointer'> <Image src="/logout-icon.svg" alt="" width={13} height={14} />LOG OUT</div>
              </div>
              )
            }
           
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
              className="text-white opacity-65% text-xs helvetica-medium-font hover:text-#DBFD67"
              href="/"
            >
             HOME
            </Link>
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
                    href="/about"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    className="text-white opacity-65% text-xs helvetica-medium-font"
                    href="https://store.collegerivals.com/"
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
                    <div className=' flex flex-col    py-0.938rem bg-[#1b1d1f] rounded-lg right-0'>
                    <Link className='text-[#A9AAAA] text-xs uppercase helvetica-medium-font px-4 pb-3 border-b border-[#383C40]  flex gap-2'  href="/my-profile"> <Image src="/dashboard-icon.svg" alt="" width={11} height={14} /> Dashboard</Link>
                    {/* <Link  className='text-[#A9AAAA] text-xs uppercase helvetica-medium-font px-4 pb-3 border-b border-[#383C40] pt-2 flex gap-2' href="/"> <Image src="/edit-icon.svg" alt="" width={11} height={12} />edit profile</Link> */}
                    <div onClick={handleLogout} className='text-[#A9AAAA] text-xs uppercase helvetica-medium-font px-4 pr-6 pt-2 flex gap-2 cursor-pointer'> <Image src="/logout-icon.svg" alt="" width={13} height={14} />LOG OUT</div>
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
