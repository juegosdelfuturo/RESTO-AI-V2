import React from 'react';
import { ArrowRight, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { ChatDemo } from './ChatDemo';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-primary-100/30 rounded-full blur-3xl -z-10 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider border border-primary-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            IA de Última Generación
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
            Nunca más pierdas una <span className="gradient-text">reserva</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            La IA que contesta al teléfono y WhatsApp de tu restaurante. Se integra con tu libro de reservas (CoverManager, TheFork) y aumenta tus ingresos automáticamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#pricing"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-lg shadow-slate-900/20"
            >
              Empezar ahora <ArrowRight size={18} />
            </a>
            <a 
              href="#features"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all"
            >
              Ver características
            </a>
          </div>

          <div className="pt-6 flex items-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Integración oficial</span>
            </div>
             <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Prueba gratuita</span>
            </div>
          </div>
        </div>

        {/* Right Content (Demo) */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 -left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
          
          <ChatDemo />

          {/* Floating badges */}
          <div className="absolute top-1/4 -left-8 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Llamada entrante</p>
              <p className="text-sm font-bold text-slate-800">Contestada por IA</p>
            </div>
          </div>

           <div className="absolute bottom-1/4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <MessageSquare size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400">WhatsApp</p>
              <p className="text-sm font-bold text-slate-800">Mesa Confirmada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};