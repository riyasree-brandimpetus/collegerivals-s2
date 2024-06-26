import * as Yup from 'yup';
const phoneRegExp = /^[6-9][0-9]{9}$/;
const supportedFileFormats: string[] = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'application/pdf',
];
const maxFileSize: number = 5 * 1024 * 1024; // 5MB in bytes
interface FileWithMeta extends File {
  type: string;
}
export const SignUpFormSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  whatsappNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Whatsapp Number is required'),
  email: Yup.string().required('Email Address is required'),
//   cityCenter: Yup.string().required('You have to choose your City Center'),
  agreedToTerms: Yup.boolean().test(
    'is-true',
    'Please agree to the terms & conditions',
    value => value === true
  ),
});

// export const OTPSchema = Yup.object().shape({
//   otp: Yup.string().required('OTP is required'),
// });

// export const SecondFormSchema = Yup.object().shape({
//   age: Yup.number().required('Age is required'),
//   degreeStudyField: Yup.string().required('Degree is required'),
//   file: Yup.mixed()
//     .nullable()
//     .test(
//       'fileType',
//       'Only PDF, JPEG, JPG, and PNG files are allowed',
//       value => {
//         if (!value) return true; // Allow empty file field
//         return supportedFileFormats.includes((value as FileWithMeta).type);
//       }
//     )
//     .test('fileSize', 'File size must be less than 5MB', value => {
//       if (!value) return true; // Allow empty file field
//       return (value as FileWithMeta).size <= maxFileSize;
//     }),
//   collegeName: Yup.string().required('College Name is required'),
//   gender: Yup.string().required('Gender is required'),
// });

// export const ThirdFormSchema = Yup.object().shape({
//   gameDetails: Yup.array().min(1).required('Game Details is required'),
// });
