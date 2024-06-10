"use client"

import { Box, Flex, Heading } from "@chakra-ui/react";
// import { useRouter } from "next/router";
import Navbar from '@/components/globalComponents/Navbar';
import Footer from "@/components/globalComponents/Footer";
import Graphics from "@/components/globalComponents/Graphics";
import { BGMI_RULES, ROAD_TO_VALOR_RULES, COUNTERSTRIKE_RULES, FIFA_RULES, TEKKEN_RULES, VALORANT_RULES } from "@/constants/rules";
import { string } from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params)
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
    <Box >
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Graphics />
      <h1
        className="ppFormula-font text-slate-800 uppercase leading-normal tracking-wide lg:tracking-wider font-light italic  px-[1rem] lg:px-[2rem] text-[2rem] lg:text-[4rem] text-center mt-[5.375rem] lg:mt-[8.25rem]"
      >
        {rules?.heading}
      </h1>
      <Box as="pre" className="helvetica-light-font font-normal whitespace-pre-wrap break-words w-full px-[1.5rem] lg:px-[5rem] py-[2rem] lg:py-[4rem] mb-[4rem] lg:mb-[7.25rem] bg-white">
        {rules?.data}

      </Box>

      <Footer />
    </Box>
  )
}

export default Page;