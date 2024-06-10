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
  Link,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

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
      className="w-full flex-col"
      bg="linear-gradient(180deg, rgba(180, 180, 180, 0.78) 0%, rgba(180, 180, 180, 0) 100%)"
    >
      <Flex className="faq-section pt-3.125rem lg:pt-9.625rem px-1.5rem lg:px-5rem flex-col overflow-x-hidden w-full relative">
        <Heading
          className="ppFormula-font w-full italic text-3xl lg:text-6xl pb-1.875rem lg:pb-5.25rem max-screen-desktop mx-auto font-normal"
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
          <Text as="span" className="text-pink">
            QUESTIONS
          </Text>
        </Heading>
        <Flex className="questions-container flex-col w-full pt-1.438rem max-screen-desktop mx-auto">
          <Flex className="faq-element w-full">
            <Accordion allowMultiple className="w-full">
              <AccordionItem borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem  text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
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
                                src="./faq-cross-icon.svg"
                                alt="faq-cross-icon"
                              />
                            ) : (
                              <Image
                                src="./faq-plus-icon.svg"
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

              <AccordionItem className="mt-1.438rem" borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-[0.75rem] w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
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
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-[5px]"
                                src="./faq-plus-icon.svg"
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
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
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
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
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

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
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
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
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

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
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
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
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

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        06
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
                              What is the deadline for registration?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          The deadline for registration may vary from one
                          College Rivals event to another. Please check the
                          event's official website and registration page for the
                          specific registration deadline for the event you wish
                          to participate in. It's essential to register before
                          the deadline to secure your spot in the tournament.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        07
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
                              What is the Qualifiers for College Rivals Esports
                              Event?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          All participants can select a city center / region
                          during the registerations process. The participants
                          will be based on city center / region seeded into
                          respective bracket pools. Quallifers are preliminary
                          single elimination brackets, top participants from
                          each quallifers will move to Grand Finals.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        08
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
                              When and where will the event take place?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          The event will take place entirely online, the City
                          Quallifers will start soon. Please check the{" "}
                          <Text as={"span"} className="font-semibold">
                            {" "}
                            <Link
                              href="/schedule"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Schedule
                            </Link>
                          </Text>{" "}
                          for more information. You can participate from the
                          comfort of your own location.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        09
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
                              What esports games or titles will be featured in
                              the event?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          The event will feature a variety of esports titles,
                          including BGMI, Road to Valor, Valorant, CSGO, FIFA
                          23, and Tekken 7.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        10
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
                              How can I stay updated on event announcements and
                              news?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          To stay updated on all event announcements and news,
                          please visit our official website regularly.
                          Additionally, join our Discord server for real-time
                          updates and important information.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        11
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
                              Are there any entry fees to participate in the
                              event?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          No, The participation in College Rivals in completly
                          free.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        12
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
                              What are the dates and times for the qualifiers
                              and finals?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          Please check{" "}
                          <Text as={"span"} className="font-semibold">
                            {" "}
                            <Link
                              href="/schedule"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Schedule
                            </Link>
                          </Text>{" "}
                          for the dates of the quallifers and finals. Times and
                          Brackets will be updated soon through Email, Whatsapp
                          and Discord.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        13
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
                              How long will each match or round last?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          The duration of each match or round may vary depending
                          on the specific game and mode being played. Detailed
                          information about match durations will be provided in
                          the event guidelines.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        14
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
                              Are there any breaks or intermissions during the
                              event?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          Information about scheduled breaks or intermissions
                          during the event will be included in the official
                          event schedule, which will be made available closer to
                          the event date. Participants can refer to this
                          schedule for any planned pauses during the
                          competition.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        15
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
                              How will match pairings or brackets be determined
                              for the qualifiers?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          Match pairings and brackets for the qualifiers will be
                          determined based on the total number of participants
                          and teams. The organizers will create a fair and
                          balanced bracket system to ensure competitive matches.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        16
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
                              Where can I find the rules and game settings for
                              each title? What are the penalties for rule
                              violations during matches?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          Please check{" "}
                          <Text as={"span"} className="font-semibold">
                            {" "}
                            <Link
                              href="/rules"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Rules
                            </Link>
                          </Text>{" "}
                          for more information
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        17
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
                              What should I do if I encounter technical issues
                              during a match?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          If you encounter technical issues during a match,
                          please inform the admin team on{" "}
                          <Text as={"span"} className="font-semibold">
                            {" "}
                            <Link
                              href="https://bit.ly/crdiscordweb"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Discord
                            </Link>
                          </Text>{" "}
                          for quick resolution
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem className="mt-1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      className="pb-0.75rem w-full"
                      borderBottom="1px dotted black"
                    >
                      <Text className="helvetica-font text-lg lg:text-1.6rem text-pink pr-0.438rem lg:pr-1.438rem italic lg:pt-1">
                        18
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
                              Do we need a College ID for registeration?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross"
                              />
                            ) : (
                              <Image
                                className="h-auto w-auto mt-5px"
                                src="./faq-plus-icon.svg"
                                alt="faq-plus"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="helvetica-light-font px-0 text-sm lg:text-lg ">
                          Yes, A valid College Identification Proof is
                          mandatory. If a participant has not yet received an
                          official college ID from the college authorities, any
                          college document, such as a Fee Receipt or Library
                          Card, bearing the college's name, year, and the
                          student's name, will also suffice.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>
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
      <Image
        src={bottomDesignSrc}
        alt="bottom-design"
        className="w-full h-auto object-cover relative "
        zIndex="-1"
        mt={{ xl: "-14rem", lg: "-7rem", base: "-3rem" }}
        mb={{ xl: "-18rem", lg: "-8rem", base: "-3rem" }}
        loading="lazy"
      />
    </Flex>
  );
};

export default FAQ;
