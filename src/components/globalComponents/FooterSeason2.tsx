import Image from "next/image";
import Link from "next/link";
import WatiWidget from "./Wati";

const FooterSeason2 = () => {
  return (
    <div className="bg-black">
      <WatiWidget />
      <div className="footer-container rounded-t-[2.5rem] flex-col w-full overflow-x-hidden bg-#171819">
        <div
          className="footer-top-container  flex px-1.5rem lg:px-5rem pt-2rem lg:pt-10 pb-4 lg:pb-2.5rem w-full justify-center lg:justify-between
        items-center flex-col lg:flex-row max-screen-desktop mx-auto"
        >
          <h2 className="ppFormula-font text-white flex gap-2 font-light text-1.75rem uppercase lg:text-7xl italic">
            Join the
            <span className="outline-text">rivalry !!</span>
          </h2>

          <Link
            href="/sign-up"
            className="custom-button-pink px-20 py-5 text-lg text-white rounded-lg bg-cover max-lg:hidden helvetica-font"
          >
            REGISTER NOW
          </Link>
        </div>
        <div className="footer-bottom-container pt-3.125rem lg:pt-3.813rem pb-4 lg:pb-1.375rem w-full bg-black flex-col">
          <div className="logo-container flex justify-center items-center gap-10 lg:px-1.5rem md:pb-3.125rem pb-8 max-screen-desktop lg:mx-auto ">
            <Link href="https://ampverse.com/" target="_blank">
              <Image
                src="/ampverse-logo.svg"
                alt="footer-logo"
                width={80}
                height={58}
              />
            </Link>
            <Link href="https://www.dmifinance.in/" target="_blank">
              <Image
                src="/sponsor-six-new.svg"
                alt="footer-logo"
                width={53}
                height={79}
              />
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-center helvetica-extralight-font font-light text-base md:text-lg text-[#787777] w-80% lg:w-[65%]">
              College Rivals is the bridge between a College Student's passion
              for Gaming and their aspiration to be a pro player. Positioned as
              India's Largest Esports Talent Hunt, it combines music, pop
              culture, and comedy putting together a unique cross between gaming
              and Entertainment, in an unprecedented format. An innovative
              esports initiative developed in collaboration between Ampverse and
              DMI. It aims to nurture gaming talent at the collegiate level
              across India through competitive tournaments, mentorship, and
              community engagement. It goes beyond esports tournaments by
              incorporating elements of college life, pop culture trends, and
              influencer engagements
            </p>
          </div>

          <div className=" pt-8 flex w-full justify-center items-center px-1.5rem lg:px-5rem max-screen-desktop mx-auto">
            <div className="justify-center max-lg:flex-wrap items-center flex gap-4 lg:gap-8 flex-row">
              <Link
                href="/esports"
                className="helvetica-font  text-white hover:text-#DBFD67 text-12px pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
                ESPORTS
              </Link>
              <Link
                href="/about"
                className="helvetica-font  text-white hover:text-#DBFD67 text-12px  pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
                ABOUT US
              </Link>
              <Link
                target="_blank"
                href="https://store.collegerivals.com/"
                className="helvetica-font  text-white hover:text-#DBFD67 text-12px  pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
                STORE
              </Link>
              {/* <Link
                href="/"
                className="helvetica-font  text-white hover:text-pink text-12px  pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
             NEWS & UPDATES
              </Link>
              <Link
                href="/"
                className="helvetica-font  text-white hover:text-pink text-12px pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
              MEDIA
              </Link> */}
            </div>
          </div>
          <div
            className="social-links-container items-center flex justify-between w-full max-xl:gap-7 lg:pt-12 lg:pb-14
          px-1.5rem lg:px-5rem flex-col-reverse xl:flex-row max-screen-desktop mx-auto"
          >
            <div className="social-icons-container flex mb-2.5rem lg:mb-0">
              <Link
                href="https://twitter.com/collegerivalsin"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:opacity-70%"
              >
                <Image
                  src="../twitter-new.svg"
                  alt="twitter"
                  height={50}
                  width={50}
                />
              </Link>

              <Link
                href="https://bit.ly/crdiscordweb"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="/discord.svg"
                  alt="linkedin"
                  height={50}
                  width={50}
                />
              </Link>

              <Link
                href="https://www.instagram.com/collegerivalsin/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="/istagram.svg"
                  alt="YouTube"
                  height={50}
                  width={50}
                />
              </Link>

              <Link
                href="https://www.facebook.com/collegerivalsin"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="../facebook-new.svg"
                  alt="facebook"
                  height={50}
                  width={50}
                />
              </Link>
            </div>

            <div className="flex gap-9">
              <Image
                src="/18-25.png"
                alt="footer-logo"
                height={108}
                width={108}
              />
              <Image
                src="/peace.png"
                alt="footer-logo"
                height={108}
                width={108}
              />
              <Image
                src="/freetoregister.png"
                alt="footer-logo"
                height={108}
                width={108}
              />
            </div>

            <div className="mail-link-container pt-3.25rem lg:pt-0 pb-1.875rem lg:pb-0">
              <Link
                href="mailto:hello@collegerivals.com"
                className="helvetica-light-font text-white text-2xl border-b-white border-b"
              >
                hello@collegerivals.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSeason2;
