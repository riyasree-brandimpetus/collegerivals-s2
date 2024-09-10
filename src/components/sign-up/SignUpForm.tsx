"use client";

import CompletionStepForm from "@/components/register/completionStepForm";
import { UserContext } from "@/utils/context/user.context";
import { useRouter } from "next/navigation";
import { useSteps } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import OTPForm from "./OTPForm";
import Link from "next/link";
import Image from "next/image";
import LoadingScreen from "../globalComponents/LoadingScreen";

const steps = [
  { description: "Enter Details" },
  { description: "Verification" },
  { description: "Create Profile" },
];

export default function SignUpForm() {
  const { state, dispatch } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserId: any = localStorage.getItem("userId");
    if (storedUserId) {
      // console.log('ID is found',storedUserId);
      router.push("/my-profile");
    } else {
      setShowLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state._id && !state.isWhatsAppVerified && state.whatsappNumber) {
      // console.log('Enter OTP');
      setActiveStep(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state._id, state.isWhatsAppVerified]);

  useEffect(() => {
    if (state.isLoggedIn) {
      setActiveStep(3);
      // console.log('OTP is verified');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoggedIn]);

  return (
    <>
      {showLoader ? (
        <LoadingScreen />
      ) : (
        <div className="w-full flex h-screen bg-black ">
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
          <div className="w-[55%]  flex flex-col justify-between max-lg:w-full ">
            <div className="">
              <Link className="lg:hidden" href="/">
                <Image
                  className="pl-6 pt-6"
                  src="./college-rivals-white-logo.svg"
                  alt="Logo"
                  width={82}
                  height={23}
                />
              </Link>
              <div className="py-2rem  flex md:pl-8 md:pr-14 bg-gradeint-white justify-between px-4 items-center  ">
                <div className="flex items-center flex-col">
                  <div
                    className="rounded-full lg:w-[43px] lg:h-[43px] w-[29px] h-[29px] flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                    style={{
                      backgroundColor:
                        activeStep >= 1 ? "#E7327C" : "transparent",
                    }}
                  >
                    {activeStep > 1 ? (
                      <div>
                        <Image
                          src="/tick-mark.svg"
                          width={18}
                          height={12}
                          alt=""
                        />
                      </div>
                    ) : (
                      "1"
                    )}
                  </div>
                  <p className="text-white  pt-3 helvetica-font font-bold md:text-base text-xs">
                    Enter Credentials
                  </p>
                </div>
                <hr className="w-[20%] xl:w-[30%] h-auto -ml-6 -mr-3  -mt-7 border-[#ffffff3d]" />
                <div className="flex items-center flex-col">
                  <div
                    className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                    style={{
                      backgroundColor:
                        activeStep >= 2 ? "#E7327C" : "transparent",
                    }}
                  >
                    {activeStep > 2 ? (
                      <div>
                        <Image
                          src="/tick-mark.svg"
                          width={18}
                          height={12}
                          alt=""
                        />
                      </div>
                    ) : (
                      "2"
                    )}
                  </div>
                  <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs">
                    Verification
                  </p>
                </div>
                <hr className="w-[20%]  xl:w-[30%] h-auto -ml-3 -mr-7 -mt-7 border-[#ffffff3d]" />
                <div className="flex items-center flex-col">
                  <div
                    className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                    style={{
                      backgroundColor:
                        activeStep >= 3 ? "#E7327C" : "transparent",
                    }}
                  >
                    {activeStep > 3 ? (
                      <div>
                        <Image
                          src="/tick-mark.svg"
                          width={18}
                          height={12}
                          alt=""
                        />
                      </div>
                    ) : (
                      "3"
                    )}
                  </div>
                  <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
                    Create Profile
                  </p>
                </div>
              </div>
              <div className="w-full h-[58vh] md:h-[60vh] xl:h-[65vh] overflow-auto ">
                {activeStep === 1 ? (
                  // <FirstForm />
                  <BasicDetailsForm />
                ) : activeStep === 2 ? (
                  <OTPForm />
                ) : activeStep === 3 ? (
                  <CompletionStepForm />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
