"use client";

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
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const finalists = [
  {
    svg: "",
    title: "NEW DELHI FINALISTS",
    students: [
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
    ],
  },
  {
    svg: "",
    title: "MUMBAI FINALISTS",
    students: [
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
    ],
  },
  {
    svg: "",
    title: "BANGALORE FINALISTS",
    students: [
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
    ],
  },
  {
    svg: "",
    title: "HYDERABAD FINALISTS",
    students: [
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
      {
        studentName: "Rajesh Kuthrapalli",
        studentImg: "",
        universityName: "Indraprastha University",
        universityImg: "",
      },
    ],
  },
];

const Icon2 = ({ fill } = { fill: "" }) => (
  <Icon width="17" height="18" viewBox="0 0 17 18" fill="none">
    <path
      d="M1.41529 4.27966H15.582C15.7463 4.27966 15.8894 4.16704 15.926 4.00695C15.9645 3.84616 15.8865 3.68254 15.7399 3.60816L8.62772 0.0374536C8.52784 -0.0128381 8.40955 -0.0121297 8.30897 0.0374536L1.2545 3.60887C1.10858 3.68324 1.03208 3.84829 1.07033 4.00766C1.10858 4.16704 1.25166 4.27966 1.41529 4.27966Z"
      fill={fill}
    />
    <path d="M2.125 4.98438H4.25V11.3594H2.125V4.98438Z" fill={fill} />
    <path d="M7.08203 4.98438H9.91536V11.3594H7.08203V4.98438Z" fill={fill} />
    <path d="M12.75 4.98438H14.875V11.3594H12.75V4.98438Z" fill={fill} />
    <path
      d="M1.41797 12.4245V13.487H15.5846V12.4245C15.5846 12.229 15.4253 12.0703 15.2305 12.0703H1.77214C1.57664 12.0703 1.41797 12.229 1.41797 12.4245Z"
      fill={fill}
    />
    <path
      d="M16.6458 14.1953H0.354167C0.158667 14.1953 0 14.354 0 14.5495V16.6745C0 16.8693 0.158667 17.0286 0.354167 17.0286H16.6458C16.8406 17.0286 17 16.8693 17 16.6745V14.5495C17 14.354 16.8406 14.1953 16.6458 14.1953Z"
      fill={fill}
    />
  </Icon>
);

