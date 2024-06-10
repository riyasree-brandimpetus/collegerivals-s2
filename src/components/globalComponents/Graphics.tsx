import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const Graphics = ({ isOpen }: any) => {
  const navbarDesignSrc = useBreakpointValue({
    lg: "../navbar-design.webp",
    base: "../navbar-design-mobile.webp",
  });
  const scrollRef = useRef(null);
  return (
    <Flex
      width="100%"
      overflow="hidden"
      className="graphics-container"
      display={isOpen ? 'none' : 'flex'}
    >
      <Flex
        position="absolute"
        right="0"
        top="0"
        zIndex="-1"
        ref={scrollRef}
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 55, scale: 0.1 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // transition="0.2s ease-in 0.04"
        transition="0.4 easeIn"
      >
        <Image
          src={navbarDesignSrc}
          alt="navbar-design"
          loading="eager"
          className="h-auto w-auto"
        />
      </Flex>

      <Image
        src="../left-design-hero.svg"
        alt="left-design-hero"
        position="absolute"
        top={{ base: '2%', lg: '2.5%' }}
        left={{ base: '-4%', lg: '0' }}
        zIndex="-1"
        width={{ base: '26%', lg: 'auto' }}
        height="auto"
        loading="eager"
        ref={scrollRef}
        as={motion.img}
        variants={{
          hidden: { opacity: 0, x: '-281.63', y: '-112.23', scaleY: 0.54 },
          visible: { opacity: 1, y: 0, x: 0, scaleY: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="2s linear"
      />

      <Image
        src="../right-design-hero.svg"
        alt="right-design-hero"
        position="absolute"
        right={{ base: '0%', lg: '0' }}
        top={{ base: '2.5%', lg: '0%' }}
        width={{ base: '35%', lg: 'auto' }}
        zIndex="-1"
      // ref={scrollRef}
      // as={motion.img}
      // variants={{
      //   hidden: { opacity: 0, x: 55, scale: 0.1 },
      //   visible: { opacity: 1, y: 0, scale: 1 },
      // }}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true }}
      />
    </Flex>
  );
};

export default Graphics;
