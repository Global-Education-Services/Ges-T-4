import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, ShieldCheck, Globe, Check } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const EducationalServicesSection: React.FC = () => {
  const models = GES_DATA.operational.models;

  return (
    <section className="py-24 bg-ges-sand-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-ges-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Operational Models</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal">
            Smarter Educational Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            GES is a global education management organization providing turnkey institutional operations, curriculum deployment, licensing, and public-private partnerships across Oman and the MENA region.
          </p>
        </div>

        {/* 4 Models Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {models.map((m, idx) => (
            <div 
              key={m.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ges-navy-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-ges-navy-950 shadow-sm">
                  Pillar 0{idx + 1}
                </span>
              </div>

              {/* Text Narrative */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-ges-navy-950 font-semibold mb-3">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/operational#${m.id}`}
                    className="text-sm font-semibold text-ges-blue-600 group-hover:text-ges-navy-950 transition flex items-center gap-1"
                  >
                    <span>Explore details & frameworks</span>
                    <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Management Modules Strip */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-ges-gold-600 uppercase tracking-widest">Complete Management Suite</span>
              <h3 className="font-serif text-2xl text-ges-navy-950 font-semibold mt-1">
                Integrated Operational Support Across Every Campus
              </h3>
            </div>
            <Link
              href="/operational"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ges-navy-950 text-white text-xs font-semibold hover:bg-ges-navy-800 transition"
            >
              <span>View All 10 Modules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {GES_DATA.operational.managementModules.map((mod, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center">
                <div className="relative w-10 h-10 mb-2">
                  <Image
                    src={mod.icon}
                    alt={mod.title}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-slate-800 mt-1">{mod.title}</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
