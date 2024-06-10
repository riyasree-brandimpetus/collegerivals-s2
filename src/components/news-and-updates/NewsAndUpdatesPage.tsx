"use client";

import { Box, Image, Flex } from "@chakra-ui/react";

import Navbar from "@/components/globalComponents/Navbar";
import Graphics from "@/components/globalComponents/Graphics";
import Footer from "@/components/globalComponents/Footer";
import Hero from "@/components/news-and-updates/Hero";
import { useState } from "react";

const NewsAndUpdatesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="" position="relative" zIndex="0">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      {/* <Image
        src="./news-right-design.svg"
        alt="news-right-design"
        position="absolute"
        top={{ base: "40%", lg: "29%" }}
        right={{ base: "-4%", lg: "0" }}
        width={{ base: "59%", lg: "auto" }}
        height="auto"
        loading="lazy"
      /> */}
      <Hero />

      <Graphics />

      <Flex
      // backgroundColor={"#B4B4B4"}
      >
        <Footer />
      </Flex>
    </Box>
  );
};

export default NewsAndUpdatesPage;
