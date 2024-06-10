"use client";

import SponsorsTicker from "@/components/aboutUs/SponsorsTicker";
import Footer from "@/components/globalComponents/Footer";
import Graphics from "@/components/globalComponents/Graphics";
import Navbar from "@/components/globalComponents/Navbar";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import LivePlatforms from "./LivePlatforms";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  return (
    <Box className="relative m-[0 auto] w-full">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Graphics />
      <Box className="about-page-container pb-18 md:pb-24">
        <Box className="about-hero-container relative w-full about-hero-container px-6 lg:px-20">
          <Heading
            ref={scrollRef}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out"
            className="ppFormula-font mb-0.5rem lg:mb-1.25rem max-screen-desktop mx-auto mt-5.375rem lg:mt-8.25rem
           font-light italic text-xl lg:text-1.813rem leading-tight text-center text-pink"
            size={"2xl"}
          >
            ABOUT
          </Heading>
          <Heading
            ref={scrollRef}
            as={motion.h1}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out 0.3s"
            className="ppFormula-font font-light tracking-0.25rem lg:tracking-widest text-2rem lg:text-5rem
           italic text-center text-#333 mb-10 lg:mb-11 leading-8 lg:leading-none mx-auto mx-w-[1440px] w-full lg:w-[70%]"
          >
            YOUR CITY IS THE NEXT ESPORTS BATTLEGROUND
          </Heading>
          <Flex
            className="about-hero-image w-full rounded-sm lg:rounded justify-center mb-5 lg:mb-68 mx-auto max-screen-desktop "
            ref={scrollRef}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y:20 },
              visible: { opacity: 1, y:0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out 0.6s"
          >
            <Image
              className="w-full h-auto object-cover"
              src="./Images/about.jpg"
              loading="lazy"
              alt="group of people discussing"
            />
          </Flex>
          <Flex className="about-hero-text-container helvetica-font flex-col gap-6 lg:gap-10 text-lg lg:text-3xl leading-120% max-screen-desktop my-0 mx-auto mt-5 lg:mt-32">
            <Box className="pr-0 lg:pr-3.25rem">
              <Box
                className="w-98% lg:w-49%"
                ref={scrollRef}
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition="0.4s ease-in-out"
              >
                Welcome to College Rivals 2023! We’re on a mission to bring
                college students together through intense Esports competition.
              </Box>
            </Box>
            <Flex className="justify-start lg:justify-end pl-0 lg:pl-3.25rem">
              <Box
                className="w-98% lg:w-49%"
                ref={scrollRef}
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition="0.4s ease-in-out 0.3s"
              >
                Bringing together the finest gamers from the top colleges across
                Mumbai, Delhi, Pune, Hyderabad, and Bangalore.
                {/* <br />
                <br />
                So the question is,{" "}
                <Text as="span" className="text-pink">
                  Do you have what it takes?
                </Text> */}
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex className="our-sponsors-container items-center flex-col relative justify-center">
          <Heading
            ref={scrollRef}
            as={motion.h2}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out"
            mt={{ base: "3.75rem", lg: "7.75rem" }}
            fontStyle={"italic"}
            fontSize={{ base: "1.75rem", lg: "3.75rem" }}
            lineHeight="100%"
            letterSpacing={{ base: "0.25rem", lg: "0.5rem" }}
            gap={{ base: "0.5rem", lg: "1.25rem" }}
            size={"3xl"}
            className="ppFormula-font font-light px-6 lg:px-20"
            pb={{ lg: "3.688rem", base: "1.875rem" }}
            color="#000"
            position={"relative"}
            zIndex={"2"}
            textAlign="center"
          >
            OUR{" "}
            <Text as={"span"} color={" #EA337D"}>
              SPONSORS
            </Text>
          </Heading>
          {/* hiding the two rowed tickers for sponsors */}
          <Box
            className="about-us-ticker-container hidden"
            position="relative"
            width="100%"
          >
            <SponsorsTicker />
            <SponsorsTicker direction={"reverse"} />
            <Box
              width="15%"
              position="absolute"
              height="100%"
              top="0"
              left="0"
              bgGradient="linear-gradient(90deg, #FFFFFF 11.27%, rgba(255, 255, 255, 0) 121.13%)"
            ></Box>
            <Box
              width="15%"
              height="100%"
              position="absolute"
              right="0"
              top="0"
              bgGradient="linear-gradient(-90deg, #FFFFFF 11.27%, rgba(255, 255, 255, 0) 121.13%)"
            ></Box>
          </Box>
          <Flex className="our-sponsors-container flex flex-col items-center justify-center w-full px-12 lg:px-20 xl:px-36">
            <Flex className="mobile-first-row-container desktop-images-container flex justify-between items-center w-full">
              <Image
                src="/sponsor-one.svg"
                alt="sponsor-image"
                className="h-3.5 lg:h-auto"
              />
              <Image
                src="/sponsor-two.svg"
                alt="sponsor-image"
                className="h-1.125rem lg:h-auto"
              />
              <Image
                src="/sponsor-three.svg"
                alt="sponsor-image"
                className="h-1.125rem lg:h-auto"
              />
              <Image
                src="/sponsor-four.svg"
                alt="sponsor-image"
                className="h-1.125rem lg:h-auto"
              />
              <Image
                src="/sponsor-five.svg"
                alt="sponsor-image"
                className="hidden lg:block"
              />
              <Image
                src="/sponsor-six.svg"
                alt="sponsor-image"
                className="hidden lg:block"
              />
              <Image
                src="/sponsor-seven.svg"
                alt="sponsor-image"
                className="hidden lg:block"
              />
            </Flex>
            <Flex className="mobile-second-row-container flex items-center justify-between w-4/5 lg:hidden mt-5">
              <Image
                src="/sponsor-five.svg"
                alt="sponsor-image"
                className="h-5"
              />
              <Image
                src="/sponsor-six.svg"
                alt="sponsor-image"
                className="h-5"
              />
              <Image
                src="/sponsor-seven.svg"
                alt="sponsor-image"
                className="h-5"
              />
            </Flex>
          </Flex>
          <Image
            src="ticker-right-design.svg"
            alt="ticker-right-design"
            position="absolute"
            top={{ lg: "-25%", base: "0%" }}
            right={{ lg: "0%", base: "-1%" }}
            width={{ base: "20%", lg: "auto" }}
          />
        </Flex>

        <LivePlatforms />
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutPage;
