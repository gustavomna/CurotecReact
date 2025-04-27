import useFormStore from "../../store/formStore";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormSummary from "./FormSummary";

const FormSystem = () => {
  const { currentStep } = useFormStore();
  
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Multi-Step Form with Zustand</h1>
      
      <div className="mb-8">
        <div className="flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= step
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-gray-300 text-gray-500'
                }`}
              >
                {step < 4 ? step : '✓'}
              </div>
              <div className="text-xs mt-2">
                {step === 1
                  ? 'Personal'
                  : step === 2
                  ? 'Professional'
                  : step === 3
                  ? 'Preferences'
                  : 'Summary'}
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-1">
          <div className="w-full h-1 bg-gray-200 absolute top-0"></div>
          <div
            className="h-1 bg-indigo-600 absolute top-0"
            style={{
              width: `${((currentStep - 1) / 3) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      
      {currentStep === 1 && <FormStep1 />}
      {currentStep === 2 && <FormStep2 />}
      {currentStep === 3 && <FormStep3 />}
      {currentStep === 4 && <FormSummary />}
    </div>
  );
};

export default FormSystem;