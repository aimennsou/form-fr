'use client'

import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Review from './components/Review';
import Sidebar from './components/Sidebar';
import { FormData } from './types/formTypes';
import Merci from './components/Merci'; // Import the Merci component
const Home: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    page2: [],
    page3: [],
    page4: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false); // State to track form submission

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true); // Set submitted to true on successful form submission
    } else {
      alert('Error submitting form');
    }
  };

  // Render Merci component if form is submitted
  if (submitted) {
return (
  <div className="flex items-center justify-center h-full">
    <div className="max-w-[700px] mx-auto">
      <Merci />
    </div>
  </div>
);
  }


  return (
    <div className={`
      flex flex-col h-full m-0
      sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]`
    }>
      <Sidebar step={step} />

      <div className="flex flex-1 sm:max-w-[700px] sm:flex-0 sm:mx-auto my-auto">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Review formData={formData} handleSubmit={handleSubmit} prevStep={prevStep} />}
      </div>
     
    </div>
  );
};

export default Home;
