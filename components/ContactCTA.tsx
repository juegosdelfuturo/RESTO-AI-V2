import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl shadow-primary-500/30 relative overflow-hidden">
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para modernizar tu restaurante?
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              Únete a más de 500 restaurantes que ya han automatizado su gestión de reservas. Prueba gratuita de 14 días. Sin tarjeta de crédito.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-slate-50 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Agendar Demo Personalizada <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};