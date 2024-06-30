'use client'
import React, { useState } from 'react';
import { FormData } from '../types/formTypes';

interface Step3Props {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const options = [
  {
    label: "Adhérer à la nouvelle réglementation RGAA",
    description: "Améliorer l'accessibilité selon l'article 47 de la loi n° 2005-102."
  },
  {
    label: "Système multi-accès",
    description: "Un système que je peux utiliser avec plusieurs personnes dans mon entreprise."
  },
  {
    label: "Agenda en ligne",
    description: "Pour être synchronisé en temps réel et éviter la paperasse."
  },
  {
    label: "Automatisation des tâches redondantes",
    description: "Pour réduire la masse salariale et améliorer mon efficacité opérationnelle."
  },
  {
    label: "Gestion des RDV",
    description: "Prise de RDV et mise à jour automatique sur mon agenda même en dehors d'horaires d'ouverture."
  },
  {
    label: "Gestion des clients",
    description: "Générer automatiquement les documents de mes clients."
  },
  {
    label: "Rappels automatisés",
    description: "Envoi de rappels avant les RDV pour éviter l'absence de mes clients."
  },
  {
    label: "Visibilité et référencement",
    description: "Améliorer ma visibilité et mon référencement sur internet."
  },
  {
    label: "Envoi automatique de SMS ou emails à mes clients",
    description: "Automatiser la communication avec mes clients."
  }
];


const Step3: React.FC<Step3Props> = ({ formData, setFormData, nextStep, prevStep }) => {
  const [customOption, setCustomOption] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newSelections = formData.page3.includes(value)
      ? formData.page3.filter((option) => option !== value)
      : [...formData.page3, value];
    setFormData({ ...formData, page3: newSelections });
  };

  const handleCustomOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomOption(e.target.value);
  };

  const addCustomOption = () => {
    if (customOption.trim() !== '') {
      const newSelections = [...formData.page3, customOption];
      setFormData({ ...formData, page3: newSelections });
      setCustomOption('');
    }
  };

  return (
    <div className="mx-4 mx:0 h-full">
      <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0 shadow-lg">
        <h2 className="text-[#007bff] font-bold text-2xl sm:text-3xl">Solutions techniques</h2>
        <p className="text-[#6c757d] font-normal text-base mb-4">Veuillez cocher les solutions qui vous intéressent.</p>

        {options.map(({ label, description }) => (
          <div key={label} className='m-4 border border-gray-200 rounded-md p-2 duration-200 hover:shadow-lg'>
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                value={label}
                checked={formData.page3.includes(label)}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#007bff]"
              />
              <span className="ml-2 text-[#007bff] font-bold">{label}</span>
            </label>
            <p className="text-[#6c757d] pl-6">{description}</p>
          </div>
        ))}

        {/* Input for custom option */}
        <div className="m-4 border border-gray-200 rounded-md p-2 duration-200 hover:shadow-lg">
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={customOption.trim() !== ''}
              onChange={() => {}}
              className="form-checkbox h-5 w-5 text-[#007bff]"
            />
            <span className="ml-2 text-[#007bff] font-bold">Autre</span>
          </label>
          <input
            type="text"
            value={customOption}
            onChange={handleCustomOptionChange}
            placeholder="Ajouter une autre option"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#007bff]"
          />
          <button
            className="bg-[#007bff] py-2 px-4 mt-2 rounded hover:bg-[#0056b3] ease-in-out text-sm text-white font-medium"
            onClick={addCustomOption}
          >
            Ajouter
          </button>
        </div>

        {/* Display selected options including custom option */}
        <div className="m-4">
          <h3 className="text-[#007bff] font-bold text-lg mb-2">Solutions sélectionnées :</h3>
          {formData.page3.map((selectedOption, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2 text-[#007bff] font-bold">{selectedOption}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  const updatedSelections = formData.page3.filter(option => option !== selectedOption);
                  setFormData({ ...formData, page3: updatedSelections });
                }}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button className="bg-[#6c757d] py-3 px-4 mt-4 rounded hover:bg-[#acacac] ease-in-out text-sm text-white font-medium sm:text-base" onClick={prevStep}>
            Retour
          </button>
          <button className="bg-[#007bff] py-3 px-4 mt-4 rounded hover:bg-[#0056b3] ease-in-out text-sm text-white font-medium sm:text-base" onClick={nextStep}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;