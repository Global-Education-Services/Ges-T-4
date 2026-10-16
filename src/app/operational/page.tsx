import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Layers, 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  Users, 
  TrendingUp, 
  Globe, 
  ArrowRight,
  Compass,
  FileCheck2
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const metadata = {
  title: 'Our Operational Models | Private Schools, PPP & Franchising | GES',
  description: 'Explore GES Quality Education operational models: Private Schools, Public-Private Partnerships (PPP), Licensed Schools, and Master Franchise models across Oman.',
};

export default function OperationalPage() {
  const { intro, models, managementModules } = GES_DATA.operational;

  return (
    <div className="bg-ges-sand-50">
      
      {/* Section A: Quest for Excellence & Operational Hero */}
      <section className="relative bg-ges-navy-950 text-white py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Institutional Excellence</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Operational Models & Complete Management
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              {intro}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?type=partnership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white text-xs font-semibold transition"
              >
                <span>Partner With GES Operations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/15"
              >
                <span>Explore 10 Management Modules</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Operational Chapters (Sections C, D, E, F) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {models.map((model, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <section
              key={model.id}
              id={model.id}
              className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual (Col 5) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-100">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-ges-navy-950 shadow">
                        Model 0{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative (Col 7) */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                    <span>Operational Pillar</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
                    {model.title}
                  </h2>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {model.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                    <Link
                      href="/contact?type=operational"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-ges-blue-600 hover:text-ges-navy-950 transition"
                    >
                      <span>Inquire regarding {model.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </section>
          );
        })}

        {/* Section B: Complete Management Suite (All 10 Modules) */}
        <section id="modules" className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section B: Complete Management Agreement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
              10 Integrated Pillars of School Turnkey Operations
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Schools signing a complete management agreement with Global Education Services (GES®) gain access to a comprehensive suite of educational products and services tailored for Pre-K/K-12 schools:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {managementModules.map((mod, i) => (
              <div 
                key={i}
                className="bg-ges-sand-50 rounded-2xl p-6 border border-slate-200 hover:border-ges-blue-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-12 h-12 mb-4 bg-white rounded-xl p-2 border border-slate-200 shadow-sm">
                    <Image
                      src={mod.icon}
                      alt={mod.title}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-ges-blue-600 uppercase tracking-wider">
                    Module 0{i + 1}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-ges-navy-950 mt-1 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-ges-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-serif text-lg font-semibold">Ready to scale or revitalize an institution in Oman?</p>
              <p className="text-xs text-slate-300">Consult with the GES Academic and Operations Directorate today.</p>
            </div>
            <Link
              href="/contact?type=meeting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white text-xs font-semibold transition shrink-0"
            >
              <span>Schedule Operational Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
