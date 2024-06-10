import {
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const Redemption = () => {
  const delhiSrc = useBreakpointValue({
    base: "./delhi.svg",
    lg: "./delhi-desktop.svg",
  });

  const hyderabadSrc = useBreakpointValue({
    base: "./hyderabad.svg",
    lg: "./hyderabad-desktop.svg",
  });

  const bangaluruSrc = useBreakpointValue({
    base: "./bangaluru.svg",
    lg: "./bangaluru-desktop.svg",
  });

  const puneSrc = useBreakpointValue({
    base: "./Pune.svg",
    lg: "./pune-desktop.svg",
  });

  const mumbaiSrc = useBreakpointValue({
    base: "./mumbai.svg",
    lg: "./mumbai-desktop.svg",
  });

  const carAnimationSrc = useBreakpointValue({
    base: "./car-animation.svg",
    lg: "./car-animation-desktop.svg",
  });
  const scrollRef = useRef(null);
  return (
    <Flex
      id="cities-section"
      className="redemption-section w-full flex-col items-center justify-center pb-2.5rem lg:pb-10.188rem overflow-hidden bg-black"
      px={{ base: "1.5rem", md: "8rem", lg: "15rem", xl: "22rem" }}
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
        transition="0.2s ease-in 0.01s"
        className="ppFormula-font font-light italic text-3xl lg:text-3.75rem mt-3.75rem 
        lg:mt-8.375rem mb-1.875rem lg:mb-5.563rem text-white"
      >
        ROAD TO{" "}
        <Text as="span" className="text-neon">
          REDEMPTION
        </Text>
      </Heading>
      <Box className="road-to-redemption-container mb-2.5rem lg:mb-0.875rem w-full max-screen-desktop mx-auto">
        <Image
          loading="lazy"
          src="./redemption.svg"
          alt="redemption-image"
          className="h-auto w-full object-cover hidden sm:block"
        />
        <Image
          loading="lazy"
          src="./redemption-mobile.svg"
          alt="redemption-image"
          className="h-auto w-full object-cover block sm:hidden"
        />
      </Box>
      <Box className="my-1.875rem lg:py-0 h-3.325rem lg:h-2.765rem w-15rem lg:w-12rem">
        <Link
          className="helvetica-font rounded-xl italic h-full w-full flex justify-center 
           items-center text-0.813rem  bg-neon hover: 0.9 button-style hover:no-underline no-underline"
          transform="skew(-12deg)"
          transition="0.4s all ease-out"
          filter="drop-shadow(5px 5px 0px #7B9F00)"
          href="/schedule"
        >
          FULL SCHEDULE
        </Link>
      </Box>
    </Flex>
  );
};

export default Redemption;
