import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Handshake, 
  ShieldCheck, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Award,
  Building2,
  FileCheck2
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const metadata = {
  title: 'Partner With Us | Educational Investment & Partnerships | GES Oman',
  description: 'Partner with Global Education Services Company (GES). Discover complete school management, licensing, PPP, and franchise opportunities in Oman and internationally.',
};

export default function PartnerPage() {
  const { intro, invitation, supportStatement, accreditations } = GES_DATA.partnerships;
  const models = GES_DATA.operational.models;

  return (
    <div className="bg-ges-sand-50">
      
      {/* Section A: Be a Partner Hero */}
      <section className="relative bg-ges-navy-950 text-white py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" />
              <span>Investment & Collaboration</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Partner With GES Quality Education
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              {intro}
            </p>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs sm:text-sm text-slate-200 flex items-center gap-3">
              <Mail className="w-4 h-4 text-ges-gold-400 shrink-0" />
              <span>{invitation}</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`mailto:${GES_DATA.contact.email}?subject=Partnership%20Inquiry%20with%20GES`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white text-xs font-semibold transition"
              >
                <span>Initiate Partnership Dialogue</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact?type=partnership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/15"
              >
                <span>Request Executive Meeting</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Section F: Our Support Description */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section F: Institutional Support
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
              Experienced Operational & Academic Backing
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {supportStatement}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="p-6 rounded-2xl bg-ges-sand-50 border border-slate-200 text-center w-full max-w-sm space-y-3">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-lg font-semibold text-ges-navy-950">International Linkages</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct connections to global accreditation councils, pedagogical bodies, and regional educational ministries.
              </p>
            </div>
          </div>
        </section>

        {/* Section B: Management and Partnership Models */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section B: Flexible Partnership Models
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
              Collaboration Frameworks Tailored to Your Region
            </h2>
            <p className="text-slate-600 text-sm">
              We provide turnkey management, licensing agreements, public-private partnerships, and territorial master franchises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((m) => (
              <div 
                key={m.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm p-8 flex flex-col justify-between space-y-4"
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ges-navy-950 mb-3">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/operational#${m.id}`}
                    className="text-xs font-semibold text-ges-blue-600 hover:text-ges-navy-950 transition flex items-center gap-1"
                  >
                    <span>View full model requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section D: Our Brands & Institutional Partners */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section D: Institutional Network
            </span>
            <h2 className="font-serif text-3xl font-normal text-ges-navy-950">
              Our Owned Institutions & Network Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {GES_DATA.schools.map((s) => (
              <div key={s.id} className="p-6 rounded-2xl bg-ges-sand-50 border border-slate-200 text-center flex flex-col items-center justify-between space-y-4">
                <div className="relative w-20 h-20 rounded-2xl bg-white p-2 border border-slate-200 shadow-sm">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-ges-navy-950">{s.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{s.location}</p>
                </div>
                <a
                  href={s.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-ges-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>{s.websiteLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section E: Accreditations & Regulatory Bodies */}
        <section className="bg-ges-sand-100 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section E: Regulatory Compliance & Accreditations
            </span>
            <h2 className="font-serif text-3xl font-normal text-ges-navy-950">
              Recognized by Leading Educational Authorities
            </h2>
            <p className="text-slate-600 text-sm">
              Our institutions adhere to strict regulatory benchmarks and international quality assurances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((acc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative h-14 w-full mb-4 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100">
                    <Image
                      src={acc.logo}
                      alt={acc.name}
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-ges-blue-600 uppercase tracking-wider">{acc.type}</span>
                  <h3 className="font-serif text-base font-semibold text-ges-navy-950 mt-1">{acc.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">{acc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
