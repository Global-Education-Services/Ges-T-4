import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const AboutIntroSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography & Visual Framing (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
              <Image
                src="/assets/img/project-1.jpg"
                alt="GES Quality Education Campus Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ges-navy-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ges-navy-950 flex items-center justify-center text-white shrink-0">
                    <Compass className="w-5 h-5 text-ges-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ges-navy-950">Founded in 2012</p>
                    <p className="text-[11px] text-slate-500">Lifelong Dream of the Al Hashmi Family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Original Narrative (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-ges-blue-600 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About GES Quality Education</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal leading-tight">
              A Homegrown Omani Vision with Global Educational Reach
            </h2>

            {/* Complete Verbatim Text from original site */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong className="text-ges-navy-950 font-semibold">Global Education Services Company “GES” Quality Education</strong> is a leading private education group in the Sultanate of Oman, dedicated to delivering world-class K-12 premium schools, preschools, and early learning centers. Since our founding in 2012, GES has been committed to nurturing young minds and empowering them with the knowledge, skills, and values needed to thrive in an ever-changing world.
              </p>
              <p>
                As a homegrown Omani brand, GES is the lifelong dream of the Al Hashmi family, who envisioned a transformative educational journey for the children of Oman. Our mission is to provide quality education that inspires innovation, fosters leadership, and cultivates a lifelong love for learning.
              </p>
              <p>
                Leveraging Oman’s national stability and strategic growth under Vision 2040, GES has built an experienced cadre of specialists dedicated to opening new schools, revitalizing existing institutions, and maintaining the highest international academic benchmarks.
              </p>
            </div>

            {/* Key Pillars Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ges-blue-600 shrink-0" />
                <span>British National Curriculum K-12</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ges-blue-600 shrink-0" />
                <span>Reggio Emilia Early Childhood</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ges-blue-600 shrink-0" />
                <span>Public-Private Partnerships (PPP)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ges-blue-600 shrink-0" />
                <span>Cognia® Global Accreditation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ges-navy-950 hover:bg-ges-navy-800 text-white text-sm font-medium transition group"
              >
                <span>Read Full Corporate Story</span>
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </Link>
              <a
                href="/assets/downloads/GES Corporate Broucher.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium transition"
              >
                <span>Download Brochure (PDF)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
