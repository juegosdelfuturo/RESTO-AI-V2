import React from 'react';
import { ChefHat } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start text-left mb-12">
          <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 mb-6 cursor-pointer">
            <div className="bg-slate-900 p-2 rounded-lg text-white">
              <ChefHat size={20} />
            </div>
            <span className="text-xl font-bold text-slate-900">Resto<span className="text-primary-600">AI</span></span>
          </div>
          <p className="text-slate-500 max-w-sm mb-6">
            La solución líder en automatización telefónica para la industria de la hospitalidad. Recupera el control de tu sala y aumenta tus reservas con Inteligencia Artificial.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-start items-center gap-4 text-sm text-slate-400">
          <p>© 2025 RestoAI Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};