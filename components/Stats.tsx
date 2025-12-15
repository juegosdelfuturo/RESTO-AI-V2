import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, PhoneMissed, DollarSign, Clock } from 'lucide-react';

const data = [
  { name: 'Sem 1', reservas: 120 },
  { name: 'Sem 2', reservas: 185 },
  { name: 'Sem 3', reservas: 240 },
  { name: 'Sem 4', reservas: 310 },
  { name: 'Sem 5', reservas: 380 },
  { name: 'Sem 6', reservas: 450 },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Resultados probados en <br/><span className="text-primary-400">más de 500 locales</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              No es solo tecnología, es rentabilidad. Nuestros clientes ven un retorno de la inversión inmediato desde la primera semana de implementación.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">2.400€ / mes</h4>
                  <p className="text-slate-400 text-sm">Ingresos extra promedio por recuperar llamadas perdidas.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">45 Horas Ahorradas</h4>
                  <p className="text-slate-400 text-sm">Tiempo mensual que tu personal deja de estar al teléfono.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <PhoneMissed size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">98% Tasa de Respuesta</h4>
                  <p className="text-slate-400 text-sm">Prácticamente ninguna llamada se queda sin atender.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-2xl relative">
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-xl">Reservas Automáticas</h3>
                <p className="text-slate-400 text-sm">Crecimiento acumulado (6 semanas)</p>
              </div>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <TrendingUp size={16} /> +275%
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorReservas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="reservas" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorReservas)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};