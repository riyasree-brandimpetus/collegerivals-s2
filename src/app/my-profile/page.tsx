'use client';
import Hero from '@/components/homePage/hero';
import TickerContainer from '@/components/homePage/tickerContainer';
import Rivals from '@/components/homePage/rivals';
import Redemption from '@/components/homePage/redemption';
import Faq from '@/components/homePage/faq';
import Navbar from '@/components/globalComponents/Navbar';
import Footer from '@/components/globalComponents/Footer';
import Graphics from '@/components/globalComponents/Graphics';
import { Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import BasicDetailsForm from '@/components/sign-up/BasicDetailsForm';
import SignUpForm from '@/components/sign-up/SignUpForm';
import ProfileDashboard from '@/components/my-profile/ProfileDashboard';
import { UserContext } from '@/utils/context/user.context';
import { useRouter } from 'next/navigation';
import NavbarSeason2 from '@/components/globalComponents/NavbarSeason2';


export default function MyProfile() {
  // const { state,dispatch } = useContext(UserContext);
  //   const [isOpen, setIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>();
  const router = useRouter();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserDataString:any = localStorage.getItem('user');
    // Convert the JSON string back to an object
    const storedUserData:any = JSON.parse(storedUserDataString);
       dispatch({
         type: 'UPDATE',
         payload: { ...storedUserData },
       });
    console.log(storedUserData);
    setShowLoader(!storedUserData?.isLoggedIn);
    // setUserData(storedUserData)
  }, [])
  
  // useEffect(() => {
  //   // console.log(userData);
  //   if (userData?.isLoggedIn) {
  //     console.log(userData?.isLoggedIn);
  //     setShowLoader(!userData?.isLoggedIn);
  //   } else {
  //     router.push('/login');
  //   }
  // }, [userData]);
 
  
  // return  
  
  return (
    <>
      {showLoader ? (
        'Loading'
      ) : (
        <div>
          <NavbarSeason2 /> <ProfileDashboard />
        </div>
      )}
    </>
  );
}
