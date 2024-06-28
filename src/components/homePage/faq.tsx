"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Image,

} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FAQ = () => {



  const bottomDesignSrc = useBreakpointValue({
    base: "./faq-bottom-design-mobile.svg",
    lg: "./faq-bottom-design.svg",
  });

  const faqDesignSrc = useBreakpointValue({
    lg: "./faq-design.svg",
    base: "./faq-design-mobile.svg",
  });
  return (
    <Flex
      className="w-full flex-col md:pb-64 pb-14"
     bg="black"
    >
      <Flex className="faq-section pt-3.125rem lg:pt-9.625rem px-1.5rem lg:px-5rem flex-col overflow-x-hidden w-full relative">
        <Heading
          className="ppFormula-font w-full text-white italic text-3xl lg:text-7xl pb-1.875rem lg:pb-5.25rem max-screen-desktop mx-auto font-normal"
          borderBottom="1px dotted black"
          as={motion.h2}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // transition="0.2s ease-in 0.04"
          transition="0.4 easeIn"
        >
          FREQUENTLY ASKED{" "}
          <Text as="span" className="text-white outline-text">
            QUESTIONS
          </Text>
        </Heading>
        <Flex className="questions-container flex-col w-full pt-1.438rem text-white max-screen-desktop mx-auto">
          <Flex className="faq-element w-full">
            <Accordion allowMultiple className="w-full">
              <AccordionItem borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-9 w-full"
                      borderBottom="1px dotted white"
                    >
                      <Text className="helvetica-font font-bold text-lg lg:text-1.6rem  text-#DBFD67 pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        01
                      </Text>
                      <Box className="w-full">
                        <Heading className="w-full">
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            className="p-0 flex items-start w-full lg:justify-between"
                          >
                            <Box
                              as="span"
                              className="helvetica-font flex flex-1 text-left text-base lg:text-3xl font-bold"
                            >
                              How to register for College Rivals?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="/faq-cross-open-s2.svg"
                                alt="faq-cross-icon"
                              />
                            ) : (
                              <Image
                                src="/faq-cross-s2.svg"
                                height="auto"
                                width="auto"
                                alt="faq-plus-icon"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel
                          px={0}
                          className="helvetica-light-font text-sm lg:text-lg"
                        >
                          To register for College Rivals, please follow these
                          steps: <br /> 1. Visit the{" "}
                          <Text as={"span"} className="font-semibold">
                            {" "}
                            <Link
                              href="/register"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              College Rivals website
                            </Link>
                          </Text>{" "}
                          . <br /> 2. Fill out the registration form with your
                          details. <br /> 3. Complete the registration process
                          as instructed on the website.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-10" borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-9 w-full"
                      borderBottom="1px dotted white"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-#DBFD67 pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        02
                      </Text>
                      <Box width="100%">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            className="p-0 flex items-start w-full lg:justify-between"
                          >
                            <Box
                              as="span"
                              className="helvetica-font flex-1 text-left text-base lg:text-3xl font-bold"
                            >
                              My college/city is not on the list, can I
                              register?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="/faq-cross-open-s2.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-[5px]"
                                src="/faq-cross-s2.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          Yes, absolutely. College Rivals is open to
                          participants from anywhere, regardless of whether your
                          college or city is listed. You can still register and
                          participate. Just follow the registration process on
                          our website, and manually input your college name in
                          the selction menu.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-9 w-full"
                      borderBottom="1px dotted white"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-#DBFD67 pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        03
                      </Text>
                      <Box className="w-full">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            className="p-0 flex items-start w-full lg:justify-between"
                          >
                            <Box
                              as="span"
                              className="helvetica-font flex-1 text-left text-base lg:text-3xl font-bold"
                            >
                              Can I participate in more than one game mentioned?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="/faq-cross-open-s2.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-cross-s2.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg">
                          Yes, you can. You are welcome to participate in
                          multiple games mentioned in the College Rivals
                          tournament. Simply select all the games you want to
                          compete in by following the registration process.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-10" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-9 w-full"
                      borderBottom="1px dotted white"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-#DBFD67 pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        04
                      </Text>
                      <Box width="100%">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            className="p-0 flex items-start w-full lg:justify-between"
                          >
                            <Box
                              as="span"
                              className="helvetica-font flex-1 text-left text-base lg:text-3xl font-bold"
                            >
                              Is this event open to all or restricted to
                              students from specific colleges?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="/faq-cross-open-s2.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="/faq-cross-s2.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          College Rivals is open to all participants, and it is
                          not restricted to students from specific colleges.
                          Anyone can register and compete in the event by
                          following the registration process.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-10" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-9 w-full"
                      borderBottom="1px dotted white"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-#DBFD67 pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        05
                      </Text>
                      <Box width="100%">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            className="p-0 flex items-start w-full lg:justify-between"
                          >
                            <Box
                              as="span"
                              className="helvetica-font flex-1 text-left text-base lg:text-3xl font-bold"
                            >
                              How can I register for my team/squad?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="/faq-cross-open-s2.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="/faq-cross-s2.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          College Rivals is primarily a solo event, not a team
                          or squad competition. Participants register
                          individually, and the event format for BGMI is a
                          64-player Solo Battle Royale. If you are a Valorant
                          and CSGO player, we will be hosting a 1vs1 mode within
                          the games in a custom room, using a single-elimination
                          format.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>
             
          
              <div className="w-full pt-10">
              <div className="clip-bg-neon rounded-lg w-fit">
                <Link href="/faq">
      <button 
        className="custom-button-neon m-3 px-9 py-3 text-lg helvetica-medium-font font-medium text-#DBFD67  rounded-lg bg-cover"
      >
  VIEW MORE
      </button>
      </Link>
    </div>

              </div>
            </Accordion>
          </Flex>
        </Flex>
        {/* <Image
          className=" w-[50%] lg:w-[auto] absolute top-[-41%] lg:top-[-65%] right-0 h-auto"
          src={faqDesignSrc}
          alt="faq-design"
          loading="lazy"
        /> */}
      </Flex>
    
    </Flex>
  );
};

export default FAQ;
