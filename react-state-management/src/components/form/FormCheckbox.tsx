import { ChangeEvent } from 'react';

interface FormCheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormCheckbox = ({
  id,
  name,
  label,
  checked,
  onChange,
  error,
}: FormCheckboxProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={id} className="font-medium text-gray-700">
            {label}
          </label>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormCheckbox;