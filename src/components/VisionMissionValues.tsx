import React from 'react';
import Image from 'next/image';
import { Sparkles, Eye, Target, Compass, Lightbulb, Check } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const VisionMissionValues: React.FC = () => {
  const { vision, mission, innovationStatement } = GES_DATA.visionMission;
  const values = GES_DATA.elevate;

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-ges-blue-600" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal">
            Vision, Mission & ELEVATE Framework
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our foundational ethos driving academic distinction, ethical leadership, and continuous student development.
          </p>
        </div>

        {/* Vision & Mission Split Editorial Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="bg-ges-navy-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-ges-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Eye className="w-3.5 h-3.5" />
                <span>Our Vision</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug">
                &ldquo;{vision}&rdquo;
              </h3>
            </div>
            <div className="pt-8 mt-8 border-t border-white/15 text-xs text-slate-400">
              GES Quality Education • Future-Focused Leadership for Oman & the World
            </div>
          </div>

          {/* Mission */}
          <div className="bg-ges-sand-50 rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-ges-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>Our Mission</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-ges-navy-950 font-normal leading-relaxed">
                {mission}
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-slate-200 text-xs text-slate-500">
              Cultivating Lifelong Curiosity, Academic Mastery & Global Citizenship
            </div>
          </div>
        </div>

        {/* ELEVATE Framework Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              The ELEVATE Values Framework
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold mt-1">
              Seven Pillars of Our Educational Commitment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-ges-blue-400 hover:shadow-md transition-all flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-ges-navy-950 text-white font-serif text-2xl font-bold flex items-center justify-center group-hover:bg-ges-blue-600 transition">
                    {val.letter}
                  </div>
                  <h4 className="font-serif text-base font-semibold text-ges-navy-950 mt-3">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation & Research Storytelling */}
        <div className="bg-ges-sand-100 rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-semibold uppercase tracking-wider border border-slate-200">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Innovation and Research</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold">
              Leading the Future of Knowledge & Curricular Pedagogy
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {innovationStatement}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-xs aspect-video rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/img/project-1.jpg"
                alt="Educational Research and Innovation at GES"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
