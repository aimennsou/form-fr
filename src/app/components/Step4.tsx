import React from 'react';
import { FormData } from '../types/formTypes';

interface Step4Props {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const options = ["Autour de 20€/mois","Environ 45€/mois", "Sa vaut 70€/mois"];

const Step4: React.FC<Step4Props> = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, page4: e.target.value });
  };

  return (
    <div className="mx-4 mx:0">
      <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0 shadow-lg">    <h2 className="text-[#007bff] font-bold text-2xl sm:text-3xl">Mon budget</h2>   
      <p className="text-[#6c757d] font-normal text-base mb-4">Le budget que je peux prévoir pour avoir ces solutions.</p>
    
    
 

    {options.map((option) => 
      
      (
        <div className='m-4 border border-gray-200 rounded-md p-2 duration-200 hover:shadow-lg'>

        <label key={option} className='flex'>

        <input type="radio" name="page4" className='mx-2 ' value={option} checked={formData.page4.includes(option)} onChange={handleChange} />
<p className="ml-2 text-[#007bff] font-bold">  {option}</p>
        

        </label>

</div>

      ))}





<div className="flex justify-between">
<button className="bg-[#6c757d] py-3 px-4 mt-4 rounded hover:bg-[#acacac] ease-in-out text-sm text-white font-medium sm:text-base" onClick={prevStep}>
Retour</button>
     <button className="bg-[#007bff] py-3 px-4 mt-4 rounded hover:bg-[#0056b3] ease-in-out text-sm text-white font-medium sm:text-base" onClick={nextStep}>
     Suivant</button>
      </div>



     </div>



    </div>
  );
};

export default Step4;
