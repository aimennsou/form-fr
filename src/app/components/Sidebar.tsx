import React from 'react';
import Link from "next/link";
interface SidebarProps {
  step: number;
}

const steps = [
  { number: 1, title: 'Informations générales' },
  { number: 2, title: 'Problèmes quotidiens' },
  { number: 3, title: 'Solutions techniques' },
  { number: 4, title: 'Budget alloué' },
  { number: 5, title: 'Résumé' },
];

const Sidebar: React.FC<SidebarProps> = ({ step }) => {
  return (
    <div className="flex border border-gray-200 justify-center items-start pt-8 h-[172px] w-full bg-no-repeat bg-cover bg-[#f7f8fa]
      sm:flex-col sm:justify-start sm:items-start sm:p-8 sm:w-[274px] sm:h-[calc(100vh-32px)] sm:bg-[#f7f8fa] sm:rounded-lg sm:bg-center"
    >
      <div className="flex flex-row gap-4 sm:flex-col justify-between sm:gap-8">
        <ul className="flex flex-row gap-4 sm:flex-col sm:gap-8">
          {steps.map((s) => {
            const isActive = step === s.number;
            return (
              <li key={s.number} className="flex flex-row items-center justify-start gap-8 mb-4">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 ${isActive ? 'border-[#007bff] bg-[#007bff]' : 'border-[#6c757d] bg-none'}`}
                >
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#6c757d]'}`}>
                    {s.number}
                  </span>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:gap-2">
                  <span className={`text-xs font-normal leading-3 ${isActive ? 'text-[#007bff]' : 'text-[#6c757d]'}`}>
                    Étape {s.number}
                  </span>
                  <strong className={`text-sm font-bold leading-3 uppercase tracking-[1px] ${isActive ? 'text-[#007bff]' : 'text-[#6c757d]'}`}>
                    {s.title}
                  </strong>
                </div>
              </li>
            );
          })}
        </ul>
            <p>
                  <Link href="https://github.com/aimennsou/form-fr">
                       <button className="border-gray-300 py-3 px-4 mt-4 rounded hover:border-blue-400 ease-in-out text-sm text-white font-medium sm:text-base> Voir le code source </button>
                      </Link>
                  </p>
      </div>
    </div>
  );
};

export default Sidebar;
