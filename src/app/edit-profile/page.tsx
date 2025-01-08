import EditProfilePage from '@/components/register/EditProfilePage';
import { redirect } from 'next/navigation';

export default function Login() {
  redirect('/my-profile');
  return (
    <>
      {/* <EditProfilePage /> */}
    </>
  );
}
