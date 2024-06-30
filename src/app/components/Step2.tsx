'use client'
import React, { useState } from 'react';
import { FormData } from '../types/formTypes';

interface Step2Props {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const options = [
  {
    label: "Non-conformité avec les règlements RGAA risquant une amende de 50.000€",
    description: "Je n'ai mis en place aucun mesure d'accebilité sur mon site web.",
  },
  {
    label: "Suivi des clients difficile",
    description: "J'ai beaucoup de saisie manuelle à faire pour le suivi et la gestion de mes clients.",
  },
  {
    label: "Trop de canaux de communication",
    description: "Je réponds a des messages sur de nombreux réseaux sociaux, ce qui entraîne un travail redondant.",
  },
  {
    label: "Masse salariale",
    description: "Je n'arrive pas à optimiser mon efficacité opérationnelle pour réduire la masse salariale.",
  },
  {
    label: "Agenda non synchronisé",
    description: "Mon agenda n'est pas synchronisé en temps réel et je dois le gérer manuellement.",
  },
  {
    label: "Gestion des RDV inefficace",
    description: "Je ne peux pas prendre d'appelles pour des RDV en dehors de mes horaires d'ouverture (lors de l'absence ou l'indisponibilité de mon assistant).",
  },
  {
    label: "Gestion manuelle des clients",
    description: "Je dois générer manuellement les documents de mes clients (tout se fait sur papier pour les factures, la comptabilité, etc.).",
  },
  {
    label: "Absences aux RDV",
    description: "Je n'envoie pas de rappels avant les RDV, ce qui entraîne l'absence de mes clients.",
  },
  {
    label: "Faible ou aucune visibilité et référencement sur internet",
    description: "Je n'ai pas beaucoup de clients en dehors de ceux qui connaissent déjà mon magasin ou qui passent devant.",
  },
];


const Step2: React.FC<Step2Props> = ({ formData, setFormData, nextStep, prevStep }) => {
  const [customOption, setCustomOption] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newSelections = formData.page2.includes(value)
      ? formData.page2.filter((option) => option !== value)
      : [...formData.page2, value];
    setFormData({ ...formData, page2: newSelections });
  };

  const handleCustomOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomOption(e.target.value);
  };

  const addCustomOption = () => {
    if (customOption.trim() !== '') {
      const newSelections = [...formData.page2, customOption];
      setFormData({ ...formData, page2: newSelections });
      setCustomOption('');
    }
  };

  return (
    <div className="mx-4 mx:0 h-full">
      <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0 shadow-lg">
        <h2 className="text-[#007bff] font-bold text-2xl sm:text-3xl">Les problèmes quotidiens</h2>
        <p className="text-[#6c757d] font-normal text-base mb-4">Veuillez cocher les problèmes auxquels vous faites face chaque jour.</p>

        {options.map(({ label, description }) => (
          <div key={label} className='m-4 border border-gray-200 rounded-md p-2 duration-200 hover:shadow-lg'>
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                value={label}
                checked={formData.page2.includes(label)}
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
          <h3 className="text-[#007bff] font-bold text-lg mb-2">Problèmes sélectionnés :</h3>
          {formData.page2.map((selectedOption, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2 text-[#007bff] font-bold">{selectedOption}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  const updatedSelections = formData.page2.filter(option => option !== selectedOption);
                  setFormData({ ...formData, page2: updatedSelections });
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

export default Step2;