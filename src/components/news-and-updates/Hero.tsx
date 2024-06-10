"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Image,
  transition,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import RivalsFlex from "../globalComponents/RivalsFlex";

interface CardData {
  imageSrc: string;
  text: string;
  link: string;
}

const cardData: CardData[] = [
  // 1
  {
    imageSrc: "/news-image-one.png",
    text: "College Rivals, India’s largest collegiate esports IP, is coming to your city!",
    link: "https://www.insidesport.in/esports-college-rivals-indias-largest-collegiate-esports-ip-is-coming-to-your-city/",
  },
  {
    imageSrc: "/news-image-two.png",
    text: "Ampverse and DMI Created a Landmark Partnership to Ignite India's Esports Landscape with 'College Rivals'",
    link: "https://www.indiatodaygaming.com/story/ampverse-and-dmi-created-a-landmark-partnership-to-ignite-indias-esports-landscape-with-college-rivals-2851",
  },
  {
    imageSrc: "/news-image-three.png",
    text: "College Rivals Games, Dates, Format, Prize Pool and Other Details Out; Here Is How To Register Yourself or Your Team",
    link: "https://in.ign.com/esports/192607/news/college-rivals-games-dates-format-prize-pool-and-other-details-out",
  },
  {
    imageSrc: "/news-image-four.png",
    text: "College Rivals, the largest esports competition arrives in Delhi",
    link: "https://www.insidesport.in/esports-college-rivals-the-largest-esports-competition-arrives-in-delhi/",
  },
  {
    imageSrc: "/news-image-five.png",
    text: "College Rivals: Esports Athlete Scout Invites Students to Join the Tournament, All You Need to Know",
    link: "https://in.ign.com/india/193344/news/college-rivals-esports-athlete-scout-invites-students-to-join-the-tournament",
  },
  {
    imageSrc: "/news-image-six.png",
    text: "Hyderabad hosts College Rivals pan-India esports showdown",
    link: "https://indiantelevision.com/television/tv-channels/sports/hyderabad-hosts-college-rivals-pan-india-esports-showdown-230929",
  },
  {
    imageSrc: "/news-image-seven.png",
    text: "Ampverse DMI partners with top brands for College Rivals",
    link: "https://www.insidesport.in/esports-ampverse-dmi-unveils-partnership-with-top-brands-for-college-rivals/",
  },
  {
    imageSrc: "/news-image-eight.png",
    text: "Ampverse DMI unveils partnership with top brands Philips, JIO Games, Red Bull, Nostra, and Glance for its esports collegiate intellectual property, “College Rivals”",
    link: "https://www.passionateinmarketing.com/ampverse-dmi-unveils-partnership-with-top-brands-philips-jio-games-red-bull-nostra-and-glance-for-its-esports-collegiate-intellectual-property-college-rivals/",
  },
  {
    imageSrc: "/news-image-nine.png",
    text: "College Rivals Games, Dates, Format, Prize Pool and Other Details Out; Here Is How To Register Yourself or Your Team",
    link: "https://in.ign.com/esports/192607/news/college-rivals-games-dates-format-prize-pool-and-other-details-out",
  },
];

