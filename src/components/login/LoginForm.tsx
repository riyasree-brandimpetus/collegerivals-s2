"use client";

import FirstForm from "@/components/register/FirstForm";
import SecondForm from "@/components/register/SecondForm";
import ThirdForm from "@/components/register/ThirdForm";
import CompletionStepForm from "@/components/register/completionStepForm";
import { UserContext } from "@/utils/context/user.context";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  useSteps,
  Stepper,
  StepIcon,
  Text,
  Divider,
  StepSeparator,
  StepDescription,
  Step,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import OTPForm from "./OTPForm";
import Image from "next/image";
import Link from "next/link";
import LoadingScreen from "../globalComponents/LoadingScreen";

const steps = [
  { description: "Enter Details" },
  { description: "Verification" },
  { description: "Log In" },
];

export default function LoginForm() {
  const { state } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(true);
  
  useEffect(() => {
    if (state.isWhatsAppVerified) {
      setShowLoader(false)
      setActiveStep(2);
    }
  }, [state.isWhatsAppVerified ,setActiveStep]);
/* eslint-disable */
  useEffect(() => {
    if (state.isLoggedIn) {
    router.push('/my-profile');
      console.log('User is Logged in');
    }
  }, [state.isLoggedIn]);


  
  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserId: any = localStorage.getItem('userId');
    if (storedUserId) {
      // console.log('ID is found', storedUserId);
      router.push('/my-profile');
    } else{
      setShowLoader(false)
    }
  }, []);
    /* eslint-enable */

  return (
    <>
     {showLoader ? (
        <LoadingScreen/>
      ) : (
      <div className="w-full flex h-screen bg-black">
        <div className=" max-lg:hidden w-45% custom-background pt-10 pl-11">
          <Link href="/">
            <Image
              src="./college-rivals-white-logo.svg"
              alt="Logo"
              width={85}
              height={47}
            />
          </Link>
        </div>
        <div className="w-[55%] max-lg:w-full ">
          <Link className="lg:hidden" href="/">
            <Image
              className="pl-6 pt-6"
              src="./college-rivals-white-logo.svg"
              alt="Logo"
              width={82}
              height={23}
            />
          </Link>
          <div className="py-2rem  flex md:pl-8 md:pr-14 bg-gradeint-white justify-center items-center  ">
            <div className="flex items-center flex-col">
              <div
                className="rounded-full lg:w-[43px] lg:h-[43px] w-[29px] h-[29px] flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 1 ? "#E7327C" : "transparent",
                }}
              >
                {activeStep > 1 ? (
                  <div>
                    <Image src="/tick-mark.svg" width={18} height={12} alt="" />
                  </div>
                ) : (
                  "1"
                )}
              </div>
              <p className="text-white  pt-3 helvetica-font font-bold md:text-base text-xs">
                Enter Credentials
              </p>
            </div>
            <Image
              src="/stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[23%] max-lg:hidden  h-auto -mt-9"
            />
            <Image
              src="/md-stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[15%] lg:hidden h-auto -mx-3  -mt-7"
            />
            <div className="flex items-center flex-col">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 2 ? "#E7327C" : "transparent",
                }}
              >
                {activeStep > 2 ? (
                  <div>
                    <Image src="/tick-mark.svg" width={18} height={12} alt="" />
                  </div>
                ) : (
                  "2"
                )}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs">
                Verification
              </p>
            </div>
            <Image
              src="/stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[23%] max-lg:hidden  h-auto -mt-9"
            />
            <Image
              src="/md-stepper-seprator.svg"
              alt=""
              width="0"
              height="0"
              className="w-[15%] lg:hidden h-auto -mx-3 -mt-7"
            />
            <div className="flex items-center flex-col">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 3 ? "#E7327C" : "transparent",
                }}
              >
                {activeStep > 3 ? (
                  <div>
                    <Image src="/tick-mark.svg" width={18} height={12} alt="" />
                  </div>
                ) : (
                  "3"
                )}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
                Log in
              </p>
            </div>
          </div>
          <div className="w-full relative">
            {activeStep === 1 ? (
              // <FirstForm />
              <BasicDetailsForm />
            ) : activeStep === 2 ? (
              <OTPForm />
            ) : activeStep === 3 ? (
              <ThirdForm />
            ) : null}
            <div className="py-16 max-md:py-20"></div>
          </div>
        </div>
      </div>)}
    </>
  );
}
