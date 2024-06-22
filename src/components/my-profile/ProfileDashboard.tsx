"use client"
import { useState } from "react";
import userData from "./Profiledata.json"

const ProfileDashboard = () => {


  interface UserProfile {
    name: string;
    email: string;
    whatsappNumber: string;
    whatsappCountryCode: string;
    isOnlineModeSelected: boolean;
    selectedDate: string;
    selectedTimeSlot: string;
    isWhatsAppVerified: boolean;
    gameDetails: string;
    city: string;
    isUserVerified: boolean;
    createdAt: string;
    dob: string;
    collegeName: string;
    degreeStudyField: string;
    profilePhoto: string;
    userAgentDetails: string;
    queryParams: Record<string, unknown>;
    agreedToTerms: boolean;
    gender: string;
  }
  
  const User : UserProfile= userData;

const [progress, setprogress] = useState<number>(45)



  return (
    <div className="w-full flex flex-col items-center h-screen bg-black overflow-visible">
        <img
          src="/profile-yellow.svg"
          alt=""
          className="absolute right-0 md:bottom-0 bottom-44 z-0 md:w-1/2 w-1/2"
        />
          <img
          src="/profile-illustration.svg"
          alt=""
          className="absolute top-0 right-0 z-0"
        />
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:px-24 md:px-12 px-6 py-32 md:gap-24 gap-8 relative z-0 overflow-visible">
      

        <div className="xl:p-10 flex flex-col gap-14 w-full z-10 relative">
          <div className="absolute w-full h-1/2 -z-1 xl:flex hidden justify-center">
            <img
              src="/profile-bg-desktop.svg"
              alt=""
              className="absolute inset-0 w-full object-fill translucent-bg"
            />
          </div>
          <div className="absolute w-[89vw] h-[35vh] -z-1 xl:hidden md:flex hidden overflow-hidden rounded-xl justify-center">
            <img
              src="/profile-bg-tab.png"
              alt=""
              className="absolute inset-0 w-full object-fill translucent-bg"
            />
          </div>
          <div className="absolute w-[90vw] h-[100vh] -z-1 md:hidden flex -mt-20 overflow-hidden  justify-center">
            <img
              src="/profile-bg-mob.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>
          <div className="flex flex-col md:gap-14 gap-7 -mt-28 z-50 relative px-10">
            <div className="flex md:flex-row flex-col md:gap-10 gap-0 w-full justify-center place-items-center">
              <div className="flex flex-col gap-3.5 md:place-items-start justify-center place-items-center">
                <div className="relative pt-6 pr-6">
                  <img src={User.profilePhoto} alt="" className="rounded-xl" />
                  <div className="bg-[#191919] p-4 rounded-full absolute top-0 right-0"></div>
                </div>
                <div className="flex flex-col md:place-items-start place-items-center gap-1">
                  <p className="text-[#CFCFCF] md:text-xl text-lg">
                    Riyasree
                  </p>
                  <p className="text-[#5D5D5E] text-base">
                    Joined on 20th Jun ‘24
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:gap-14 gap-7 md:place-items-start place-items-center ">
                <h2 className="xl:text-6xl md:text-4xl text-3xl font-extrabold text-white md:mt-20 mt-6 tracking-tighter uppercase">
                  <em>HELLO, {User.name}</em>
                  <span className="text-[#DBFD67]"> !</span>
                </h2>
                <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-12 gap-4">
                  <div className="flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Age</p>
                    <p className="text-[#CFCFCF] text-xl">28 yrs</p>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">City</p>
                    <p className="text-[#CFCFCF] text-xl">{User.city}</p>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Email Address</p>
                    <p className="text-[#CFCFCF] md:text-xl">{userData.email}</p>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">College</p>
                    <p className="text-[#CFCFCF] text-xl">
                     {User.collegeName}
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Degree</p>
                    <p className="text-[#CFCFCF] text-xl">{User.degreeStudyField}</p>
                  </div>

                  <div className="flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Phone no.</p>
                    <p className="text-[#CFCFCF] text-xl">{User.whatsappNumber}</p>
                  </div>
                  <div className=" hidden  flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Mode</p>
                    <p className="text-[#CFCFCF] text-xl">{User.isOnlineModeSelected ? "Online" : "Offline"}</p>
                  </div>
                  <div className="md:hidden flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Selected Games</p>
                    {/* <div className="flex flex-row gap-1.5">
                      <img src="/prof1.svg" alt="" />
                      <img src="/prof2.svg" alt="" />
                    </div> */}
                  </div>
                  <div className="md:hidden flex flex-col flex-wrap">
                    <p className="text-[#5D5D5E] text-base">Date & Time</p>
                    {/* <p className="text-[#CFCFCF] text-xl">22nd Aug, 5:30 PM</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-10 w-full justify-center place-items-end">
              <div className="flex flex-col md:w-3/5 w-full gap-2">
                <div className="bg-[#333132] w-full h-[17px] rounded-sm">
                  <div className=" bg-[#E7327C] h-full rounded-sm" 
                          style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-white">{progress}% Complete</p>
              </div>
              <div className="clip-bg rounded-lg w-fit md:block hidden ">
                <button className="custom-button xl:px-9 px-4 py-5 xl:text-lg text-base text-white rounded-lg bg-cover bg-black">
                  COMPLETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="clip-bg rounded-lg w-fit md:hidden block z-10">
          <button className="custom-button px-9 py-5 text-lg text-white rounded-lg bg-cover  bg-black">
            COMPLETE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
