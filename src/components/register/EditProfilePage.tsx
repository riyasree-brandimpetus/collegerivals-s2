'use client';

import ThirdForm from '@/components/register/ThirdForm';
import { UserContext } from '@/utils/context/user.context';
import { useRouter } from 'next/navigation';
import {
  useSteps,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import SelectMode from './SelectMode';
import Image from 'next/image';
import Link from 'next/link';
import SelectDate from './SelectDate';
import api from "@/utils/axios/instance";
import LoadingScreen from '../globalComponents/LoadingScreen';
import AcademicDetailsForm from './AcademicDetailsForm';

const steps = [
  { description: 'Select Mode' },
  { description: 'Choose Games' },
  { description: 'Select Slot' },
  { description: 'Academic Details' },
];

export default function ESportsPage() {
  const { state,dispatch } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(true);

  console.log('state',state)

useEffect(() => {
  setActiveStep(state.activeStep);
}, [state.activeStep, setActiveStep]);


  useEffect(() => {
    const storedUserId: any = localStorage.getItem("userId");
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
          if(data.collegeName){
            setShowLoader(false);
          } else {
            router.push('/esports-registration')
          }
        } catch (error: any) {
          const message = error?.response?.data?.error;
          router.push("/my-profile");
          console.error('Error fetching Data:', message);
        }
      };
      fetchUserDetails();
    } else {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

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
        <div className="w-[55%] max-lg:w-full overflow-auto ">
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
            <div className="flex w-[25%] items-center flex-col px-[2rem]">
              <div
                className="rounded-full lg:w-[43px] lg:h-[43px] w-[29px] h-[29px] flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 1 ? '#E7327C' : 'transparent',
                }}
              >
                  {activeStep > 1 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "1"}
              </div>
              <p className="text-white  pt-3 helvetica-font font-bold md:text-base text-xs">
             Mode
              </p>
            </div>
          <hr  className='w-full h-auto -mx-7 -mt-9 border-[#ffffff3d]'/>
            <div className="flex w-[25%] items-center flex-col px-[2rem]">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 2 ? '#E7327C' : 'transparent',
                }}
              >
                    {activeStep > 2 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "2"}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs">
              Games
              </p>
            </div>
          <hr  className='w-full h-auto -mx-7 -mt-9 border-[#ffffff3d]'/>
            <div className="flex w-[25%] items-center flex-col px-[2rem]">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 3 ? '#E7327C' : 'transparent',
                }}
              >
                   {activeStep > 3 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "3"}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
              Slot
              </p>
            </div>
          <hr  className='w-full h-auto -mx-7 -mt-9 border-[#ffffff3d]'/>
            <div className="flex w-[25%] items-center flex-col px-[2rem]">
              <div
                className="rounded-full  lg:w-[43px] lg:h-[43px] w-[29px] h-[29px]  flex items-center text-white justify-center border border-[#ffffff1e] helvetica-font font-bold lg:text-xl text-xs"
                style={{
                  backgroundColor: activeStep >= 4 ? '#E7327C' : 'transparent',
                }}
              >
                   {activeStep > 4 ?  <div><Image src="/tick-mark.svg" width={18} height={12} alt=""/></div> :  "4"}
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
              Details
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
            ) : activeStep === 4 ? (
              <AcademicDetailsForm />
            ):null}
          </div>
        </div>
      </div>
      )}
    </>
  );
}
