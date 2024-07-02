"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Graphics from "@/components/globalComponents/Graphics";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import LivePlatforms from "../aboutUs/LivePlatforms";
import VideoSlider from "./VideoSlider";
import Link from "next/link";

const MediaPage = () => {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box>
     
      <Graphics />

      <Heading
        ref={scrollRef}
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.4s ease-in-out"
        className="ppFormula-font font-light"
        textAlign={"center"}
        mb={{ base: "0.5rem", lg: "1.25rem" }}
        letterSpacing={{ base: "0.09rem", lg: "0.235rem" }}
        lineHeight={"100%"}
        mt={{ base: "1.58rem", lg: "8.25rem" }}
        color={"#EA337D"}
        fontStyle={"italic"}
        fontSize={{ base: "0.75rem", lg: "1.81rem" }}
      >
        CONTENT HUB
      </Heading>

      <Text
        ref={scrollRef}
        as={motion.h1}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.4s ease-in-out 0.3s"
        className="ppFormula-font font-light"
        margin={"0 auto"}
        textAlign={"center"}
        width={{ base: "80%", lg: "49%" }}
        mb={{ base: "2.5rem", lg: "2.81rem" }}
        letterSpacing={{ base: "0.26rem", lg: "0.55rem" }}
        lineHeight={"100%"}
        fontStyle={"italic"}
        fontSize={{ base: "2rem", lg: "5rem" }}
      >
        GRAB THE BEST SEAT IN THE HOUSE
      </Text>

      <Flex
        className="media-hero-image hidden"
        justifyContent={"center"}
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
        <Image
          src="/Images/media/content-img.webp"
          loading="lazy"
          alt="contenthub-img"
          width={{ base: "88%", lg: "88%" }}
          height="auto"
        />
      </Flex>

      <Flex
        className="meet-the-rivals-container hidden"
        backgroundColor={
          "(--cement-gradient, linear-gradient(180deg, #FFF 0%, #B4B4B4 52.84%, #B4B4B4 100%))"
        }
        gap={{ base: "1.875rem", lg: "2.125rem" }}
        flexDirection={"column"}
        mt={{ base: "3.75rem", lg: "10rem" }}
      >
        <Flex
          direction={"column"}
          gap={{ base: "0.625rem", lg: "1.25rem" }}
          textAlign={"center"}
        >
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
            transition="0.2s ease 0.4s"
            className="rival-heading ppFormula-font font-light"
            lineHeight={"100%"}
            letterSpacing={{ base: "0.227rem", lg: "0.487rem" }}
            fontSize={{ base: "1.75rem", lg: "3.75rem" }}
            fontStyle={"italic"}
          >
            <Text as={"span"} color={"#000"}>
              MEET THE
            </Text>{" "}
            <Text as={"span"} color={" #EA337D"}>
              RIVALS
            </Text>
          </Heading>

          <Text
            ref={scrollRef}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 55 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.2s ease 0.5s"
            className=" helvetica-light-font rival-description"
            margin={"0 auto"}
            width={{ base: "75%", lg: "55%" }}
            lineHeight={"140%"}
            fontSize={{ base: "0.875rem", lg: "1.625rem" }}
          >
            MEET THE FACES BEHIND THE NAMES. GET TO KNOW THEIR JOURNEYS, DREAMS,
            AND THE BURNING PASSION THAT FUELS THEIR PURSUIT OF GREATNESS.
          </Text>
        </Flex>

        <Flex
          className="rivals-container"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          gap={{ base: "2.5rem", lg: "1.5rem" }}
          maxWidth="75%"
          mx="auto"
        >
          <Flex
            ref={scrollRef}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 55 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.2s ease 0.6s"
            flex={"1"}
            className="rival1"
            flexDirection={"column"}
            gap={"1.25rem"}
            alignItems={"center"}
            textAlign={"center"}
          >
            {/* <Flex backgroundColor={"#EA337D"} borderRadius={"100%"}>
              <Image src="/Images/media/rival1.png"
                alt="rival-1"
              />
            </Flex> */}
            <Image
              src="/Images/media/rival1.webp"
              height="auto"
              width="auto"
              alt="rival-1"
              loading="lazy"
            />
            <Text
              className="helvetica-light-font"
              textAlign={"center"}
              justifyContent={"center"}
              backgroundColor={"#DBFD67"}
              fontSize={{ base: "0.875rem", lg: "1.125rem" }}
              display={"flex"}
              padding={"0.625rem 1.56rem"}
              color={"#000"}
              borderRadius={"1.875rem"}
            >
              MAYANK NAGPAL
            </Text>
            <Text
              className="helvetica-light-font "
              fontSize={{ base: "0,75rem", lg: "1.25rem" }}
              lineHeight={"120%"}
            >
              Symbiosis Law College, Pune
            </Text>
          </Flex>

          <Flex
            ref={scrollRef}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 55 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.2s ease 0.7s"
            flex={"1"}
            className="rival2"
            flexDirection={"column"}
            gap={"1.25rem"}
            alignItems={"center"}
            textAlign={"center"}
          >
            {/* <Flex backgroundColor={'#EA337D'} borderRadius={'100%'}>
              <Image src="/Images/media/rival2.png" alt="rival-1" />
            </Flex> */}
            <Image
              src="/Images/media/rival2.webp"
              height="auto"
              width="auto"
              loading="lazy"
              alt="rival-1"
            />
            <Text
              className="helvetica-light-font"
              textAlign={"center"}
              justifyContent={"center"}
              backgroundColor={"#DBFD67"}
              fontSize={{ base: "0.875rem", lg: "1.125rem" }}
              display={"flex"}
              padding={"0.625rem 1.56rem"}
              color={"#000"}
              borderRadius={"1.875rem"}
            >
              SAMEER YADAV
            </Text>
            <Text
              className="helvetica-light-font "
              fontSize={{ base: "0,75rem", lg: "1.25rem" }}
              lineHeight={"120%"}
            >
              Osmania University, Hyderabad
            </Text>
          </Flex>

          <Flex
            ref={scrollRef}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 55 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.2s ease 0.8s"
            flex={"1"}
            className="rival3"
            flexDirection={"column"}
            gap={"1.25rem"}
            alignItems={"center"}
            textAlign={"center"}
          >
            {/* <Flex backgroundColor={'#EA337D'} borderRadius={'100%'}>
              <Image src="/Images/media/rival3.png" alt="rival-1" />
            </Flex> */}
            <Image
              src="/Images/media/rival3.webp"
              height="auto"
              width="auto"
              loading="lazy"
              alt="rival-1"
            />
            <Text
              className="helvetica-light-font"
              textAlign={"center"}
              justifyContent={"center"}
              backgroundColor={"#DBFD67"}
              fontSize={{ base: "0.875rem", lg: "1.125rem" }}
              display={"flex"}
              padding={"0.625rem 1.56rem"}
              color={"#000"}
              borderRadius={"1.875rem"}
            >
              ABHISHEK SHARMA
            </Text>
            <Text
              className="helvetica-light-font "
              fontSize={{ base: "0,75rem", lg: "1.25rem" }}
              lineHeight={"120%"}
            >
              Stephen's College, New Delhi
            </Text>
          </Flex>
        </Flex>
      </Flex>

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
        transition="0.2s ease 0.8s"
        className="ppFormula-font font-light hidden"
        // mb={{ base: '1.875rem', lg: '4.375rem' }}
        mt={{ base: "3.75rem", lg: "10rem" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        lineHeight={"81%"}
        fontStyle={"italic"}
        letterSpacing={{ base: "0.227rem", lg: "0.487rem" }}
        fontSize={{ base: "1.75rem", lg: "3.75rem" }}
      >
        <Text as={"span"} color={"#000"}>
          behind the
        </Text>{" "}
        <Text as={"span"} color={" #EA337D"}>
          SCENES
        </Text>
      </Heading>

      <Flex
        className="hidden"
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        p={{
          base: "1.56rem 1.81rem 3.75rem 1.18rem",
          lg: "4.375rem 5.06rem 10rem 5.06rem",
        }}
        gap={{ base: "1.25rem", lg: "1.875rem" }}
      >
        <Flex
          direction={"column"}
          height={{ base: "50%", md: "60%", lg: "100%" }}
          width={{ base: "100%", md: "45%", lg: "50%" }}
          borderRadius={"0.375rem"}
          backgroundColor={"white"}
          p={{
            base: "0.875rem 1.06rem 1.875rem 1.125rem",
            lg: "1.125rem 1.35rem 3.25rem 1.35rem",
          }}
          gap={{ base: "1.25rem", lg: "1.25rem" }}
        >
          <Image
            src="/Images/media/behind-scenes1.webp"
            alt="behind-scenes1"
            objectFit={"cover"}
            borderRadius={"0.5rem"}
          />
          <Text
            fontSize={{ base: "14px", lg: "18px" }}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={{ base: "138%", lg: "120%" }}
          >
            Get an exclusive backstage pass to the making of College Rivals.
          </Text>
        </Flex>

        <Flex
          direction={"column"}
          height={{ base: "50%", md: "60%", lg: "100%" }}
          width={{ base: "100%", md: "45%", lg: "50%" }}
          borderRadius={"0.375rem"}
          backgroundColor={"white"}
          p={{
            base: "0.875rem 1.06rem 1.875rem 1.125rem",
            lg: "1.125rem 1.35rem 1.875rem 1.35rem",
          }}
          gap={{ base: "1.25rem", lg: "1.25rem" }}
        >
          <Image
            src="/Images/media/behind-scenes2.png"
            alt="behind-scenes1"
            objectFit={"cover"}
            borderRadius={"0.5rem"}
          />
          <Text
            fontSize={{ base: "14px", lg: "18px" }}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={{ base: "138%", lg: "120%" }}
          >
            Join us behind the scenes to witness the energy & dedication that
            powers College Rivals.
          </Text>
        </Flex>

        <Flex
          direction={"column"}
          height={{ base: "50%", md: "60%", lg: "100%" }}
          width={{ base: "100%", md: "45%", lg: "50%" }}
          borderRadius={"0.375rem"}
          backgroundColor={"white"}
          p={{
            base: "0.875rem 1.06rem 1.875rem 1.125rem",
            lg: "1.125rem 1.35rem 1.875rem 1.35rem",
          }}
          gap={{ base: "1.25rem", lg: "1.25rem" }}
        >
          <Image
            src="/Images/media/behind-scenes3.png"
            alt="behind-scenes1"
            objectFit={"cover"}
            borderRadius={"0.5rem"}
          />
          <Text
            fontSize={{ base: "14px", lg: "18px" }}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={{ base: "138%", lg: "120%" }}
            // width={{ base: "110", lg: "" }}
          >
            Feel the buzz and the excitement of creating an unforgettable
            esports spectacle.
          </Text>
        </Flex>
      </Flex>

      <Flex className="selected-video w-full justify-center px-6 lg:px-20">
        <Box
          className="h-auto cursor-pointer rounded-2xl w-full relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/MxvjvUp6H2Y?si=6uCxjoWM-0Jv_hEJ"
            className="w-full relative"
          >
            <video
              src="./anthem-video.mp4"
              className="h-full w-full relative"
              autoPlay
              loop
              muted
            />
            {isHovered && (
              <Box
                className="helvetica-font text-xs h-16 w-16 lg:h-20 lg:w-20 flex justify-center
         items-center top-27% left-38% lg:top-40% lg:left-46% rounded-50% bg-neon absolute uppercase cursor-pointer hover:drop-shadow-2xl media-play-div"
                // onClick={() =>
                //   handleVideoClick("https://www.youtube.com/shorts/CEo1C9tyrCY")
                // }
              >
                Play
              </Box>
            )}

            <Box
              className="helvetica-font text-xs h-16 w-16 lg:h-20 lg:w-20 flex justify-center
         items-center top-[35%] left-38% lg:top-40% lg:left-46% rounded-50% bg-neon absolute uppercase cursor-pointer hover:drop-shadow-2xl media-play-div md:hidden"
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/CEo1C9tyrCY")
              // }
            >
              Play
            </Box>
          </Link>
        </Box>
      </Flex>

      <VideoSlider />

      <LivePlatforms />

   
    </Box>
  );
};

export default MediaPage;
