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
  { description: 'Log In' },
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
    console.log('Enter OTP');
    setActiveStep(2);
  }
}, [state.isWhatsAppVerified]);


  useEffect(() => {
    if (state.isLoggedIn) {
      router.push('/my-profile');
      console.log('OTP is verified');
      // setActiveStep(2);
    }
  }, [state.isLoggedIn]);

  return (
    <>
      <Flex minHeight="100vh" minWidth="100vw" className="bg-[#050607]">
        <Box
          width={{ lg: '40%' }}
          className='custom-background'
          padding="2rem"
          display={{ base: 'none', md: 'none', lg: 'block' }}
          backgroundRepeat="no-repeat"
          backgroundSize={'cover'}
        >
          <Link href="/">
            <Image
              src="./college-rivals-white-logo.svg"
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
                          isActive || isCompleted ? '#E7327C' : 'transparent'
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
                            className='text-white'
                            fontWeight="bold"
                            fontSize={isActive ? 'lg' : 'md'}
                          >
                            {index + 1}
                          </Text>
                        )}
                      </Box>
                      <StepDescription className="text-white text-sm font-bold pt-1.5 text-center ">
                        {step.description}
                      </StepDescription>
                    </Flex>

                    <StepSeparator className="bg-[#FFFFFF] h-1.3" />
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
            <BasicDetailsForm />
          ) : activeStep === 2 ? (
            <OTPForm />
          ) : activeStep === 3 ? (
            <ThirdForm />
          ) : null}
        </Flex>
      </Flex>
    </>
  );
}
