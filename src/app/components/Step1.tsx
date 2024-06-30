import React, { useState } from 'react';
import TextInput from './TextInput';
import { FormData } from '../types/formTypes';

interface Step1Props {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (fieldName: keyof FormData, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const clearError = (field: string) => {
    setErrors({ ...errors, [field]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Veuillez fournir le nom et le prénom';
    if (!formData.email) newErrors.email = 'Veuillez fournir votre e-mail';
    if (!formData.phone) newErrors.phone = 'Pas de numéro de téléphone';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="mx-4 mx:0">
      <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0 shadow-lg">
        <h2 className="text-[#007bff] font-bold text-2xl sm:text-3xl">Informations générales</h2>
        <p className="text-[#6c757d] font-normal text-base mb-4">Ce sont des informations nécessaires pour poursuivre.</p>

        <TextInput
          label="Nom et prénom"
          value={formData.name}
          placeholder="e.g.  Paul Dupont"
          handleInputChange={(value) => handleInputChange('name', value)}
          clearError={() => clearError('name')}
          hasError={!!errors.name}
          errorMessage={errors.name}
        />
        <TextInput
          label="Votre adresse email"
          value={formData.email}
          placeholder="e.g. adresse@email.com"
          handleInputChange={(value) => handleInputChange('email', value)}
          clearError={() => clearError('email')}
          hasError={!!errors.email}
          errorMessage={errors.email}
        />
        <TextInput
          label="Votre numéro de téléphone"
          value={formData.phone}
          placeholder="e.g. 0765659878"
          handleInputChange={(value) => handleInputChange('phone', value)}
          clearError={() => clearError('phone')}
          hasError={!!errors.phone}
          errorMessage={errors.phone}
        />
        <div className="flex justify-end">
          <button className="bg-[#007bff] py-3 px-4 mt-4 rounded hover:bg-[#0056b3] ease-in-out text-sm text-white font-medium sm:text-base" onClick={handleNextStep}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
