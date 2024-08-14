"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Graphics from "@/components/globalComponents/Graphics";

import NavbarSeason2 from "../globalComponents/NavbarSeason2";
import FooterSeason2 from "../globalComponents/FooterSeason2";
import { TERMS } from "@/constants/privacy-and-terms/terms";
const TermsPage = () => {
  return (
    <Box bgColor={"black"}>
      <NavbarSeason2 />
      <Graphics />
      <Heading
        className="ppFormula-font italic font-light text-center mt-40"
        size={"4xl"}
        fontSize={{ base: "2rem", lg: "5rem" }}
        lineHeight={"100%"}
        color={"white"}
        letterSpacing={{ base: "0.0975rem", lg: "0.235rem" }}
      >
        TERMS AND CONDITIONS
      </Heading>

      <Flex className="questions-container" width="100%" background="black">
        <Box
          as="pre"
          className="helvetica-light-font font-normal whitespace-pre-wrap break-words w-full px-[1.5rem] lg:px-[5rem] py-[2rem] lg:py-[4rem] mb-[4rem] lg:mb-[7.25rem] bg-black text-white"
        >
          {TERMS.data}
        </Box>
      </Flex>
      <FooterSeason2 />
    </Box>
  );
};

export default TermsPage;
