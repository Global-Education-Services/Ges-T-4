import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Sparkles, ArrowRight } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const ChairmanSection: React.FC = () => {
  const chairman = GES_DATA.chairman;

  return (
    <section className="py-24 bg-ges-navy-950 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ges-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-ges-navy-900 group">
              <Image
                src={chairman.image}
                alt={chairman.name}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-top transition duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ges-navy-950/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-ges-navy-900/90 backdrop-blur-md border border-white/10 text-center">
                <p className="font-serif text-lg font-semibold text-white">
                  {chairman.name}
                </p>
                <p className="text-xs text-ges-gold-400 font-medium tracking-wider uppercase mt-0.5">
                  Chairman & Founder
                </p>
              </div>
            </div>
          </div>

          {/* Message Column (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chairman’s Address</span>
            </div>

            {/* Editorial Lead Quote */}
            <div className="relative pl-6 border-l-2 border-ges-gold-400">
              <Quote className="w-8 h-8 text-ges-gold-400/40 absolute -top-3 -left-3 pointer-events-none" />
              <blockquote className="font-serif text-xl sm:text-2xl text-white font-normal italic leading-snug">
                &ldquo;{chairman.leadQuote}&rdquo;
              </blockquote>
            </div>

            {/* Full 4-Paragraph Message - 100% Verbatim & Complete */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {chairman.message.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature & Links */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-base font-semibold text-white">
                  {chairman.name}
                </p>
                <p className="text-xs text-slate-400">
                  Global Education Services Company (GES Quality Education)
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold text-ges-gold-400 hover:text-white transition group"
              >
                <span>Read Full Executive Team Profiles</span>
                <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
