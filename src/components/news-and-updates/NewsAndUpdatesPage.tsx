"use client";

import { Box,  Flex } from "@chakra-ui/react";


import Graphics from "@/components/globalComponents/Graphics";

import Hero from "@/components/news-and-updates/Hero";
import { useState } from "react";

const NewsAndUpdatesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="" position="relative" zIndex="0">

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
      
      </Flex>
    </Box>
  );
};

export default NewsAndUpdatesPage;
