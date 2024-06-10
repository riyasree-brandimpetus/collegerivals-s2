"use client"


import {
  Box,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const scheduleOnline = useBreakpointValue({
    base: "./schedule-mobile.svg",
    md: "./schedule.svg",
  });

  const scheduleOffline = useBreakpointValue({
    base: "./schedule-mobile-offline.svg",
    lg: "./schedule-desktop-offline.svg",
  });
  const scrollRef = useRef(null);
  return (
    <Box width="100%">
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
        transition="0.2s ease 0.01s"
        className="ppFormula-font mx-auto max-screen-desktop font-light tracking-wide lg:tracking-wider
         text-2rem lg:text-5rem text-center mt-1.575rem lg:mt-11.31rem italic leading-tight lg:leading-normal text-#333"
      >
        SCHEDULE
      </Heading>

      <Box
        p={{
          base: "6.687rem 1.5rem 0 1.437rem ",
          lg: "6.81rem 0.93rem 0 2.062rem ",
        }}
      >
        <Heading
          className="ppFormula-font font-light italic mb-[1.562rem] lg:mb-[2.343rem] text-[1.75rem] lg:text-[3.75rem] text-center text-#333"

        >
          ONLINE REGISTRATIONS
        </Heading>

        <Box
          className="w-full bg-white"
          ref={scrollRef}
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="1s linear"
        >
          <Image src={scheduleOnline} alt="schedule" className="w-full" />
        </Box>
      </Box>

      <Box
        className=" mb-0 lg:mb-0 bg-black"
        p={{
          base: "3.75rem 1.5rem 3.75rem 1.5rem",
          lg: "8.125rem 8.625rem 8.125rem 9.81rem",
        }}

      >
        <Heading
          className="ppFormula-font font-light italic mb-16 lg:mb-8.75rem text-1.75rem lg:text-3.75rem text-center text-white"

        >
          OFFLINE REGISTRATIONS
        </Heading>

        <Flex
          className="w-full justify-center"
          ref={scrollRef}
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="1s linear"
        >
          <Image src={scheduleOffline} alt="schedule" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
