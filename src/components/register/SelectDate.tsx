"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Heading,
  Flex,
  Select,
  Box,
  FormLabel,
  useToast,
  Text,
  Link,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  SelectOfflineDateTimeSchema,
  SelectOnlineDateTimeSchema,
} from "@/schemas/register";
import { ChangeEvent } from "react";
import api from "@/utils/axios/instance";
import { DateTimeSlotValues } from "@/types/register/register";
import { useContext, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import onlinedate from "../../../public/SelectedDateOnline.json";
import QualifierText from "./QualifierText";
import Citynames from "../../../public/citynames.json";
export default function SelectDate() {
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);
  /**
   * Initialize first form values
   */
  const dateTimeFormInitialValues: DateTimeSlotValues = {
    selectedDate: "",
    selectedMonth: "",
    selectedCity: "",
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
      // Check if isModeEdited is true, then skip the request
      if (state.isModeEdited) {
        dispatch({
          type: "UPDATE",
          payload: {
            ...state,
            activeStep: 4,
          },
        });
        toast({
          title: `Details Already Submitted`,
          status: "info",
          isClosable: true,
          description: "Your details are already submitted.",
        });
        return; // Exit early if isModeEdited is true
      }

      // Prepare the payload
      const payload = {
        isOnlineModeSelected: state.isOnlineModeSelected,
        selectedDate: values.selectedDate,
        isModeEdited: state.collegeName ? true : false,
      };

      const response = await api.post(
        `/users/update/esport-details/${state._id}`,
        payload
      );

      const data = response.data;

      if (response) {
        toast({
          title: `Details Submitted`,
          status: "success",
          isClosable: true,
          description: data.message,
        });

        // Dispatch the action after a successful response
        dispatch({
          type: "UPDATE",
          payload: {
            ...state,
            selectedDate: values.selectedDate,
            selectedCity: "", // Ensure selectedCity is reset
            activeStep: 4,
          },
        });
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

  const offlinehandleSubmit = async (
    values: DateTimeSlotValues,
    actions: FormikHelpers<DateTimeSlotValues>
  ) => {
    try {
      // Check if isModeEdited is true, then skip the request
      // if (state.isModeEdited) {
      //   dispatch({
      //     type: "UPDATE",
      //     payload: {
      //       ...state,
      //       activeStep: 4,
      //     },
      //   });
      //   toast({
      //     title: `Details already Submitted`,
      //     status: "info",
      //     isClosable: true,
      //     description: "Your details are already submitted.",
      //   });
      //   return; // Exit early if isModeEdited is true
      // }

      // Prepare the payload
      const payload = {
        isOnlineModeSelected: state.isOnlineModeSelected,
        selectedCity: values.selectedCity,
      };

      const response = await api.post(
        `/users/update/esport-details/${state._id}`,
        payload
      );

      const data = response.data;

      if (response) {
        toast({
          title: `Details Submitted`,
          status: "success",
          isClosable: true,
          description: data.message,
        });

        // Dispatch the action after successful response
        dispatch({
          type: "UPDATE",
          payload: {
            ...state,
            isOnlineModeSelected: false,
            selectedCity: values.selectedCity,
            selectedDate: "",
            activeStep: 4,
          },
        });
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

  let [monthselectedstate, monthselect] = useState(false);

  const [selectMonthstate, setSelectMonth] = useState<string>(""); //use state name is clashing or solve the error msg

  const getEventsForMonth = (month: string) => {
    if (month in onlinedate) {
      return onlinedate[month as keyof typeof onlinedate];
    }
    return [];
  };

  type Cities = {
    [key: string]: string;
  };

  const [selectedCitystate, setSelectedCity] = useState<string>("");
  const [selectedDatestate, setSelectedDate] = useState<string>("");

  return (
    <div>
      {state.isOnlineModeSelected ? (
        <Formik
          initialValues={dateTimeFormInitialValues}
          validationSchema={
            state.isModeEdited
              ? undefined // or null if you want no validation schema
              : state.isOnlineModeSelected
              ? SelectOnlineDateTimeSchema
              : SelectOfflineDateTimeSchema
          }
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, setFieldValue }) => (
            <Form className="flex flex-col grow   pt-8 md:max-h-[80vh]">
              <div className="pl-6 lg:pl-16 pr-6 lg:pr-0 overflow-scroll ">
                <Heading
                  pb={{ base: "0.5rem", lg: "0.25rem" }}
                  className={`ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider text-white  ${
                    state.isModeEdited ? "opacity-60" : "opacity-100"
                  }`}
                >
                  SELECT{" "}
                  <Box as="span" className="text-#DBFD67">
                    {monthselectedstate ? "DATE" : "MONTH"}
                  </Box>
                </Heading>
                {/* <Text color={"white"} pb={{ base: "2.125rem", lg: "1.25rem" }}>
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
                </Text> */}
                <Box overflowY="auto">
                  <Flex
                    width={{ base: "100%", lg: "80%" }}
                    direction={{ base: "column", lg: "row" }}
                    pt={{ base: "1.25rem", lg: "1rem" }}
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    {state.isOnlineModeSelected && (
                      <div className="w-full items-start flex-col md:justify-start justify-center  md:flex-row flex md:gap-8">
                        <Flex
                          pb={{ base: "1rem", lg: "2.938rem" }}
                          width={{ base: "100%", lg: "48%" }}
                          direction="column"
                          className="field"
                          pt={{ base: ".5rem", lg: "0rem" }}
                        >
                          <FormLabel
                            className={`helvetica-font font-bold text-lg ${
                              state.isModeEdited ? "opacity-60" : "opacity-100"
                            }`}
                            color={"#CFCFCF"}
                          >
                            Select Month
                          </FormLabel>
                          <Field
                            disabled={state.isModeEdited}
                            as={Select}
                            id="selectedMonth"
                            name="selectedMonth"
                            height="4.063rem"
                            borderRadius="0.75rem"
                            color="white"
                            placeholder="Select Month"
                            focusBorderColor="#DBFD67"
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                              setFieldValue("selectedMonth", e.target.value);
                              setSelectMonth(e.target.value);
                              monthselect(true);
                              // Call any other onChange logic if needed
                            }}
                          >
                            {Object.keys(onlinedate).map((times) => (
                              <option key={times} value={times}>
                                {times}
                              </option>
                            ))}
                          </Field>
                          {errors.selectedMonth && touched.selectedMonth && (
                            <div className="text-#DBFD67">
                              {errors.selectedMonth}
                            </div>
                          )}
                          <QualifierText />
                        </Flex>
                        {monthselectedstate && (
                          <Flex
                            pb={{ base: "2.625rem", lg: "2.938rem" }}
                            width={{ base: "100%", lg: "48%" }}
                            direction="column"
                            className="field"
                            pt={{ base: "1.25rem", lg: "0rem" }}
                          >
                            <FormLabel
                              className={`helvetica-font font-bold text-lg ${
                                state.isModeEdited
                                  ? "opacity-60"
                                  : "opacity-100"
                              }`}
                              color={"#CFCFCF"}
                            >
                              Select Date
                            </FormLabel>
                            <Field
                              disabled={state.isModeEdited}
                              as={Select}
                              id="selectedDate"
                              name="selectedDate"
                              height="4.063rem"
                              borderRadius="0.75rem"
                              color="white"
                              placeholder="Select Date"
                              focusBorderColor="#DBFD67"
                            >
                              {getEventsForMonth(selectMonthstate).map(
                                (event, index) => (
                                  <option key={index}>{event} </option>
                                )
                              )}
                            </Field>

                            {errors.selectedDate && touched.selectedDate && (
                              <div className="text-#DBFD67">
                                {errors.selectedDate}
                              </div>
                            )}
                            <QualifierText />
                          </Flex>
                        )}
                      </div>
                    )}
                    {state.isModeEdited && (
                      <Flex className="pt-4 flex-wrap flex-col items-start w-full">
                        <Alert
                          status="info"
                          className="w-auto bg-slate-800 text-white flex gap-1 "
                        >
                          <AlertIcon color={"white"} />
                          <div className="">
                            {" "}
                            You can no longer edit this.
                            <div className="flex gap-1 flex-wrap">
                              For changes, contact us at
                              <Link
                                className="underline"
                                href="mailto:hello@collegerivals.com"
                              >
                                hello@collegerivals.com
                              </Link>{" "}
                              or on{" "}
                              <Link
                                className="underline"
                                target="_blank"
                                href="https://api.whatsapp.com/send?phone=919999567476&text=Hello,%20%0A%20I%20have%20a%20question%20about%20https%3A%2F%2Fcollegerivals.com%2F"
                              >
                                WhatsApp
                              </Link>
                            </div>
                          </div>
                        </Alert>
                      </Flex>
                    )}
                  </Flex>
                  <div className=" py-20 "></div>
                </Box>
              </div>
              <Box className=" bg-black bottom-0">
                <div className="fixed bg-black z-50  lg:w-[55%] w-full   flex-col flex items-center justify-between lg:right-0 bottom-0 mt-auto ">
                  <div className=" bg-black lg:pl-16   border-t border-[fffffef] w-full   lg:flex-row flex-col flex items-center justify-between ">
                    <Button
                      id="selected-date-city-submit-btn"
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
                      loadingText="Saving details"
                      isDisabled={isSubmitting}
                    >
                      Proceed and Save
                    </Button>
                  </div>
                </div>
              </Box>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <Formik
            initialValues={dateTimeFormInitialValues}
            validationSchema={
              state.isModeEdited
                ? undefined // or null if you want no validation schema
                : state.isOnlineModeSelected
                ? SelectOnlineDateTimeSchema
                : SelectOfflineDateTimeSchema
            }
            onSubmit={offlinehandleSubmit}
          >
            {({ errors, touched, isSubmitting, setFieldValue }) => (
              <Form className="flex flex-col grow   pt-8 md:max-h-[80vh]">
                <div className="pl-6 lg:pl-16 pr-6 lg:pr-0 overflow-scroll ">
                  <Heading
                    pb={{ base: "0.5rem", lg: "0.25rem" }}
                    className={`ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider text-white`}
                  >
                    SELECT{" "}
                    <Box as="span" className="text-#DBFD67">
                      CITY
                    </Box>
                  </Heading>
                  {/* <Text
                    color={"white"}
                    pb={{ base: "2.125rem", lg: "1.25rem" }}
                  >
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
                  </Text> */}
                  <Box overflowY="auto">
                    <Flex
                      width={{ base: "100%", lg: "80%" }}
                      direction={{ base: "column", lg: "row" }}
                      pt={{ base: "1.25rem", lg: "1rem" }}
                      justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="flex w-full flex-col">
                        <Flex
                          pb={{ base: "2.625rem", lg: "2.938rem" }}
                          width={{ base: "100%", lg: "48%" }}
                          direction="column"
                          className="field"
                          pt={{ base: "1.25rem", lg: "0rem" }}
                        >
                          <FormLabel
                            className={`helvetica-font font-bold text-lg ${
                              state.isModeEdited ? "opacity-60" : "opacity-100"
                            }`}
                            color={"#CFCFCF"}
                          >
                            Select City
                          </FormLabel>
                          <Field name="selectedCity">
                            {({ field, form }: { field: any; form: any }) => (
                              <Select
                                // disabled={state.isModeEdited}
                                {...field}
                                id="selectedCity"
                                height="4.063rem"
                                borderRadius="0.75rem"
                                color="white"
                                placeholder="Select City"
                                focusBorderColor="#DBFD67"
                                onChange={(
                                  e: ChangeEvent<HTMLSelectElement>
                                ) => {
                                  const city = e.target.value;
                                  setFieldValue(field.name, city); // Update Formik state
                                  setSelectedCity(city); //Todo - We are not using this anywhere
                                  setSelectedDate((Citynames as Cities)[city]);
                                  // Call any other onChange logic if needed
                                }}
                              >
                                {Object.keys(Citynames).map((city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                ))}
                              </Select>
                            )}
                          </Field>
                          {errors.selectedCity && touched.selectedCity && (
                            <div className="text-#DBFD67">
                              {errors.selectedCity}
                            </div>
                          )}
                          {/* <QualifierText /> */}
                        </Flex>
                        {/* {state.isModeEdited && (
                          <Flex className="pt-4 flex-wrap flex-col items-start w-full">
                            <Alert
                              status="info"
                              className="w-auto bg-slate-800 text-white flex gap-1 "
                            >
                              <AlertIcon color={"white"} />
                              <div className="">
                                {" "}
                                You can no longer edit this.
                                <div className="flex gap-1 flex-wrap">
                                  For changes, contact us at
                                  <Link
                                    className="underline"
                                    href="mailto:hello@collegerivals.com"
                                  >
                                    hello@collegerivals.com
                                  </Link>{" "}
                                  or on{" "}
                                  <Link
                                    className="underline"
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=919999567476&text=Hello,%20%0A%20I%20have%20a%20question%20about%20https%3A%2F%2Fcollegerivals.com%2F"
                                  >
                                    WhatsApp
                                  </Link>
                                </div>
                              </div>
                            </Alert>
                          </Flex>
                        )} */}
                        {selectedDatestate && (
                          <div className="flex ">
                            <div className="text-[#949494] rounded-md bg-[#191919] helvetica-light-font  max-md:flex-wrap max-md:w-full max-md:items-center justify-center text-base px-10 flex gap-2 items-center py-3 ">
                              Qualifier Date -{" "}
                              <div className="text-base">
                                {selectedDatestate}
                              </div>{" "}
                            </div>
                          </div>
                        )}
                      </div>
                    </Flex>
                    <div className=" py-20 "></div>
                  </Box>
                </div>
                <Box className=" bg-black bottom-0">
                  <div className="fixed bg-black z-50  lg:w-[55%] w-full   flex-col flex items-center justify-between lg:right-0 bottom-0 mt-auto ">
                    <div className=" bg-black lg:pl-16   border-t border-[fffffef] w-full   lg:flex-row flex-col flex items-center justify-between ">
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
                        loadingText="Saving details"
                        isDisabled={isSubmitting}
                      >
                        Proceed and Save
                      </Button>
                    </div>
                  </div>
                </Box>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
