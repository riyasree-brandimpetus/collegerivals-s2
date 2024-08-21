"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {
  Input,
  Button,
  Heading,
  Flex,
  Box,
  FormLabel,
  useToast,
  Checkbox,
  Text,
} from "@chakra-ui/react";
// import { FirstFormSchema } from '@/schemas/register';
import { RegistrationCities } from "@/constants/cities";
import api from "@/utils/axios/instance";
// import { UserAgentDetails } from '@/types/register/register';
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/utils/captcha/ServerActions";
// import QualifierText from './QualifierText';
import UAParser from "ua-parser-js";
import { SignUpFormValues, UserAgentDetails } from "@/types/sign-up/sign-up";
import { SignUpFormSchema } from "@/schemas/sign-up";
import Link from "next/link";

export default function BasicDetailsForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [userAgentDetailsArray, setUserAgentDetailsArray] =
    useState<UserAgentDetails>();
  const toast = useToast();
  const { dispatch } = useContext(UserContext);
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref") || "";
  const utm_source = searchParams.get("utm_source") || "";
  const utm_medium = searchParams.get("utm_medium") || "";
  const utm_campaign = searchParams.get("utm_campaign") || "";
  const utm_content = searchParams.get("utm_content") || "";
  const utm_term = searchParams.get("utm_term") || "";
  const queryParams = {
    ref: referral,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
  };
  /**
   * To Fetch User Agent Details
   */
  useEffect(() => {
    // Get the user agent string when the component loads
    const userAgent = navigator.userAgent;
    // Call the function to extract user agent details
    const details = extractUserAgentDetails(userAgent);
    // Update the state with the details
    setUserAgentDetailsArray({ ...details });
  }, []);

  /**
   * Function to extract user agent details and store them in an object
   * @param userAgent
   * @returns
   */
  function extractUserAgentDetails(userAgent: string): UserAgentDetails {
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    const engine = parser.getEngine();
    const ua = parser.getUA();
    // Check if the device type is explicitly "desktop" or if it's null/empty (indicating desktop)
    const deviceType =
      device.type === "desktop" || !device.type ? "desktop" : device.type;

    return {
      browser: {
        name: browser.name || "Unknown",
        version: browser.version || "Unknown",
        major: browser.major || "Unknown",
      },
      os: {
        name: os.name || "Unknown",
        version: os.version || "Unknown",
      },
      device: {
        vendor: device.vendor || "Unknown",
        model: device.model || "Unknown",
        type: deviceType || "Unknown",
      },
      engine: {
        name: engine.name || "Unknown",
        version: engine.version || "Unknown",
      },
      ua: ua || "Unknown",
    };
  }

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
  const firstFormInitialValues: SignUpFormValues = {
    name: "",
    whatsappNumber: "",
    email: "",
    agreedToTerms: false,
  };

  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>
  ) => {
    try {
      const response = await api.post("/users/sign-up", {
        ...values,
        whatsappCountryCode: "+91",
        queryParams: queryParams,
        userAgentDetails: userAgentDetailsArray,
      });
      const data = response.data;
      if (data) {
        const otpResp = await api.post("/otp/send-login-otp", {
          userId: data._id,
          mobileNumber: data.whatsappNumber,
        });
        if (otpResp.data) {
          toast({
            title: `OTP Sent Successfully`,
            description: "OTP sent to your email and whatsapp.",
            status: "success",
            isClosable: true,
          });
          dispatch({
            type: "UPDATE",
            payload: { ...data, isWhatsAppVerified: false },
          });
        }
      }
    } catch (error: any) {
      const message = error?.response?.data?.error;
      toast({
        title: `Error submitting form`,
        status: "error",
        isClosable: true,
        description: message,
      });
    }
  };

  return (
    <Formik
      initialValues={firstFormInitialValues}
      validationSchema={SignUpFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col ">
          <div className="flex overflow-scroll flex-col pl-6 lg:pl-16 pr-6 lg:pr-0 pt-8">
            <Heading
              pb={{ base: "0.5rem", lg: "0.25rem" }}
              className="ppFormula-font flex gap-3 text-white italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider"
            >
              ENTER YOUR
              <Box as="span" className="text-[#DBFD67]">
                DETAILS
              </Box>
            </Heading>
            <Text color="white" pb={{ base: "2.125rem", lg: "1.25rem" }}>
              You are creating an account on{" "}
              <Text as={"span"} fontWeight={"700"}>
                {" "}
                <Link
                  href="https://ampverse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ampverse
                </Link>
              </Text>
            </Text>
            <Box overflowY="scroll">
              <Flex
                width={{ base: "100%", lg: "80%" }}
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
              >
                <Flex
                  width={{ base: "100%", lg: "48%" }}
                  direction="column"
                  className="field"
                >
                  <FormLabel htmlFor="name" color="white">
                    Full Name
                  </FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Eg. Rakesh Oberoi"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    color="white"
                    disabled={isSubmitting}
                    focusBorderColor="#DBFD67"
                  />
                  {errors.name && touched.name && (
                    <div className="text-[#DBFD67]">{errors.name}</div>
                  )}
                </Flex>

                <Flex
                  width={{ base: "100%", lg: "48%" }}
                  direction="column"
                  pt={{ base: "1.25rem", lg: "0rem" }}
                  className="field"
                >
                  <FormLabel htmlFor="email" color="white">
                    Email Address
                  </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    // mt="0.75rem"
                    placeholder="Eg. rakesh@gmail.com"
                    height="4.063rem"
                    color="white"
                    borderRadius="0.75rem"
                    disabled={isSubmitting}
                    focusBorderColor="#DBFD67"
                  />
                  {errors.email && touched.email && (
                    <div className="text-[#DBFD67]">{errors.email}</div>
                  )}
                </Flex>
              </Flex>

              <Flex
                width={{ base: "100%", lg: "80%" }}
                direction={{ base: "column", lg: "row" }}
                pt={{ base: "1.25rem", lg: "1.875rem" }}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Flex
                  width={{ base: "100%", lg: "48%" }}
                  direction="column"
                  className="field"
                >
                  <FormLabel htmlFor="name" color="white">
                    WhatsApp Number
                  </FormLabel>
                  <Field
                    as={Input}
                    id="whatsappNumber"
                    name="whatsappNumber"
                    type="number"
                    // mt="0.75rem"
                    placeholder="Eg. 9887762732"
                    height="4.063rem"
                    color="white"
                    borderRadius="0.75rem"
                    focusBorderColor="#DBFD67"
                  />
                  {errors.whatsappNumber && touched.whatsappNumber && (
                    <div className="text-[#DBFD67]">
                      {errors.whatsappNumber}
                    </div>
                  )}
                </Flex>

                {/* <Flex
                pb={{ base: '2.625rem', lg: '2.938rem' }}
                width={{ base: '100%', lg: '48%' }}
                direction="column"
                className="field"
                pt={{ base: '1.25rem', lg: '0rem' }}
              >
                <FormLabel>City Center</FormLabel>
                <Field
                  as={Select}
                  id="cityCenter"
                  name="cityCenter"
                  // mt="0.75rem"
                  height="4.063rem"
                  borderRadius="0.75rem"
                  placeholder="Select City"
                  focusBorderColor="#FF077C"
                >
                  <option key="delhi" value="Delhi" disabled>
                    Delhi - Registrations Closed
                  </option>
                  <option key="hyderabad" value="Hyderabad" disabled>
                    Hyderabad - Registrations Closed
                  </option>
                  <option key="hyderabad" value="Bangalore" disabled>
                    Bangalore - Registrations Closed
                  </option>
                  <option key="pune" value="Pune" disabled>
                    Pune - Registrations Closed
                  </option>
                  {RegistrationCities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Field>
                {errors.cityCenter && touched.cityCenter && (
                  <div className="text-pink">{errors.cityCenter}</div>
                )}
                <QualifierText />
              </Flex> */}

                <Flex direction="column" className="pt-6 pb-1">
                  <Field
                    as={Checkbox}
                    id="agreedToTerms"
                    name="agreedToTerms"
                    colorScheme="white"
                    iconColor="#DBFD67"
                    className="text-sm italic"
                    alignItems="baseline"
                    color="white"
                  >
                    I agree to the{" "}
                    <a className="underline" href="/terms-of-service">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a className="underline" href="/privacy-policy">
                      Privacy Policy
                    </a>
                    , and to receive communication, marketing, and promotional
                    material from Ampverse DMI Pvt Ltd
                  </Field>
                  {errors.agreedToTerms && touched.agreedToTerms && (
                    <div className="errorDiv">{errors.agreedToTerms}</div>
                  )}
                </Flex>
                <Box className="my-2 lg:my-4">
                  <ReCAPTCHA
                    sitekey="6LeBtbYnAAAAABuibRliB7M7XcHJ2_-DIWTdS0Ig"
                    ref={recaptchaRef}
                    onChange={handleCaptchaSubmission}
                  />
                </Box>
              </Flex>
            </Box>
          </div>
          <Box className="fixed bg-black z-50  lg:w-[55%] w-full   flex-col flex items-center justify-between lg:right-0 bottom-0 mt-auto">
            <div className=" bg-black lg:pl-16   border-t border-[fffffef] w-full   lg:flex-row flex-col flex items-center justify-between ">
              <div className="text-white max-md:pt-2 helvetica-light-font font-normal">
                Already a member?{" "}
                <Link
                  href="/login"
                  className="text-#DBFD67 underline helvetica-font"
                >
                  Login
                </Link>
              </div>
              <Button
                id="signup-form-submit-btn"
                type="submit"
                color={"#fff"}
                _hover={{ opacity: "90%" }}
                _active={{
                  filter: "drop-shadow(2px 2px 0px #d1ff45)",
                  transform: "skew(-12deg) translate(2px, 2px)",
                }}
                transform="skew(-12deg)"
                transition="0.4s all ease-out"
                filter="drop-shadow(4px 4px 0px #d1ff45)"
                borderRadius={"0.375rem"}
                className="helvetica-font mx-auto lg:ml-auto lg:mr-16 uppercase bg-black border border-#DBFD67"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"1rem"}
                mt="1.25rem"
                mb="1.25rem"
                height={{ base: "4.125rem", lg: "4.063rem" }}
                width={{ base: "17rem", lg: "22rem" }}
                isLoading={isSubmitting}
                loadingText="Sending OTP"
                isDisabled={!isVerified || isSubmitting}
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

// /api/users/sign-up
// /otp/send-login-otp
// /otp/verify-otp