const CardComponent = ({ imageSrc, text, link }: CardData) => {
  const router = useRouter();
  const scrollRef = useRef(null);
  const arrow = useBreakpointValue({
    base: "./Images/media/mobile-white-upright-arrow.svg",
    lg: "./Images/media/desk-upright-arrow.svg",
  });
  return (
    <Card
      backgroundColor={"#F1F1F1"}
      ref={scrollRef}
      as={motion.div}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition="1.5s ease-in-out"
      borderRadius={{ base: "0.75rem", lg: "1.25rem" }}
      display={"flex"}
      flexDirection={{ base: "row", lg: "column" }}
      gap={{ base: "1rem", lg: "1.25rem" }}
      position="relative"
      zIndex="5"
      className="p-[0.625rem] sm:py-[2rem] sm:px-[1.6rem]"
    >
      <CardHeader className="lg:h-64 w-[30%] sm:w-[15%] lg:w-auto p-0 rounded-[0.875rem] overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover news-card-image"
        />
      </CardHeader>
      <CardBody
        className="helvetica-medium-font news-card-body flex flex-col items-start"
        fontSize={"0.75rem"}
        lineHeight={"1.05rem"}
        color={"#000"}
        display="flex"
        flexDirection="column"
        p={"0"}
        flex={{ base: "183", lg: "unset" }}
      >
        <Text
          className="helvetica-medium-font font-bold"
          color={"#000"}
          fontSize={{ base: "0.875rem", lg: "1.25rem" }}
          lineHeight={"129%"}
          width={{ base: "", lg: "90%" }}
        >
          {text}
        </Text>
        <a
          className="news-card-button cursor-pointer flex items-center mt-[1.111rem] lg:mt-[1.46rem] font-normal leading-3 helvetica-light-font text-[0.75rem] lg:text-[0.9375rem] hover:opacity-[80%] hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          READ <Image src={arrow} alt="arrow" />
        </a>
      </CardBody>
    </Card>
  );
};

const Hero = () => {
  const scrollRef = useRef(null);
  // using use ref to manipulate the virtual dom to do the hover effect on images when the hover is on the read button of a respective class
  const imageRefs = useRef<HTMLElement[]>([]);
  const bgImageRefs = useRef<HTMLElement[]>([]);
  const buttonRefs = useRef<HTMLElement[]>([]);
  const bgButtonRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    imageRefs.current = Array.from(
      document.querySelectorAll(".news-card-image")
    );

    bgImageRefs.current = Array.from(
      document.querySelectorAll(".news-card-bg-image")
    );
    buttonRefs.current = Array.from(
      document.querySelectorAll(".news-card-button")
    );
    bgButtonRefs.current = Array.from(
      document.querySelectorAll(".news-card-bg-button")
    );

    buttonRefs.current.forEach((button, index) => {
      button.addEventListener("mouseenter", () => {
        if (imageRefs.current[index]) {
          imageRefs.current[index].style.transform = "scale(1.1)";
          imageRefs.current[index].style.transition =
            "transform 0.75s ease-in-out";
        }
      });

      button.addEventListener("mouseleave", () => {
        if (imageRefs.current[index]) {
          imageRefs.current[index].style.transform = "scale(1)";
        }
      });
    });

    bgButtonRefs.current.forEach((button, index) => {
      button.addEventListener("mouseenter", () => {
        if (bgImageRefs.current[index]) {
          bgImageRefs.current[index].style.backgroundSize = "135%";
        }
      });

      button.addEventListener("mouseleave", () => {
        if (bgImageRefs.current[index]) {
          bgImageRefs.current[index].style.backgroundSize = "125%";
        }
      });
    });

    return () => {
      buttonRefs.current.forEach((button, index) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });

      bgButtonRefs.current.forEach((button, index) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <Box className="w-full max-screen-desktop mx-auto px-6 lg:px-20">
      <Heading
        ref={scrollRef}
        as={motion.h1}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.5s linear"
        className="ppFormula-font pb-7 lg:pb-16 font-light mt-5.313rem lg:mt-11.313rem text-#333 text-center text-2rem lg:text-5rem italic leading-100% tracking-0.22rem lg:tracking-0.55rem uppercase"
      >
        news & updates
      </Heading>
      <Box
        ref={scrollRef}
        as={motion.h1}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.5s linear"
        className="w-full h-auto"
      >
        <RivalsFlex />
      </Box>
      <SimpleGrid
        placeContent="center"
        gridTemplateColumns={{
          base: " repeat(1, 100%)",
          lg: "repeat(3, auto)",
        }}
        columnGap={"0.75rem"}
        gridGap={{ base: "0.75rem", lg: "1.25rem" }}
        className="pt-3 pb-20 lg:pb-48 auto-rows-fr"
      >
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            imageSrc={card.imageSrc}
            text={card.text}
            link={card.link}
          />
        ))}
      </SimpleGrid>{" "}
    </Box>
  );
};

export default Hero;
