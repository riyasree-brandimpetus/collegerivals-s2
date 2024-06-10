"use client";
import {
  Flex,
  Image,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { color } from "framer-motion";

const Navbar = ({ setIsOpen, isOpen }: any) => {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      className="navbarContainer max-screen-desktop mx-auto"
      height={isOpen ? "100vh" : "auto"}
    >
      <Flex className="w-full pl-1.5rem lg:pl-5.5rem pt-1.625rem justify-between items-center relative overflow-x-hidden">
        <Flex
          className="lg:w-[10%] xl:w-[20%]"
          display={isOpen ? "none" : "block"}
        >
          <Link href="/">
            <Image
              src="../small-logo.svg"
              alt="logo"
              className="h-auto w-auto"
            />
          </Link>
        </Flex>
        <Flex
          width={isOpen ? "100%" : "90%"}
          justifyContent={{ base: "flex-end", lg: "center" }}
          pr={{ base: "1.5rem", lg: 0 }}
          flexDirection={isOpen ? "column" : "row"}
          zIndex="2"
        >
          <Flex
            width={isOpen ? "100%" : "auto"}
            justifyContent={isOpen ? "space-between" : "start"}
          >
            <Flex width="20%" display={isOpen ? "block" : "none"}>
              <Image
                src="../small-logo.svg"
                alt="logo"
                className="h-auto w-auto"
              />
            </Flex>
            <IconButton
              aria-label="Toggle hamburger menu"
              display={{ base: "block", lg: "none" }}
              onClick={() => {
                handleToggle();
              }}
              background="transparent"
              _active={{ background: "transparent" }}
              _hover={{ background: "transparent" }}
              _focus={{ background: "transparent" }}
              icon={
                isOpen ? (
                  <Image
                    src="../cross-icon.svg"
                    alt="cross-icon"
                    className="h-auto w-auto"
                  />
                ) : (
                  <Flex className="justify-center items-center">
                    <Image
                      src="../hamburger-icon.svg"
                      alt="hamburger-icon"
                      className="h-auto w-auto"
                      loading="lazy"
                    />
                  </Flex>
                )
              }
            />
          </Flex>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={handleToggle}
            size="lg"
          >
            <DrawerOverlay />
            <DrawerContent>
              <Flex className="w-full px-1.5rem pt-1.625rem justify-between items-center">
                <Image
                  src="../small-logo.svg"
                  alt="logo"
                  className="h-auto w-auto"
                />
                <DrawerCloseButton className="static text-base" />
              </Flex>
              <DrawerBody>
                {/* Links */}
                <Flex
                  className="mobile-links-container links-container justify-start lg:justify-between items-center w-full lg:w-85% pr-0 lg:pr-32%
                  flex-col lg:flex-row h-full lg:h-auto pt-2.25rem gap-9"
                  display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
                >
                  <Flex className="flex-col text-center">
                    <Link
                      href="/about"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      ABOUT
                    </Link>
                    <Link
                      href="/schedule"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      SCHEDULE
                    </Link>

                    <Link
                      href="/rules"
                      color="black.500"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      RULES
                    </Link>

                    <Link
                      href="/contact-us"
                      color="black.500"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      CONTACT
                    </Link>
                    <Link
                      href="/news-and-updates"
                      color="black.500"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      NEWS & UPDATES
                    </Link>
                    <Link
                      href="/media"
                      color="black.500"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      MEDIA
                    </Link>
                    <Link
                      href="https://store.collegerivals.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
                    >
                      STORE
                    </Link>
                  </Flex>
                  <Flex
                    className="flex-col items-center mt-1.85rem"
                    display={{ base: "flex", lg: "none" }}
                  >
                    <Box
                      backgroundImage="url('/contact-bg.svg')"
                      className="bg-cover bg-center h-3.25rem lg:h-4.063rem w-15rem lg:w-22rem"
                    >
                      <Link
                        className="helvetica-font text-white italic h-full w-full flex justify-center items-center no-underline hover:no-underline"
                        href="/register"
                      >
                        REGISTER
                      </Link>
                    </Box>
                    <Flex className="mail-link-container pt-4.375rem lg:pt-0 pb-1.875rem lg:pb-0 w-full justify-center">
                      <Link
                        href="mailto:hello@collegerivals.com"
                        className="helvetica-light-font text-black text-xl lg:text-1.5rem no-underline hover:no-underline hover:opacity-70%"
                        borderBottom="1.29px solid black"
                      >
                        hello@collegerivals.com
                      </Link>
                    </Flex>
                    <Flex
                      className="social-links-container justify-between w-full items-baseline lg:pt-2.25rem  lg:pb-5.313rem px-1.5rem lg:px-5rem 
                      flex-col-reverse lg:flex-row"
                    >
                      <Flex className="social-icons-container mb-2.5rem lg:mb-0">
                        <Link
                          href="https://bit.ly/3RuxuI2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70%"
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
                            alt="Youtube"
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
                    </Flex>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Flex
            className="desktop-links-container justify-center lg:justify-between items-center w-full
             lg:w-92% flex-col lg:flex-row h-100vh lg:h-auto"
            display={{ base: "none", lg: "flex" }}
            right={isOpen ? 0 : { base: "-100%", lg: "0" }} // Updated to control the right position
            transition="right 0.3s ease-in-out"
          >
            <Flex className="gap-3rem">
              <Link
                href="/about"
                color="black.500"
                className="helvetica-font text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% hover:text-pink hover:opacity-100 hover:no-underline"
              >
                ABOUT
              </Link>
              <Link
                href="/schedule"
                color="black.500"
                className="helvetica-font text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% hover:text-pink hover:opacity-100 hover:no-underline"
              >
                SCHEDULE
              </Link>

              <Link
                href="/rules"
                color="black.500"
                className="helvetica-font text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% hover:text-pink hover:opacity-100 hover:no-underline"
              >
                RULES
              </Link>

              <Link
                href="/contact-us"
                color="black.500"
                className="helvetica-font text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% hover:text-pink hover:opacity-100 hover:no-underline"
              >
                CONTACT
              </Link>

              <Link
                href="/news-and-updates"
                color="black.500"
                className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
              >
                NEWS & UPDATES
              </Link>

              <Link
                href="/media"
                color="black.500"
                className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
              >
                MEDIA
              </Link>

              <Link
                href="https://store.collegerivals.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="black.500"
                className="helvetica-font hover:text-pink hover:opacity-100 text-1.375rem lg:text-xs mt-1.5rem lg:mt-0 opacity-65% no-underline hover:no-underline"
              >
                STORE
              </Link>
            </Flex>
            <Box
              // backgroundImage="url('/contact-bg.svg')"
              className="bg-cover bg-center mt-4 lg:mt-0 h-3.325rem lg:h-2.675rem w-15rem lg:w-12rem text-white"
            >
              <Link
                className="helvetica-font button-style bg-pink rounded-md  italic h-full
                w-full flex justify-center items-center text-0.813rem hover:no-underline "
                transform="skew(-12deg)"
                transition="0.4s all ease-out"
                filter="drop-shadow(8px 8px 02px #DBFD67)"
                href="/register"
              >
                REGISTER
                {/* CONTACT US */}
              </Link>
            </Box>
            <Flex
              className="flex-col mt-9.438rem"
              display={{ base: "flex", lg: "none" }}
            >
              <Flex className="mail-link-container pt-3.25rem lg:pt-0 pb-1.875rem lg:pb-0 w-full justify-center">
                <Link
                  href="mailto:hello@collegerivals.com"
                  className="helvetica-light-font text-black text-1.25rem lg:text-1.5rem hover:no-underline hover:opacity-70%"
                  borderBottom="1.29px solid black"
                >
                  hello@collegerivals.com
                </Link>
              </Flex>
              <Flex
                className="social-links-container justify-between w-full items-baseline lg:pt-2.25rem lg:pb-5.313rem px-1.5rem lg:px-5rem
                flex-col-reverse lg:flex-row"
              >
                <Flex className="social-icons-container mb-2.5rem lg:mb-0">
                  <Link
                    href="https://bit.ly/3RuxuI2"
                    _hover={{ opacity: "70%" }}
                  >
                    <Image
                      src="../twitter.svg"
                      alt="twitter"
                      className="h-auto w-auto"
                    />
                  </Link>

                  <Link
                    href="https://bit.ly/crdiscordweb"
                    _hover={{ opacity: "70%" }}
                  >
                    <Image
                      src="../discord-logo.svg"
                      alt="twitter"
                      className="h-auto w-auto"
                    />
                  </Link>
                  {/* <Link
                    href="/linkedIN"
                    ml={{ lg: "1.188rem", base: "1.25rem" }}
                    _hover={{ opacity: "70%" }}
                  >
                    <Image
                      src="../linkedIn.svg"
                      alt="linked-in"
                      height="auto"
                      width="auto"
                    />
                  </Link> */}
                  <Link
                    href="https://bit.ly/3ZkSset"
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
                    className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
                  >
                    <Image
                      src="../facebook.svg"
                      alt="facebook"
                      className="h-auto w-auto"
                    />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
