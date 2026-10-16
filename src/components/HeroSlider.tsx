'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  Users, 
  Headphones, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const themes = GES_DATA.heroThemes;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % themes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [themes.length]);

  const activeTheme = themes[currentSlide];

  const getThemeIcon = (id: string) => {
    switch (id) {
      case 'excellence':
        return <Sparkles className="w-4 h-4 text-ges-gold-400" />;
      case 'meeting':
        return <Calendar className="w-4 h-4 text-ges-gold-400" />;
      case 'community':
        return <Users className="w-4 h-4 text-ges-gold-400" />;
      case 'support':
        return <Headphones className="w-4 h-4 text-ges-gold-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-ges-gold-400" />;
    }
  };

  return (
    <section className="relative bg-ges-navy-950 text-white overflow-hidden min-h-[620px] lg:min-h-[720px] flex flex-col justify-between">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ges-gold-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Narrative (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs tracking-wide text-slate-200">
              {getThemeIcon(activeTheme.id)}
              <span className="font-medium">{activeTheme.subtitle}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-normal leading-tight text-white tracking-tight break-words">
              Empowering Minds Through{' '}
              <span className="italic font-light text-ges-gold-400">Excellence</span>,{' '}
              Innovation & Knowledge
            </h1>

            {/* Dynamic theme description */}
            <div className="min-h-[64px] sm:min-h-[72px]">
              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl font-light">
                {activeTheme.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={activeTheme.ctaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white font-medium text-sm transition shadow-lg shadow-blue-900/30 group"
              >
                <span>{activeTheme.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition border border-white/15"
              >
                <span>Our Heritage & Vision</span>
              </Link>
            </div>

            {/* Quick Impact indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl font-bold text-white">5,000+</p>
                <p className="text-xs text-slate-400">Enrolled Students</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">700+</p>
                <p className="text-xs text-slate-400">Educators & Faculty</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">4</p>
                <p className="text-xs text-slate-400">Network Campuses</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-ges-navy-900 group">
              <Image
                key={activeTheme.image}
                src={activeTheme.image}
                alt={activeTheme.title}
                fill
                sizes="(max-width: 1024px) 90vw, 550px"
                className="object-cover transition-all duration-700 group-hover:scale-105"
                priority
              />

              {/* Architectural Frame overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ges-navy-950/85 via-ges-navy-950/20 to-transparent pointer-events-none" />

              {/* Floating Theme Card on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-ges-navy-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ges-gold-400">
                      Core Pillar {currentSlide + 1} of 4
                    </span>
                    <h2 className="font-serif text-lg text-white font-semibold mt-0.5">
                      {activeTheme.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + themes.length) % themes.length)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                      aria-label="Previous theme"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % themes.length)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                      aria-label="Next theme"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Theme Selector (Desktop & Mobile Parity) */}
      <div className="relative z-10 bg-ges-navy-900/80 backdrop-blur-md border-t border-white/10 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {themes.map((theme, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={theme.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`text-left p-2.5 sm:p-3 rounded-xl transition-all duration-300 flex items-center gap-2.5 border ${
                    isActive
                      ? 'bg-white/15 border-ges-gold-400/50 text-white shadow-md'
                      : 'bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-ges-gold-400' : 'bg-slate-600'}`} />
                  <div className="truncate">
                    <p className="text-xs font-semibold tracking-wide truncate">
                      {theme.title}
                    </p>
                    <p className="text-[11px] text-slate-400 hidden sm:block truncate">
                      {theme.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
