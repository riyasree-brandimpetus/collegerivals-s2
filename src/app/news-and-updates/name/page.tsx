"use client";

import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import Navbar from "@/components/globalComponents/Navbar";
import Footer from "@/components/globalComponents/Footer";
import { useRef } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const scrollRef = useRef(null);
  return (
    <Box>
      <Navbar />

      <Box
        pl={{ base: "1.5rem", lg: "8.125rem" }}
        pr={{ base: "1.5rem", lg: "22rem" }}
      >
        <Heading
          className="ppFormula-font font-light"
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
          mt={{ base: "1.68rem", lg: "7.50rem" }}
          letterSpacing={{ base: "0.123rem", lg: "0.235rem" }}
          fontSize={{ base: "1.125rem", lg: "1.812rem" }}
          lineHeight={"100%"}
          color={"#EA337D"}
          fontStyle={"italic"}
        >
          NEWS
        </Heading>

        <Text
          className="helvetica-medium-font font-bold"
          as={motion.h1}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="1s linear"
          width={{ base: "109%", md: "89%", lg: "90%" }}
          mb={{ base: "1.875rem", lg: "2.93rem" }}
          mt={{ base: "0.625rem", lg: "1rem" }}
          letterSpacing={{ base: "0.045rem", lg: "0.08rem" }}
          lineHeight={"120%"}
          fontSize={{ base: "1.5rem", lg: "2.75rem" }}
        >
          Ampverse and DMI Finance Form Joint Venture to Unleash the Power of
          Esports in India
        </Text>

        <Image
          src="/Images/media/blog-hero.png"
          alt="blog-hero-img"
          width={{ base: "100%", lg: "100%" }}
        />

        <Flex
          className="helvetica-light-font"
          opacity={"0.8"}
          flexDirection={"column"}
          gap={{ base: "2rem", lg: "4rem" }}
          margin={"0 auto"}
          mt={{ base: "0.8rem", lg: "3.75rem" }}
          lineHeight={"150%"}
          fontSize={{ base: "0.875rem", lg: "1.375rem" }}
        >
          <Text
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
            Ampverse, Asia’s leading gaming ecosystem, and DMI Finance, the
            Non-Banking Financial Company (“NBFC”) of the DMI Group, have joined
            forces to shake up the esports industry in India. The companies have
            formed a joint venture to co-develop esports intellectual properties
            (IPs), as well as data-driven, tech-enabled products and services
            for gamers.
          </Text>

          <Text
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
            The partnership will leverage Ampverse’s expertise in gaming
            communities and IP, and tech-enabled marketing solutions, and DMI
            Finance’s prominent position in the digital consumer, MSME finance,
            and asset management across India. The first co-developed IP,
            College Rivals – Esports Series, is set to launch from June 2023
            across 25 college campuses in India, culminating in an event in
            Mumbai in December 2023.
          </Text>
          <Text
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
            Charlie Baillie, Co-Founder and Chief Strategy Officer of Ampverse,
            said, “After months of strategic planning, Ampverse and DMI Finance
            are proud to unveil our new joint venture, anchored by a common
            vision of realizing the immense potential of the booming esports and
            gaming industry in India. With a commitment to delivering the very
            best in gaming experiences and products, we are thrilled to embark
            on this exciting journey together. We are equally delighted to have
            a seasoned executive, Ashwin Haryani, joining our team to help drive
            our business forward and shape the future of gaming in India.”
            Spearheading Ampverse DMI’s activity in India as Country Manager to
            drive the joint venture to the next level, Ashwin Haryani, former VP
            Esports at gaming unicorn Mobile Premier League (MPL) and founder of
            GamingMonk, said “I’m excited to join Ampverse and DMI Finance to
            take gaming in India to the next level. Together, we’ll redefine
            esports and gaming intellectual properties, delivering exceptional
            experiences. I’m thrilled to be part of this transformative journey”
          </Text>
        </Flex>

        <Heading
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="1s linear"
          mt={{ base: "3.75rem", lg: "8.68remrem" }}
          mb={{ base: "2.450rem", lg: "4.43remrem" }}
          fontStyle={"italic"}
          fontSize={{ base: "1.75rem", lg: "3.75rem" }}
          lineHeight={{ base: "81%", lg: "100%" }}
          letterSpacing={{ base: "0.22rem", lg: "0.48rem" }}
          textTransform={"uppercase"}
          display={"flex"}
          textAlign={"left"}
          gap={{ base: "0.5rem", lg: "1.25rem" }}
          size={"3xl"}
          className="ppFormula-font font-light"
        >
          <Text as={"span"} color={"#000"}>
            READ
          </Text>{" "}
          <Text as={"span"} color={" #EA337D"}>
            NEXT STORY
          </Text>
        </Heading>

        <Image
          src="/textures-blog-page.svg"
          alt="textures-blog"
          position={"absolute"}
          left={"0"}
          top={{ base: "60%", lg: "50%" }}
          zIndex={"-1"}
        />

        <Image
          src="/rectangle-texture-blog-page.svg"
          alt="rect-texture"
          top={"0"}
          right={"0"}
          position={"absolute"}
          zIndex={"-1"}
        />

        <Image
          src="/svg/Wave.svg"
          alt="wave-svg"
          top={"0"}
          position={"absolute"}
          right={"0"}
          display={{ base: "none", lg: "unset" }}
        />

        <Card
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="1s linear"
          p={{
            base: "0.5rem 0.94rem 0.56rem 0.56rem",
            lg: "1.56rem 3rem 1.875rem 1.5rem",
          }}
          gap={{ base: "0.625rem", lg: "2.19rem" }}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          mb={{ base: "5rem", lg: "13.125rem" }}
          border={"1px solid #B4B4B4"}
        >
          <CardHeader p={"0"} flex={{ base: "96", lg: "233" }}>
            <Image
              src="/Images/news-update-hero.webp"
              alt="Image1-blog"
              width={"100%"}
              height="auto"
              borderRadius={{ base: "0.410rem", lg: "0.5rem" }}
            />
          </CardHeader>

          <CardBody p={"0"} flex={{ base: "197", lg: "656" }}>
            <Button
              className="helvetica-font"
              fontWeight={{ base: "500", lg: "700" }}
              color={"#000"}
              backgroundColor={"#DBFD67 !important"}
              fontSize={"0.75rem"}
              borderRadius={{ base: "2.33rem", lg: "2.93rem" }}
              mt={{ base: "0.93rem", lg: "1.25rem" }}
            >
              E-SPORTS
            </Button>
            <Text
              className="helvetica-font"
              textTransform={"capitalize"}
              color={"#000"}
              mt={{ base: "", lg: "0.625rem" }}
              fontSize={{ base: "0.875rem", lg: "1.875rem" }}
              lineHeight={"120%"}
            >
              Creating a platform that will give students a once in a lifetime
              opportunity
            </Text>
          </CardBody>
        </Card>
      </Box>

      <Footer />
    </Box>
  );
};

export default Page;
