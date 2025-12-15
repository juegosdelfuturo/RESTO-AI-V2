import React from 'react';
import { PhoneCall, CalendarCheck, MessageCircle, BarChart3, Globe2, Link } from 'lucide-react';

const features = [
  {
    icon: <Link className="w-6 h-6 text-white" />,
    color: 'bg-indigo-500',
    title: 'Integración Total',
    description: 'Nos conectamos directamente con CoverManager, TheFork, SevenRooms y más. La reserva aparece en tu libro al instante, sin intervención humana.'
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    color: 'bg-blue-500',
    title: 'Voz Humana Natural',
    description: 'Nuestra IA utiliza síntesis de voz neuronal avanzada. Tus clientes pensarán que hablan con una persona de tu equipo.'
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    color: 'bg-green-500',
    title: 'WhatsApp Business API',
    description: 'Gestiona reservas, envía recordatorios automáticos para reducir "No-Shows" y contesta dudas frecuentes por chat.'
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-white" />,
    color: 'bg-purple-500',
    title: 'Gestión Inteligente de Mesas',
    description: 'La IA entiende tus turnos, zonas y capacidades. Nunca sobrevendrá una mesa ni dejará un hueco libre si hay demanda.'
  },
  {
    icon: <Globe2 className="w-6 h-6 text-white" />,
    color: 'bg-pink-500',
    title: 'Atención Multilingüe',
    description: 'Atiende a turistas en inglés, francés, alemán, italiano y más. Rompe la barrera del idioma y capta más clientes internacionales.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: 'bg-orange-500',
    title: 'Dashboard de Rendimiento',
    description: 'Visualiza llamadas perdidas recuperadas, horas pico de contacto y ROI en tiempo real. Toma decisiones basadas en datos.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Automatización real para <span className="gradient-text">restaurantes modernos</span>
          </h2>
          <p className="text-lg text-slate-600">
            Diseñado específicamente para hostelería. Resolvemos los problemas reales del día a día: el teléfono sonando en pleno servicio y reservas perdidas por no contestar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};