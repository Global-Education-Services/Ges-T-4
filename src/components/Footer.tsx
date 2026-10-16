'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-ges-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Corporate Brochure Download Bar */}
        <div className="bg-ges-navy-900/90 rounded-2xl p-6 sm:p-8 mb-16 border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-ges-gold-500/20 text-ges-gold-400 mb-3 border border-ges-gold-500/30">
              <Download className="w-3.5 h-3.5" />
              Institutional Resources
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Stay Informed With GES Publications
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Subscribe to our quarterly education review or download the complete GES corporate brochure and academic prospectus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Newsletter Subscription */}
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 px-5 py-3 rounded-xl text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing to our newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-ges-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-ges-blue-500 flex-1 sm:w-64"
                />
                <button
                  type="submit"
                  className="bg-ges-blue-600 hover:bg-ges-blue-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Brochure Direct Download */}
            <a
              href="/assets/downloads/GES Corporate Broucher.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl text-sm font-semibold transition border border-white/15"
            >
              <Download className="w-4 h-4 text-ges-gold-400" />
              <span>Corporate Brochure</span>
            </a>
          </div>
        </div>

        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-14 w-52 mb-4 bg-white/5 p-2 rounded-lg inline-block">
              <Image
                src="/assets/img/banner/ges-logo.png"
                alt="Global Education Services Logo"
                fill
                sizes="208px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Global Education Services Company (GES Quality Education) is Oman’s premier private education group, delivering world-class K-12 British schools, preschools, and Reggio Emilia-inspired early childhood centers since 2012.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={GES_DATA.contact.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="GES Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={GES_DATA.contact.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="GES Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={GES_DATA.contact.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="GES Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={GES_DATA.contact.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="GES LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Accreditations Badges */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Accreditations & Governance
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-xs rounded bg-white/5 border border-white/10 text-slate-300">
                  Cognia Global
                </span>
                <span className="px-2.5 py-1 text-xs rounded bg-white/5 border border-white/10 text-slate-300">
                  ECIS Member
                </span>
                <span className="px-2.5 py-1 text-xs rounded bg-white/5 border border-white/10 text-slate-300">
                  Ministry of Education
                </span>
                <span className="px-2.5 py-1 text-xs rounded bg-white/5 border border-white/10 text-slate-300">
                  Oman Vision 2040
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About GES & Leadership</Link>
              </li>
              <li>
                <Link href="/schools" className="hover:text-white transition">Our Schools & Campuses</Link>
              </li>
              <li>
                <Link href="/operational" className="hover:text-white transition">Operational Models (PPP)</Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition">Partnerships & Licensing</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">Careers at GES</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">News & Media Archive</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact & Appointments</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campuses */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-4 tracking-wide">
              Our Institutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/schools#sips" className="group block">
                  <span className="text-white font-medium group-hover:text-ges-gold-400 transition flex items-center gap-1">
                    Al Shomoukh International
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-xs text-slate-400">Hay Al Hail • British K-12</span>
                </Link>
              </li>
              <li>
                <Link href="/schools#shomoukh-qurum" className="group block">
                  <span className="text-white font-medium group-hover:text-ges-gold-400 transition flex items-center gap-1">
                    Shomoukh ECE Al Qurum
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-xs text-slate-400">Shatti Al Qurum • Ages 1-4</span>
                </Link>
              </li>
              <li>
                <Link href="/schools#shomoukh-mouj" className="group block">
                  <span className="text-white font-medium group-hover:text-ges-gold-400 transition flex items-center gap-1">
                    Shomoukh ECE Al Mouj
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-xs text-slate-400">The Walk, Al Mouj • Early Excellence</span>
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="/assets/downloads/awards.pdf"
                download
                className="text-xs text-ges-gold-400 hover:text-white flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Awards & Impact Folio (PDF)</span>
              </a>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-4 tracking-wide">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ges-gold-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Airport Heights, P.O. Box 1756, Postal Code 111, Muscat, Sultanate of Oman
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-ges-gold-400 shrink-0" />
                <a href={`tel:${GES_DATA.contact.phoneClean}`} className="hover:text-white transition">
                  {GES_DATA.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ges-gold-400 shrink-0" />
                <a href={`mailto:${GES_DATA.contact.email}`} className="hover:text-white transition">
                  {GES_DATA.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-ges-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  Sun – Thu: 7:30 AM – 3:30 PM<br />
                  (Closed Friday & Saturday)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            All Copyrights @ Copyrights 2025 Reserved to GES Quality Education (Global Education Services L.L.C.)
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-200 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200 transition">Terms of Use</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200 transition">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
