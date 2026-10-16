'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Globe, 
  ExternalLink, 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';
import { GES_DATA, School } from '@/data/gesData';

export const InstitutionShowcase: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>('sips');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const schools = GES_DATA.schools;

  const activeSchool = schools.find((s) => s.id === selectedSchool) || schools[0];

  return (
    <section className="py-24 bg-ges-sand-50 border-b border-slate-200" id="institutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-ges-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Our Institutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal">
            Centres of Academic & Early Childhood Distinction
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            GES operates leading educational institutions in Muscat, spanning world-class K-12 British schooling and Reggio Emilia-inspired early learning centers.
          </p>
        </div>

        {/* Institution Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {schools.map((school) => {
            const isSelected = school.id === selectedSchool;
            return (
              <button
                key={school.id}
                onClick={() => setSelectedSchool(school.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 border ${
                  isSelected
                    ? 'bg-ges-navy-950 text-white shadow-lg border-ges-navy-950'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={school.logo}
                    alt={school.shortName}
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <span>{school.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected School Split Editorial Presentation */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          
          {/* Left Column: Campus Gallery & Architecture (Col 6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
            <div>
              {/* Main Featured Campus Photo */}
              <div 
                onClick={() => setLightboxImg(activeSchool.gallery[0])}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-slate-200"
              >
                <Image
                  key={activeSchool.gallery[0]}
                  src={activeSchool.gallery[0]}
                  alt={`${activeSchool.name} Campus Facility`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-ges-navy-950/20 group-hover:bg-ges-navy-950/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-ges-navy-950 text-xs font-semibold shadow">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Enlarge Photo
                  </span>
                </div>
              </div>

              {/* Thumbnails Strip */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {activeSchool.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImg(img)}
                    className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 cursor-pointer hover:opacity-80 transition bg-slate-200"
                  >
                    <Image
                      src={img}
                      alt={`Campus view ${i + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Facility Highlight */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-ges-blue-600" />
                {activeSchool.curriculum}
              </span>
              <span className="font-medium text-ges-navy-950">
                {activeSchool.established ? `Est. ${activeSchool.established}` : activeSchool.ages}
              </span>
            </div>
          </div>

          {/* Right Column: Institutional Identity & Description (Col 6) */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* School Logo & Title */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm p-1">
                  <Image
                    src={activeSchool.logo}
                    alt={activeSchool.name}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ges-navy-950">
                    {activeSchool.name}
                  </h3>
                  <p className="text-xs text-ges-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                    {activeSchool.tagline}
                  </p>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <MapPin className="w-4 h-4 text-ges-crimson-600 shrink-0" />
                <span>{activeSchool.location}</span>
              </div>

              {/* Full Verbatim Description from Original Website */}
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{activeSchool.description}</p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={activeSchool.website}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ges-navy-950 hover:bg-ges-navy-800 text-white text-xs font-semibold transition"
              >
                <span>Visit Official School Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href={`/schools#${activeSchool.id}`}
                className="text-xs font-semibold text-ges-blue-600 hover:text-ges-navy-950 transition flex items-center gap-1"
              >
                <span>View Full Campus Folio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={lightboxImg}
              alt="Enlarged Campus Facility View"
              fill
              sizes="1200px"
              className="object-contain"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
