import { Flex, Image, Link, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

const LivePlatforms = () => {
  const scrollRef = useRef(null);
  return (
    <Flex
      className="live-platforms-container relative"
      justifyContent="center"
      mb={{ lg: "8.75rem", base: "5rem" }}
    >
      <Flex
        className="px-6 lg:px-20 w-full lg:w-4/5"
        flexDirection="column"
        gap={{ base: "1.88rem", lg: "3.75rem" }}
        mt={{ base: "3.75rem", lg: "10rem" }}
        alignItems="center"
        position="relative"
      >
        <Heading
          // fontWeight={'300'}
          fontStyle={"italic"}
          fontSize={{ base: "1.75rem", lg: "3.75rem" }}
          lineHeight="100%"
          letterSpacing={{ base: "0.25rem", lg: "0.5rem" }}
          gap={{ base: "0.5rem", lg: "1.25rem" }}
          size={"3xl"}
          className="ppFormula-font font-light text-center"
          ref={scrollRef}
          as={motion.h2}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="0.4s  ease-in-out"
        >
          <Text as={"span"} color={"#000"}>
            WE ARE LIVE{" "}
          </Text>{" "}
          <Text as={"span"} color={" #EA337D"}>
            AT
          </Text>
        </Heading>

        <Flex
          className="max-width-desktop gap-4 lg:gap-5 justify-center grid grid-cols-3 lg:flex lg:flex-wrap-reverse mx-auto"
          // ref={scrollRef}
          // as={motion.div}
          // variants={{
          //   hidden: { opacity: -10, x: 55 },
          //   visible: { opacity: 1, x: 0 },
          // }}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // transition="0.2s  ease 0.8s"
        >
          <Link
            className="news-link"
            href="https://kick.com/collegerivalsin"
            isExternal
          >
            <Image alt="live-one" src="/live-one.png" />
          </Link>
          <Link
            className="news-link"
            href="https://loco.gg/streamers/FGRFS22K0M"
            isExternal
          >
            <Image alt="live-2" src="/live-two.svg" />
          </Link>
          <Link
            className="news-link"
            href="https://www.twitch.tv/collegerivalsin"
            isExternal
          >
            <Image alt="live-three" src="/live-three.svg" />
          </Link>
          <Link
            className="news-link"
            href="https://www.youtube.com/@CollegeRivalsIn/featured"
            isExternal
          >
            <Image alt="live-four" src="/live-four.svg" />
          </Link>
          <Link
            className="news-link"
            href="https://www.facebook.com/collegerivalsin/"
            isExternal
          >
            <Image alt="live-five" src="/live-five.png" />
          </Link>
          <Link
            className="news-link"
            href="https://l.tv.jio/3e7d952f"
            isExternal
          >
            <Image alt="live-six" src="/live-six.svg" />
          </Link>
          <Link className="news-link" href="https://live.glance.com" isExternal>
            <Image alt="" src="/live-seven.svg" />
          </Link>
          <Link
            className="news-link"
            href="https://jiogames.page.link/E65jtv8CTb7nuAWKA?rf=10313789424998215"
            isExternal
          >
            <Image alt="live-eight" src="/live-eight.svg" />
          </Link>
          <Link
            className="news-link"
            href="https://rooter.app.link/ZKy7Nv0J1Cb"
            isExternal
          >
            <Image alt="live-nine" src="/live-nine.png" />
          </Link>
        </Flex>
      </Flex>
      <Image
        className="left-dotted-design absolute left-0  lg:left-0 bottom-[-68%] lg:bottom-[-79%] z-[-1]"
        src="text-left-design.svg"
        alt="text-left-design"
        loading="lazy"
      />
    </Flex>
  );
};

export default LivePlatforms;
