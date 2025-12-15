import React, { useState } from 'react';
import { Send, Check, Loader2, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // REEMPLAZA "https://formspree.io/f/tu_id_aqui" CON TU URL REAL DE FORMSPREE
      // Ejemplo: https://formspree.io/f/mqaklzaz
      const response = await fetch("https://formspree.io/f/tu_id_aqui", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Copy */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Planes a medida para <br/><span className="gradient-text">tu negocio</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Cada restaurante es único. Nuestros precios se adaptan al volumen de tus reservas y el número de locales. Sin comisiones por cubierto, solo una tarifa plana mensual justa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={16} />
                </div>
                <span className="text-slate-700 font-medium">Instalación y configuración incluida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={16} />
                </div>
                <span className="text-slate-700 font-medium">Soporte prioritario 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={16} />
                </div>
                <span className="text-slate-700 font-medium">Actualizaciones de IA semanales</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={16} />
                </div>
                <span className="text-slate-700 font-medium">Sin permanencia</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 sticky top-24">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-slate-600">
                  Uno de nuestros especialistas en automatización te contactará en menos de 24 horas con tu propuesta personalizada.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-primary-600 font-semibold hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Solicitar Presupuesto</h3>
                  <p className="text-slate-500 text-sm mt-2">Completa el formulario para recibir una demo y precios.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-semibold text-slate-700">Nombre</label>
                      <input name="nombre" id="nombre" required type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="apellido" className="text-sm font-semibold text-slate-700">Apellido</label>
                      <input name="apellido" id="apellido" required type="text" placeholder="Tu apellido" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="restaurante" className="text-sm font-semibold text-slate-700">Restaurante</label>
                    <input name="restaurante" id="restaurante" required type="text" placeholder="Nombre del local" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                      <input name="email" id="email" required type="email" placeholder="hola@restaurante.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-semibold text-slate-700">Teléfono</label>
                      <input name="telefono" id="telefono" required type="tel" placeholder="+34 600..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="volumen" className="text-sm font-semibold text-slate-700">Volumen Mensual</label>
                    <div className="relative">
                      <select name="volumen" id="volumen" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-600 appearance-none">
                        <option value="Menos de 500">Menos de 500 cubiertos</option>
                        <option value="500 - 2000">500 - 2000 cubiertos</option>
                        <option value="Más de 2000">Más de 2000 cubiertos</option>
                        <option value="Grupo">Grupo / Franquicia</option>
                      </select>
                      {/* Arrow Icon */}
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  {formState === 'error' && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      Error al enviar. Por favor, verifica tu conexión o configuración.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formState === 'loading'}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transform active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Ver Precios y Demo <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-400">
                    Al enviar aceptas nuestra política de privacidad. Sin spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};