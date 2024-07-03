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
} from '@chakra-ui/react';
import { SelectProfileSchema } from '@/schemas/register';
import api from '@/utils/axios/instance';
import { useContext } from 'react';
import { UserContext } from '@/utils/context/user.context';
import RadioGroup from './RadioGroup';
import CustomRadio from './CustomRadio';

interface SelectProfile {
  modeSelected:string
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
    values: SelectProfile,
    actions: FormikHelpers<SelectProfile>
  ) => {
    try {
          dispatch({
            type: 'UPDATE',
            payload: {
              ...state,
              isOnlineModeSelected:
                values.modeSelected == 'online' ? true : false,
            },
          });
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
        <Form className="flex flex-col grow pl-8 lg:pl-16 pr-8 lg:pr-0 pt-8 md:max-h-[80vh]">
          <Heading
            // pb={{ base: '2.125rem', lg: '1.25rem' }}
            pb={{ base: '2.125rem', lg: '1.25rem' }}
            className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider"
          >
            SELECT{' '}
            <Box as="span" className="text-pink">
              PROFILE
            </Box>
          </Heading>
          <Box overflowY="auto">
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
                {/* <FormLabel htmlFor="mode">
                  Choose your Degree/ Study field
                </FormLabel> */}
                <div style={{ overflowX: 'auto' }}>
                  <RadioGroup
                    name="modeSelected"
                    flexWrap={{ base: 'nowrap', lg: 'wrap' }}
                    className="whitespace-nowrap lg:whitespace-normal"
                    mb="2.063rem"
                    minWidth="100%"
                    display={'flex'}
                    gap="0.3rem"
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
                  {touched.modeSelected && errors.modeSelected && (
                    <div className="text-pink">{errors.modeSelected}</div>
                  )}
                </div>
              </Flex>
            </Flex>
          </Box>
          <Box className="mt-auto sticky bg-white bottom-0">
            <Divider
              marginTop="auto"
              borderColor={'black'}
              borderBottomWidth="1px"
              borderBottomStyle="dotted"
              ml={{ base: '0rem', lg: '-5.063rem' }}
              width={{ base: '100%', lg: '109%' }}
            />
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
              className="helvetica-font mx-auto lg:ml-auto lg:mr-16 uppercase bg-pink"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              fontSize={'1rem'}
              mt="1.25rem"
              mb="1.25rem"
              height={{ base: '4.125rem', lg: '4.063rem' }}
              width={{ base: '17rem', lg: '22rem' }}
              isLoading={isSubmitting}
              loadingText="Uploading User Data"
            >
              Proceed
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
