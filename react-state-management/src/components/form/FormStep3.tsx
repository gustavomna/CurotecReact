import { ChangeEvent } from 'react';
import FormCheckbox from './FormCheckbox';
import useFormStore from '../../store/formStore';
import { validateStep3 } from '../../utils/validators';

const interests = [
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'mobile', label: 'Mobile Development' },
  { id: 'devops', label: 'DevOps' },
  { id: 'design', label: 'UI/UX Design' },
];

const FormStep3 = () => {
  const { formData, formErrors, updateFormData, setFormErrors, setCurrentStep } = useFormStore();
  
  const handleInterestChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    
    let updatedInterests = [...formData.interests];
    
    if (checked) {
      updatedInterests.push(id);
    } else {
      updatedInterests = updatedInterests.filter((interest) => interest !== id);
    }
    
    updateFormData({ interests: updatedInterests });
  };
  
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
  };
  
  const handleSubmit = () => {
    const errors = validateStep3(formData);
    
    if (Object.keys(errors).length === 0) {
      setCurrentStep(4); // Go to summary
    } else {
      setFormErrors(errors);
    }
  };
  
  const handleBack = () => {
    setCurrentStep(2);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Step 3: Preferences</h2>
      
      <div className="mb-4">
        <p className="block text-sm font-medium text-gray-700 mb-2">
          Areas of Interest
        </p>
        
        {interests.map((interest) => (
          <div key={interest.id} className="flex items-center mb-2">
            <input
              id={interest.id}
              name={`interest-${interest.id}`} // Add name attribute
              type="checkbox"
              checked={formData.interests.includes(interest.id)}
              onChange={handleInterestChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor={interest.id} className="ml-2 text-sm text-gray-700">
              {interest.label}
            </label>
          </div>
        ))}
        
        {formErrors.interests && (
          <p className="mt-1 text-sm text-red-600">{formErrors.interests}</p>
        )}
      </div>
      
      <FormCheckbox
        id="newsletter"
        name="newsletter" // Add name attribute
        label="Subscribe to newsletter"
        checked={formData.newsletter}
        onChange={handleCheckboxChange}
      />
      
      <FormCheckbox
        id="terms"
        name="terms" // Add name attribute
        label="I agree to the terms and conditions"
        checked={formData.terms}
        onChange={handleCheckboxChange}
        error={formErrors.terms}
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
          onClick={handleSubmit}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormStep3;