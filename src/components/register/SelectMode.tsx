'use client';
import { Field, Form, Formik, FormikHelpers } from 'formik';
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
  Text,
  Center,
} from '@chakra-ui/react';
import { SelectProfileSchema } from '@/schemas/register';
import api from '@/utils/axios/instance';
import { useContext } from 'react';
import { UserContext } from '@/utils/context/user.context';
import RadioGroup from './RadioGroup';
import CustomRadio from './CustomRadio';
import { relative } from 'path';

interface SelectMode {
  modeSelected: string;
}


export default function SelectProfile() {
  /**
   * Initialize first form values
   */
  const secondFormInitialValues = {
    modeSelected: '',
  };
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);

  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: SelectMode,
    actions: FormikHelpers<SelectMode>
  ) => {
    try {
      const isOnlineModeSelected =
        values.modeSelected == 'online' ? true : false;
       const response = await api.post(
         `/users/update/esport-details/${state._id}`,
         {
           "isOnlineModeSelected": isOnlineModeSelected,
         }
       );
       const data = response.data;
       if (response) {
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
            isOnlineModeSelected: values.modeSelected == 'online' ? true : false,
          },
        });
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
      validationSchema={SelectProfileSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form className="flex flex-col grow  pt-8 md:max-h-[80vh]">
          <div className="pl-6 lg:pl-16 pr-6 lg:pr-0">
            <Heading
              // pb={{ base: '2.125rem', lg: '1.25rem' }}
              pb={{ base: '2.125rem', lg: '1.25rem' }}
              className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal text-white tracking-wide lg:tracking-wider"
            >
              SELECT{' '}
              <Box as="span" className="text-#DBFD67">
                MODE
              </Box>
            </Heading>
            <Box>
              <Flex
                width={{ base: '100%', lg: '100%' }}
                pt="1.25rem"
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent="space-between"
              >
                <Flex width="100%" direction="column" className="field ">
                  {/* <FormLabel htmlFor="mode">
                  Choose your Degree/ Study field
                </FormLabel> */}
                  <div className="relative flex flex-col items-end ">
                    <RadioGroup
                      name="modeSelected"
                      className="whitespace-nowrap lg:whitespace-normal  max-md:items-center max-md:justify-center"
                      mb="2.063rem"
                      minWidth="100%"
                      display={'flex'}
                      gap="1.5rem"
                    >
                      <CustomRadio
                        key="online"
                        value="online"
                        name="online"
                        imageUrl="/online.svg"
                      />

                      <CustomRadio
                        key="offline"
                        value="offline"
                        name="offline"
                        imageUrl="/offline.svg"
                      />
                    </RadioGroup>
                    {values.modeSelected == 'offline' && (
                      <div className=" absolute -bottom-7 xl:right-[22%] lg:right-[18%] md:right-[25%] right-[5%]   rounded-md   px-7 py-4 bg-[#191919] text-[#5D5D5E] text-xs">
                        Only available in some cities.
                      </div>
                    )}
                    {touched.modeSelected && errors.modeSelected && (
                      <div className="text-#DBFD67">{errors.modeSelected}</div>
                    )}
                  </div>
                </Flex>
              </Flex>
            </Box>
          </div>
          <div className="py-16"></div>
          <Box className="mt-auto sticky bg-white bottom-0">
            <div className="fixed pt-6 bg-black lg:pl-16 border-t border-[fffffef] lg:w-[55%]  w-full flex-row  flex items-center justify-between lg:right-0 bottom-0 ">
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
                loadingText="Submiting"
              >
                Proceed
              </Button>
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
