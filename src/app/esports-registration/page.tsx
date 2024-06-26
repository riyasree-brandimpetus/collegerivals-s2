"use client"
import ESportsPage from '@/components/register/ESportsPage';
import { UserContext } from '@/utils/context/user.context';
import { useContext, useEffect, useState } from 'react';


export default function Page() {
  const { dispatch } = useContext(UserContext);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserDataString: any = localStorage.getItem('user');
    // Convert the JSON string back to an object
    const storedUserData: any = JSON.parse(storedUserDataString);
    dispatch({
      type: 'UPDATE',
      payload: { ...storedUserData },
    });
    console.log(storedUserData);
    setShowLoader(!storedUserData?.isLoggedIn);
  }, []);

  return <>{showLoader ? 'Loading' : <ESportsPage />}</>;
}
