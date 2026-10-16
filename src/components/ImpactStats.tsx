'use client';

import React from 'react';
import { GES_DATA } from '@/data/gesData';
import { GraduationCap, Users, Award, Building, Sparkles } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      num: GES_DATA.impact.students,
      label: "Enrolled Students",
      desc: "Nurtured across K-12 and early learning network in Oman",
      icon: <Users className="w-5 h-5 text-ges-blue-600" />
    },
    {
      num: GES_DATA.impact.employees,
      label: "Educators & Staff",
      desc: "Recruited globally with continuous professional training",
      icon: <Award className="w-5 h-5 text-ges-gold-500" />
    },
    {
      num: GES_DATA.impact.alumni,
      label: "Alumni Graduated",
      desc: "Advancing into leading global universities & careers",
      icon: <GraduationCap className="w-5 h-5 text-ges-crimson-600" />
    },
    {
      num: GES_DATA.impact.campuses,
      label: "Network Schools",
      desc: "High-standard campuses in Muscat delivering excellence",
      icon: <Building className="w-5 h-5 text-ges-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-ges-sand-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-ges-gold-600" />
            <span>Our Proven Impact Across Oman</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal">
            Measuring Our Educational Footprint
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Since 2012, Global Education Services has demonstrated measurable excellence in private schooling, sustainable learning environments, and student achievements.
          </p>
        </div>

        {/* Statistical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div 
              key={s.label}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Subtle top color bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ges-blue-600 via-ges-gold-500 to-ges-crimson-600 opacity-80" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-serif text-4xl sm:text-5xl font-semibold text-ges-navy-950 tracking-tight">
                  {s.num}
                </p>
                <h3 className="text-base font-semibold text-slate-800">
                  {s.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Flag Note as per instructions */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            * Official figures preserved from the verified GES Quality Education institutional registry (13+ Years of Excellence: 2012–2025).
          </p>
        </div>

      </div>
    </section>
  );
};
