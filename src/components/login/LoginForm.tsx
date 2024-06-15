'use client';

import FirstForm from '@/components/register/FirstForm';
import SecondForm from '@/components/register/SecondForm';
import ThirdForm from '@/components/register/ThirdForm';
import CompletionStepForm from '@/components/register/completionStepForm';
import { UserContext } from '@/utils/context/user.context';
import { useRouter } from 'next/navigation';
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
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import BasicDetailsForm from './BasicDetailsForm';
import OTPForm from './OTPForm';

const steps = [
  { description: 'Enter Details' },
  { description: 'Verification' },
  { description: 'Create Profile' },
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
      console.log('Whatsapp is verified entered');
      setActiveStep(2);
    }
  }, [state.isWhatsAppVerified]);
  useEffect(() => {
    if (
      state.isWhatsAppVerified &&
      state.age &&
      state.degreeStudyField &&
      state.collegeName
    ) {
      console.log('Academic details are verified');
      setActiveStep(3);
    }
  }, [
    state.isWhatsAppVerified,
    state.age,
    state.degreeStudyField,
    state.collegeName,
  ]);
  useEffect(() => {
    if (state.isWhatsAppVerified && state.gameDetails.length > 0) {
      console.log('Game Details are verified');
      // setActiveStep(4);
      router.push('/registration-successful');
    }
  }, [state.gameDetails]);

  return (
    <>
      <Flex minHeight="100vh" minWidth="100vw">
        <Box
          width={{ lg: '40%' }}
          // backgroundImage="url('/registration-image.jpg')"
          backgroundImage={
            activeStep === 1
              ? "url('/registration-image-step-1.svg')"
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
            <Image
              src="./footer-logo.svg"
              alt="Logo"
              width="5rem"
              height="auto"
            />
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
            <BasicDetailsForm/>
          ) : activeStep === 2 ? (
            <OTPForm/>
          ) : activeStep === 3 ? (
            <ThirdForm />
          ) : null}
        </Flex>
      </Flex>
    </>
  );
}
