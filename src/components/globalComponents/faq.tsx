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
import React from "react";

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
    <>
      <Flex
        className="faq-section"
        bg="linear-gradient(180deg, rgba(180, 180, 180, 0.78) 0%, rgba(180, 180, 180, 0) 100%)"
        pt={{ base: "3.125rem", lg: "8.625rem" }}
        px={{ base: "1.5rem", lg: "5rem" }}
        flexDirection="column"
        position="relative"
        overflowX="hidden"
      >
        <Heading
          className="ppFormula-font"
          fontStyle="italic"
          fontSize={{ base: "1.75rem", lg: "3.75rem" }}
          pb={{ base: "1.875rem", lg: "4.25rem" }}
          borderBottom="1px dotted black"
          width="100%"
          fontWeight={"300"}
        >
          FREQUENTLY ASKED{" "}
          <Text as="span" className="text-pink">
            QUESTIONS
          </Text>
        </Heading>
        <Flex
          className="questions-container"
          flexDirection="column"
          width="100%"
          pt="1.438rem"
        >
          <Flex className="faq-element" width="100%">
            <Accordion allowMultiple width="100%">
              <AccordionItem borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      pb="0.75rem"
                      borderBottom="1px dotted black"
                      width="100%"
                    >
                      <Text
                        className="helvetica-font text-pink"
                        fontSize={{ sm: "1.125rem", lg: "1.625rem" }}
                        pr={{ base: "0.438rem", lg: "1.438rem" }}
                        fontStyle="italic"
                      >
                        01
                      </Text>
                      <Box width="100%">
                        <h2 style={{ width: "100%" }}>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            p="0"
                            display="flex"
                            alignItems={{ base: "flex-start" }}
                            width="100%"
                            justifyContent={{ lg: "space-between" }}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              className="helvetica-medium-font"
                              fontSize={{ base: "1rem", lg: "1.875rem" }}
                            >
                              How can I participate in College Rivals 2023?
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
                        </h2>
                        <AccordionPanel
                          px={0}
                          className="helvetica-light-font"
                          fontSize={{ base: "0.875rem", lg: "1.125rem" }}
                        >
                          To participate in College Rivals 2023, you need to be
                          a college student from one of the top 25 colleges in
                          India. Keep an eye out for the registration drive and
                          follow the instructions to sign up and join the
                          thrilling esports competition.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem mt="1.438rem">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      pb="0.75rem"
                      borderBottom="1px dotted black"
                      width="100%"
                    >
                      <Text
                        className="helvetica-font text-pink"
                        fontSize={{ sm: "1.125rem", lg: "1.625rem" }}
                        pr={{ base: "0.438rem", lg: "1.438rem" }}
                        fontStyle="italic"
                      >
                        02
                      </Text>
                      <Box width="100%">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            p="0"
                            display="flex"
                            alignItems="flex-start"
                            width="100%"
                            justifyContent="space-between"
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              className="helvetica-medium-font"
                              fontSize={{ base: "1rem", lg: "1.875rem" }}
                            >
                              What gaming platforms and titles are included in
                              College Rivals?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross-icon"
                              />
                            ) : (
                              <Image
                                src="./faq-plus-icon.svg"
                                alt="faq-plus-icon"
                                height="auto"
                                width="auto"
                                mt="5px"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          px={0}
                          className="helvetica-light-font"
                          fontSize={{ base: "0.875rem", lg: "1.125rem" }}
                        >
                          To participate in College Rivals 2023, you need to be
                          a college student from one of the top 25 colleges in
                          India. Keep an eye out for the registration drive and
                          follow the instructions to sign up and join the
                          thrilling esports competition.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem mt="1.438rem" borderTopWidth="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex
                      pb="0.75rem"
                      borderBottom="1px dotted black"
                      width="100%"
                    >
                      <Text
                        className="helvetica-font text-pink"
                        fontSize={{ sm: "1.125rem", lg: "1.625rem" }}
                        pr={{ base: "0.438rem", lg: "1.438rem" }}
                        fontStyle="italic"
                      >
                        03
                      </Text>
                      <Box width="100%">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            p="0"
                            display="flex"
                            alignItems="flex-start"
                            width="100%"
                            justifyContent="space-between"
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              className="helvetica-medium-font"
                              fontSize={{ base: "1rem", lg: "1.875rem" }}
                            >
                              Will there be offline events for College Rivals?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross-icon"
                              />
                            ) : (
                              <Image
                                src="./faq-plus-icon.svg"
                                alt="faq-plus-icon"
                                height="auto"
                                width="auto"
                                mt="5px"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          px={0}
                          className="helvetica-light-font"
                          fontSize={{ base: "0.875rem", lg: "1.125rem" }}
                        >
                          To participate in College Rivals 2023, you need to be
                          a college student from one of the top 25 colleges in
                          India. Keep an eye out for the registration drive and
                          follow the instructions to sign up and join the
                          thrilling esports competition.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>

              <AccordionItem mt="1.438rem" borderY="0px">
                {({ isExpanded }) => (
                  <>
                    <Flex width="100%">
                      <Text
                        className="helvetica-font text-pink"
                        fontSize={{ sm: "1.125rem", lg: "1.625rem" }}
                        pr={{ base: "0.438rem", lg: "1.438rem" }}
                        fontStyle="italic"
                      >
                        04
                      </Text>
                      <Box width="100%">
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            p="0"
                            display="flex"
                            alignItems="flex-start"
                            width="100%"
                            justifyContent="space-between"
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              className="helvetica-medium-font"
                              fontSize={{ base: "1rem", lg: "1.875rem" }}
                            >
                              What are the rewards and prizes for College Rivals
                              participants?
                            </Box>
                            {isExpanded ? (
                              <Image
                                src="./faq-cross-icon.svg"
                                alt="faq-cross-icon"
                              />
                            ) : (
                              <Image
                                src="./faq-plus-icon.svg"
                                alt="faq-plus-icon"
                                height="auto"
                                width="auto"
                                mt="5px"
                                loading="lazy"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          px={0}
                          className="helvetica-light-font"
                          fontSize={{ base: "0.875rem", lg: "1.125rem" }}
                        >
                          To participate in College Rivals 2023, you need to be
                          a college student from one of the top 25 colleges in
                          India. Keep an eye out for the registration drive and
                          follow the instructions to sign up and join the
                          thrilling esports competition.
                        </AccordionPanel>
                      </Box>
                    </Flex>
                  </>
                )}
              </AccordionItem>



            </Accordion>
          </Flex>
        </Flex>
        <Image
          src={faqDesignSrc}
          alt="faq-design"
          width={{ lg: "auto", base: "50%" }}
          height="auto"
          loading="lazy"
          position="absolute"
          top={{ lg: "-65%", base: "-41%" }}
          right="0%"
        />
      </Flex>
      <Image
        src={bottomDesignSrc}
        alt="bottom-design"
        width="100%"
        height="auto"
        objectFit="cover"
        position="relative"
        zIndex="-1"
        mt={{ lg: "-14rem", base: "-3rem" }}
        mb={{ lg: "-6rem", base: "-3rem" }}
        loading="lazy"
      />
    </>
  );
};

export default FAQ;
