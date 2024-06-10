"use client";
import {
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Input,
  Select,
  Box,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactBody = () => {
  return (
    <Flex className="flex-col items-center">
      <Heading
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.4s  ease-in-out"
        className="ppFormula-font font-light italic text-xl lg:text-1.813rem leading-normal text-center 
        mt-20 lg:mt-32 mb-2 lg:mb-0 max-screen-desktop mx-auto text-pink"
        size={"4xl"}
      >
        CONTACT US
      </Heading>
      <Heading
        as={motion.h1}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.4s  ease-in-out"
        className="ppFormula-font font-light italic text-4xl lg:text-5rem leading-tight m-auto 
        text-#333 tracking-wide lg:tracking-widest mb-12 lg:mb-20 text-center w-full lg:w-9/12 max-screen-desktop mx-auto"
        size={"2xl"}
      >
        WHO YOU GONNA CALL?
      </Heading>
      <Flex
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.4s  ease-in-out"
        className="contact-info w-full lg:w-70% px-6 lg:px-0 mb-5 lg:mb-12 flex-col max-screen-desktop mx-auto gap-5"
      >
        <Flex className="gap-5 w-full flex-col xl:flex-row">
          <Flex
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out"
            className="phone-contact w-full xl:w-1/2 items-start justify-start p-5 feature-card rounded-2xl"
          >
            <Flex
              className="contact-image-container gap-2.5"
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition="0.4s  ease-in-out"
            >
              <Image
                src="./phone.svg"
                alt="phone"
                className="w-11 lg:w-4.5rem h-11 lg:h-4.5rem"
              />
            </Flex>
            <Flex
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition="0.4s  ease-in-out"
              className="contact-text-container flex-col pl-2 lg:pl-6"
            >
              <Text
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition="0.4s  ease-in-out"
                className="helvetica-light-font leading-normal text-xs lg:text-base"
              >
                CALL US
              </Text>
              <Flex
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition="0.4s  ease-in-out"
              >
                <Link
                  href="tel:+919999567476"
                  className="helvetica-light-font text-lg lg:text-4xl"
                  _hover={{ textDecoration: "none", opacity: "70%" }}
                >
                  +91 9999567476
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out"
            className="mail-contact w-full xl:w-1/2 items-start justify-start p-5 feature-card rounded-2xl"
          >
            <Flex
              className="contact-image-container min-w-2.75rem"
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition="0.4s  ease-in-out"
            >
              <Image
                src="./mail.svg"
                alt="mail"
                className="w-full lg:w-4.5rem h-11 lg:h-4.5rem"
              />
            </Flex>
            <Flex className="contact-text-container flex-col pl-2 lg:pl-6">
              <Text
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition="0.4s  ease-in-out"
                className="helvetica-light-font leading-normal text-xs lg:text-base"
              >
                MAIL US
              </Text>
              <Flex
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition="0.4s  ease-in-out"
              >
                <Link
                  href="mailto:aswin@ampverse.com"
                  className="helvetica-light-font text-lg lg:text-4xl"
                  _hover={{ textDecoration: "none", opacity: "70%" }}
                >
                  hello@collegerivals.com
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="0.4s  ease-in-out"
          className="phone-contact w-full items-start justify-start p-5 feature-card rounded-2xl"
        >
          <Flex
            className="contact-image-container gap-2.5 min-w-2.75rem"
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out"
          >
            <Image
              src="./address.svg"
              alt="address"
              className="w-11 lg:w-4.5rem h-11 lg:h-4.5rem"
            />
          </Flex>
          <Flex
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition="0.4s  ease-in-out"
            className="contact-text-container flex-col pl-2 lg:pl-6"
          >
            <Text
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition="0.4s  ease-in-out"
              className="helvetica-light-font leading-normal text-xs lg:text-base"
            >
              MEET US
            </Text>
            <Flex
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition="0.4s  ease-in-out"
              className="helvetica-light-font text-sm lg:text-2xl"
              _hover={{ textDecoration: "none", opacity: "70%" }}
            >
              61-63, Second Floor, Panchkuiya Road, Connaught Place, New Delhi -
              110001
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ContactForm />
    </Flex>
  );
};

export default ContactBody;
