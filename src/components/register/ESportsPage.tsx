"use client";
import ThirdForm from "@/components/register/ThirdForm";
import { UserContext } from "@/utils/context/user.context";
import { useRouter } from "next/navigation";
import { useSteps } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import SelectMode from "./SelectMode";
import Image from "next/image";
import Link from "next/link";
import SelectDate from "./SelectDate";
import api from "@/utils/axios/instance";
import LoadingScreen from "../globalComponents/LoadingScreen";

const steps = [
  { description: "Select Mode" },
  { description: "Choose Games" },
  { description: "Select Slot" },
];

export default function ESportsPage() {
  const { state, dispatch } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    if (state.isOnlineModeSelected !== "") {
      // console.log('Online/Offline Mode is selected');
      setActiveStep(2);
    }
  }, [state.isOnlineModeSelected, setActiveStep]);

  useEffect(() => {
    if (state.isOnlineModeSelected !== "" && state.gameDetails.length > 0) {
      // console.log('Game Details are verified');
      setActiveStep(3);
    }
  }, [state.isOnlineModeSelected, state.gameDetails, setActiveStep]);

  useEffect(() => {
    if (state.activeStep == 4) {
      // console.log('Date, Time Slorts are updated');
      // setActiveStep(3);
      router.push("/add-academic-details");
    }
  }, [state.activeStep, router]);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserId: any = localStorage.getItem("userId");
    console.log(state);
    if (storedUserId) {
      const fetchUserDetails = async () => {
        try {
          const response = await api.post("/users/details", {
            userId: state._id || storedUserId,
          });
          const data = response.data;
          dispatch({
            type: "UPDATE",
            payload: { ...state, ...data, isLoggedIn: true },
          });
          if (data.selectedDate) {
            router.push("/add-academic-details");
          } else {
            setShowLoader(false);
          }
        } catch (error: any) {
          const message = error?.response?.data?.error;
          router.push("/my-profile");
          console.error("Error fetching Data:", message);
        }
      };
      fetchUserDetails();
      // console.log('ID is found', storedUserId);
    } else {
      // console.log('ID not found');
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showLoader ? (
        <LoadingScreen />
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
          <div className="w-[55%] max-lg:w-full overflow-auto">
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
              <div className="flex w-[550px] items-center flex-col">
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
                  Select Mode
                </p>
              </div>
              <hr className="w-full h-auto -mx-10 -mt-7 border-[#ffffff3d]" />
              <div className="flex w-[600px] items-center flex-col">
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
                  Choose Games
                </p>
              </div>
              <hr className="w-full h-auto  -ml-10 -mr-7 -mt-7 border-[#ffffff3d]" />
              <div className="flex w-[450px] items-center flex-col">
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
                  Select Slot
                </p>
              </div>
            </div>
            <div className="w-full relative bg-black">
              {activeStep === 1 ? (
                <SelectMode />
              ) : activeStep === 2 ? (
                <ThirdForm />
              ) : activeStep === 3 ? (
                <SelectDate />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
