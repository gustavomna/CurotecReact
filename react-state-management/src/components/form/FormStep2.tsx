import { ChangeEvent } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import useFormStore from '../../store/formStore';
import { validateStep2 } from '../../utils/validators';

const experienceOptions = [
  { value: 'entry', label: 'Entry Level (0-2 years)' },
  { value: 'mid', label: 'Mid Level (3-5 years)' },
  { value: 'senior', label: 'Senior Level (6-10 years)' },
  { value: 'expert', label: 'Expert (10+ years)' },
];

const FormStep2 = () => {
  const { formData, formErrors, updateFormData, setFormErrors, setCurrentStep } = useFormStore();
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleNext = () => {
    const errors = validateStep2(formData);
    
    if (Object.keys(errors).length === 0) {
      setCurrentStep(3);
    } else {
      setFormErrors(errors);
    }
  };
  
  const handleBack = () => {
    setCurrentStep(1);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Step 2: Professional Information</h2>
      
      <FormInput
        id="occupation"
        name="occupation"
        label="Occupation"
        value={formData.occupation}
        onChange={handleInputChange}
        error={formErrors.occupation}
      />
      
      <FormInput
        id="company"
        name="company"
        label="Company"
        value={formData.company}
        onChange={handleInputChange}
        error={formErrors.company}
      />
      
      <FormSelect
        id="experience"
        name="experience"
        label="Experience Level"
        value={formData.experience}
        options={experienceOptions}
        onChange={handleSelectChange}
        error={formErrors.experience}
      />
      
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Back
        </button>
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

export default FormStep2;