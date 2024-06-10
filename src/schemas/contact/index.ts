import * as Yup from 'yup';
const phoneRegExp = /^[6-9][0-9]{9}$/;

export const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  emailAddress: Yup.string().required('Email Address is required'),
  cityCenter: Yup.string().required('You have to choose your city Center'),
  collegeName: Yup.string().required('Please Select your college!'),
  message: Yup.string().required('Message is required'),
}
);
