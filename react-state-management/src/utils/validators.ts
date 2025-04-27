import { FormData, FormErrors } from '../types/form.types';

export const validateStep1 = (data: Partial<FormData>): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }
  
  if (!data.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }
  
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return errors;
};

export const validateStep2 = (data: Partial<FormData>): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.occupation?.trim()) {
    errors.occupation = 'Occupation is required';
  }
  
  if (!data.company?.trim()) {
    errors.company = 'Company is required';
  }
  
  if (!data.experience?.trim()) {
    errors.experience = 'Experience level is required';
  }
  
  return errors;
};

export const validateStep3 = (data: Partial<FormData>): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.interests?.length) {
    errors.interests = 'Please select at least one interest';
  }
  
  if (!data.terms) {
    errors.terms = 'You must accept the terms and conditions';
  }
  
  return errors;
};
