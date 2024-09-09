"use client";
import { Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Heading,
  Flex,
  Box,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { SelectProfileSchema } from "@/schemas/register";
import api from "@/utils/axios/instance";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import RadioGroup from "./RadioGroup";
import CustomRadio from "./CustomRadio";
import Link from "next/link";

interface SelectMode {
  modeSelected: string;
}

export default function SelectProfile() {
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);
  const [initialValues, setInitialValues] = useState<SelectMode>({
    modeSelected: "",
  });
  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: SelectMode,
    actions: FormikHelpers<SelectMode>
  ) => {
    try {
      // Determine if online mode is selected
      const isOnlineModeSelected =
        values.modeSelected === "online" ? true : false;

      // Proceed with the API call if `isModeEdited` is false
      const response = await api.post(
        `/users/update/esport-details/${state._id}`,
        {
          isOnlineModeSelected: isOnlineModeSelected,
        }
      );

      const data = response.data;

      if (response) {
        toast({
          title: `Details Submitted`,
          status: "success",
          isClosable: true,
          description: data.message,
        });

        dispatch({
          type: "UPDATE",
          payload: {
            ...state,
            isOnlineModeSelected: isOnlineModeSelected,
            activeStep: 2, // Will be used for Edit Profile
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
      // console.error('Error submitting form:', error);
    }
  };

  /**
   * For Edit Profile
   */

  useEffect(() => {
    console.log("state", state);
    console.log(
      "state.isOnlineModeSelected",
      state.isOnlineModeSelected !== ""
        ? state.isOnlineModeSelected
          ? "online"
          : "offline"
        : ""
    );
    if (state.isOnlineModeSelected !== "") {
      console.log("here");
      setInitialValues({
        ...initialValues,
        modeSelected: state.isOnlineModeSelected ? "online" : "offline",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SelectProfileSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form className="flex flex-col grow  pt-8 md:max-h-[80vh]">
          <div className="pl-6 lg:pl-16 pr-6 lg:pr-0">
            <Heading
              pb={{ base: "2.125rem", lg: "1.25rem" }}
              className={`ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal text-white tracking-wide lg:tracking-wider ${
                state.isModeEdited ? "opacity-60" : "opacity-100"
              }`}
            >
              SELECT{" "}
              <Box as="span" className="text-#DBFD67">
                MODE
              </Box>
            </Heading>
            <Box>
              <Flex
                className="flex flex-col"
                width={{ base: "100%", lg: "100%" }}
                pt="1.25rem"
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent="space-between"
              >
                <Flex width="100%" direction="column" className="field ">
                  {/* <FormLabel htmlFor="mode">
                  Choose your Degree/ Study field
                </FormLabel> */}
                  <div className="relative flex flex-col items-end ">
                    <RadioGroup
                      name="modeSelected"
                      className="whitespace-nowrap lg:whitespace-normal  max-md:items-center max-md:justify-center"
                      mb="2.063rem"
                      minWidth="100%"
                      display={"flex"}
                      gap="1.5rem"
                    >
                      <CustomRadio
                        key="online"
                        value="online"
                        name="online"
                        imageUrl="/online.svg"
                        // disabled={!!state.isModeEdited}
                      />

                      <CustomRadio
                        key="offline"
                        value="offline"
                        name="offline"
                        // disabled={!!state.isModeEdited}
                        imageUrl="/offline.svg"
                      />
                    </RadioGroup>
                    {values.modeSelected == "offline" && (
                      <div className=" absolute -bottom-7 xl:right-[22%] lg:right-[18%] md:right-[25%] right-[5%]   rounded-md   px-7 py-4 bg-[#191919] text-[#5D5D5E] text-xs">
                        Only available in some cities.
                      </div>
                    )}
                    {touched.modeSelected && errors.modeSelected && (
                      <div className="w-full flex justify-start">
                        <div className="text-#DBFD67">
                          {errors.modeSelected}
                        </div>
                      </div>
                    )}
                  </div>
                </Flex>
                {/* {state.isModeEdited && (
                  <Flex className="pt-4 flex-wrap flex-col items-start w-full md:w-[85%]">
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
              </Flex>
            </Box>
          </div>
          <div className="py-16"></div>
          <Box className="mt-auto sticky bg-white bottom-0">
            <div className="fixed bg-black z-50  lg:w-[55%] w-full   flex-col flex items-center justify-between lg:right-0 bottom-0 mt-auto ">
              <div className=" bg-black lg:pl-16   border-t border-[fffffef] w-full   lg:flex-row flex-col flex items-center justify-between ">
                <Button
                  id="select-mode-submit-btn"
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
                  loadingText="Submiting"
                >
                  Proceed
                </Button>
              </div>
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