const Icon1 = () => (
  <Icon
    height="29"
    viewBox="0 0 46 29"
    fill="none"
    width={{ base: "1.718rem", lg: "2.875rem" }}
  >
    <path
      d="M46 28.7839H0V25.5156H46V28.7839ZM0.707692 28.0857H45.2923V26.2139H0.707692V28.0857Z"
      fill="#050607"
    />
    <path
      d="M7.21343 26.0913L6.77078 25.5844C5.23099 23.8172 3.50772 21.8401 1.58956 20.4405C1.90021 22.1974 2.0329 24.3181 2.05087 25.8592L1.34318 25.8673C1.32348 24.1824 1.15036 21.567 0.726713 19.7405L0.533203 18.9062L1.26301 19.3693C3.55472 20.8227 5.54856 23.1104 7.30742 25.1288L7.74904 25.6352L7.21343 26.0913Z"
      fill="#050607"
    />
    <path
      d="M8.94016 22.3094C6.16433 21.1229 3.28035 20.2862 1.02734 20.0131L1.11373 19.3203C3.43101 19.6009 6.38618 20.457 9.22144 21.6684L8.94016 22.3094Z"
      fill="#050607"
    />
    <path
      d="M3.17374 20.0916L2.53516 19.7909C5.48825 13.6804 8.25717 10.1312 11.2497 8.62115L12.0938 8.19531L11.7386 9.06268C10.9162 11.0726 10.5008 17.2379 10.5537 19.1969L9.84602 19.2154C9.8049 17.6797 10.0886 12.4135 10.7977 9.68865C8.25751 11.3327 5.75536 14.7496 3.17374 20.0916Z"
      fill="#050607"
    />
    <path
      d="M10.6637 16.588L9.98438 16.3937C10.9848 12.9914 16.5312 3.31331 20.8994 1.02352L22.8514 0L21.3206 1.57346C19.3395 3.60959 18.0897 6.90619 17.1774 9.31293C17.0084 9.7582 16.8519 10.1707 16.7057 10.5356L16.0478 10.2792C16.1926 9.91742 16.3474 9.50931 16.5143 9.06847C17.1892 7.28839 18.0444 5.03304 19.2521 3.11113C15.5174 6.5932 11.4668 13.8577 10.6637 16.588Z"
      fill="#050607"
    />
    <path
      d="M8.63474 25.8326L7.92773 25.7965C8.284 19.0263 14.8177 10.7901 19.1212 7.35573L19.3811 7.14844L19.7954 7.59746C20.2958 8.13752 20.6576 8.5279 21.0788 9.26435L20.4623 9.60734C20.0905 8.95681 19.7754 8.61109 19.3089 8.10752C15.1066 11.5773 8.97269 19.4071 8.63474 25.8326Z"
      fill="#050607"
    />
    <path
      d="M20.0047 26.018C18.6948 23.2383 17.8475 21.6665 14.5968 19.5513C12.2633 20.9301 10.6133 23.8097 9.63194 26.0112L8.98438 25.7302C10.0349 23.3733 11.8338 20.2639 14.4369 18.8363L14.6228 18.7344L14.8011 18.8486C18.3572 21.1234 19.295 22.8564 20.6468 25.7234L20.0047 26.018Z"
      fill="#050607"
    />
    <path
      d="M38.2993 26.0913L37.7637 25.6352L38.2053 25.1288C39.9642 23.1104 41.958 20.8227 44.2497 19.3693L44.9795 18.9062L44.786 19.7405C44.3624 21.567 44.1892 24.1824 44.1695 25.8673L43.4618 25.8592C43.4798 24.3181 43.6125 22.1974 43.9232 20.4405C42.005 21.8401 40.2817 23.8172 38.7419 25.5844L38.2993 26.0913Z"
      fill="#050607"
    />
    <path
      d="M36.5742 22.3094L36.293 21.6684C39.1282 20.457 42.0834 19.6009 44.4007 19.3203L44.4871 20.0131C42.2341 20.2862 39.3501 21.1229 36.5742 22.3094Z"
      fill="#050607"
    />
    <path
      d="M42.34 20.0906C39.9253 15.0941 37.3689 11.7204 34.7299 10.0433C35.5088 12.7743 36.1622 18.1745 36.1173 19.8554L35.4096 19.8369C35.4576 18.0381 34.6314 11.507 33.7752 9.41458L33.4199 8.54688L34.2641 8.97272C37.324 10.5169 40.256 14.1561 42.9786 19.7899L42.34 20.0906Z"
      fill="#050607"
    />
    <path
      d="M35.12 15.8826C34.3114 13.1336 30.0701 6.38455 26.2738 3.06237C27.9014 5.48206 29.0904 8.45068 29.8054 10.2352L29.1547 10.5103L29.1471 10.4916C28.2369 8.21986 26.543 3.99077 24.1912 1.57346L22.6604 0L24.6124 1.02352C28.9778 3.31194 34.7921 12.2624 35.7994 15.6883L35.12 15.8826Z"
      fill="#050607"
    />
    <path
      d="M37.0276 25.8187C36.6861 19.3326 30.6566 11.5515 26.5113 8.11343C26.0804 8.68349 25.8859 9.02273 25.5186 9.66269C25.4267 9.82293 25.3244 10.0012 25.2055 10.2058L24.5918 9.85805C24.71 9.65485 24.8116 9.4779 24.9028 9.31867C25.3313 8.572 25.5462 8.19696 26.1727 7.39915L26.3942 7.11719L26.6751 7.34153C30.922 10.7312 37.3738 18.9361 37.7346 25.7826L37.0276 25.8187Z"
      fill="#050607"
    />
    <path
      d="M18.6712 22.3887L17.969 22.2994C18.044 21.7273 19.836 8.24972 22.5206 4.37999L22.8168 3.95312L23.107 4.38374C25.3217 7.66636 27.1151 18.37 27.6192 22.2172L26.9171 22.3066C26.442 18.6782 24.8158 8.89342 22.8088 5.25008C20.8689 8.69363 19.2683 17.832 18.6712 22.3887Z"
      fill="#050607"
    />
    <path
      d="M25.5131 26.018L24.8711 25.7234C26.2229 22.8564 27.1607 21.1234 30.7168 18.8486L30.8951 18.7344L31.081 18.8363C33.6841 20.2639 35.483 23.3733 36.5335 25.7302L35.8859 26.0112C34.9046 23.8097 33.2546 20.9301 30.921 19.5513C27.6704 21.6665 26.8231 23.2383 25.5131 26.018Z"
      fill="#050607"
    />
  </Icon>
);

