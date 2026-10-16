'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Sparkles, X, Film, ChevronRight } from 'lucide-react';
import { GES_DATA, VideoStory } from '@/data/gesData';

export const StoriesSection: React.FC = () => {
  const stories = GES_DATA.stories;
  const [activeVideo, setActiveVideo] = useState<VideoStory | null>(null);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5 text-ges-crimson-600" />
              <span>Inside GES / Our Stories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal">
              Vibrant Campus Life & Community Milestones
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore graduation ceremonies, early childhood celebrations, athletics, and cultural milestones celebrated across our network schools.
            </p>
          </div>
        </div>

        {/* Stories Asymmetrical Editorial Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveVideo(story)}
              className="group cursor-pointer bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                <Image
                  src={story.thumb}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ges-navy-950/30 group-hover:bg-ges-navy-950/50 transition-colors" />

                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-ges-navy-950 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-0.5 fill-current text-ges-crimson-600" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-ges-navy-950 shadow">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-ges-navy-950 group-hover:text-ges-blue-600 transition">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {story.subtitle}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-ges-navy-950">
                  <span>Watch story video</span>
                  <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div 
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-ges-navy-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <div className="p-4 bg-ges-navy-900 flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[11px] text-ges-gold-400 font-semibold uppercase">{activeVideo.category}</span>
                <p className="text-sm font-semibold text-white">{activeVideo.title}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
