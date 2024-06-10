"use client";
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  useBreakpointValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RivalsFlex from "../globalComponents/RivalsFlex";

const Rivals = () => {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const winSrc = useBreakpointValue({
    base: "./win-image-mobile.svg",
    md: "./win-image.svg",
  });

  const sliderRef = useRef<Slider | null>(null);

  const handleAfterChange = (currentSlideIndex: any) => {
    setActiveSlideIndex(currentSlideIndex);
  };

  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex
      className="rivals-container w-full justify-center flex-col items-center relative overflow-x-hidden"
      id="games-section"
    >
      <Image
        className="lazy h-auto w-auto absolute top--10% left-0 z--1"
        src="/Images/media/texture-left-home.webp"
        alt="left-texture"
      />

      <Flex
        className="join-the-rivalry-text-container w-full flex-col max-screen-desktop 
      text-left mt-3.75rem lg:mt-7.438rem relative"
      >
        <Heading
          ref={scrollRef}
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="0.4 easeIn"
          className="ppFormula-font font-light italic text-1.75rem lg:text-6xl tracking-wide px-1.5rem lg:px-5rem "
        >
          PLAYER VS{" "}
          <Text as="span" className="text-pink">
            PLAYER
          </Text>
        </Heading>
        <Text
          className="ppFormula-font mt-0.7rem lg:mt-0.5rem pl-6 lg:pl-4.875rem text-lg lg:text-4xl 
          uppercase font-light italic  tracking-wide lg:tracking-wider"
        >
          Rise up against your rival
        </Text>

        <Box className="scrollmenu mt-0.2rem lg:mt-0.5rem">
          <Slider
            ref={sliderRef}
            {...settings}
            className="gap-0.40rem lg:gap-0.79rem px-6 lg:px-20 mt-1.90rem lg:mt-2.8rem mb-20 md:mb-0 overflow-x-hidden"
          >
            <Flex
              className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem 
               w-9rem lg:w-[18.048rem] rounded-xl flex-col justify-between slide"
              as={motion.div}
              animate={controls}
              ref={scrollRef}
              backgroundImage={"./Images/media/game2.webp"}
            >
              <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
                <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                  PC
                </Button>
              </Flex>
              <Text
                className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem
               lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem whitespace-normal truncate"
              >
                CS:GO
              </Text>
            </Flex>

            <Flex
              className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
              as={motion.div}
              animate={controls}
              ref={scrollRef}
              backgroundImage={"./Images/media/game5.webp"}
            >
              <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
                <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                  PC
                </Button>
              </Flex>
              <Text
                className="helvetica-font leading-normal text-sm lg:text-1.35rem
               pb-0.61rem lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
              >
                Valorant
              </Text>
            </Flex>

            <Flex
              className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
              backgroundImage={"./Images/media/game1.webp"}
              as={motion.div}
              animate={controls}
              ref={scrollRef}
            >
              <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
                <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                  MOBILE
                </Button>
              </Flex>
              <Text
                className="helvetica-font leading-normal text-sm lg:text-1.35rem
               pb-0.61rem lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
              >
                BATTLEGROUND MOBILE INDIA
              </Text>
            </Flex>

            <Flex
              className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
              backgroundImage={"./Images/media/game4.webp"}
              as={motion.div}
              animate={controls}
              ref={scrollRef}
            >
              <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
                <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                  MOBILE
                </Button>
              </Flex>
              <Text
                className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem
               lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
              >
                Road to Valor
              </Text>
            </Flex>

            <Flex
              className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
              backgroundImage={"./Images/media/game3.webp"}
              as={motion.div}
              animate={controls}
              ref={scrollRef}
            >
              <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
                <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                  CONSOLE
                </Button>
              </Flex>
              <Text
                className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem
               lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
              >
                FIFA 2023
              </Text>
            </Flex>

            <Flex
              className="!flex flex-1 bg-cover bg-black text-white flex-col h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl justify-between slide"
              backgroundImage={"./Images/media/game6.webp"}
              as={motion.div}
              animate={controls}
              ref={scrollRef}
            >
              <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
                <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                  CONSOLE
                </Button>
              </Flex>
              <Text
                className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem 
              lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
              >
                Tekken 7
              </Text>
            </Flex>
          </Slider>
        </Box>
        <button
          onClick={() => goToSlide(activeSlideIndex - 1)}
          className={`absolute right-auto left-[9%] sm:left-[5%] bottom-[3%] md:bottom-auto md:left-auto md:right-[15%]
           lg:right-[13%] md:top-[13%] ${
             activeSlideIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
           }`}
        >
          <Image
            src="left-arrow.svg"
            alt="left-arrow"
            className="w-auto h-auto"
          />
        </button>
        <button
          onClick={() => goToSlide(activeSlideIndex + 1)}
          className={`absolute right-auto left-28% sm:left-16% 
          bottom-[3%] md:bottom-auto md:top-[13%] md:right-[7%] md:left-auto ${
            (activeSlideIndex === 2 && window.innerWidth >= 768) ||
            (activeSlideIndex === 4 && window.innerWidth < 768)
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
        >
          <Image
            src="right-arrow.svg"
            alt="right-arrow"
            className="h-auto w-auto"
          />
        </button>
      </Flex>
      <Flex
        className="w-full max-screen-desktop  justify-center px-6 lg:px-20 pt-10
       pb-14 lg:pt-4.375rem lg:pb-6.875rem join-the-rivalry-container"
      >
        <Flex className="overflow-hidden z-5 relative bg-black rounded-1.25rem flex-col lg:flex-row justify-between">
          <Flex className="flex-col justify-center w-full lg:w-1/2 xl:w-45% px-1.25rem lg:pr-0 lg:pl-4.375rem py-2.5rem gap-1.27rem lg:gap-1.56rem">
            <Heading
              className="ppFormula-font text-1.75rem lg:text-3.75rem italic tracking-wide lg:tracking-widest font-normal text-left leading-100%
              uppercase text-white w-full"
            >
              JOIN THE{" "}
              <Text as="span" className="text-pink">
                RIVALRY
              </Text>
            </Heading>
            <Text className="helvetica-light-font leading-140% text-sm lg:text-xl text-white w-101% lg:w-90% opacity-60">
              Get ready to experience the ultimate college esports clash at
              College Rivals 2023! Join us for intense gaming battles,
              electrifying live performances, and unforgettable moments of
              triumph.
            </Text>
          </Flex>
          <Image
            loading="lazy"
            className="text-right w-full h-auto lg:w-1/2 cover"
            src="./all-games.webp"
            alt=""
          />
        </Flex>
      </Flex>

      <Flex
        className="rivals-roundup-container flex-col justify-center items-center w-full relative max-screen-desktop  mx-auto
        px-6 lg:px-20 z-5"
      >
        <Heading
          as={motion.div}
          ref={scrollRef}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition="0.2s ease-in 0.01s"
          viewport={{ once: true }}
          className="ppFormula-font text-1.75rem lg:text-3.75rem italic tracking-wide font-light z-2 relative"
        >
          RIVALS{" "}
          <Text as="span" className="text-pink">
            ROUNDUP
          </Text>
        </Heading>

        <Text
          className="ppFormula-font mb-1.875rem lg:mb-4.5rem mt-0.93rem lg:mt-1.57rem text-lg lg:text-1.813rem italic
          leading-120% w-70% text-center tracking-wide lg:tracking-widest"
        >
          YOUR SOURCE FOR COLLEGE RIVALS' LATEST HAPPENINGS
        </Text>

        <RivalsFlex />
      </Flex>

      <Flex className="w-full px-1.5rem lg:px-5rem pt-3.75rem lg:pt-11.68rem max-screen-desktop mx-auto">
        <Flex
          className="rivals-2023-container w-full justify-between px-2rem py-2.5rem lg:px-4.375rem
           lg:py-5.313rem rounded-5px lg:rounded-1.25rem flex-col lg:flex-row relative z-2 bg-cover bg-center"
          backgroundImage="url('./2023-bg.svg')"
        >
          <Flex className="rivals-text-container flex-col w-full lg:w-1/2 items-center lg:items-start ">
            <Heading
              as={motion.div}
              ref={scrollRef}
              variants={{
                hidden: { opacity: 0, y: 55 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition="0.3s linear"
              viewport={{ once: true }}
              className="ppFormula-font font-light text-1.75rem lg:text-3.75rem italic realtive text-white z-2 tracking-wider"
            >
              COLLEGE RIVALS{" "}
              <Text as="span" className="text-pink">
                2023
              </Text>
            </Heading>

            <Text
              className="ppFormula-font font-light text-white text-base lg:text-1.813rem
             pt-0.94rem pb-1.25rem lg:pt-1.75rem lg:pb-1.56rem italic tracking-wide lg:tracking-widest
              text-center lg:text-left leading-100% lg:leading-120%"
            >
              WE'RE LOOKING FOR THE NEXT GENERATION OF GAMERS, REBELS AND
              MASTERMINDS.
            </Text>

            <Text
              className="helvetica-light-font opacity-60% text-sm text-center
             lg:text-left lg:text-xl text-white w-full lg:w-90% pb-2.5rem leading-[130%]"
            >
              Be part of India's biggest college esports extravaganza and ignite
              the gamer within you. Join the ultimate showdown, that puts your
              skills to the test - and your campus pride on stake. Don't miss
              your chance to shine.
            </Text>

            <Box
              transform="skew(-12deg)"
              transition="0.4s all ease-out"
              filter="drop-shadow(4px 4px 0px #d1ff45)"
              borderRadius={"0.375rem"}
              className="helvetica-font button-style text-white flex justify-center items-center text-sm lg:text-base 
              mt-4 mb-4 py-4 px-16 lg:px-20 bg-pink"
            >
              <Link
                href="/register"
                className="helvetica-font text-white italic h-full w-full flex justify-center
                 items-center no-underline text-sm hover:no-underline"
              >
                SIGN UP
              </Link>
            </Box>
          </Flex>
          <Flex className="rivals-image-container w-full lg:w-40% pt-3.125rem lg:pt-0 items-center justify-center">
            <Image
              className="h-auto w-auto max-h-400px lg:max-h-none cover"
              loading="lazy"
              src="collegerivals-2023.webp"
              alt="collegerivals"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="w-full be-a-rival-container px-1.5rem lg:px-5rem pt-3.75rem
         lg:pt-8.75rem pb-3.75rem lg:pb-10.938rem max-screen-desktop mx-auto"
        backgroundImage="url('./be-a-rival-bottom-bg.webp')"
        backgroundSize="cover"
      >
        <Flex
          className="be-a-rival w-full h-100vh lg:h-[120vh] rounded-5px
          lg:rounded-1.25rem pb-1.875rem lg:pb-4.125rem px-0.63rem lg:px-5rem items-end bg-center bg-cover"
          backgroundImage={{
            base: "url('./be-a-rival-bg-mobile.webp')",
            md: "url('./be-a-rival-bg.webp')",
          }}
        >
          <Flex className="flex-col w-full rival-parent-container">
            <Flex
              className="heading-and-cta-container w-full flex-col lg:flex-row 
            justify-between items-start lg:items-center lg:pb-2rem"
            >
              <Heading
                // as={motion.div}
                // ref={scrollRef}
                // variants={{
                //   hidden: { opacity: 0, y: 55 },
                //   visible: { opacity: 1, y: 0 },
                // }}
                // initial="hidden"
                // whileInView="visible"
                // transition="0.2s ease-in 0.01s"
                // viewport={{ once: true }}
                className="ppFormula-font text-1.75rem lg:text-3.75rem italic tracking-wide font-normal text-white"
              >
                BE A RIVAL,{" "}
                <Text as="span" className="text-pink">
                  IT’S WORTH IT.
                </Text>
              </Heading>

              <Box className="my-1.875rem lg:py-0 h-3.325rem lg:h-2.675rem w-15rem lg:w-12rem">
                <Link
                  className="helvetica-font rounded-xl italic h-full w-full flex justify-center
                   items-center text-sm no-underline button-style bg-neon button-style hover:no-underline"
                  transform="skew(-12deg)"
                  transition="0.4s all ease-out"
                  filter="drop-shadow(5px 5px 0px #7B9F00)"
                  href="/register"
                >
                  KNOW MORE
                </Link>
              </Box>
            </Flex>

            <Flex
              className="features-container-rival py-1.75rem px-1.25rem
             lg:px-2.5rem rounded-0.625rem lg:rounded-1.25rem justify-start lg:justify-between flex-col lg:flex-row"
            >
              <Flex className="flex-col">
                <Flex className="items-center gap-0.43rem lg:gap-1.146rem">
                  <Image
                    src="./prizes-1.png"
                    alt="prize-1"
                    className="h-auto w-auto"
                  />
                  <Flex className="flex-col">
                    <Text
                      className="helvetica-light-font tracking-wide lg:tracking-wider
                       leading-tight text-xs lg:text-sm lg:text-0.937rem text-black opacity-50"
                    >
                      WIN PRIZES WORTH
                    </Text>
                    <Text className="ppFormula-font italic pt-2 text-black text-lg lg:text-1.813rem">
                      ₹50 LAKHS
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex className="flex-col pt-1.27rem lg:pt-0">
                <Flex className="items-center gap-0.43rem lg:gap-1.146rem">
                  <Image
                    src="./prizes-2.png"
                    alt="prize-2"
                    className="h-auto w-auto"
                  />
                  <Flex className="flex-col">
                    <Text
                      className="helvetica-light-font tracking-wide lg:tracking-wider 
                      leading-tight text-xs lg:text-sm lg:text-0.937rem text-black opacity-50"
                    >
                      LIFETIME
                    </Text>
                    <Text className="ppFormula-font italic pt-2 text-black text-lg lg:text-1.813rem">
                      BRAGGING RIGHTS
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex className="flex-col pt-1.27rem lg:pt-0">
                <Flex className="items-center gap-0.43rem lg:gap-1.146rem">
                  <Image
                    src="./prizes-3.png"
                    alt="prize-3"
                    className="h-auto w-auto"
                  />
                  <Flex className="flex-col">
                    <Text
                      className="helvetica-light-font tracking-wide lg:tracking-wider
                       leading-tight lg:text-0.937rem text-black opacity-50 text-xs lg:text-sm"
                    >
                      SECURE YOUR PLACE
                    </Text>
                    <Text className="ppFormula-font italic pt-2 text-black text-lg lg:text-1.813rem">
                      GAMING ROYALTY
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Image
        loading="lazy"
        className="absolute left-0 top-2% w-20% h-auto z-0"
        src="./rivals-design.webp"
        alt="rivals-bg-design"
      />
      <Image
        className="absolute top-63.5% lg:top-59.5% left-0 w-45% lg:w-auto"
        src="./left-yellow-bar.svg"
        alt="left-yellow-bar"
        zIndex="-1"
      />
      {/* </Box> */}
      <Image
        className="absolute top-49.25% lg:top-50.5% right-0 w-45% lg:w-auto"
        src="./right-red-bar.svg"
        alt="right-red-bar"
        zIndex="1"
      />
    </Flex>
  );
};

export default Rivals;
