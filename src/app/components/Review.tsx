import React from 'react';
import { FormData } from '../types/formTypes';

interface ReviewProps {
  formData: FormData;
  handleSubmit: () => void;
  prevStep: () => void;
}

const Review: React.FC<ReviewProps> = ({ formData, handleSubmit, prevStep }) => {
  return (
    <div className="mx-4 mx:0">
      <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0 shadow-lg"> 
      <h2 className="text-[#007bff] font-bold text-2xl sm:text-3xl">Résumé de vos réponses</h2>     
      <p className="text-[#6c757d] font-normal text-base mb-4">Merci de confirmer vos réponses avant d'envoyer le formulaire.</p>


<div className='bg-gray-50 border rounded-md p-4'>
    <p className="text-sm font-medium text-[#0056b3] sm:text-base">Je suis: </p>
    <p className="text-sm font-normal text-gray-600 sm:text-base">  {formData.name} </p>
    <p className="text-sm font-normal text-gray-600 sm:text-base">{formData.email} </p>
    <p className="text-sm font-normal text-gray-600 sm:text-base"> {formData.phone} </p>
    <p className="text-sm font-medium text-[#0056b3] sm:text-base">les problèmes auxquels je faits face chaque jour:  </p>
    <p className="text-sm font-normal text-gray-600 sm:text-base">{formData.page2.join(', ')}</p>
    <p className="text-sm font-medium text-[#0056b3] sm:text-base">Les solutions technique que je souhaite avoir: </p>
    <p className="text-sm font-normal text-gray-600 sm:text-base"> {formData.page3.join(', ')}</p>
    <p className="text-sm font-medium text-[#0056b3] sm:text-base">Mon budget: </p>
    <p className="text-sm font-normal text-gray-600 sm:text-base"> {formData.page4}</p>
    </div>

    <div className='flex justify-between'>
    <button className="bg-[#6c757d]  py-3 px-4 mt-4 rounded hover:bg-[#acacac] ease-in-out text-sm text-white font-medium sm:text-base" onClick={prevStep}>      Retour</button>

     <button className="bg-[#007bff] py-3 px-4 mt-4 rounded hover:bg-[#0056b3] ease-in-out text-sm text-white font-medium sm:text-base" onClick={handleSubmit}>

  
  
  Confirmer</button>
</div>
     </div>



    </div>
  );
};

export default Review;
