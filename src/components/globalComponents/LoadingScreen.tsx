
import {
    Spinner,
  } from '@chakra-ui/react';

function LoadingScreen() {
  return (
    <div className='h-screen w-screen custom-gradient flex justify-center items-center'>
    <Spinner size="xl" color="white" thickness='4px'
  speed='0.65s'/>
    </div>
  )
}

export default LoadingScreen