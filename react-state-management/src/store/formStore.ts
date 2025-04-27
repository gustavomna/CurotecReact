import { create } from 'zustand';
import { FormData, FormErrors, FormStep } from '../types/form.types';

interface FormState {
  currentStep: FormStep;
  formData: FormData;
  formErrors: FormErrors;
  setCurrentStep: (step: FormStep) => void;
  updateFormData: (data: Partial<FormData>) => void;
  setFormErrors: (errors: FormErrors) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  company: '',
  experience: '',
  interests: [],
  newsletter: false,
  terms: false,
};

const useFormStore = create<FormState>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  formErrors: {},
  
  setCurrentStep: (step) => set({ currentStep: step }),
  
  updateFormData: (data) => 
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  
  setFormErrors: (errors) => set({ formErrors: errors }),
  
  resetForm: () => 
    set({
      currentStep: 1,
      formData: initialFormData,
      formErrors: {},
    }),
}));

export default useFormStore;