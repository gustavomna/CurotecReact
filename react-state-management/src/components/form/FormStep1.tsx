import { ChangeEvent } from 'react';
import FormInput from './FormInput';
import useFormStore from '../../store/formStore';
import { validateStep1 } from '../../utils/validators';

const FormStep1 = () => {
  const { formData, formErrors, updateFormData, setFormErrors, setCurrentStep } = useFormStore();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleNext = () => {
    const errors = validateStep1(formData);
    
    if (Object.keys(errors).length === 0) {
      setCurrentStep(2);
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Step 1: Personal Information</h2>
      
      <FormInput
        id="firstName"
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleChange}
        error={formErrors.firstName}
      />
      
      <FormInput
        id="lastName"
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        error={formErrors.lastName}
      />
      
      <FormInput
        id="email"
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormStep1;