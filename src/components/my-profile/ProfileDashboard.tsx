"use client";
import { UserContext } from "@/utils/context/user.context";
import { useToast, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import api from "@/utils/axios/instance";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingScreen from "../globalComponents/LoadingScreen";
// format for joined date
const formatJoinedDate = (createdAt: string): string => {
  const date = new Date(createdAt);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear().toString().slice(-2);
  const formattedDate = `${day}${getOrdinalSuffix(day)} ${
    monthNames[month]
  } ‘${year}`;

  return formattedDate;
};
const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const ProfileDashboard = () => {
  const { state, dispatch } = useContext(UserContext);
  const [progress, setprogress] = useState<number>(30);
  const [gameData, setGameData] = useState<any>([]);
  const [gameImageUrls, setGameImageUrls] = useState<any>([]);
  const [showGamesLoader, setGamesShowLoader] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [registrationUrl, setRegistrationUrl] = useState<string>(
    "/esports-registration"
  );
  const [joinedDate, setJoinedDate] = useState<string>("");
  const toast = useToast();
  const router = useRouter();
  useEffect(() => {
    console.log("state._id", state._id);
    if (state.whatsappNumber == "") {
      const storedUserId: any = localStorage.getItem("userId");

      const fetchUserDetails = async () => {
        try {
          console.log("here");
          const response = await api.post("/users/details", {
            userId: state._id || storedUserId,
          });
          const data = response.data;
          // console.log(data);
          // const data = response?.data;
          // setGameData(data);
          dispatch({
            type: "UPDATE",
            payload: { ...state, ...data, isLoggedIn: true },
          });
          // fetchGameDetails();
          setShowLoader(false);
        } catch (error: any) {
          const message = error?.response?.data?.error;
          localStorage.removeItem("userId");
          console.log(message);
          toast({
            title: `Error fetching Data`,
            status: "error",
            isClosable: true,
            description: message,
          });
          router.push("/sign-up");
          // console.error('Error fetching Data:', error);
        }
      };
      fetchUserDetails();
      console.log("here");
    } else {
      console.log("here");
      setShowLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = formatJoinedDate(state.createdAt);
      setJoinedDate(formattedDate);
    };

    fetchData();
    if (
      (state.isOnlineModeSelected !== "" && state.selectedCity) ||
      state.selectedDate
    ) {
      // todo- need to check if either selected date or selected city have value in it.
      setprogress(50);
      setRegistrationUrl("/add-academic-details");
    }
    if (
      (state.selectedCity || state.selectedDate) &&
      state.collegeName &&
      state.gameDetails
    ) {
      setprogress(100);
    }
    if (!state.gameData.length) {
      fetchGameDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const fetchGameDetails = async () => {
    try {
      const response = await api.get("/games/");
      const data = response?.data;
      setGameData(data);
      setGamesShowLoader(false);
    } catch (error: any) {
      const message = error?.response?.data?.error;
      // if(message){
      // }
      toast({
        title: `Error fetching Data`,
        status: "error",
        isClosable: true,
        description: message,
      });
      // console.error('Error fetching Data:', error);
    }
  };

  useEffect(() => {
    if (state.gameDetails.length > 0 && gameData.length > 0) {
      const gameNames = state.gameDetails.map((game: any) =>
        game?.name.toLowerCase()
      );
      // console.log('gameNames', gameNames);
      // Find the corresponding image URLs from gameData
      const imageUrls = gameNames.map((name: string) => {
        const game = gameData.find((g: any) => g.name.toLowerCase() === name);
        return game ? game.imageUrl : null;
      });
      setGameImageUrls(imageUrls);
      // console.log('imageUrls', imageUrls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData, state.gameDetails]);

  return (
    <>
      {showLoader ? (
        <LoadingScreen />
      ) : (
        <div className=" flex flex-col items-center lg:h-screen w-full  bg-black overflow-hidden">
          <Image
            src="/profile-yellow.svg"
            alt=""
            width={706}
            height={424}
            className="absolute max-lg:w-1/2 right-0 bottom-0 z-0 "
          />
          <Image
            src="/profile-illustration.svg"
            alt=""
            width={254}
            height={460}
            className="absolute top-0 right-0 z-0"
          />
          <Image
            src="/profile-illustration2.svg"
            alt=""
            width={122}
            height={228}
            className="absolute bottom-0 left-0  z-0"
          />
          <div className="max-w-[1440px] lg:pt-48 py-20  pt-40 w-full h-full flex flex-col  justify-center place-items-center xl:px-24 md:px-12 px-6  lg:gap-24 gap-8 relative z-0 overflow-visible">
            <div className="xl:p-10  flex flex-col gap-14  w-full z-10 relative ">
              <div className="flex border pb-8 lg:pb-8 border-[#ffffff33] backdrop-blur-md bg-[#05060787] rounded-lg   flex-col justify-center items-center md:gap-14  z-50 relative lg:px-20">
                <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 w-full justify-center place-items-center">
                  <div className="flex h-full justify-between flex-col  md:place-items-start  items-center">
                    <div>
                      <div className=" lg:pr-6">
                        <Link
                          className="relative -mt-16  flex justify-center items-center"
                          href="/edit-profile"
                        >
                          <Image
                            src={state.profilePhotoUrl || "/profile-img.svg"}
                            alt="profile photo"
                            width={181}
                            height={181}
                            className="rounded-2xl  "
                          />
                          <div className="whitespace-nowrap absolute justify-center items-center flex gap-2  bottom-2 uppercase text-sm md:text-base helvetica-medium-font font-medium text-white  p-4 rounded-md hover:bg-[#212121] bg-[#191919]">
                            edit profile{" "}
                            <Image
                              src="/profile-edit-icon.svg"
                              alt=""
                              width={15}
                              height={17}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="flex flex-col mt-3  items-center lg:place-items-start place-items-center gap-1">
                        {/* <p className="text-[#CFCFCF] md:text-xl text-lg helvetica-font font-bold">
                      {state.name}
                    </p> */}
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          {joinedDate ? `Joined on ${joinedDate}` : "-"}
                        </p>
                      </div>
                    </div>

                    <div className=" lg:flex hidden flex-col flex-wrap ">
                      <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                        Mode
                      </p>
                      <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                        {state.isOnlineModeSelected !== "" &&
                          state.isOnlineModeSelected === true &&
                          "Online"}
                        {state.isOnlineModeSelected !== "" &&
                          state.isOnlineModeSelected === false &&
                          "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col max-md:max-w-[420px] max-lg:pl-4 max-md:pl-0 lg:place-items-start justify-center items-center w-[85%] sm:w-11/12">
                    <h2 className="xl:text-7xl lg:text-6xl lg:-mt-8 max-lg:mt-3 text-3xl font-extrabold text-white   uppercase ppFormula-font">
                      <em>HELLO, {state.name}</em>
                      <span className="text-[#DBFD67]"> !</span>
                    </h2>
                    <div className="flex flex-wrap w-full items-center lg:mt-10 mt-5 lg:gap-5 gap-4">
                      <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          Age
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                          {state.age !== 0 ? `${state.age} yrs` : "-"}
                        </p>
                      </div>
                      <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          City
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                          {state.city || "-"}
                        </p>
                      </div>
                      <div className="flex flex-col flex-wrap w-full md:w-30% lg:w-2/4">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          Email Address
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold w-full">
                          {state.email || "-"}
                        </p>
                      </div>
                      <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          Phone no.
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                          {state.whatsappNumber || "-"}
                        </p>
                      </div>
                      <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          Degree
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                          {state.degreeStudyField || "-"}
                        </p>
                      </div>
                      <div className="flex flex-col flex-wrap w-full md:w-30% lg:w-2/4">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          College
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                          {state.collegeName || "-"}
                        </p>
                      </div>
                      <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5 lg:hidden">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          Mode
                        </p>
                        <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                          {state.isOnlineModeSelected ? "Online" : "Offline"}
                        </p>
                      </div>
                      {state.isOnlineModeSelected ? (
                        <>
                          <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5">
                            <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                              Date
                            </p>
                            <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                              {state.selectedDate || "-"}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-1/5">
                            <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                              Registered City
                            </p>
                            <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                              {state.selectedCity || "-"}
                            </p>
                          </div>
                        </>
                      )}

                      <div className="flex flex-col flex-wrap w-45% md:w-30% lg:w-2/4">
                        <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                          Selected Games
                        </p>
                        <div className="flex mt-2 flex-row gap-1.5">
                          {showGamesLoader ? (
                            <div className="flex">
                              <p>Loading Games...</p>
                              <Spinner size="xs" color="white" />
                            </div>
                          ) : gameImageUrls.length > 0 ? (
                            <>
                              {gameImageUrls.map(
                                (url: string, index: number) => (
                                  <div
                                    key={index}
                                    className="bg-[#DBFD67] md:p-4 p-2 rounded-lg"
                                  >
                                    <Image
                                      className="h-4"
                                      width={46}
                                      height={46}
                                      src={url}
                                      alt={`Game Image ${index}`}
                                    />
                                  </div>
                                )
                              )}
                            </>
                          ) : (
                            <p>-</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-row flex-col max-lg:mt-9 gap-10 w-full justify-center lg:place-items-end items-center">
                  <div className="flex flex-col lg:w-3/5 max-lg:w-[80%]  w-full gap-2">
                    <div className="bg-[#333132] w-full h-[17px] rounded-sm">
                      <div
                        className=" bg-[#E7327C] h-full rounded-sm"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-white">{progress}% Complete</p>
                  </div>
                  {progress !== 100 ? (
                    <div className="rounded-lg w-fit lg:block hidden ">
                      <Link href={registrationUrl}>
                        <div className="custom-button-neon xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover  bg-black helvetica-light-font font-normal">
                          COMPLETE PROFILE
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div className="rounded-lg w-fit lg:block hidden ">
                      <Link
                        href="https://bit.ly/RIVALSdiscord"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center custom-button-neon xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover  bg-black helvetica-light-font font-normal">
                          <Image
                            className="h-4"
                            width={46}
                            height={46}
                            src="./discord-logo.svg"
                            alt={`Discord logo`}
                          />
                          JOIN DISCORD
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {progress !== 100 ? (
              <div className=" rounded-lg lg:hidden flex w-fit  z-10">
                <Link
                  id="complete-profile-btn"
                  className="custom-button-neon xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover bg-black helvetica-light-font font-normal"
                  href={registrationUrl}
                >
                  Complete Profile
                </Link>
              </div>
            ) : (
              <div className=" rounded-lg lg:hidden flex w-fit  z-10">
                <Link
                  className="flex items-center custom-button-neon xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover bg-black helvetica-light-font font-normal"
                  href="https://bit.ly/crdiscordweb"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="h-4"
                    width={46}
                    height={46}
                    src="./discord-logo.svg"
                    alt={`Discord logo`}
                  />
                  JOIN DISCORD
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDashboard;
