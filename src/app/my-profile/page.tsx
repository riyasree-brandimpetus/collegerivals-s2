'use client';

import Faq from '@/components/homePage/faq';
import Graphics from '@/components/globalComponents/Graphics';
import { Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import BasicDetailsForm from '@/components/sign-up/BasicDetailsForm';
import SignUpForm from '@/components/sign-up/SignUpForm';
import ProfileDashboard from '@/components/my-profile/ProfileDashboard';
import { UserContext } from '@/utils/context/user.context';
import { useRouter } from 'next/navigation';
import NavbarSeason2 from '@/components/globalComponents/NavbarSeason2';
import LoadingScreen from '@/components/globalComponents/LoadingScreen';


export default function MyProfile() {
  // const { state,dispatch } = useContext(UserContext);
  //   const [isOpen, setIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const router = useRouter();
  const { state, dispatch } = useContext(UserContext);

/* eslint-disable */

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserId: any = localStorage.getItem('userId');
    if (storedUserId) {
      // console.log('ID is found', storedUserId);
      dispatch({
        type: 'UPDATE',
        payload: {...state, _id: storedUserId },
      });
      setShowLoader(false)
    } else{
      // console.log('ID not found', storedUserId);
      dispatch({
        type: 'DELETE'
      });
      router.push('/login');
    }
  }, []);

  /* eslint-enable */
  
  
  return (
    <>
      {showLoader ? (
        <LoadingScreen/>
      ) : (
        <div>
          <NavbarSeason2 /> <ProfileDashboard />
        </div>
      )}
    </>
  );
}
