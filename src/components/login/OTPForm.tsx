'use client';

import {
  useToast,
  PinInput,
  PinInputField,
  HStack,
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import api from '@/utils/axios/instance';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/utils/context/user.context';

export default function OTPForm() {
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);
  const [seconds, setSeconds] = useState(60); // Initial countdown value
  const [disableResendButton, setDisableResendButton] = useState<boolean>(true); // Initial countdown value

  // Grab values and submitForm from context
  const verifyOtp = async (otp: any) => {
    try {
      const response = await api.post('/otp/verify-otp', {
        otp,
        userId: state._id,
      });
      if (response.status === 200) {
        dispatch({
          type: 'UPDATE',
          payload: { ...state, isWhatsAppVerified: true, isLoggedIn:true },
        });
        localStorage.setItem('userId', state._id);
        toast({
          title: `Successfully Verified OTP`,
          status: 'success',
          isClosable: true,
        });
      }
    } catch (error: any) {
      const message = error?.response?.data?.error;
      toast({
        title: `Error verifying OTP`,
        status: 'error',
        isClosable: true,
        description: message,
      });
    }
  };
  /**
   * Resend OTP
   */
  const resendOtp = async () => {
    try {
      setDisableResendButton(true);
      const otpResp = await api.post('/otp/send-otp', {
        userId: state._id,
        mobileNumber: state.whatsappNumber,
      });
      if (otpResp.status === 200) {
        toast({
          title: `OTP Sent Successfully`,
          description: 'OTP sent to your email and whatsapp.',
          status: 'success',
          isClosable: true,
        });
        setSeconds(60);
      }
    } catch (error: any) {
      setDisableResendButton(false);
      const message = error?.response?.data?.error;
      toast({
        title: `Error verifying OTP`,
        status: 'error',
        isClosable: true,
        description: message,
      });
    }
  };
  /*
   * Setting Timer
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setDisableResendButton(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [seconds]);

  return (
    <Flex
      flexDirection="column"
      flexGrow="1"
      paddingLeft={{ base: '2rem', lg: '4rem' }}
      paddingRight={{ base: '2rem', lg: '0rem' }}
      paddingTop="2rem"
      maxHeight="80vh"
      className='text-white'
    >
      <Heading
        // pb="1.25rem"
        pb={{ base: '2.125rem', lg: '1.25rem' }}
        className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider"
      >
        ENTER{' '}
        <Box as="span" className="text-#DBFD67">
          OTP
        </Box>
      </Heading>
      <Text pb="1rem">
        OTP Sent to your whatsapp number XXXXXXX{state.whatsappNumber.slice(-3)}
      </Text>
      <HStack>
        <PinInput
          focusBorderColor="#DBFD67"
          otp
          size="lg"
          onComplete={value => verifyOtp(value)}
          placeholder="_" //TO DO: Update the Placeholder
        >
          <PinInputField
            height={{ base: '50px', lg: '100px' }}
            width={{ base: '50px', lg: '100px' }}
            borderRadius={{ base: '12px', lg: '17px' }}
            fontSize={{ base: '25px', lg: '50px' }}
            lineHeight="75px"
            color="#DBFD67"
            name="otp[0]"
          />
          <PinInputField
            height={{ base: '50px', lg: '100px' }}
            width={{ base: '50px', lg: '100px' }}
            borderRadius={{ base: '12px', lg: '17px' }}
            fontSize={{ base: '25px', lg: '50px' }}
            lineHeight="75px"
            color="#DBFD67"
            name="otp[1]"
          />
          <PinInputField
            height={{ base: '50px', lg: '100px' }}
            width={{ base: '50px', lg: '100px' }}
            borderRadius={{ base: '12px', lg: '17px' }}
            fontSize={{ base: '25px', lg: '50px' }}
            lineHeight="75px"
            color="#DBFD67"
            name="otp[2]"
          />
          <PinInputField
            height={{ base: '50px', lg: '100px' }}
            width={{ base: '50px', lg: '100px' }}
            borderRadius={{ base: '12px', lg: '17px' }}
            fontSize={{ base: '25px', lg: '50px' }}
            lineHeight="75px"
            color="#DBFD67"
            name="otp[3]"
          />
          <PinInputField
            height={{ base: '50px', lg: '100px' }}
            width={{ base: '50px', lg: '100px' }}
            borderRadius={{ base: '12px', lg: '17px' }}
            fontSize={{ base: '25px', lg: '50px' }}
            lineHeight="75px"
            color="#DBFD67"
            name="otp[4]"
          />
          <PinInputField
            height={{ base: '50px', lg: '100px' }}
            width={{ base: '50px', lg: '100px' }}
            borderRadius={{ base: '12px', lg: '17px' }}
            fontSize={{ base: '25px', lg: '50px' }}
            lineHeight="75px"
            color="#DBFD67"
            name="otp[5]"
          />
        </PinInput>
      </HStack>

      <Flex className="pt-4 flex-wrap flex-col items-start">
        <Alert status="info" className="w-auto bg-slate-900">
          <AlertIcon color={'white'}/>
          OTP will be sent to your WhatsApp and Email.
        </Alert>
        <Button
          className="pt-4 text-white"
          isDisabled={disableResendButton}
          variant="link"
          _hover={{
            color: '#DBFD67',
          }}
          onClick={() => resendOtp()}
        >
          Re-send OTP
        </Button>
        {disableResendButton && (
          <Text className="text-sm w-full">Retry in: {seconds} seconds</Text>
        )}
      </Flex>
    </Flex>
  );
}
