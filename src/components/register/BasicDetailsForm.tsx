"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {
  Input,
  Button,
  Heading,
  Flex,
  Select,
  Box,
  FormLabel,
  useToast,
  Checkbox,
  Text,
  Link,
} from "@chakra-ui/react";
import { FirstFormSchema } from "@/schemas/register";
import { RegistrationCities } from "@/constants/cities";
import api from "@/utils/axios/instance";
import { FirstFormValues, UserAgentDetails } from "@/types/register/register";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/utils/captcha/ServerActions";
import QualifierText from "./QualifierText";
import UAParser from "ua-parser-js";

export default function BasicDetailsForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [userAgentDetailsArray, setUserAgentDetailsArray] =
    useState<UserAgentDetails>();
  const toast = useToast();
  const { dispatch } = useContext(UserContext);
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");

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
  const firstFormInitialValues: FirstFormValues = {
    name: "",
    whatsappNumber: "",
    email: "",
    cityCenter: "",
    agreedToTerms: false,
  };

  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: FirstFormValues,
    actions: FormikHelpers<FirstFormValues>
  ) => {
    try {
      const response = await api.post("/users/register", {
        ...values,
        whatsappCountryCode: "+91",
        queryParams: referral || "",
        userAgentDetails: userAgentDetailsArray,
      });
      const data = response.data;
      if (data) {
        const otpResp = await api.post("/otp/send-otp", {
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
      validationSchema={FirstFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col grow   pt-8 md:max-h-[80vh]">
          <div className="pl-6 lg:pl-16 pr-6 lg:pr-0 overflow-scroll ">
            <Heading
              pb={{ base: "0.5rem", lg: "0.25rem" }}
              className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider text-white"
            >
              ENTER YOUR{" "}
              <Box as="span" className="text-#DBFD67">
                DETAILS
              </Box>
            </Heading>
            <Text color={"white"} pb={{ base: "2.125rem", lg: "1.25rem" }}>
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
            <Box overflowY="auto">
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
                  <FormLabel color={"white"} htmlFor="name">
                    Full Name
                  </FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    color="white"
                    type="text"
                    placeholder="Eg. Rakesh Oberoi"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    disabled={isSubmitting}
                    focusBorderColor="#DBFD67"
                  />
                  {errors.name && touched.name && (
                    <div className="text-#DBFD67">{errors.name}</div>
                  )}
                </Flex>

                <Flex
                  width={{ base: "100%", lg: "48%" }}
                  direction="column"
                  pt={{ base: "1.25rem", lg: "0rem" }}
                  className="field"
                >
                  <FormLabel htmlFor="email" color={"white"}>
                    Email Address
                  </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    color="white"
                    // mt="0.75rem"
                    placeholder="Eg. rakesh@gmail.com"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    disabled={isSubmitting}
                    focusBorderColor="#DBFD67"
                  />
                  {errors.email && touched.email && (
                    <div className="text-#DBFD67">{errors.email}</div>
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
                  <FormLabel htmlFor="name" color={"white"}>
                    WhatsApp Number
                  </FormLabel>
                  <Field
                    as={Input}
                    id="whatsappNumber"
                    name="whatsappNumber"
                    color="white"
                    type="number"
                    // mt="0.75rem"
                    placeholder="Eg. 9887762732"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    focusBorderColor="#DBFD67"
                  />
                  {errors.whatsappNumber && touched.whatsappNumber && (
                    <div className="text-#DBFD67">{errors.whatsappNumber}</div>
                  )}
                </Flex>

                <Flex
                  pb={{ base: "2.625rem", lg: "2.938rem" }}
                  width={{ base: "100%", lg: "48%" }}
                  direction="column"
                  className="field"
                  pt={{ base: "1.25rem", lg: "0rem" }}
                >
                  <FormLabel color={"white"}>City Center</FormLabel>
                  <Field
                    as={Select}
                    id="cityCenter"
                    name="cityCenter"
                    // mt="0.75rem"

                    height="4.063rem"
                    borderRadius="0.75rem"
                    color="white"
                    placeholder="Select City"
                    focusBorderColor="#DBFD67"
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
                    {RegistrationCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                  {errors.cityCenter && touched.cityCenter && (
                    <div className="text-#DBFD67">{errors.cityCenter}</div>
                  )}
                  <QualifierText />
                </Flex>

                <Flex direction="column" className="pb-4">
                  <Field
                    as={Checkbox}
                    id="agreedToTerms"
                    name="agreedToTerms"
                    colorScheme="white"
                    iconColor="#DBFD67"
                    className="text-sm italic text-white"
                    alignItems="baseline"
                  >
                    I agree to receiving communication, marketing and
                    promotional material from Ampverse DMI Pvt Ltd.
                  </Field>
                  {errors.agreedToTerms && touched.agreedToTerms && (
                    <div className="errorDiv">{errors.agreedToTerms}</div>
                  )}
                </Flex>
                <Box className="my-2 lg:my-4">
                  <ReCAPTCHA
                    sitekey="6LfBSbQnAAAAAIKsL73tstGkEeMBa-u7Ip5Z4Rpg"
                    ref={recaptchaRef}
                    onChange={handleCaptchaSubmission}
                  />
                </Box>
              </Flex>
              <div className=" py-20 "></div>
            </Box>
          </div>
          <Box className=" bg-black bottom-0">
            <div className="fixed  pt-6 bg-black lg:pl-16  z-50  border-t border-[fffffef] lg:w-[55%]  w-full lg:flex-row flex-col flex items-center justify-between lg:right-0 bottom-0 ">
              {/* <Divider
              marginTop="auto"
              borderColor={'black'}
              borderBottomWidth="1px"
              borderBottomStyle="dotted"
              ml={{ base: '0rem', lg: '-5.063rem' }}
              width={{ base: '100%', lg: '109%' }}
            /> */}
              <Button
                id="basic-details-form-submit-btn"
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
                loadingText="Submiting Details"
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
