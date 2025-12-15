import React from 'react';
import { ChefHat, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 mb-6 cursor-pointer inline-flex">
              <div className="bg-slate-900 p-2 rounded-lg text-white">
                <ChefHat size={20} />
              </div>
              <span className="text-xl font-bold text-slate-900">Resto<span className="text-primary-600">AI</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              La solución líder en automatización telefónica para la industria de la hospitalidad. Recupera el control de tu sala y aumenta tus reservas con Inteligencia Artificial.
            </p>
            <div className="flex gap-4">
              <button className="p-2 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-primary-600 hover:border-primary-600 transition-colors">
                <Instagram size={18} />
              </button>
              <button className="p-2 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-primary-600 hover:border-primary-600 transition-colors">
                <Twitter size={18} />
              </button>
              <button className="p-2 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-primary-600 hover:border-primary-600 transition-colors">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-primary-600">Características</a></li>
              <li><a href="#features" className="hover:text-primary-600">Integraciones</a></li>
              <li><a href="#pricing" className="hover:text-primary-600">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-primary-600 text-left">
                  Sobre Nosotros
                </button>
              </li>
              <li><a href="#pricing" className="hover:text-primary-600">Contacto</a></li>
              <li><button onClick={() => alert('Documento de privacidad simulado')} className="hover:text-primary-600 text-left">Privacidad</button></li>
              <li><button onClick={() => alert('Términos y condiciones simulados')} className="hover:text-primary-600 text-left">Términos</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2024 RestoAI Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <Mail size={14} /> hola@restoai.com
          </div>
        </div>
      </div>
    </footer>
  );
};