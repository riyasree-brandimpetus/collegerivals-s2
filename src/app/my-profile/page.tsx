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
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  const router = useRouter();
  const { state, dispatch } = useContext(UserContext);


  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserId: any = localStorage.getItem('userId');
    if (storedUserId) {
      console.log('ID is found', storedUserId);
      dispatch({
        type: 'UPDATE',
        payload: {...state, _id: storedUserId },
      });
      setShowLoader(false)
    } else{
      console.log('ID not found', storedUserId);
      router.push('/login');
    }
  }, []);
  
  
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
