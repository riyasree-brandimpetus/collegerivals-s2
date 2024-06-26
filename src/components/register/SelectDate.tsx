"use client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  Input,
  Button,
  Heading,
  Flex,
  Select,
  Box,
  Divider,
  FormLabel,
  useToast,
  Checkbox,
  Text,
  Link,
} from '@chakra-ui/react';
import { FirstFormSchema, SelectDateTimeSchema } from "@/schemas/register";
import { RegistrationCities } from '@/constants/cities';
import api from "@/utils/axios/instance";
import { DateTimeSlotValues, FirstFormValues, UserAgentDetails } from "@/types/register/register";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from '@/utils/captcha/ServerActions';
import QualifierText from "./QualifierText";
import UAParser from 'ua-parser-js';


export default function SelectDate() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [userAgentDetailsArray, setUserAgentDetailsArray] =
    useState<UserAgentDetails>();
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);
  const searchParams = useSearchParams();
  const referral = searchParams.get('ref');

  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      const response = await fetch('/SelectedDate.json');
      const data = await response.json();
      setDates(data);
    };

    const TimeSlot = async () => {
      const response = await fetch('/SelectedTimeSlot.json');
      const data = await response.json();
      setTimes(data);
    };
    TimeSlot();
    fetchDates();
  }, []);

  /**
  //  * To Fetch User Agent Details
  //  */
  // useEffect(() => {
  //   // Get the user agent string when the component loads
  //   const userAgent = navigator.userAgent;
  //   // Call the function to extract user agent details
  //   const details = extractUserAgentDetails(userAgent);
  //   // Update the state with the details
  //   setUserAgentDetailsArray({ ...details });
  // }, []);

  // /**
  //  * Function to extract user agent details and store them in an object
  //  * @param userAgent
  //  * @returns
  //  */
  // function extractUserAgentDetails(userAgent: string): UserAgentDetails {
  //   const parser = new UAParser(userAgent);
  //   const browser = parser.getBrowser();
  //   const os = parser.getOS();
  //   const device = parser.getDevice();
  //   const engine = parser.getEngine();
  //   const ua = parser.getUA();
  //   // Check if the device type is explicitly "desktop" or if it's null/empty (indicating desktop)
  //   const deviceType =
  //     device.type === 'desktop' || !device.type ? 'desktop' : device.type;

  //   return {
  //     browser: {
  //       name: browser.name || 'Unknown',
  //       version: browser.version || 'Unknown',
  //       major: browser.major || 'Unknown',
  //     },
  //     os: {
  //       name: os.name || 'Unknown',
  //       version: os.version || 'Unknown',
  //     },
  //     device: {
  //       vendor: device.vendor || 'Unknown',
  //       model: device.model || 'Unknown',
  //       type: deviceType || 'Unknown',
  //     },
  //     engine: {
  //       name: engine.name || 'Unknown',
  //       version: engine.version || 'Unknown',
  //     },
  //     ua: ua || 'Unknown',
  //   };
  // }

  function convertDate(inputDate:string) {
    // Create a mapping of month names to their corresponding numbers
    const monthNames:any = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12',
    };

    // Extract the day, month, and year from the input string
    const dateParts:any = inputDate.match(/(\d+)(st|nd|rd|th)?\s+(\w+)\s+(\d{4})/);

    if (!dateParts) {
      throw new Error('Invalid date format');
    }

    const day = dateParts[1].padStart(2, '0'); // Ensure day is two digits
    const month = monthNames[dateParts[3]];
    const year = dateParts[4];

    if (!month) {
      throw new Error('Invalid month name');
    }

    // Construct the date string in the desired format
    return `${year}-${month}-${day}`;
  }

  /**
   * Initialize first form values
   */
  const dateTimeFormInitialValues: DateTimeSlotValues = {
    // name: '',
    // whatsappNumber: '',
    // email: '',
    // cityCenter: '',
    // agreedToTerms: false,
    selectedDate: '',
    selectedTimeSlot: '',
  };

  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: DateTimeSlotValues,
    actions: FormikHelpers<DateTimeSlotValues>
  ) => {
    try {
      console.log('values', values);
      const selectedDate = convertDate(values.selectedDate);
      console.log('selectedDate', selectedDate);
       const response = await api.post(
         `/users/update/esport-details/${state._id}`,
         {
           'isOnlineModeSelected': state.isOnlineModeSelected,
           "selectedDate":selectedDate,
           "selectedTimeSlot":values.selectedTimeSlot
         }
       );
       const data = response.data;
       if (response) {
         toast({
           title: `Details Submitted`,
           status: 'success',
           isClosable: true,
           description: data.message,
         });
         dispatch({
           type: 'UPDATE',
           payload: {
             ...state,
             selectedDate: selectedDate,
             selectedTimeSlot:values.selectedTimeSlot
           },
         });
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
      initialValues={dateTimeFormInitialValues}
      validationSchema={SelectDateTimeSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col grow   pt-8 md:max-h-[80vh]">
          <div className="pl-6 lg:pl-16 pr-6 lg:pr-0 overflow-scroll ">
            <Heading
              pb={{ base: '0.5rem', lg: '0.25rem' }}
              className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider text-white"
            >
              SELECT{' '}
              <Box as="span" className="text-#DBFD67">
                DATE
              </Box>
            </Heading>
            <Text color={'white'} pb={{ base: '2.125rem', lg: '1.25rem' }}>
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
            </Text>
            <Box overflowY="auto">
              <Flex
                width={{ base: '100%', lg: '80%' }}
                direction={{ base: 'column', lg: 'row' }}
                pt={{ base: '1.25rem', lg: '1.875rem' }}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Flex
                  pb={{ base: '2.625rem', lg: '2.938rem' }}
                  width={{ base: '100%', lg: '48%' }}
                  direction="column"
                  className="field"
                  pt={{ base: '1.25rem', lg: '0rem' }}
                >
                  <FormLabel
                    className="helvetica-font font-bold text-lg"
                    color={'#CFCFCF'}
                  >
                    Select date
                  </FormLabel>
                  <Field
                    as={Select}
                    id="selectedDate"
                    name="selectedDate"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    color="white"
                    placeholder="Select City"
                    focusBorderColor="#DBFD67"
                  >
                    {dates.map(dates => (
                      <option key={dates} value={dates}>
                        {dates}
                      </option>
                    ))}
                  </Field>
                  {errors.selectedDate && touched.selectedDate && (
                    <div className="text-#DBFD67">{errors.selectedDate}</div>
                  )}
                  <QualifierText />
                </Flex>

                <Flex
                  pb={{ base: '2.625rem', lg: '2.938rem' }}
                  width={{ base: '100%', lg: '48%' }}
                  direction="column"
                  className="field"
                  pt={{ base: '1.25rem', lg: '0rem' }}
                >
                  <FormLabel
                    className="helvetica-font font-bold text-lg"
                    color={'#CFCFCF'}
                  >
                    Select time slot
                  </FormLabel>
                  <Field
                    as={Select}
                    id="selectedTimeSlot"
                    name="selectedTimeSlot"
                    // mt="0.75rem"

                    height="4.063rem"
                    borderRadius="0.75rem"
                    color="white"
                    placeholder="Select City"
                    focusBorderColor="#DBFD67"
                  >
                    {times.map(times => (
                      <option key={times} value={times}>
                        {times}
                      </option>
                    ))}
                  </Field>
                  {errors.selectedTimeSlot && touched.selectedTimeSlot && (
                    <div className="text-#DBFD67">
                      {errors.selectedTimeSlot}
                    </div>
                  )}
                  {/* <QualifierText /> */}
                </Flex>
              </Flex>
              <div className=" py-20 "></div>
            </Box>
          </div>
          <Box className=" bg-black bottom-0">
            <div className="fixed  pt-6 bg-black lg:pl-16  z-50  border-t border-[fffffef] lg:w-[55%]  w-full lg:flex-row flex-col flex items-center justify-between lg:right-0 bottom-0 ">
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
                mb="1.25rem"
                height={{ base: '4.125rem', lg: '4.063rem' }}
                width={{ base: '17rem', lg: '22rem' }}
                isLoading={isSubmitting}
                loadingText="Sending OTP"
                isDisabled={isSubmitting}
              >
                Proceed to verify
              </Button>
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
