"use client"
import ESportsPage from '@/components/register/ESportsPage';
import { UserContext } from '@/utils/context/user.context';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';


export default function Page() {
  const { state,dispatch } = useContext(UserContext);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if(state._id && state.isLoggedIn){
    setShowLoader(false);
    } else {
      // Retrieve the data from localStorage
      const storedUserId: any = localStorage.getItem('userId');
      if (storedUserId) {
        console.log('ID is found', storedUserId);
        dispatch({
          type: 'UPDATE',
          payload: { ...state, _id: storedUserId },
        });
        setShowLoader(false);
      } else {
        console.log('ID not found', storedUserId);
        router.push('/login');
      }
    }
    // // Retrieve the data from localStorage
    // const storedUserDataString: any = localStorage.getItem('userId');
    // // Convert the JSON string back to an object
    // // const storedUserData: any = JSON.parse(storedUserDataString);
    // dispatch({
    //   type: 'UPDATE',
    //   payload: { ...state },
    // });
    // console.log(storedUserData);
    // setShowLoader(!storedUserData?.isLoggedIn);
  }, []);

  return <>{showLoader ? 'Loading' : <ESportsPage />}</>;
}
