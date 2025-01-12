"use client";
import SecondForm from "@/components/register/SecondForm";
import { UserContext } from "@/utils/context/user.context";
import { useRouter } from "next/navigation";
import {

  useSteps
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import SelectMode from "./SelectMode";
import Image from "next/image";
import Link from "next/link";
import BasicDetailsForm from "./BasicDetailsForm";
import SelectDate from "./SelectDate";


const steps = [
  { description: "Basic Details" },
  { description: "Student Verification" },
  { description: "Game Information" },
];

export default function RegisterPage() {
  const { state } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();

  // useEffect(() => {
  //   if (state.isWhatsAppVerified) {
  //     console.log("Whatsapp is verified entered");
  //     setActiveStep(2);
  //   }
  // }, [state.isWhatsAppVerified]);
  // useEffect(() => {
  //   if (
  //     state.isWhatsAppVerified &&
  //     state.age &&
  //     state.degreeStudyField &&
  //     state.collegeName
  //   ) {
  //     console.log('Academic details are verified');
  //     setActiveStep(3);
  //   }
  // }, [
  //   state.isWhatsAppVerified,state.age,
  //   state.degreeStudyField,
  //   state.collegeName,
  // ]);
  // useEffect(() => {
  //   if (state.isWhatsAppVerified && state.gameDetails.length > 0) {
  //     console.log('Game Details are verified');
  //     // setActiveStep(4);
  //     router.push('/registration-successful');
  //   }
  // }, [state.gameDetails]);

  return (
    <>
      {/* <Flex minHeight="100vh" minWidth="100vw">
        <Box
          width={{ lg: '40%' }}
          // backgroundImage="url('/registration-image.jpg')"
          backgroundImage={
            activeStep === 1
              ? "url('/registration-image-step-1.webp')"
              : activeStep === 2
              ? "url('/registration-image-step-2.webp')"
              : activeStep === 3
              ? "url('/registration-image-step-3.webp')"
              : "url('/registration-image-step-final.webp')"
          }
          padding="2rem"
          display={{ base: 'none', md: 'none', lg: 'block' }}
          backgroundRepeat="no-repeat"
          backgroundSize={'cover'}
        >
          <Link href="/">
            <Image src="./footer-logo.svg" alt="Logo" width="5rem" height="auto" />
          </Link>
        </Box>
        <Flex
          width={{ base: '100%', md: '100%', lg: '60%' }}
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
                    mb={{ base: '2', lg: '0' }}
                  >
                    <Flex
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width="55%"
                    >
                      <Box
                        width={{ base: '2rem', lg: '2.5rem' }}
                        height={{ base: '2rem', lg: '2.5rem' }}
                        borderRadius="50%"
                        border={isActive || isCompleted ? 'none' : '1px solid'}
                        borderColor={isActive ? 'yellow.500' : 'black.500'}
                        backgroundColor={
                          isActive || isCompleted ? '#d1ff45' : 'transparent'
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
                            fontSize={isActive ? 'lg' : 'md'}
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
            borderColor={'black'}
            borderBottomWidth="1px"
            borderBottomStyle="dotted"
            position="relative"
            zIndex="2"
          />
          {activeStep === 1 ? (
            // <FirstForm />
            <SelectMode/>
          ) : activeStep === 2 ? (
            <SecondForm />
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
            <div className="flex w-[600px] items-center flex-col">
              <div
                className="rounded-full lg:w-[43px] lg:h-[43px] w-[29px] h-[29px] flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >=  1 ? '#E7327C' : 'transparent',
                }}
              >
                   {activeStep > 1 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "1"}
              </div>
              <p className="text-white  pt-3 helvetica-font font-bold md:text-base text-xs">
          Select Mode
              </p>
            </div>
            <hr  className='w-full border-[#ffffff3d]'/>
            <div className="flex w-[600px] items-center flex-col">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >=  2 ? '#E7327C' : 'transparent',
                }}
              >
                    {activeStep > 2 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "2"}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs">
              Choose Games
              </p>
            </div>
            <hr  className='w-full border-[#ffffff3d]'/>
            <div className="flex w-[600px] items-center flex-col">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >=  3 ? '#E7327C' : 'transparent',
                }}
              >
                {activeStep > 3 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "3"}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
              Select Slot
              </p>
            </div>
          </div>
          <div className="w-full relative bg-black">
            {activeStep === 1 ? (
              <SelectMode />
            ) : activeStep === 2 ? (
              <SecondForm />
            ) : activeStep === 3 ? (
              <SelectDate />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
