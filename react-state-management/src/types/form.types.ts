export interface FormData {
    // Step 1
    firstName: string;
    lastName: string;
    email: string;
    // Step 2
    occupation: string;
    company: string;
    experience: string;
    // Step 3
    interests: string[];
    newsletter: boolean;
    terms: boolean;
  }
  
  export interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    occupation?: string;
    company?: string;
    experience?: string;
    interests?: string;
    newsletter?: string;
    terms?: string;
  }
  
  export type FormStep = 1 | 2 | 3 | 4;