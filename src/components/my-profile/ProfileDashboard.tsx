'use client';
import { UserContext } from '@/utils/context/user.context';
import {
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import api from '@/utils/axios/instance';
import Link from 'next/link';
import Image from 'next/image';
// format for joined date
const formatJoinedDate = (createdAt: string): string => {
  const date = new Date(createdAt);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
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
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

// selected data time
const formatSelectedDateTime = (
  selectedDate: string,
  selectedTimeSlot: string
): string => {
  const date = new Date(selectedDate);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();
  const month = date.getMonth();
  const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[month]}`;
  const formattedTimeSlot = formatTimeSlot(selectedTimeSlot);
  return `${formattedDate}, ${formattedTimeSlot}`;
};
const formatTimeSlot = (timeSlot: string): string => {
  const [startTime, endTime] = timeSlot.split(' to ');
  return `${formatTime(startTime)} to ${formatTime(endTime)}`;
};

const formatTime = (time: string): string => {
  const [hour, period] = time.split(' ');
  const [hours, minutes = '00'] = hour.split(':');
  return `${hours}:${minutes} ${period}`;
};
  // calculate age

const ProfileDashboard = () => {
  const { state, dispatch } = useContext(UserContext);
  const [progress, setprogress] = useState<number>(30);
  const [gameData, setGameData] = useState<any>([]);
  const [gameImageUrls, setGameImageUrls] = useState<any>([]);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [registrationUrl, setRegistrationUrl] = useState<string>(
    '/esports-registration'
  );
  const [age, setAge] = useState<number | null>(null);
  const [joinedDate, setJoinedDate] = useState<string>('');
  const [selectedDateTime, setSelectedDateTime] = useState<string>('');
  const toast = useToast();

  useEffect(() => {
    const storedUserId: any = localStorage.getItem('userId');
    const fetchGameDetails = async () => {
      try {
        const response = await api.get('/games/');
        const data = response?.data;
        setGameData(data);
        setShowLoader(false);
      } catch (error: any) {
        const message = error?.response?.data?.error;
        toast({
          title: `Error fetching Data`,
          status: 'error',
          isClosable: true,
          description: message,
        });
        console.error('Error fetching Data:', error);
      }
    };
      const fetchUserDetails = async () => {
        try {
          const response = await api.post('/users/details', {
            userId: state._id || storedUserId,
          });
          const data = response.data;
          console.log(data);
          // const data = response?.data;
          // setGameData(data);
           dispatch({
             type: 'UPDATE',
             payload: { ...state,...data, isLoggedIn:true },
           });
          fetchGameDetails();
          setShowLoader(false);
        } catch (error: any) {
          const message = error?.response?.data?.error;
          toast({
            title: `Error fetching Data`,
            status: 'error',
            isClosable: true,
            description: message,
          });
          console.error('Error fetching Data:', error);
        }
      };
      fetchUserDetails()
  }, []);


  useEffect(() => {
      const fetchData = async () => {
  
   

        const formattedDate = formatJoinedDate(state.createdAt);
        setJoinedDate(formattedDate);

        if (state.selectedDate && state.selectedTimeSlot) {
          const formattedSelectedDateTime = formatSelectedDateTime(
            state.selectedDate,
            state.selectedTimeSlot
          );
          setSelectedDateTime(formattedSelectedDateTime);
        }
      };
      fetchData()
      if(state.isOnlineModeSelected!==''){
        setprogress(50)
        setRegistrationUrl('/add-academic-details');
      }
      if(state.collegeName){
        setprogress(100);
      }
  }, [state])
  
 
  useEffect(() => {
    if (state.gameDetails.length > 0 && gameData.length > 0) {
      const gameNames = state.gameDetails.map((game: any) =>
        game?.name.toLowerCase()
      );
      console.log('gameNames', gameNames);
      // Find the corresponding image URLs from gameData
      const imageUrls = gameNames.map((name: string) => {
        const game = gameData.find((g: any) => g.name.toLowerCase() === name);
        return game ? game.imageUrl : null;
      });
      setGameImageUrls(imageUrls);
      console.log('imageUrls', imageUrls);
    }
  }, [gameData , state.gameDetails]);

  console.log(gameImageUrls);


  console.log('userData', state);
  console.log('gameData', gameData);
  return (
    <div className="w-full flex flex-col items-center pt-20 lg:h-screen h-full bg-black overflow-visible">
      <Image
        src="/profile-yellow.svg"
        alt=""
        width={706}
        height={424}
        className="absolute max-md:w-1/2 right-0 bottom-0 z-0 "
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
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:px-24 md:px-12 px-6 py-32 md:gap-24 gap-8 relative z-0 overflow-visible">
        <div className="xl:p-10  flex flex-col gap-14 w-full z-10 relative ">
          <div className="flex profile-bg lg:pb-20 custom-clip flex-col justify-center items-center md:gap-14  z-50 relative lg:px-20">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 w-full justify-center place-items-center">
              <div className="flex h-full justify-between flex-col  md:place-items-start  items-center">
                <div>
                  <div className=" lg:pr-6">
                    <div className="relative -mt-4 flex justify-center items-center">
                      <Image
                        src={state.profilePhoto || '/profile-img.svg'}
                        alt="profile photo"
                        width={181}
                        height={181}
                        className="rounded-2xl"
                      />
                      {/* <div className="bg-[#191919] p-4 rounded-full absolute -top-3 -right-3"></div> */}
                    </div>
                  </div>
                  <div className="flex flex-col mt-3  items-center lg:place-items-start place-items-center gap-1">
                    <p className="text-[#CFCFCF] md:text-xl text-lg helvetica-font font-bold">
                      {state.name}
                    </p>
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      {joinedDate ? `Joined on ${joinedDate}` : '-'}
                    </p>
                  </div>
                </div>

                <div className=" lg:flex hidden flex-col flex-wrap ">
                  <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                    Mode
                  </p>
                  <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                    {state.isOnlineModeSelected !== '' &&
                      state.isOnlineModeSelected === true &&
                      'Online'}
                    {state.isOnlineModeSelected !== '' &&
                      state.isOnlineModeSelected === false &&
                      'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:gap-14  max-lg:max-w-[300px] max-lg:pl-4 lg:place-items-start items-center ">
                <h2 className="xl:text-7xl lg:text-6xl   text-3xl font-extrabold text-white xl:-mt-5 lg:mt-0 mt-7   uppercase ppFormula-font">
                  <em>HELLO, {state.name}</em>
                  <span className="text-[#DBFD67]"> !</span>
                </h2>
                <div className="grid items-center max-lg:mt-5 lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-4">
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Age
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {/* {age !== undefined && age !== null ? '-' : `${age} yrs`} */}
                      {state.age!==0 ? `${state.age} yrs` : '-'} 
                   
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      City
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {state.city || '-'}
                    </p>
                  </div>
                  <div className="flex flex-col max-lg:col-span-2 flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Email Address
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold w-full">
                      {state.email || '-'}
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      College
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {state.collegeName || '-'}
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Degree
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {state.degreeStudyField || '-'}
                    </p>
                  </div>

                  <div className="flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Phone no.
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {state.whatsappNumber || '-'}
                    </p>
                  </div>
                  <div className=" lg:hidden flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Mode
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {state.isOnlineModeSelected ? 'Online' : 'Offline'}
                    </p>
                  </div>

                  <div className=" flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Selected Games
                    </p>

                    <div className="flex mt-2 flex-row gap-1.5">
                      {showLoader ? (
                        <div className="flex">
                          <p>Loading Games...</p>
                          <Spinner size="xs" color="white" />
                        </div>
                      ) : gameImageUrls.length > 0 ? (
                        <>
                          {gameImageUrls.map((url: string, index: number) => (
                            <div   key={index} className="bg-[#DBFD67] p-4 rounded-lg">
                              <Image
                                className="h-4"
                              width={46}
                              height={46}
                                src={url}
                                alt={`Game Image ${index}`}
                              />
                            </div>
                          ))}
                        </>
                      ) : (
                        <p>-</p>
                      )}
                    </div>
                  </div>
                  <div className=" flex flex-col flex-wrap ">
                    <p className="text-[#5D5D5E] text-base helvetica-light-font font-normal">
                      Date & Time
                    </p>
                    <p className="text-[#CFCFCF] text-xl helvetica-font font-bold">
                      {selectedDateTime || '-'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col max-lg:mt-9 gap-10 w-full justify-center lg:place-items-end items-center">
              <div className="flex flex-col lg:w-3/5 max-lg:w-[40%] max-sm:w-[90%] w-full gap-2">
                <div className="bg-[#333132] w-full h-[17px] rounded-sm">
                  <div
                    className=" bg-[#E7327C] h-full rounded-sm"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-white">{progress}% Complete</p>
              </div>
              {progress !== 100 && (
              <div className="rounded-lg w-fit lg:block hidden ">
                <Link href={registrationUrl}>
                <div  className="custom-button-neon xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover  bg-black helvetica-light-font font-normal">
                  COMPLETE PROFILE
                </div>
                </Link>
              </div>
                  )}
            </div>
          </div>
        </div>
        {progress !== 100 && (
          <div className=" rounded-lg lg:hidden flex w-fit  z-10">
            <Link className="custom-button-neon xl:px-9 px-4 py-5 xl:text-lg text-[#DBFD67] text-base  rounded-lg bg-cover bg-black helvetica-light-font font-normal" href={registrationUrl}>Complete Profile</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDashboard;
