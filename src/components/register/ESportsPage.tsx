'use client';

import FirstForm from '@/components/register/FirstForm';
import SecondForm from '@/components/register/SecondForm';
import ThirdForm from '@/components/register/ThirdForm';
import CompletionStepForm from '@/components/register/completionStepForm';
import { UserContext } from '@/utils/context/user.context';
import { useRouter } from 'next/navigation';
import {
  useSteps,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import SelectMode from './SelectMode';
import Image from 'next/image';
import Link from 'next/link';
import SelectDate from './SelectDate';

const steps = [
  { description: 'Select Mode' },
  { description: 'Choose Games' },
  { description: 'Select Slot' },
];

export default function ESportsPage() {
  const { state } = useContext(UserContext);
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter();

  
  useEffect(() => {
    if (state.isOnlineModeSelected !== '') {
      console.log('Online/Offline Mode is selected');
      setActiveStep(2);
    }
  }, [state.isOnlineModeSelected]);

  useEffect(() => {
    if ((state.isOnlineModeSelected !== '' )&& state.gameDetails.length > 0) {
      console.log('Game Details are verified');
      setActiveStep(3);
    }
  }, [state.isOnlineModeSelected,state.gameDetails]);

useEffect(() => {
  if (state.selectedDate || state.selectedTimeSlot) {
    console.log('Date, Time Slorts are updated');
    // setActiveStep(3);
    router.push('/my-profile')
  }
}, [state.selectedDate, state.selectedTimeSlot]);

  return (
    <>
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
                  backgroundColor: activeStep == 1 ? '#E7327C' : 'transparent',
                }}
              >
                1
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
              className="w-[20%] max-lg:hidden  h-auto -mt-9"
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
                  backgroundColor: activeStep == 2 ? '#E7327C' : 'transparent',
                }}
              >
                2
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
              className="w-[20%] max-lg:hidden  h-auto -mt-9"
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
                  backgroundColor: activeStep == 3 ? '#E7327C' : 'transparent',
                }}
              >
                3
              </div>
              <p className="text-white pt-3 helvetica-font font-bold md:text-base text-xs ">
                Create Profile
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
    </>
  );
}