const EsportsAccordian = () => {
  const textureDesign = useBreakpointValue({
    lg: "./textures.svg",
    base: "./textures-mobile.svg",
  });

  let isOpen: any;
  const scrollRef = useRef(null);
  return (
    <Box className=" overflow-hidden max-w-[1440px] mx-auto">
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
        className="ppFormula-font  justify-center flex uppercase tracking-wide lg:tracking-wider leading-tight lg:leading-normal font-light italic text-[1.75rem] lg:text-[3.75rem] mt-[3.75rem] lg:mt-[12.187rem]"
        // gap={{ base: "1.25rem", lg: "1.25rem" }}
        size={"3xl"}
      >
        <Text as={"span"} color={"#000"} mr={{ base: "0.3rem", lg: "0.8rem" }}>
          the
        </Text>{" "}
        <Text as={"span"} className="text-pink">
          finalists 
        </Text>
      </Heading>

      <Flex
        className="absolute left-0 top-[51%] lg:top-[68%] w-[50%] lg:w-[auto]"
        zIndex="-1"
      >
        <Image
          src={textureDesign}
          alt="texture-design"
          className="w-auto h-auto "
          loading="lazy"
        />
      </Flex>

      <Accordion
        className="max-w-[90%] m-auto mt-[2.812rem] lg:mt-[4.375rem] rounded-lg"
        defaultIndex={[0]}
        allowMultiple
        pb={{ base: "4.375rem", lg: "5rem" }}
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
        {finalists.map(({ svg, title, students }, idx) => {
          return (
            <AccordionItem
              className="bg-neon"
              padding="0"
              key={title}
              mb={isOpen ? "" : "5px"}
              borderRadius={{
                base: idx === 0 ? "1.25rem 1.25rem 0px 0px" : "",
                lg: "unset",
              }}
            >
              {({ isExpanded }) => (
                <>
                  {(isOpen = isExpanded)}
                  <AccordionButton
                    as="div"
                    role="button"
                    padding={{
                      base: "",
                      lg: "1.56rem 2.8125rem 1.375rem 3.75rem",
                    }}
                    width={"unset"}
                    justifyContent="space-between"
                  >
                    <Flex
                      className="ppFormula-font"
                      gap={{ base: "0.655rem", lg: "2.312rem" }}
                      alignItems={"center"}
                    >
                      <Box>
                        <Icon1 />
                      </Box>
                      <Heading
                        fontSize={{ base: "1.125rem", lg: "1.625rem" }}
                        fontStyle={"italic"}
                        fontWeight={"800"}
                        lineHeight={"0.9112rem"}
                        letterSpacing={{ base: "0.0112rem", lg: "0.016rem" }}
                        textAlign="left"
                      >
                        {title}
                      </Heading>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel padding="0">
                    <Box>
                      {students.map(
                        (
                          {
                            studentName,
                            studentImg,
                            universityName,
                            universityImg,
                          },
                          studIdx
                        ) => (
                          <Flex
                            direction={{ base: "column", lg: "row" }}
                            backgroundColor={
                              studIdx % 2 === 0 ? "#333333" : "#FFFFFF"
                            }
                            color={studIdx % 2 === 0 ? "#FFFFFF" : "#333333"}
                            padding={{
                              base: "1rem 0 1rem 1.25rem",
                              lg: "1.56rem 0 1.375rem 3.75rem",
                            }}
                            key={studentName}
                            gap={{ base: "0.625rem", lg: "unset" }}
                          >
                            <Flex
                              flex="37"
                              alignItems="center"
                              gap={{ base: "0.44rem", lg: "1rem" }}
                            >
                              <Flex
                                borderRadius="100px"
                                width="26px"
                                height="26px"
                                overflow="hidden"
                              >
                                <Image
                                  src={"./Images/media/student-img.png"}
                                  alt="student face"
                                  objectFit="cover"
                                  height='auto'
                                  width='auto'
                                />
                              </Flex>
                              <Text>{studentName}</Text>
                            </Flex>
                            <Flex
                              flex="73"
                              alignItems="center"
                              gap={{ base: "0.3rem", lg: "1rem" }}
                            >
                              <Box>
                                <Icon2
                                  fill={
                                    studIdx % 2 === 0 ? "#FFFFFF" : "#333333"
                                  }
                                />
                              </Box>
                              <Text>{universityName}</Text>
                            </Flex>
                          </Flex>
                        )
                      )}
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default EsportsAccordian;
