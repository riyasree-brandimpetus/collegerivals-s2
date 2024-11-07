"use client";
import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type Finalist = {
  realName: string;
  rank: string;
  inGameName: string;
  collegeName: string;
};

type Game = {
  gameName: string;
  finalists: Finalist[];
};

type MonthData = {
  month: string;
  games: Game[];
};

const TournamentDashboard = () => {
  const data: MonthData[] = [
    {
      month: "August",
      games: [
        {
          gameName: "FIFA",
          finalists: [
            {
              realName: "Nina",
              rank: "1",
              inGameName: "nina08",
              collegeName: "lmn college",
            },
            {
              realName: "Alex2",
              rank: "2",
              inGameName: "alex09",
              collegeName: "opq college",
            },
          ],
        },
        {
          gameName: "Valorant",
          finalists: [
            {
              realName: "Jordan",
              rank: "1",
              inGameName: "jordanPro",
              collegeName: "stu college",
            },
            {
              realName: "Chris",
              rank: "2",
              inGameName: "chrisX",
              collegeName: "vwx college",
            },
          ],
        },
        {
          gameName: "BGMI",
          finalists: [
            {
              realName: "Liam",
              rank: "1",
              inGameName: "liam88",
              collegeName: "yza college",
            },
            {
              realName: "Ethan",
              rank: "2",
              inGameName: "ethanX",
              collegeName: "bcd college",
            },
          ],
        },
      ],
    },
    {
      month: "September",
      games: [
        {
          gameName: "FIFA",
          finalists: [
            {
              realName: "Zara",
              rank: "1",
              inGameName: "zara07",
              collegeName: "abc college",
            },
            {
              realName: "Mia",
              rank: "2",
              inGameName: "mia06",
              collegeName: "def college",
            },
          ],
        },
        {
          gameName: "Valorant",
          finalists: [
            {
              realName: "Oliver",
              rank: "1",
              inGameName: "oliverPro",
              collegeName: "ghi college",
            },
            {
              realName: "Amelia",
              rank: "2",
              inGameName: "ameliaX",
              collegeName: "jkl college",
            },
          ],
        },
        {
          gameName: "BGMI",
          finalists: [
            {
              realName: "Noah",
              rank: "1",
              inGameName: "noah99",
              collegeName: "mno college",
            },
            {
              realName: "Lucas",
              rank: "2",
              inGameName: "lucas11",
              collegeName: "pqr college",
            },
          ],
        },
      ],
    },
    {
      month: "October",
      games: [
        {
          gameName: "FIFA",
          finalists: [
            {
              realName: "Jack",
              rank: "1",
              inGameName: "jack07",
              collegeName: "stu college",
            },
            {
              realName: "Sophia",
              rank: "2",
              inGameName: "sophia08",
              collegeName: "vwx college",
            },
          ],
        },
        {
          gameName: "Valorant",
          finalists: [
            {
              realName: "Ella",
              rank: "1",
              inGameName: "ellaAce",
              collegeName: "yz college",
            },
            {
              realName: "Liam2",
              rank: "2",
              inGameName: "liamX",
              collegeName: "zab college",
            },
          ],
        },
        {
          gameName: "BGMI",
          finalists: [
            {
              realName: "Mason",
              rank: "1",
              inGameName: "masonPro",
              collegeName: "abc college",
            },
            {
              realName: "James",
              rank: "2",
              inGameName: "jamesHero",
              collegeName: "def college",
            },
          ],
        },
      ],
    },
  ];

  const [selectedGames, setSelectedGames] = useState<Record<string, string>>({
    August: "FIFA",
    September: "FIFA",
    October: "FIFA",
  });
  const scrollRef = useRef<HTMLHeadingElement | null>(null);

  const selectGame = (month: string, gameName: string) => {
    setSelectedGames((prev) => ({
      ...prev,
      [month]: gameName,
    }));
  };

  const textureDesign = useBreakpointValue({
    lg: "./textures.svg",
    base: "./textures-mobile.svg",
  });

  return (
    <Box id="section2" bg="black" w="full">
      <Box maxW="1440px" mx="auto" overflow="hidden">
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
          transition="0.2s ease 0.01s"
          className="ppFormula-font"
          color="white"
          fontSize={{ base: "1.75rem", lg: "3.75rem" }}
          mt={{ base: "3.75rem", lg: "12.187rem" }}
          textAlign="center"
          textTransform="uppercase"
          fontStyle="italic"
          fontWeight="light"
        >
          <Text as="span" mr={{ base: "0.3rem", lg: "0.8rem" }}>
            the
          </Text>
          <Text as="span">finalists</Text>
        </Heading>

        <Flex
          position="absolute"
          left="0"
          top={{ base: "51%", lg: "68%" }}
          w={{ base: "50%", lg: "auto" }}
          zIndex="-1"
        >
          <Image
            src={textureDesign || ""}
            alt="texture-design"
            w="auto"
            h="auto"
            loading="lazy"
          />
        </Flex>

        <Accordion
          maxW="90%"
          mx="auto"
          mt={{ base: "2.812rem", lg: "4.375rem" }}
          pb={{ base: "4.375rem", lg: "5rem" }}
          defaultIndex={[0]}
          allowMultiple
          ref={scrollRef}
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="0.2s ease 0.3s"
        >
          {data.map((monthData) => (
            <AccordionItem
              key={monthData.month}
              bg="neon"
              borderRadius="1.25rem"
              className="bg-[#DBFD67] mb-2 md:mb-6"
              p="0"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    as="div"
                    role="button"
                    p={{
                      base: "1rem",
                      lg: "22px 61px 22px 61px",
                    }}
                    w="unset"
                    justifyContent="space-between"
                  >
                    <Flex
                      className="ppFormula-font"
                      gap={{ base: "0.655rem", lg: "2.312rem" }}
                      alignItems="center"
                    >
                      <p className="ppFormula-font text-base md:text-3xl text-black uppercase italic tracking-[0.01em]c">
                        FOR {monthData.month}' 24
                      </p>
                    </Flex>
                    <AccordionIcon className="text-lg md'text-3xl" />
                  </AccordionButton>

                  <AccordionPanel p="0">
                    <Box className="bg-black ">
                      <Flex
                        bg="rgba(102, 102, 102, 0.3)"
                        className="flex gap-2 md:gap-6  justify-between items-stretch bg-[#666666] bg-opacity-30  px-4 md:px-14 py-2 md:py-5"
                      >
                        {monthData.games.map((game) => (
                          <Box
                            key={game.gameName}
                            w="33%"
                            bg={
                              selectedGames[monthData.month] === game.gameName
                                ? "#E7327C"
                                : "#3B3B3B"
                            }
                            _hover={{ bg: "#E7327C" }}
                            cursor="pointer"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            className="md:py-4 py-2"
                            borderRadius="md"
                            onClick={() =>
                              selectGame(monthData.month, game.gameName)
                            }
                          >
                            <Image
                              className="w-1/2"
                              src={`./${game.gameName.toLowerCase()}.svg`}
                              alt={game.gameName}
                            />
                          </Box>
                        ))}
                      </Flex>

                      {selectedGames[monthData.month] && (
                        <div className="overflow-x-scroll">
                          <div className="w-full min-w-[500px]">
                            <Box className="bg-[#1B1C1D]  w-full px-4 md:px-16 py-3 md:py-7 flex justify-start items-center">
                              <Flex className="w-full">
                                <Text className="text-xs md:text-base uppercase text-white helvetica-font font-normal w-[15%] md:w-[22%]">
                                  Rank
                                </Text>
                                <Text className="text-xs md:text-base uppercase text-white helvetica-font font-normal w-[25%] md:w-[22%]">
                                  In Game Name
                                </Text>
                                <Text className="text-xs md:text-base uppercase text-white helvetica-font font-normal w-[25%] md:w-[22%]">
                                  Real Name
                                </Text>
                                <Text className="text-xs md:text-base uppercase text-white helvetica-font font-normal w-[30%] md;w-[34%]">
                                  College Name
                                </Text>
                              </Flex>
                            </Box>

                            {monthData.games
                              .find(
                                (g) =>
                                  g.gameName === selectedGames[monthData.month]
                              )
                              ?.finalists.map((finalist) => (
                                <Box
                                  key={finalist.inGameName}
                                  className="bg-[#333333] bg-opacity-30 w-full px-4 md:px-16 py-[13px] md:py-7 flex justify-start items-center"
                                >
                                  <Flex className="w-full">
                                    <Text className="text-xs md:text-base text-white/60 helvetica-font font-normal w-[15%] md:w-[22%] uppercase">
                                      #{finalist.rank}
                                    </Text>
                                    <Text className="text-xs md:text-base text-white/60 helvetica-font font-normal w-[25%] md:w-[22%] uppercase">
                                      {finalist.inGameName}
                                    </Text>
                                    <Text className="text-xs md:text-base text-white/60 helvetica-font font-normal w-[25%] md:w-[22%] uppercase">
                                      {finalist.realName}
                                    </Text>
                                    <Flex
                                      className="w-[30%] md:w-[34%]"
                                      alignItems="center"
                                      gap="2"
                                    >
                                      <Image
                                        src="./college-icon.svg"
                                        alt="college icon"
                                      />
                                      <Text className="text-xs md:text-base text-white/60 helvetica-font font-normal uppercase">
                                        {finalist.collegeName}
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </Box>
                              ))}
                          </div>
                        </div>
                      )}
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default TournamentDashboard;
