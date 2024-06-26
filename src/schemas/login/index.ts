import * as Yup from 'yup';
const phoneRegExp = /^[6-9][0-9]{9}$/;
export const LoginFormSchema = Yup.object().shape({
  whatsappNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Whatsapp Number is required'),
});