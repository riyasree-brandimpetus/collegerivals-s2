'use client';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import {
  Input,
  Button,
  Heading,
  Flex,
  Box,
  Divider,
  FormLabel,
  useToast,
  Text
} from '@chakra-ui/react';
import api from '@/utils/axios/instance';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '@/utils/context/user.context';
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '@/utils/captcha/ServerActions';
import { LoginFormValues } from '@/types/login/login';
import { LoginFormSchema } from '@/schemas/login';
import Link from 'next/link';

export default function BasicDetailsForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const toast = useToast();
  const { dispatch } = useContext(UserContext);
  
  /**
   * Handle Captcha Submission
   * @param token
   */
  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  /**
   * Initialize first form values
   */
  const firstFormInitialValues: LoginFormValues = {
    whatsappNumber: ''
  };

  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    try {
      console.log('heree');
      const response = await api.post('/users/id', {
        ...values
      });
      const data = response.data;
      console.log(data)
      if (data) {
        const otpResp = await api.post('/otp/send-login-otp', {
          userId: data,
          mobileNumber: `${values.whatsappNumber}`,
        });
      console.log(otpResp.data.userDetails);
        if (otpResp.data) {
          toast({
            title: `OTP Sent Successfully`,
            description: 'OTP sent to your email and whatsapp.',
            status: 'success',
            isClosable: true,
          });
          dispatch({
            type: 'UPDATE',
            payload: { ...otpResp.data.userDetails },
          });
        }
      }
    } catch (error: any) {
      const message = error?.response?.data?.error;
      toast({
        title: `Error submitting form`,
        status: 'error',
        isClosable: true,
        description: message,
      });
    }
  };

  return (
    <Formik
      initialValues={firstFormInitialValues}
      validationSchema={LoginFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="text-white flex flex-col grow  lg:pt-20 pt-8 md:max-h-[80vh]">
          <div className='pl-6 lg:pl-16 pr-6 lg:pr-0'>
          <Heading
            pb={{ base: '0.5rem', lg: '0.25rem' }}
            className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem]  tracking-wide lg:tracking-wider"
          >
            ENTER YOUR{' '}
            <Box as="span" className="text-[#DBFD67]">
              DETAILS
            </Box>
          </Heading>
          <Text className="helvetica-light-font font-normal">
            You are logging into your account on Ampverse
          </Text>
          {/* <Text pb={{ base: '2.125rem', lg: '1.25rem' }}>
            You are creating an account on{' '}
            <Text as={'span'} fontWeight={'700'}>
              {' '}
              <Link
                href="https://ampverse.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ampverse
              </Link>
            </Text>
          </Text> */}
          <Box overflowY="auto">
            {/* <Flex
              width={{ base: '100%', lg: '80%' }}
              direction={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
            >
              <Flex
                width={{ base: '100%', lg: '48%' }}
                direction="column"
                className="field"
              >
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Eg. Rakesh Oberoi"
                  height="4.063rem"
                  borderRadius="0.75rem"
                  disabled={isSubmitting}
                  focusBorderColor="#FF077C"
                />
                {errors.name && touched.name && (
                  <div className="text-pink">{errors.name}</div>
                )}
              </Flex>

              <Flex
                width={{ base: '100%', lg: '48%' }}
                direction="column"
                pt={{ base: '1.25rem', lg: '0rem' }}
                className="field"
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="text"
                  // mt="0.75rem"
                  placeholder="Eg. rakesh@gmail.com"
                  height="4.063rem"
                  borderRadius="0.75rem"
                  disabled={isSubmitting}
                  focusBorderColor="#FF077C"
                />
                {errors.email && touched.email && (
                  <div className="text-pink">{errors.email}</div>
                )}
              </Flex>
            </Flex> */}

            <Flex
              width={{ base: '100%', lg: '80%' }}
              direction={{ base: 'column', lg: 'row' }}
              pt={{ base: '1.25rem', lg: '1.875rem' }}
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Flex
                width={{ base: '100%', lg: '48%' }}
                direction="column"
                className="field"
              >
                <FormLabel htmlFor="name">WhatsApp Number</FormLabel>
                <Field
                  as={Input}
                  id="whatsappNumber"
                  name="whatsappNumber"
                  type="number"
                  // mt="0.75rem"
                  placeholder="Eg. 9887762732"
                  height="4.063rem"
                  borderRadius="0.75rem"
                  focusBorderColor="#DBFD67"
                />
                {errors.whatsappNumber && touched.whatsappNumber && (
                  <div className="text-pink">{errors.whatsappNumber}</div>
                )}
              </Flex>

              <Box className="my-2 lg:my-4 w-full">
                <ReCAPTCHA
                  sitekey="6LfBSbQnAAAAAIKsL73tstGkEeMBa-u7Ip5Z4Rpg"
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                />
              </Box>
            </Flex>
          </Box>
          </div>
          <Box className="fixed pt-6 bg-black lg:pl-16 border-t border-[fffffef] lg:w-[55%]  w-full lg:flex-row flex-col flex items-center justify-between lg:right-0 bottom-0 ">
            {/* <Divider
              marginTop="auto"
              borderColor={'black'} 
              borderBottomWidth="1px"
              borderBottomStyle="dotted"
              ml={{ base: '0rem', lg: '-5.063rem' }}
              width={{ base: '100%', lg: '109%' }}
            /> */}

<div className='text-white helvetica-light-font font-normal'>Already a member? <Link className='text-#DBFD67 underline helvetica-font' href="/">Login</Link></div>
             <Button
              id="basic-details-form-submit-btn"
              type="submit"
              color={'#fff'}
              _hover={{ opacity: '90%' }}
              _active={{
                filter: 'drop-shadow(2px 2px 0px #d1ff45)',
                transform: 'skew(-12deg) translate(2px, 2px)',
              }}
              transform="skew(-12deg)"
              transition="0.4s all ease-out"
              filter="drop-shadow(4px 4px 0px #d1ff45)"
              borderRadius={'0.375rem'}
              className="helvetica-font mx-auto lg:ml-auto lg:mr-16 uppercase bg-pink"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              fontSize={'1rem'}
              mt="1.25rem"
              mb="2.5rem"
              height={{ base: '4.125rem', lg: '4.063rem' }}
              width={{ base: '17rem', lg: '22rem' }}
              isLoading={isSubmitting}
              loadingText="Sending OTP"
              isDisabled={!isVerified || isSubmitting}
            >
              Proceed to verify
            </Button> 
          
          </Box>
        </Form>
      )}
    </Formik>
  );
}
