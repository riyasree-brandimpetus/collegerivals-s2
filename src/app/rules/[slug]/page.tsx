"use client"

import { Box, Flex, Heading } from "@chakra-ui/react";
// import { useRouter } from "next/router";

import Graphics from "@/components/globalComponents/Graphics";
import { BGMI_RULES, ROAD_TO_VALOR_RULES, COUNTERSTRIKE_RULES, FIFA_RULES, TEKKEN_RULES, VALORANT_RULES } from "@/constants/rules";
import { string } from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FooterSeason2 from "@/components/globalComponents/FooterSeason2";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";


const Page = ({ params }: { params: { slug: string } }) => {
  // console.log(params)
  const router = useRouter();
  const { slug } = params
  let rules
  if (slug === "counterstrike") {
    rules = COUNTERSTRIKE_RULES
  } else if (slug === "valorant") {
    rules = VALORANT_RULES
  } else if (slug === "fifa") {
    rules = FIFA_RULES
  } else if (slug === "tekken") {
    rules = TEKKEN_RULES
  } else if (slug === "bgmi") {
    rules = BGMI_RULES
  } else if (slug === "road-to-valor") {
    rules = ROAD_TO_VALOR_RULES
  } else {
    router.push("/not-found")
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bgColor={"black"}>
      <NavbarSeason2/>
      <Graphics />
      <h1
        className="ppFormula-font text-white uppercase leading-normal tracking-wide lg:tracking-wider font-light italic  px-[1rem] lg:px-[2rem] text-[2rem] lg:text-[4rem] text-center mt-[5.375rem] lg:mt-[8.25rem]"
      >
        {rules?.heading}
      </h1>
      <Box as="pre" className="helvetica-light-font font-normal whitespace-pre-wrap break-words w-full px-[1.5rem] lg:px-[5rem] py-[2rem] lg:py-[4rem] mb-[4rem] lg:mb-[7.25rem] bg-black text-white">
        {rules?.data}

      </Box>

      <FooterSeason2 />
    </Box>
  )
}

export default Page;