"use client";
import CompletionStepForm from "@/components/register/completionStepForm";

import {
  Box,
  Flex,
  useSteps,
  Image,
  Stepper,
  Link,
  StepIcon,
  Text,
  Divider,
  StepSeparator,
  StepDescription,
  Step,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { UserContext } from "@/utils/context/user.context";
import { useRouter } from "next/navigation";

const steps = [
  { description: "Basic Details" },
  { description: "Student Verification" },
  { description: "Game Information" },
];

export default function CompletionPage() {
  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });

  const { state } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (state.gameDetails.length === 0) {
      console.log("Game Details are verified");
      router.push("/register");
    }
  }, [state.gameDetails , router]);

  return (
    <>
      <Flex minHeight="100vh" minWidth="100vw">
        <Box
          width={{ lg: "40%" }}
          backgroundImage="url('/registration-image-step-final.webp')"
          padding="2rem"
          display={{ base: "none", md: "none", lg: "block" }}
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
        >
          <Link href="/">
            <Image src="/footer-logo.svg" alt="Logo" width="5rem" height="auto" />
          </Link>
        </Box>
        <Flex
          width={{ base: "100%", md: "100%", lg: "60%" }}
          // display="flex"
          flexDirection="column"
        >
          <Stepper
            size="lg"
            index={activeStep}
            paddingTop="2rem"
            paddingLeft="2rem"
          >
            {steps.map((step, index) => {
              const isCompleted = index < activeStep - 1;
              const isActive = index === activeStep - 1;

              return (
                <Step
                  key={index}
                  className="flex flex-col w-4/12 justify-start"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    width="100%"
                    mb={{ base: "2", lg: "0" }}
                  >
                    <Flex
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width="55%"
                    >
                      <Box
                        width={{ base: "2rem", lg: "2.5rem" }}
                        height={{ base: "2rem", lg: "2.5rem" }}
                        borderRadius="50%"
                        border={isActive || isCompleted ? "none" : "1px solid"}
                        borderColor={isActive ? "yellow.500" : "black.500"}
                        backgroundColor={
                          isActive || isCompleted ? "#d1ff45" : "transparent"
                        }
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        // marginBottom={{ base: '0.5rem', lg: '1rem' }}
                      >
                        {isCompleted ? (
                          <StepIcon />
                        ) : (
                          <Text
                            color="black.500"
                            fontWeight="bold"
                            fontSize={isActive ? "lg" : "md"}
                          >
                            {index + 1}
                          </Text>
                        )}
                      </Box>
                      <StepDescription className="text-sm font-bold pt-1.5 text-center ">
                        {step.description}
                      </StepDescription>
                    </Flex>

                    <StepSeparator className="bg-stone-950 h-1.3" />
                  </Box>
                </Step>
              );
            })}
          </Stepper>
          <Divider
            pt="1.4rem"
            borderColor={"black"}
            borderBottomWidth="1px"
            borderBottomStyle="dotted"
            position="relative"
            zIndex="2"
          />
          {activeStep === 4 && <CompletionStepForm />}
        </Flex>
      </Flex>
    </>
  );
}
