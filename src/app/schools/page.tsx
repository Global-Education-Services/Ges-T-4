'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  X,
  Calendar,
  Compass,
  ArrowRight
} from 'lucide-react';
import { GES_DATA, School } from '@/data/gesData';

export default function SchoolsPage() {
  const schools = GES_DATA.schools;
  const [activeTab, setActiveTab] = useState('sips');
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="bg-ges-sand-50">
      
      {/* Editorial Hero */}
      <section className="relative bg-ges-navy-950 text-white py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutions of Distinction</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Our Schools & Campuses Across Oman
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Discover Al Shomoukh International Private School (SIPS) and Shomoukh Early Childhood Education campuses in Al Qurum and Al Mouj, Muscat.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              {schools.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition border border-white/10"
                >
                  {s.shortName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Campuses Detailed Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {schools.map((school, idx) => (
          <section 
            key={school.id} 
            id={school.id}
            className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
          >
            {/* Top Campus Header Bar */}
            <div className="p-8 sm:p-10 border-b border-slate-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-slate-50/50">
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 bg-white p-1 shrink-0 shadow-sm">
                  <Image
                    src={school.logo}
                    alt={`${school.name} Logo`}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-wider">
                      Campus 0{idx + 1}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {school.established ? `Established ${school.established}` : school.ages}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold mt-1">
                    {school.name}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={school.website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ges-navy-950 hover:bg-ges-navy-800 text-white text-xs font-semibold transition"
                >
                  <span>Visit {school.websiteLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/contact?type=admissions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
                >
                  <span>Inquire Admissions</span>
                </Link>
              </div>
            </div>

            {/* Split Content: Narrative & Full Photo Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10">
              
              {/* Text Information (Col 6) */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <MapPin className="w-4 h-4 text-ges-crimson-600 shrink-0" />
                    <span>{school.location}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-ges-blue-800 text-xs font-medium">
                    <span className="font-bold">Curriculum & Framework:</span> {school.curriculum}
                  </div>

                  <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p>{school.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-semibold text-slate-800">Quality Assured</p>
                    <p className="text-slate-500 mt-0.5">Cognia® & MOE Compliance</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-semibold text-slate-800">Campus Access</p>
                    <p className="text-slate-500 mt-0.5">Dedicated Student Facilities</p>
                  </div>
                </div>
              </div>

              {/* Photo Gallery (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Campus Facilities & Architecture ({school.gallery.length} Views)
                </p>

                {/* Primary Photo */}
                <div 
                  onClick={() => setModalImg(school.gallery[0])}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm cursor-pointer group bg-slate-100 border border-slate-200"
                >
                  <Image
                    src={school.gallery[0]}
                    alt={`${school.name} Main Campus View`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ges-navy-950/20 group-hover:bg-ges-navy-950/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-ges-navy-950 text-xs font-semibold shadow">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Enlarge Facility Photo
                    </span>
                  </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {school.gallery.slice(1).map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setModalImg(img)}
                      className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 cursor-pointer hover:opacity-80 transition bg-slate-100"
                    >
                      <Image
                        src={img}
                        alt={`${school.name} Facility ${i + 2}`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Lightbox Modal */}
      {modalImg && (
        <div 
          onClick={() => setModalImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={modalImg}
              alt="Campus Facility View"
              fill
              sizes="1200px"
              className="object-contain"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
