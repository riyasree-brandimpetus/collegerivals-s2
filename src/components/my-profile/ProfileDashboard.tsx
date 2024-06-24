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
    <div className="w-full flex flex-col items-center lg:h-screen h-full bg-black overflow-visible">
        <img
          src="/profile-yellow.svg"
          alt=""
          className="absolute right-0 bottom-0 z-0 md:w-1/2 w-1/2"
        />
          <img
          src="/profile-illustration.svg"
          alt=""
          className="absolute top-0 right-0 z-0"
        />
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:px-24 md:px-12 px-6 py-32 md:gap-24 gap-8 relative z-0 overflow-visible">
      

        <div className="xl:p-10  flex flex-col gap-14 w-full z-10 relative ">
          <div className="absolute w-full md:hidden flex h-full -z-1  justify-center ">
            <img
              src="/mobile-bg-blur.svg"
              alt=""
              className="absolute inset-0 w-[100vw] lg:h-[67vh] h-[100vh]   object-fill   "
            />
          </div>
          <div className="absolute w-full h-full -z-1 lg:flex hidden justify-center  ">
            <img
              src="/profile-blur-bg.svg"
              alt=""
              className="absolute inset-0 w-[100vw] lg:h-[71vh] h-[100vh]  object-fill backdrop-blur-md rounded-lg  "
            />
          </div>
          <div className="absolute w-full h-full -z-1 md:flex lg:hidden hidden  justify-center  ">
            <img
              src="/profile-blur-bg.svg"
              alt=""
              className="absolute inset-0 w-[100vw]   object-contain backdrop-blur-md rounded-lg  "
            />
          </div>
        
        
          <div className="flex  custom-clip flex-col justify-center items-center md:gap-14  lg:-mt-20 z-50 relative px-10">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 w-full justify-center place-items-center">
              <div className="flex h-full justify-between flex-col  md:place-items-start  items-center">
                <div>
                <div className=" lg:pr-6">
                  <div className="relative">
                  <img src={User.profilePhoto} alt="" className="rounded-2xl" />
                  <div className="bg-[#191919] p-4 rounded-full absolute -top-3 -right-3"></div>
                  </div>
                </div>
                <div className="flex flex-col mt-3  items-center lg:place-items-start place-items-center gap-1">
               
                  <p className="text-[#CFCFCF] md:text-xl text-lg helvetica-font font-bold">
                    {User.name}
                  </p>
                  <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                    Joined on 20th Jun ‘24
                  </p>
                </div>
                </div>
                
                <div className=" lg:flex hidden flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Mode</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">{User.isOnlineModeSelected ? "Online" : "Offline"}</p>
                  </div>
              </div>
              <div className="flex flex-col lg:gap-14  lg:place-items-start items-center ">
                <h2 className="md:text-7xl  text-3xl font-extrabold text-white lg:mt-20 mt-7   uppercase ppFormula-font">
                  <em>HELLO, {User.name}</em>
                  <span className="text-[#DBFD67]"> !</span>
                </h2>
                <div className="grid items-center max-lg:mt-5 lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-4">
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Age</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">28 yrs</p>
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">City</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">{User.city}</p>
                  </div>
                  <div className="flex flex-col max-lg:col-span-2 flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Email Address</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">{userData.email}</p>
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">College</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                     {User.collegeName}
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Degree</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">{User.degreeStudyField ? User.degreeStudyField : '-'}</p>
                  </div>

                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Phone no.</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">{User.whatsappNumber}</p>
                  </div>
                  <div className=" lg:hidden flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Mode</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">{User.isOnlineModeSelected ? "Online" : "Offline"}</p>
                  </div>
                 
                  <div className=" flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Selected Games</p>
                    <div className="flex mt-2 flex-row gap-1.5">
                      <img src="/prof1.svg" alt="" />
                      <img src="/prof2.svg" alt="" />
                    </div>
                  </div>
                  <div className=" flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">Date & Time</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">22nd Aug, 5:30 PM</p>
                  </div>
                  <div className=" flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">City</p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">Mysore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col max-lg:mt-9 gap-10 w-full justify-center lg:place-items-end items-center">
              <div className="flex flex-col lg:w-3/5 md:w-[80%] w-full gap-2">
                <div className="bg-[#333132] w-full h-[17px] rounded-sm">
                  <div className=" bg-[#E7327C] h-full rounded-sm" 
                          style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-white">{progress}% Complete</p>
              </div>
              <div className="clip-bg rounded-lg w-fit lg:block hidden ">
                <button className="custom-button xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover bg-black helvetica-light-font font-normal">
                  COMPLETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="clip-bg rounded-lg lg:hidden flex w-fit  z-10">
          <button className="custom-button px-9 py-5 text-lg text-[#DBFD67] rounded-lg bg-cover  bg-black ">
            COMPLETE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
