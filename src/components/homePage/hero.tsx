"use client";
import { Image, Flex, Text, Heading, Box, Link } from "@chakra-ui/react";
import { motion, stagger } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import VideoOverlay from "./VideoOverlay";
import VerticalSlider from "./VerticalSlider";
import VideoSliderHero from "./VideoSliderHero";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const scrollRef = useRef(null);

  const gameSliderImages = [
    "./game-1.svg",
    "./game-2.svg",
    "./game-3.svg",
    "./game-4.svg",
    "./game-5.svg",
    "./game-6.svg",
  ];

  const citySliderImages = [
    "./city-1.svg",
    "./city-2.svg",
    "./city-3.svg",
    "./city-4.svg",
    "./city-5.svg",
  ];

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  //   console.log("Entered the box");
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  //   console.log("Went out of the box");
  // };

  // const handleVideoClick = () => {
  //   setOverlayOpen(true);
  // };

  // const handleCloseOverlay = () => {
  //   setOverlayOpen(false);
  // };

  const cursorStyle = {
    cursor: isHovering ? 'url("/play-image.svg"), auto' : "auto",
  };

  return (
    <Box className="hero-section-container flex flex-col justify-center items-center relative w-full max-screen-desktop mx-auto overflow-x-hidden">
      <Flex className="items-center mt-4.5rem flex-col">
        <Image
          className="w-auto h-14 md:h-20 mb-5"
          src="./AmpDMI.svg"
          alt="dual Logo"
        />

        <Flex
          // ref={scrollRef}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }} // Initial state, invisible and slightly moved down
          animate={{ opacity: 1, y: 0 }} // Final state, fully visible and no movement
          transition="0.5 easeIn"
          ref={scrollRef}
          // as={motion.div}
          // variants={{
          //   hidden: { opacity: 0, y: -20 },
          //   visible: { opacity: 1, y: 0 },
          // }}
          // initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          // transition="0.2s easeIn 0.01s"
          justifyContent={"center"}
        >
          <Image
            className="w-1/2 sm:w-2/5 lg:w-[31.5rem] h-auto object-cover"
            loading="lazy"
            src="./collegerivals-logo.webp"
            alt="collegerivals-logo"
          />
        </Flex>
      </Flex>

      <Heading
        className="ppFormula-font font-light mt-7 lg:mt-9 lg:leading-100%  mb-6 text-4xl lg:text-5rem italic text-[#333333] tracking-wide lg:tracking-wider"
        as={motion.h1}
        variants={{
          hidden: { opacity: 0, y: 55 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.5 easeIn"
      >
        ESPORTS SERIES
      </Heading>

      <Box
        className="helvetica-font text-sm lg:text-base
         text-white rounded-md flex justify-center items-center italic  
           mb-3 lg:mb-5 h-14 lg:h-4.063rem w-60 lg:w-29rem button-style bg-pink hover:opacity-80"
        transform="skew(-12deg)"
        transition="0.4s all ease-out"
        filter="drop-shadow(8px 8px 2px #d1ff45)"
      >
        <Link
          href="/register"
          className="helvetica-font text-sm lg:text-base text-white italic 
          h-full w-full flex justify-center items-center hover:no-underline"
        >
          REGISTER NOW
        </Link>
      </Box>

      <Flex className="w-full flex-col items-center px-6 lg:px-20 features-section pt-1.421rem pb-0.625rem">
        <Flex className="feature-card w-auto flex xl:hidden rounded-0.938rem pb-0.625rem items-center justify-between py-2 pl-2 pr-1.75rem">
          <Flex className="items-center">
            <Flex className="h-3.5rem w-3.5rem items-center justify-center bg-white rounded-0.746rem">
              <Image
                src="./gaming-console.svg"
                alt="gaming-console"
                className="h-2.5rem w-2.5rem object-contain gentle-tilt-move-image"
              />
            </Flex>
            <Text className="ppFormula-font italic text-xl md:text-2.188rem ml-0.375rem">
              LARGEST CAMPUS EVENT
            </Text>
          </Flex>
        </Flex>
        <Flex className="features-top md:px-5.5rem w-full pb-3 items-center justify-between">
          <Link
            href="#cities-section"
            className="no-underline hover:no-underline w-48% xl:w-30%"
          >
            <Flex className="feature-card-home w-full rounded-0.938rem items-center justify-between py-2 pl-2 pr-0.438rem md:pr-1.75rem">
              <Flex className="items-center">
                <VerticalSlider slides={citySliderImages} />
                <Text className="ppFormula-font italic text-lg md:text-2.188rem ml-0.375rem xl:ml-0.938rem">
                  5 CITIES
                </Text>
              </Flex>
              <Image
                src="./feature-arrow.svg"
                alt="feature-image"
                className="cover w-1.75rem h-1.75rem hidden sm:flex feature-arrow-home"
              />
            </Flex>
          </Link>
          <Flex className="feature-card-home w-auto hidden xl:flex rounded-0.938rem items-center justify-center py-2 pl-2 pr-1.75rem">
            <Flex className="items-center">
              <Flex className="h-3.5rem w-3.5rem items-center justify-center bg-white rounded-0.746rem">
                <Image
                  src="./gaming-console.svg"
                  alt="gaming-console"
                  className="h-2.5rem w-2.5rem object-contain gentle-tilt-move-image"
                />
              </Flex>
              <Text className="ppFormula-font italic text-lg md:text-2.188rem ml-0.375rem xl:ml-0.938rem">
                LARGEST CAMPUS EVENT
              </Text>
            </Flex>
          </Flex>
          <Link
            href="#games-section"
            className="no-underline hover:no-underline w-48% xl:w-30% scroll-smooth"
          >
            <Flex className="feature-card-home w-full rounded-0.938rem items-center justify-between py-2 pl-2 pr-0.438rem md:pr-1.75rem">
              <Flex className="items-center">
                <VerticalSlider slides={gameSliderImages} />
                <Text className="ppFormula-font italic text-lg md:text-2.188rem ml-0.375rem xl:ml-0.938rem">
                  1v1
                </Text>
              </Flex>
              <Image
                src="./feature-arrow.svg"
                alt="feature-image"
                className="cover w-1.75rem h-1.75rem hidden sm:flex feature-arrow-home"
              />
            </Flex>
          </Link>
        </Flex>

        <Flex
          className="feature-bottom w-full flex-col items-center justify-center pt-1.875rem pb-1.875rem md:pt-3.125rem md:pb-2.5rem rounded-0.625rem md:rounded-1.25rem"
          backgroundImage={{
            base: "url('/prizes-bg-mobile.svg')",
            xl: "url('/prizes-bg.webp')",
          }}
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
          backgroundPosition="center"
        >
          <Text className="ppFormula-font text-neon text-xl md:text-2.188rem italic tracking-widest">
            WIN PRIZES WORTH ₹50,00,000
          </Text>
          <Text className="ppFormula-font text-sm md:text-xl italic text-white tracking-wider">
            LIFETIME BRAGGING RIGHTS
          </Text>
        </Flex>
      </Flex>

      <Flex className="w-full px-6 lg:px-20">
        <VideoSliderHero />
      </Flex>
    </Box>
  );
};

export default Hero;
