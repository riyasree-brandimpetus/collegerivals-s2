"use client";
import Navbar from "@/components/globalComponents/Navbar";
import Footer from "@/components/globalComponents/Footer";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Graphics from "@/components/globalComponents/Graphics";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const RulesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const rules = [
    {
      index: "01",
      question: "How many games can I participate at once?",
      answer:
        "To participate in College Rivals 2023, you need to be a college student from one of the top 25 colleges in India. Keep an eye out for the registration drive and follow the instructions to sign up and join the thrilling esports competition.",
    },
    {
      index: "02",
      question:
        "What gaming platforms and titles are included in College Rivals?",
      answer:
        "To participate in College Rivals 2023, you need to be a college student from one of the top 25 colleges in India. Keep an eye out for the registration drive and follow the instructions to sign up and join the thrilling esports competition.",
    },
    {
      index: "03",
      question: "Will there be offline events for College Rivals?",
      answer:
        "To participate in College Rivals 2023, you need to be a college student from one of the top 25 colleges in India. Keep an eye out for the registration drive and follow the instructions to sign up and join the thrilling esports competition.",
    },
    {
      index: "04",
      question:
        "What are the rewards and prizes for College Rivals participants?",
      answer:
        "To participate in College Rivals 2023, you need to be a college student from one of the top 25 colleges in India. Keep an eye out for the registration drive and follow the instructions to sign up and join the thrilling esports competition.",
    },
  ];
  return (
    <Box>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Graphics />
      <Heading
        ref={scrollRef}
        as={motion.h1}
        variants={{
          hidden: { opacity: 0, y: 55 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="1s linear"
        className="ppFormula-font tracking-tight lg:tracking-normal font-light
         italic text-2rem lg:text-7xl text-center mt-5.375rem lg:mt-8.25rem leading-normal text-#333"
        size={"4xl"}
        // mb={{ base: '0.5rem', lg: '1.25rem' }}
        // pb={{ base: '3.125rem', lg: '8.625rem' }}
      >
        GAME RULES
      </Heading>

      <SimpleGrid
        className=" lg:gap-x-1.25rem gap-y-1.31rem lg:gap-y-1.25rem pt-1.875rem lg:pt-3.75rem
                             pr-1.375rem lg:pr-5.5rem pb-5.062rem lg:pb-17.93rem pl-1.5rem lg:pl-5rem"
        gridTemplateColumns={{
          base: " repeat(1, 100%)",
          lg: "repeat(2, auto)",
        }}
        // columnGap={"0.75rem"}
        // gridGap={{ base: "0.76rem", lg: "1.4rem" }}
      >
        <Flex
          className="counterstrike  items-end h-25vh sm:h-45vh lg:h-57vh 
          rounded-0.875rem lg:rounded-1.5rem px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem"
          backgroundImage="url('/counterstrike.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            className="bg-white opacity-75 w-full flex items-center lg:items-end 
          justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font font-bold text-sm lg:text-xl w-1/2 lg:w-70%">
              Counter Strike{" "}
            </Text>
            <a
              className="flex  font-normal helvetica-light-font text-xs 
              lg:text-sm hover:opacity-80% hover:underline"
              href="/rules/counterstrike"
            >
              VIEW RULEBOOK{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>

        <Flex
          className="counterstrike  items-end h-25vh sm:h-45vh lg:h-57vh 
         rounded-0.875rem lg:rounded-1.5rem px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem"
          backgroundImage="url('./Images/media/rule2.png')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            className="bg-white opacity-75 w-full flex items-center lg:items-end 
          justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font font-bold text-sm lg:text-xl w-1/2 lg:w-70%">
              Valorant{" "}
            </Text>
            <a
              className="flex  font-normal helvetica-light-font text-xs 
              lg:text-sm hover:opacity-80% hover:underline"
              href="/rules/valorant"
            >
              VIEW RULEBOOK{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>

        <Flex
          className="counterstrike  items-end h-25vh sm:h-45vh lg:h-57vh 
          rounded-0.875rem lg:rounded-1.5rem px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem"
          backgroundImage="url('./Images/media/rule3.png')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            className="bg-white opacity-75 w-full flex items-center lg:items-end 
          justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font font-bold text-sm lg:text-xl w-1/2 lg:w-70%">
              FIFA 2023{" "}
            </Text>
            <a
              className="flex  font-normal helvetica-light-font text-xs 
               lg:text-sm hover:opacity-80% hover:underline"
              href="/rules/fifa"
            >
              VIEW RULEBOOK{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>

        <Flex
          className="counterstrike  items-end h-25vh sm:h-45vh lg:h-57vh 
         rounded-0.875rem lg:rounded-1.5rem px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem"
          backgroundImage="url('./Images/media/rule4.png')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            className="bg-white opacity-75 w-full flex items-center lg:items-end 
          justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font font-bold text-sm lg:text-xl w-1/2 lg:w-70%">
              Tekken 7{" "}
            </Text>
            <a
              className="flex  font-normal helvetica-light-font text-xs 
              lg:text-sm hover:opacity-80% hover:underline"
              href="/rules/tekken"
            >
              VIEW RULEBOOK{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>

        <Flex
          className="counterstrike  items-end h-25vh sm:h-45vh lg:h-57vh 
         rounded-0.875rem lg:rounded-1.5rem px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem"
          backgroundImage="url('./Images/media/rule5.png')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            className="bg-white opacity-75 w-full flex items-center lg:items-end 
          justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font font-bold text-sm lg:text-xl w-1/2 lg:w-70%">
              Battleground Mobile India{" "}
            </Text>
            <a
              className="flex  font-normal helvetica-light-font text-xs 
              lg:text-sm hover:opacity-80% hover:underline"
              href="/rules/bgmi"
            >
              VIEW RULEBOOK{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>

        <Flex
          className="counterstrike  items-end h-25vh sm:h-45vh lg:h-57vh 
         rounded-0.875rem lg:rounded-1.5rem px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem"
          backgroundImage="url('./Images/media/rule6.png')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            className="bg-white opacity-75 w-full flex items-center lg:items-end 
          justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font font-bold text-sm lg:text-xl w-1/2 lg:w-70%">
              Road to Valor: Empires{" "}
            </Text>
            <a
              className="flex  font-normal helvetica-light-font text-xs 
              lg:text-sm hover:opacity-80% hover:underline"
              href="/rules/road-to-valor"
            >
              VIEW RULEBOOK{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>
      </SimpleGrid>

      <Footer />
    </Box>
  );
};

export default RulesPage;
