"use client";

import FirstForm from "@/components/register/FirstForm";
import SecondForm from "@/components/register/SecondForm";
import ThirdForm from "@/components/register/ThirdForm";
import CompletionStepForm from "@/components/register/completionStepForm";
import { UserContext } from "@/utils/context/user.context";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  useSteps,
  Stepper,
  StepIcon,
  Text,
  Divider,
  StepSeparator,
  StepDescription,
  Step,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import OTPForm from "./OTPForm";
import Image from "next/image";
import Link from "next/link";

const steps = [
  { description: "Enter Details" },
  { description: "Verification" },
  { description: "Log In" },
];

export default function LoginForm() {
  const { state } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();
  useEffect(() => {
    if (state.isWhatsAppVerified) {
      // router.push('/my-profile');
      console.log("Enter OTP");
      setActiveStep(2);
    }
  }, [state.isWhatsAppVerified ,setActiveStep]);

  useEffect(() => {
    if (state.isLoggedIn) {
    router.push('/my-profile');
      console.log('OTP is verified');
    }
  }, [state.isLoggedIn]);
  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserId: any = localStorage.getItem('userId');
    if (storedUserId) {
      console.log('ID is found', storedUserId);
      router.push('/my-profile');
    }
  }, []);
  return (
    <>
      {/* <Flex minHeight="100vh" minWidth="100vw" className="bg-[#050607]">
        <Box
          width={{ lg: "50%" }}
          className="custom-background"
          padding="2rem"
          display={{ base: "none", md: "none", lg: "block" }}
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
        >
          <Link href="/">
            <Image
              src="./college-rivals-white-logo.svg"
              alt="Logo"
              width={85}
              height={48}
            />
          </Link>
        </Box>
        <Flex
          width={{ base: "100%", md: "100%", lg: "60%" }}
          // display="flex"
          flexDirection="column"
        >
          <Stepper
            background="linear-gradient(0deg, rgba(255,255,255,0.1) 22%, rgba(255,255,255,0) 63%)"
            borderBottom="1px solid #ffffff2e"
            size="lg"
            index={activeStep}
            paddingTop="2rem"
            paddingBottom="2rem"
            paddingLeft="2rem"
            gap="0"
            colorScheme="gray"
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
                      width="45%"
                    >
                      <Box
                        width={{ base: "2rem", lg: "2.5rem" }}
                        height={{ base: "2rem", lg: "2.5rem" }}
                        borderRadius="50%"
                        border={isActive || isCompleted ? "none" : "1px solid"}
                        borderColor={isActive ? "yellow.500" : "black.500"}
                        backgroundColor={
                          isActive || isCompleted ? "#E7327C" : "transparent"
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
                            className="text-white"
                            fontWeight="bold"
                            fontSize={isActive ? "lg" : "md"}
                          >
                            {index + 1}
                          </Text>
                        )}
                      </Box>
                      <StepDescription className="text-white text-base font-bold pt-1.5 text-center ">
                        {step.description}
                      </StepDescription>
                    </Flex>

                    <StepSeparator className="bg-white bg-opacity-20 h-px " />
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
          {activeStep === 1 ? (
            <BasicDetailsForm />
          ) : activeStep === 2 ? (
            <OTPForm />
          ) : activeStep === 3 ? (
            <ThirdForm />
          ) : null}
        </Flex>
      </Flex> */}

      

<div className="w-full flex h-screen bg-black">
        <div className=" max-lg:hidden w-45% custom-background pt-10 pl-11">
          <Link href="/">
            <Image
              src="./college-rivals-white-logo.svg"
              alt="Logo"
              width={85}
              height={47}
            />
          </Link>
        </div>
        <div className="w-[55%] max-lg:w-full ">
        <Link className="lg:hidden" href="/">
            <Image
            className="pl-6 pt-6"
              src="./college-rivals-white-logo.svg"
              alt="Logo"
              width={82}
              height={23}
            />
          </Link>
          <div className="py-2rem  flex md:pl-8 md:pr-14 bg-gradeint-white justify-center items-center  ">
           
            <div className="flex items-center flex-col">
              <div
                className="rounded-full lg:w-[43px] lg:h-[43px] w-[29px] h-[29px] flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep == 1 ? "#E7327C" : "transparent",
                }}
              >
                1
              </div>
              <p className="text-white  pt-3 helvetica-font font-bold md:text-base text-xs">
                Enter Credentials
              </p>
            </div>
            <Image
              src="/stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[20%] max-lg:hidden  h-auto -mt-9"
            />
             <Image
              src="/md-stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[15%] lg:hidden h-auto -mx-3  -mt-7"
            />
            <div className="flex items-center flex-col">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep == 2 ? "#E7327C" : "transparent",
                }}
              >
                2
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs">
                Verification
              </p>
            </div>
            <Image
              src="/stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[20%] max-lg:hidden  h-auto -mt-9"
            />
             <Image
              src="/md-stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[15%] lg:hidden h-auto -mx-3 -mt-7"
            />
            <div className="flex items-center flex-col">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep == 3 ? "#E7327C" : "transparent",
                }}
              >
                3
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
               Login in
              </p>
            </div>
          </div>
          <div className="w-full relative">
          {activeStep === 1 ? (
            // <FirstForm />
            <BasicDetailsForm/>
          ) : activeStep === 2 ? (
            <OTPForm/>
          ) : activeStep === 3 ? (
            <ThirdForm />
          ) : null}
          <div className="py-16 max-md:py-20"></div>
            
          </div>
        </div>
      </div>
    </>
  );
}
