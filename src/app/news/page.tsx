'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Newspaper, 
  Calendar, 
  User, 
  ExternalLink, 
  Search, 
  ArrowRight, 
  X, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { GES_DATA, NewsArticle } from '@/data/gesData';

export default function NewsPage() {
  const articles = GES_DATA.news;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Accreditation', 'Partnerships', 'Awards & Recognition', 'Community & Fieldwork', 'Academics & Values', 'Pedagogy'];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category.includes(selectedCategory);
    const matchesSearch = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = articles[0];

  return (
    <div className="bg-ges-sand-50">
      
      {/* Editorial Hero */}
      <section className="relative bg-ges-navy-950 text-white py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Media, Press & Updates</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              News & Community Announcements
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Read the latest updates, international accreditation news, partnership milestones, and press coverage from GES Quality Education.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        {/* Featured Story */}
        <div 
          onClick={() => setActiveArticle(featured)}
          className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
        >
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100 min-h-[320px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-ges-navy-950 text-white shadow">
                Featured Report
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-ges-gold-600" />
                  {featured.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <User className="w-3.5 h-3.5" />
                  {featured.author}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold group-hover:text-ges-blue-600 transition leading-snug">
                {featured.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-ges-blue-600">
              <span>Read complete press article</span>
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-ges-navy-950 text-white shadow'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news archive..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-ges-blue-600"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-ges-navy-950 shadow-sm">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-ges-gold-600" />
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.author}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-ges-navy-950 group-hover:text-ges-blue-600 transition leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-ges-blue-600 mt-4">
                <span>View story</span>
                <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div 
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-10 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                sizes="800px"
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-ges-gold-600" />
                  {activeArticle.date}
                </span>
                <span>•</span>
                <span className="font-semibold text-slate-700">{activeArticle.author}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold leading-tight">
                {activeArticle.title}
              </h2>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
                {activeArticle.fullBody ? (
                  activeArticle.fullBody.map((par, i) => (
                    <p key={i}>{par}</p>
                  ))
                ) : (
                  <p>{activeArticle.excerpt}</p>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a
                href={activeArticle.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-ges-blue-600 hover:underline"
              >
                <span>Read on original publisher website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
