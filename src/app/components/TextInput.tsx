import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  placeholder: string;
  hasError?: boolean;
  errorMessage?: string;
  handleInputChange: (value: string) => void; // Adjust the type of handleInputChange function
  clearError: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  placeholder,
  hasError = false,
  errorMessage = '',
  handleInputChange,
  clearError,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value); // Pass the input value to the parent component
  };

  return (
    <div className="flex flex-col gap-1 my-2">
      <div className="flex items-center justify-between mb-2">
        <label className="text-[#404041] text-xs sm:text-sm">{label}</label>
        {hasError && <span className="    text-red-700   text-xs sm:text-sm">{errorMessage}</span>}
      </div>
      <input
        className={`px-4 py-3 rounded ${hasError ? ' border-2 border-red-700 animate-bounce' : 'border-border-color'} border-[1px] text-base text-[#007bff] font-medium placeholder:text-grey focus:outline-none focus:border-[#007bff]`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange} // Ensure handleChange is wired to onChange event
        onFocus={clearError}
      />
    </div>
  );
};

export default TextInput;
