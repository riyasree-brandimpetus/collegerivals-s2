'use client';
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
} from 'formik';
import {
  Input,
  Button,
  Heading,
  Flex,
  Select,
  Box,
  Divider,
  FormLabel,
  useToast,
  Text
} from '@chakra-ui/react';
import { SecondFormSchema } from '@/schemas/register';
import api from '@/utils/axios/instance';
import { SecondFormValues } from '@/types/register/register';
import { useContext } from 'react';
import { UserContext } from '@/utils/context/user.context';
import CollegeSearchForm from '../CollegeSearchForm';
import RadioGroup from './RadioGroup';
import DegreeRadio from './DegreeRadio';
import { RegistrationCities } from '@/constants/cities';
import { useRouter } from 'next/navigation';

const degreeOptions = [
  'Arts',
  'Science',
  'Commerce',
  'Engineering',
  'Medical',
  'Law',
  'Business',
  'Others'
];

const genderOptions = [
'Male',
'Female',
'Prefer Not To Say'
];
export default function AcademicDetailsForm() {
  /**
   * Initialize first form values
   */
  const secondFormInitialValues: SecondFormValues = {
    age: 18,
    gender:'',
    degreeStudyField: degreeOptions[0],
    // file: null,
    city:'',
    collegeName: '',
  };
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();

  /**
   * Handles File Upload
   * @param file 
   * @returns 
   */
  const handleFileUpload = async (file: any) => {
    const fileName = `id_${state?.name}_${state?.email}_${file.name}`;
    try {
      const data = new FormData();
      data.set('file', file, fileName);
      const res = await fetch('/api/s3', {
        method: 'POST',
        body: data,
      });
      // handle the error
      if (!res.ok) throw new Error(await res.text());
      const resData = await res.json();
      return JSON.stringify(resData);
    } catch (e: any) {
      toast({
        title: `Error submitting form`,
        status: 'error',
        isClosable: true,
        description: e.message,
      });
    }
  };

  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: SecondFormValues,
    actions: FormikHelpers<SecondFormValues>
  ) => {
    try {
      // let fileUrl = ''
      // if (values.file!==null){
      // console.log('file present')
      // const fileUploadResponse:any = await handleFileUpload(values.file);
      // fileUrl = JSON.parse(fileUploadResponse).url;
      // }
      const response = await api.post(
        `/users/update/academic-details/${state._id}`,
        {
          age: values.age,
          degreeStudyField: values.degreeStudyField,
          // idUrl: fileUrl,
          city: values.city,
          collegeName: values.collegeName,
          gender: values.gender,
        }
      );
      const data = response.data;
      if (data) {
        toast({
          title: `Details Submitted`,
          status: 'success',
          isClosable: true,
          description: data.message,
        });
        dispatch({
          type: 'UPDATE',
          payload: {
            ...state,
            age: values.age,
            degreeStudyField: values.degreeStudyField,
            // idUrl: fileUrl,
            collegeName: values.collegeName,
            city: values.city
          },
        });
        router.push('/my-profile');
      }
    } catch (error: any) {
      const message = error?.response?.data?.error;
      toast({
        title: `Error submitting form`,
        status: 'error',
        isClosable: true,
        description: message,
      });
      // console.error('Error submitting form:', error);
    }
  };

  return (
    <Formik
      initialValues={secondFormInitialValues}
      validationSchema={SecondFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form className="flex flex-col grow  pt-8 ">
          <div className="pl-6 lg:pl-16 pr-6 lg:pr-0">
            <Heading
              pb={{ base: '2.125rem', lg: '1.25rem' }}
              className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider text-white"
            >
              VERIFY YOU'RE A{' '}
              <Box as="span" className="text-#DBFD67">
                STUDENT
              </Box>
            </Heading>
            <Box overflowY="auto">
              <Flex
                width={{ base: '100%', lg: '95%' }}
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent="space-between"
              >
                <Flex
                  width={{ base: '100%', lg: '50%' }}
                  direction="column"
                  className="field"
                  pt={{ base: '1.25rem', lg: '0rem' }}
                >
                  <FormLabel
                    className="helvetica-font font-bold text-lg"
                    color={'#CFCFCF'}
                  >
                    City
                  </FormLabel>
                  <Field
                    as={Select}
                    id="city"
                    name="city"
                    // mt="0.75rem"

                    height="4.063rem"
                    borderRadius="0.75rem"
                    color="white"
                    placeholder="Select City"
                    focusBorderColor="#DBFD67"
                  >
                    {RegistrationCities.map(city => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                  {errors.city && touched.city && (
                    <div className="text-#DBFD67">{errors.city}</div>
                  )}
                </Flex>
                <Flex
                  width={{ base: '100%', lg: '48%' }}
                  direction="column"
                  color={'white'}
                  className="field text-white"
                  pt={{ base: '1.25rem', lg: '0rem' }}
                >
                  <CollegeSearchForm color="white" name="collegeName" />
                  {touched.collegeName && errors.collegeName && (
                    <div className="text-#DBFD67">{errors.collegeName}</div>
                  )}
                </Flex>
              </Flex>
              <Flex
                width={{ base: '100%', lg: '95%' }}
                pt="1.25rem"
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent="space-between"
              >
                <Flex
                  width={{ base: '100%', lg: '48%' }}
                  direction="column"
                  className="field"
                >
                  <FormLabel color={'white'} htmlFor="degree">
                    Choose your Degree/ Study field
                  </FormLabel>
                  <div style={{ overflowX: 'auto' }}>
                    <RadioGroup
                      name="degreeStudyField"
                      flexWrap={{ base: 'nowrap', lg: 'wrap' }}
                      className="whitespace-nowrap lg:whitespace-normal"
                      mb="2.063rem"
                      minWidth="100%"
                      color={'white'}
                      display={'flex'}
                      gap="0.3rem"
                    >
                      {degreeOptions.map(degree => {
                        return (
                          <DegreeRadio
                            key={degree}
                            degree={degree}
                            value={degree}
                            name={degree}
                          />
                        );
                      })}
                    </RadioGroup>
                    {touched.degreeStudyField && errors.degreeStudyField && (
                      <div className="text-#DBFD67">
                        {errors.degreeStudyField}
                      </div>
                    )}
                  </div>
                </Flex>
                <Flex
                  width={{ base: '100%', lg: '24%' }}
                  pt={{ base: '1.25rem', lg: '0rem' }}
                  direction="column"
                  className="field"
                >
                  <FormLabel color={'white'} htmlFor="Age">
                    Age
                  </FormLabel>
                  <Field
                    as={Select}
                    id="age"
                    name="age"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    focusBorderColor="#DBFD67"
                    color="#ffffff"
                  >
                    {Array.from({ length: 13 }, (_, index) => index + 18).map(
                      age => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      )
                    )}
                  </Field>
                </Flex>
                <Flex
                  width={{ base: '100%', lg: '24%' }}
                  pt={{ base: '1.25rem', lg: '0rem' }}
                  direction="column"
                  className="field"
                >
                  <FormLabel color={'white'} htmlFor="gender">
                    Gender
                  </FormLabel>
                  <Field
                    as={Select}
                    id="gender"
                    name="gender"
                    height="4.063rem"
                    borderRadius="0.75rem"
                    focusBorderColor="#DBFD67"
                    placeholder="Select option"
                    color="#ffffff"
                  >
                    {genderOptions.map(gender => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </Field>
                  {errors.gender && touched.gender && (
                    <div className="text-#DBFD67">{errors.gender}</div>
                  )}
                </Flex>
              </Flex>
              <div className="py-16"></div>
            </Box>
          </div>
          <Box className="mt-auto  bg-black bottom-0">
            <div className="fixed pt-6 bg-black lg:pl-16 border-t border-[fffffef] lg:w-[55%]  w-full lg:flex-row flex-col flex items-center justify-between lg:right-0 bottom-0 ">
              <Button
                id="academic-details-form-submit-btn"
                type="submit"
                color={'#fff'}
                _hover={{ opacity: '90%' }}
                _active={{
                  filter: 'drop-shadow(2px 2px 0px #d1ff45)',
                  transform: 'skew(-12deg) translate(2px, 2px)',
                }}
                transform="skew(-12deg)"
                transition="0.4s all ease-out"
                filter="drop-shadow(4px 4px 0px #d1ff45)"
                borderRadius={'0.375rem'}
                className="helvetica-font mx-auto lg:ml-auto lg:mr-16 uppercase bg-black border border-#DBFD67"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'1rem'}
                mt="1.25rem"
                mb="1.25rem"
                height={{ base: '4.125rem', lg: '4.063rem' }}
                width={{ base: '17rem', lg: '22rem' }}
                isLoading={isSubmitting}
                loadingText="Saving Data"
              >
                Submit
              </Button>
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
