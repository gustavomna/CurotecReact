import { useNavigate } from 'react-router-dom';
import useFormStore from '../../store/formStore';

const getInterestLabel = (id: string): string => {
  const interestMap: Record<string, string> = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    mobile: 'Mobile Development',
    devops: 'DevOps',
    design: 'UI/UX Design',
  };
  
  return interestMap[id] || id;
};

const getExperienceLabel = (value: string): string => {
  const experienceMap: Record<string, string> = {
    entry: 'Entry Level (0-2 years)',
    mid: 'Mid Level (3-5 years)',
    senior: 'Senior Level (6-10 years)',
    expert: 'Expert (10+ years)',
  };
  
  return experienceMap[value] || value;
};

const FormSummary = () => {
  const { formData, resetForm } = useFormStore();
  const navigate = useNavigate();
  
  const handleReset = () => {
    resetForm();
    navigate('/');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Form Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Personal Information</h3>
          <div className="space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{' '}
              {formData.firstName} {formData.lastName}
            </p>
            <p>
              <span className="text-gray-500">Email:</span> {formData.email}
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Professional Information</h3>
          <div className="space-y-2">
            <p>
              <span className="text-gray-500">Occupation:</span>{' '}
              {formData.occupation}
            </p>
            <p>
              <span className="text-gray-500">Company:</span> {formData.company}
            </p>
            <p>
              <span className="text-gray-500">Experience:</span>{' '}
              {getExperienceLabel(formData.experience)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium text-gray-900 mb-2">Preferences</h3>
        <div className="space-y-2">
          <p>
            <span className="text-gray-500">Interests:</span>{' '}
            {formData.interests.map(getInterestLabel).join(', ')}
          </p>
          <p>
            <span className="text-gray-500">Newsletter:</span>{' '}
            {formData.newsletter ? 'Subscribed' : 'Not subscribed'}
          </p>
          <p>
            <span className="text-gray-500">Terms:</span>{' '}
            {formData.terms ? 'Accepted' : 'Not accepted'}
          </p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Complete & Start Over
        </button>
      </div>
    </div>
  );
};

export default FormSummary;
