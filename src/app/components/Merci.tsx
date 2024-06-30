import { CircleCheck } from 'lucide-react';
import React from 'react';

const Merci = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
     <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0 shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <CircleCheck className="text-[#007bff]" width={56} height={56} />
          <h2 className="text-[#007bff] font-bold text-2xl sm:text-3xl ml-4">Merci !</h2>
        </div>
   
        <p className="text-base text-[#6c757d] font-normal leading-6 tracking-[0.5px] text-center">
          Merci d'avoir répondu à ce formulaire ! Nous essaierons de revenir vers vous le plus tôt possible avec des nouvelles concernant ce sujet. Si vous avez besoin d'aide, n'hésitez pas à nous recontacter directement par téléphone.
        </p>
      </div>
    </div>
  );
};

export default Merci;
