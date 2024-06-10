import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

const CompletionStepForm = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent={{ base: 'center', lg: 'center' }}
      height="100%"
      textAlign="center"
    >
      <Image
        alt="check mark"
        src="./tick.svg"
        width={{ lg: '5.125rem', base: '2.625rem' }}
        mb="1.375rem"
      />
      <Heading
        className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider"
        pb={{ lg: '3.625rem', base: '3.125rem' }}
      >
        SIGNUP{' '}
        <Text as="span" className="text-pink">
          SUCCESSFULL
        </Text>
      </Heading>
      <Link
        href="https://bit.ly/crdiscordweb"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{
          textDecoration: 'none',
        }}
        display="flex"
        alignItems="center"
        background="#5865F2"
        px={{ lg: '2rem', base: '1.563rem' }}
        py={{ lg: '1rem', base: '0.813rem' }}
        borderRadius="0.375rem"
      >
        <Image
          alt="Discord logo"
          src="./discord-logo.svg"
          width={{ base: '18%', lg: 'auto' }}
        />
        <Text
          className="helvetica-medium-font"
          fontSize={{ lg: '1.375rem', base: '0.75rem' }}
          as="span"
          color="#ffffff"
          ml={{ lg: '1.25rem', base: '0.625rem' }}
        >
          Ready to start your journey?
        </Text>
      </Link>
    </Flex>
  );
};

export default CompletionStepForm;
