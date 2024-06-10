import React, { useRef, useState } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { ContactFormSchema } from '@/schemas/contact';
import { ContactFormValues } from '@/types/contact/contact';
import { motion } from 'framer-motion';
import { ContactCities } from '@/constants/cities';
import { Flex, Heading, Text, Image, FormLabel, Input, Button, Select, useToast, Box } from '@chakra-ui/react';
import api from '@/utils/axios/instance';
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '@/utils/captcha/ServerActions';

function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const toast = useToast();
  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  const contactInitialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    cityCenter: '',
    collegeName: '',
    message: '',
  };
  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const response = await api.post('/contact', {
        ...values,
      });
      const data = response.data;
      toast({
        title: `Submitted Form`,
        status: 'success',
        isClosable: true,
      });
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
    <Flex
      bgGradient="linear-gradient(180deg, #FFF 0%, #B4B4B4 52.84%, #B4B4B4 100%)"
      className="pt-5 lg:pt-12 px-6 lg:px-20 w-full relative"
      boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
    >
      <Flex
        className="glass-bg flex-col items-center mx-auto max-w-[1440px] w-full
        rounded-xl lg:rounded-3xl py-[3.75rem] lg:py-20 mb-20 lg:mb-72"
        bgGradient="linear-gradient(136deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.17) 100%)"
        zIndex="1"
      >
        <Heading
          as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition="0.4s  ease-in-out"
          className="ppFormula-font font-light italic text-1.75rem lg:text-6xl
           text-black mb-1.88rem lg:mb-4.38rem tracking-wide lg:tracking-widest"
        >
          GET IN{' '}
          <Text as="span" className="text-pink">
            TOUCH
          </Text>
        </Heading>

        <Formik
          initialValues={contactInitialValues}
          validationSchema={ContactFormSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="contactUsForm">
              <Flex
                className="flex-col lg:flex-row px-3.5 lg:px-0 justify-between"
                width={{ base: '100%', md: '80%', lg: '55%' }}
                // as={motion.div}
                // variants={{
                //   hidden: { opacity: 0, y: 55 },
                //   visible: { opacity: 1, y: 0 },
                // }}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition="0.2s ease 0.13s"
              >
                <Flex className="field flex-col w-full lg:w-48%">
                  <FormLabel
                    htmlFor="firstName"
                    className="helvetica-medium-font text-base lg:text-1.375rem"
                  >
                    First Name
                  </FormLabel>
                  <Field
                    as={Input}
                    className="field mt-0.31rem lg:mt-3 h-4.063rem rounded-xl border-#33333380 bg-white"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Eg. Rakesh"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="errorDiv">{errors.firstName}</div>
                  ) : null}
                </Flex>

                <Flex
                  className="field flex-col w-full lg:w-[48%] mt-5 lg:mt-0"
                  // as={motion.div}
                  // variants={{
                  //   hidden: { opacity: 0, y: 55 },
                  //   visible: { opacity: 1, y: 0 },
                  // }}
                  // initial="hidden"
                  // whileInView="visible"
                  // viewport={{ once: true }}
                  // transition="0.2s ease 0.14s"
                >
                  <FormLabel
                    htmlFor="lastName"
                    className="helvetica-medium-font text-base lg:text-1.375rem"
                  >
                    Last Name
                  </FormLabel>
                  <Field
                    as={Input}
                    id="lastName"
                    className="field mt-0.31rem lg:mt-3 h-4.063rem rounded-xl border-#33333380 bg-white"
                    name="lastName"
                    type="text"
                    placeholder="Eg. Oberoi "
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="errorDiv">{errors.lastName}</div>
                  ) : null}
                </Flex>
              </Flex>

              <Flex
                width={{ base: '100%', md: '80%', lg: '55%' }}
                className="flex-col lg:flex-row px-0.88rem lg:px-0 pt-5 lg:pt-1.875rem justify-between"
              >
                <Flex
                  className="field flex-col w-full lg:w-48%"
                  // as={motion.div}
                  // variants={{
                  //   hidden: { opacity: 0, y: 55 },
                  //   visible: { opacity: 1, y: 0 },
                  // }}
                  // initial="hidden"
                  // whileInView="visible"
                  // viewport={{ once: true }}
                  // transition="0.2s ease 0.15s"
                >
                  <FormLabel
                    htmlFor="phoneNumber"
                    className="helvetica-medium-font text-base lg:text-1.375rem"
                  >
                    Phone
                  </FormLabel>
                  <Field
                    as={Input}
                    id="phoneNumber"
                    className="field mt-0.31rem lg:mt-3 h-4.063rem rounded-xl border-#33333380 bg-white"
                    name="phoneNumber"
                    type="number"
                    placeholder="Eg. +91 98789 78678"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="errorDiv">{errors.phoneNumber}</div>
                  ) : null}
                </Flex>

                <Flex
                  className="field flex-col w-full lg:w-48% mt-5 lg:mt-0"
                  // as={motion.div}
                  // variants={{
                  //   hidden: { opacity: 0, y: 55 },
                  //   visible: { opacity: 1, y: 0 },
                  // }}
                  // initial="hidden"
                  // whileInView="visible"
                  // viewport={{ once: true }}
                  // transition="0.2s ease 0.16s"
                >
                  <FormLabel
                    htmlFor="emailAddress"
                    className="helvetica-medium-font text-base lg:text-1.375rem"
                  >
                    Email
                  </FormLabel>
                  <Field
                    as={Input}
                    id="emailAddress"
                    className="field mt-0.31rem lg:mt-3 h-4.063rem rounded-xl border-#33333380 bg-white"
                    name="emailAddress"
                    type="text"
                    placeholder="Eg. rakesh@gmail.com"
                  />
                  {errors.emailAddress && touched.emailAddress ? (
                    <div className="errorDiv">{errors.emailAddress}</div>
                  ) : null}
                </Flex>
              </Flex>

              <Flex
                width={{ base: '100%', md: '80%', lg: '55%' }}
                className="flex-col lg:flex-row px-0.88rem lg:px-0 pt-5 lg:pt-1.875rem justify-between"
              >
                <Flex
                  className="field flex-col w-full lg:w-48%"
                  // as={motion.div}
                  // variants={{
                  //   hidden: { opacity: 0, y: 55 },
                  //   visible: { opacity: 1, y: 0 },
                  // }}
                  // initial="hidden"
                  // whileInView="visible"
                  // viewport={{ once: true }}
                  // transition="0.2s ease 0.17s"
                >
                  <FormLabel
                    htmlFor="cityCenter"
                    className="helvetica-medium-font text-base lg:text-1.375rem"
                  >
                    City Center
                  </FormLabel>
                  <Field
                    as={Select}
                    id="cityCenter"
                    name="cityCenter"
                    // mt="0.75rem"
                    placeholder="Select City"
                    focusBorderColor="#FF077C"
                    className="justify-between h-4.063rem rounded-md"
                  >
                    {ContactCities.map(city => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                  {errors.cityCenter && touched.cityCenter ? (
                    <div className="errorDiv">{errors.cityCenter}</div>
                  ) : null}
                </Flex>

                <Flex
                  className="field flex-col w-full lg:w-48% relative mt-5 lg:mt-0"
                  // as={motion.div}
                  // variants={{
                  //   hidden: { opacity: 0, y: 55 },
                  //   visible: { opacity: 1, y: 0 },
                  // }}
                  // initial="hidden"
                  // whileInView="visible"
                  // viewport={{ once: true }}
                  // transition="0.2s ease 0.18s"
                >
                  <FormLabel
                    htmlFor="collegeName"
                    className="helvetica-medium-font text-base lg:text-1.375rem"
                  >
                    College / University
                  </FormLabel>
                  <Field
                    as={Input}
                    id="collegeName"
                    className="field mt-0.31rem lg:mt-3 h-4.063rem rounded-xl bg-white"
                    name="collegeName"
                    type="text"
                    //   value={selectedCollege}
                    //   onChange={handleSearchChange}
                    placeholder="Search for Your College"
                    borderColor="#33333380"
                  />

                  {/* {showCollegeList && filteredColleges.length > 0 && (
                      <ul className="filtered-college-list">
                        {filteredColleges.map((college: any, index: number) => (
                          <li
                            className="filtered-college-point"
                            key={index}
                            onClick={() => handleCollegeSelection(college)}
                          >
                            {college}
                          </li>
                        ))}
                      </ul>
                    )} */}

                  {/* <CollegeSearchForm name="collegeName" className="helvetica-medium-font"
                      fontSize={{ base: '1rem', lg: '1.375rem' }}/> */}
                  {errors.collegeName && touched.collegeName ? (
                    <div className="errorDiv">{errors.collegeName}</div>
                  ) : null}
                </Flex>
              </Flex>
              <Flex
                className="flex-col px-[0.88rem] lg:px-0 pt-5 lg:pt-[1.875rem]"
                width={{ base: '100%', md: '80%', lg: '55%' }}
                // as={motion.div}
                // variants={{
                //   hidden: { opacity: 0, y: 55 },
                //   visible: { opacity: 1, y: 0 },
                // }}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition="0.2s ease 0.20s"
              >
                <FormLabel
                  htmlFor="message"
                  className="helvetica-medium-font text-base lg:text-1.375rem"
                >
                  Your Message
                </FormLabel>
                <Field
                  component="textarea"
                  className="field message-field mt-0.31rem lg:mt-3"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Enter you message here ....."
                />
                {errors.message && touched.message ? (
                  <div className="errorDiv">{errors.message}</div>
                ) : null}
                <Box className="mt-1 lg:mt-3">
                  <ReCAPTCHA
                    sitekey="6LeBtbYnAAAAABuibRliB7M7XcHJ2_-DIWTdS0Ig"
                    ref={recaptchaRef}
                    onChange={handleCaptchaSubmission}
                  />
                </Box>

                <Flex className="w-full justify-center lg:justify-start">
                  <Button
                    type="submit"
                    className="helvetica-font rounded-md mt-10 lg:mt-3.125rem h-3.125rem lg:h-4.063rem
                    w-[17rem] lg:w-[22rem] italic flex justify-center items-center text-white button-style"
                    backgroundColor={'#FF077C !important'}
                    transform="skew(-12deg)"
                    transition="0.4s all ease-out"
                    filter="drop-shadow(8px 8px 2px #d1ff45)"
                    isLoading={isSubmitting}
                    loadingText="Submitting Form"
                    isDisabled={!isVerified || isSubmitting}
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
      <Image
        className="absolute bottom-[11%] left-0 "
        src="left-contact-design.svg"
        alt="left-contact-design"
        display={{ lg: 'block', base: 'none' }}
        zIndex="0"
      />

      <Image
        className="absolute top-[30%] right-0"
        src="right-contact-design.svg"
        alt="right-contact-design"
        display={{ lg: 'block', base: 'none' }}
        zIndex="0"
      />
    </Flex>
  );
}

export default ContactForm