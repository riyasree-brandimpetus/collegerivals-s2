/**
 * Contains types of the registration form
 */

export interface FirstFormValues {
  name: string;
  whatsappNumber: string;
  email: string;
  cityCenter: string;
  agreedToTerms:boolean;
}

export type OTPFormValues = {
  otp: string;
};


export type DateTimeSlotValues = {
  selectedDate: string;
  selectedTimeSlot: string;
};

export interface SecondFormValues {
  age: number;
  degreeStudyField: string;
  gender: string;
  // file: File | null;
  collegeName: string;
  city:string
}

export interface UserAgentDetails {
  browser: {
    name: string;
    version: string;
    major: string;
  };
  os: {
    name: string;
    version: string;
  };
  device: {
    vendor: string;
    model: string;
    type: string;
  };
  engine: {
    name: string;
    version: string;
  };
  ua: string;
}