"use client";
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <Flex
        className="footer-container flex-col w-full overflow-x-hidden bg-#171819"
        borderTopRadius="2.5rem"
      >
        <Flex
          className="footer-top-container px-1.5rem lg:px-5rem pt-2rem lg:pt-10 pb-4 lg:pb-2.5rem w-full justify-center lg:justify-between
        items-center flex-col lg:flex-row max-screen-desktop mx-auto"
          borderTopRadius="3.75rem"
        >
          <Heading className="ppFormula-font text-white flex gap-2 font-light text-1.75rem uppercase lg:text-7xl italic">
            Register
            <Text as="span" className="outline-text">
              GAMES BEGIN
            </Text>
          </Heading>
          <div className="clip-bg-pink rounded-lg max-lg:hidden">
            <button className="custom-button-pink px-20 py-5 text-lg text-white rounded-lg bg-cover helvetica-font">
              PRE-REGISTER NOW
            </button>
          </div>
        </Flex>
        <Flex
          className="footer-bottom-container pt-3.125rem lg:pt-3.813rem pb-4 lg:pb-1.375rem w-full bg-black flex-col"
          borderTopRadius="2.5rem"
        >
          <Flex
            className="logo-container lg:px-1.5rem pb-3.125rem max-screen-desktop lg:mx-auto ml-1.56rem"
            display={{ lg: "none", base: "flex" }}
          >
            <Image
              src="../footer-logo.svg"
              alt="footer-logo"
              width="28%"
              height="auto"
              loading="lazy"
            />
          </Flex>

          <Flex className="navigation-link-container w-full lg:justify-between px-1.5rem lg:px-5rem max-screen-desktop mx-auto">
            <Flex className="left-link-container flex-col lg:flex-row">
              <Link
                href="/about"
                className="helvetica-font text-12px opacity-65% text-white hover:text-pink no-underline hover:no-underline"
              >
                ABOUT
              </Link>
              <Link
                href="/schedule"
                className="helvetica-font opacity-65% text-white hover:text-pink text-12px lg:pl-2rem pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
                SCHEDULE
              </Link>
              <Link
                href="/rules"
                className="helvetica-font opacity-65% text-white hover:text-pink text-12px lg:pl-2rem pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
                RULES
              </Link>
            </Flex>
            <Flex className="right-link-container gap-8 flex-col lg:flex-row ml-3.688rem lg:ml-0">
              <Link
                href="/rules"
                className="helvetica-font text-12px opacity-65% text-white hover:text-pink no-underline hover:no-underline"
              >
                RULES
              </Link>
              <Link
                href="/rules"
                className="helvetica-font text-12px opacity-65% text-white hover:text-pink no-underline hover:no-underline"
              >
      NEWS & UPDATES
              </Link>
              <Link
                href="/rules"
                className="helvetica-font text-12px opacity-65% text-white hover:text-pink no-underline hover:no-underline"
              >
             MEDIA
              </Link>
            </Flex>
          </Flex>
          <Flex
            className="social-links-container justify-between w-full items-baseline lg:pt-2.25rem lg:pb-5.313rem 
          px-1.5rem lg:px-5rem flex-col-reverse lg:flex-row max-screen-desktop mx-auto"
          >
            <Flex className="social-icons-container mb-2.5rem lg:mb-0">
              <Link
                href="https://bit.ly/3RuxuI2"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:opacity-70%"
              >
                <Image
                  src="../twitter.svg"
                  alt="twitter"
                  className="h-auto w-auto"
                />
              </Link>

              <Link
                href="https://bit.ly/crdiscordweb"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="../Discord-desktop.svg"
                  alt="Discord"
                  className="h-auto w-auto"
                />
              </Link>

              <Link
                href="https://bit.ly/3rgM7nQ"
                target="_blank"
                rel="noopener noreferrer"
                ml={{ lg: "1.188rem", base: "1.25rem" }}
                _hover={{ opacity: "70%" }}
              >
                <Image
                  src="../YouTube.svg"
                  alt="YouTube"
                  height="auto"
                  width="auto"
                />
              </Link>
              <Link
                href="https://bit.ly/3ZkSset"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="../Insta.svg"
                  alt="insta"
                  className="h-auto w-auto"
                />
              </Link>
              <Link
                href="https://bit.ly/3PCbPMO"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="../facebook.svg"
                  alt="facebook"
                  className="h-auto w-auto"
                />
              </Link>
            </Flex>

            <Flex
              className="logo-container"
              display={{ base: "none", lg: "block" }}
            >
              <Image
                src="../footer-logo-s2.svg"
                alt="footer-logo"
                className="h-auto w-auto"
                loading="lazy"
              />
            </Flex>

            <Flex className="mail-link-container pt-3.25rem lg:pt-0 pb-1.875rem lg:pb-0">

              


              <Link
                href="mailto:hello@collegerivals.com"
                color="#ffffff"
                className="helvetica-light-font"
                fontSize={{ lg: "1.563rem", base: "1.25rem" }}
                borderBottom="1px solid rgba(180, 180, 180, 0.5)"
                _hover={{ textDecoration: "none", opacity: "70%" }}
              >
                hello@collegerivals.com
              </Link>
            </Flex>
          </Flex>
          <Divider
            className="opacity-30 lg:opacity-20 w-full max-screen-desktop mx-auto"
            borderColor="#B4B4B4"
          />
          <Flex
            className="copyright-term-privacy-container justify-between px-1.5rem lg:px-5rem mt-1.5rem flex-col-reverse lg:flex-row w-full 
          max-screen-desktop mx-auto"
          >
            <Flex justifyContent={{ base: "flex-end", lg: "start" }}>
              <Text className="helvetica-extralight-font text-white text-xs lg:text-base mt-0.625rem lg:mt-0 opacity-30%">
                Copyright 2023 College Rivals
              </Text>
            </Flex>
            <Flex className="w-full lg:w-auto justify-between lg:justify-start">
              <Link
                href="/terms-of-service"
                className="helvetica-extralight-font text-white opacity-30% no-underline text-xs lg:text-sm hover:no-underline lg:mr-4.624rem"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                opacity="30%"
                className="helvetica-extralight-font text-white no-underline text-xs lg:text-sm hover:no-underline opacity-30%"
              >
                Privacy Policy
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
