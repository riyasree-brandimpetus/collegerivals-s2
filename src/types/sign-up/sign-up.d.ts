/**
 * Contains types of the registration form
 */

export interface SignUpFormValues {
  name: string;
  whatsappNumber: string;
  email: string;
  agreedToTerms: boolean;
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