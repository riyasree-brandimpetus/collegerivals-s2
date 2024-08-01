import api from '@/utils/axios/instance';
import { UserContext } from '@/utils/context/user.context';
import {
  Box,
  FormLabel,
  Input,
  ListItem,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import { useContext, useEffect, useRef, useState } from 'react';

function CollegeSearchForm(props: any) {
  const toast = useToast();
  const [collegeList, setCollegeList] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState<string>();
  const [showCollegeList, setShowCollegeList] = useState<boolean>(false);
  const [field] = useField(props);
  const { setFieldValue } = useFormikContext();
  const { state, dispatch } = useContext(UserContext);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Function to handle clicks outside the dropdown
   * @param event
   */
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowCollegeList(false);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  /**
   * Fetch College Names
   */
  const getCollegeNames = async () => {
    const city = state?.city; //TO DO: if citycenter not found, fetch details from the API
    const requestUrl = `/colleges/${city}?q=${selectedCollege}`; //TO DO: Add city variable
    try {
      const response = await api.get(requestUrl);
      if (response.status === 200) {
        const data = response?.data;
        if (data) {
          setCollegeList(data.colleges);
          setShowCollegeList(true);
        }
      }
    } catch (error: any) {
      const message = error?.response?.data?.error;
      // toast({
      //   title: `Error submitting form`,
      //   status: 'error',
      //   isClosable: true,
      //   description: message,
      // });
      // console.error('Error submitting form:', error , message);
    }
  };

  /**
   * Searched College UseEffect
   */


  useEffect(() => {
    if (selectedCollege) {
      setShowCollegeList(false);
      setCollegeList([]);
      setFieldValue(props.name, selectedCollege);
      const debounceGetCollegeNames = setTimeout(() => {
        getCollegeNames();
      }, 500);
      return () => clearTimeout(debounceGetCollegeNames);
    } else {
      setShowCollegeList(false);
      setCollegeList([]);
      setFieldValue(props.name, selectedCollege);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCollege]);



  useEffect(() => {
    setFieldValue(props.name, state.collegeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.collegeName]);

  return (
    <>
      <FormLabel htmlFor="collegeName">College Name</FormLabel>
      <Input
        id="collegeName"
        {...field}
        {...props}
        focusBorderColor="#DBFD67"
        onChange={e => setSelectedCollege(e.target.value)}
        height="4.063rem"
      />
      {showCollegeList && (
        <Box position="relative" display="inline-block" ref={dropdownRef}>
          <UnorderedList
            style={{
              overflowY: 'scroll',
              border: '1px solid #B4B4B4',
              borderTop: 'none',
              borderBottomLeftRadius: '0.75rem',
              borderBottomRightRadius: '0.75rem',
              position: 'absolute',
              backgroundColor: 'white',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: 1,
              marginLeft: 0,
            }}
            className="w-full h-fit"
            display={collegeList.length > 0 ? 'block' : 'none'}
          >
            {collegeList.map((college: any, index: number) => (
              <ListItem
                style={{
                  cursor: 'pointer',
                  padding: '0.938rem',
                }}
                _hover={{
                  background: '#b4b4b426',
                }}
                key={college}
                onClick={() => {
                  setShowCollegeList(false);
                  dispatch({
                    type: 'UPDATE',
                    payload: { ...state, collegeName: college },
                  });
                }}
              >
                {college}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
    </>
  );
}

export default CollegeSearchForm;
