import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';


interface ApiError {
  message: string;
  status?: number;
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL, 
  timeout: 5000, 
});

const handleApiError = (error: AxiosError): string => {
  console.error('Error making API request:', error.message);
  if (error.response) {
    console.error('Response status:', error.response.status);
    console.error('Response data:', error.response.data);

    // Update the type of error.response.data to ApiError
    const responseData = error.response.data as ApiError;

    if (responseData.message) {
      return responseData.message;
    }
  }
  return 'Something went wrong'; // Fallback error message
};

export const SubmitForm = async <T>(
  endpoint: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, data, config);
    return response.data;
  } catch (error:any) {
    // handleApiError(error);
    const errorMessage = handleApiError(error);
    // console.log('error message', errorMessage)
    throw new Error(errorMessage); // Throw a generic error message if needed
  }
};

// Add more API functions here as needed

export default api;
