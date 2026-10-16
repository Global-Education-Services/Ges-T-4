'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Calendar, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [schoolsDropdownOpen, setSchoolsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSchoolsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About GES', href: '/about' },
    { 
      label: 'Our Schools', 
      href: '/schools',
      hasDropdown: true,
      items: [
        { 
          name: 'Al Shomoukh International Private School (SIPS)', 
          href: '/schools#sips', 
          sub: 'British Curriculum (K-12) • Established 2015'
        },
        { 
          name: 'Shomoukh ECE Al Qurum Campus', 
          href: '/schools#shomoukh-qurum', 
          sub: 'Reggio Emilia Approach Inspired • Ages 1-4'
        },
        { 
          name: 'Shomoukh ECE Al Mouj Campus', 
          href: '/schools#shomoukh-mouj', 
          sub: 'Early Childhood Excellence Center • Ages 1-4'
        },
      ]
    },
    { label: 'Operational Models', href: '/operational' },
    { label: 'Partnerships', href: '/partner' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Press', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  // Dynamic logo selection: white text logo on dark header, dark text logo on light header
  const logoSrc = scrolled 
    ? '/assets/img/banner/ges-logo-internal.png' 
    : '/assets/img/banner/ges-logo.png';

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-200' 
          : 'bg-ges-navy-950/95 backdrop-blur-md py-4 text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* 1. Left: Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-11 w-44 sm:h-12 sm:w-48 lg:h-13 lg:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={logoSrc}
                alt="GES Quality Education - Global Education Services"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 192px, 208px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* 2. Center: Streamlined Single-Tier Desktop Navigation Links (lg and above) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setSchoolsDropdownOpen(true)}
                    onMouseLeave={() => setSchoolsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                        scrolled
                          ? isActive 
                            ? 'text-ges-blue-600 bg-blue-50 font-semibold' 
                            : 'text-slate-700 hover:text-ges-navy-950 hover:bg-slate-100'
                          : isActive
                            ? 'text-white bg-white/15 font-semibold'
                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className={`absolute left-0 mt-1.5 w-84 rounded-2xl shadow-2xl p-2.5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 border ${
                      scrolled
                        ? 'bg-white border-slate-200 text-slate-900 shadow-slate-300/50'
                        : 'bg-ges-navy-900 border-white/15 text-white shadow-black/70'
                    }`}>
                      <div className={`px-3 py-2 border-b mb-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider ${
                        scrolled ? 'border-slate-100 text-slate-400' : 'border-white/10 text-ges-gold-400'
                      }`}>
                        <span>Our Campuses in Muscat</span>
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block p-2.5 rounded-xl transition ${
                            scrolled ? 'hover:bg-slate-50' : 'hover:bg-white/10'
                          }`}
                        >
                          <p className={`text-xs font-semibold leading-snug ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                            {item.name}
                          </p>
                          <p className={`text-[11px] mt-0.5 leading-tight ${scrolled ? 'text-slate-500' : 'text-slate-300 font-light'}`}>
                            {item.sub}
                          </p>
                        </Link>
                      ))}
                      <div className={`pt-2 border-t mt-1.5 ${scrolled ? 'border-slate-100' : 'border-white/10'}`}>
                        <Link 
                          href="/schools" 
                          className={`flex items-center justify-between p-2 text-xs font-medium rounded-lg transition ${
                            scrolled 
                              ? 'text-ges-blue-600 hover:text-ges-navy-950 hover:bg-slate-50' 
                              : 'text-ges-gold-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <span>Explore all institutions & campus folios</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    scrolled
                      ? isActive 
                        ? 'text-ges-blue-600 bg-blue-50 font-semibold' 
                        : 'text-slate-700 hover:text-ges-navy-950 hover:bg-slate-100'
                      : isActive
                        ? 'text-white bg-white/15 font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Single-Tier Utility Actions (Phone, Lang, Appointment CTA) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Phone Helpline */}
            <a 
              href={`tel:${GES_DATA.contact.phoneClean}`}
              title="Call GES Central Directorate"
              className={`flex items-center gap-1.5 text-xs font-medium transition px-2.5 py-1.5 rounded-lg ${
                scrolled ? 'text-slate-600 hover:text-ges-navy-950 hover:bg-slate-100' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-ges-gold-400" />
              <span className="hidden xl:inline">{GES_DATA.contact.phone}</span>
            </a>

            {/* Language Switch */}
            <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md border ${
              scrolled ? 'border-slate-200 text-slate-700' : 'border-white/15 text-slate-300'
            }`}>
              <span className="font-semibold text-white">EN</span>
              <span className="opacity-40">/</span>
              <span className="opacity-70 hover:opacity-100 cursor-pointer text-slate-400 hover:text-white">عربي</span>
            </div>

            {/* Inquire Link */}
            <Link
              href="/contact"
              className={`px-3 py-2 text-xs font-semibold rounded-xl transition border whitespace-nowrap ${
                scrolled
                  ? 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  : 'border-white/20 text-slate-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              Inquire
            </Link>

            {/* Book Appointment Primary Button */}
            <Link
              href="/contact?type=meeting"
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition shadow-sm whitespace-nowrap flex items-center gap-1.5 ${
                scrolled
                  ? 'bg-ges-navy-950 hover:bg-ges-navy-800 text-white'
                  : 'bg-ges-blue-600 hover:bg-ges-blue-500 text-white shadow-blue-900/30'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* 4. Mobile / Tablet Responsive Controls (< lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact?type=meeting"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                scrolled 
                  ? 'bg-ges-navy-950 text-white' 
                  : 'bg-ges-blue-600 text-white'
              }`}
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition focus:outline-none ${
                scrolled 
                  ? 'text-slate-800 hover:bg-slate-100' 
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ges-navy-950 text-white border-t border-white/10 shadow-2xl px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Accreditation & Language Row */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-ges-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              Cognia® Globally Accredited
            </span>
            <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
              <span className="font-semibold text-white">EN</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400 hover:text-white cursor-pointer">عربي</span>
            </div>
          </div>

          {/* Nav Links List */}
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/10 pb-1.5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium rounded-lg ${
                          isActive ? 'text-ges-gold-400 bg-white/10 font-semibold' : 'text-slate-200'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSchoolsDropdownOpen(!schoolsDropdownOpen)}
                        className="p-2 text-slate-400 hover:text-white"
                        aria-label="Toggle schools submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${schoolsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {schoolsDropdownOpen && (
                      <div className="pl-3 pr-2 py-2 space-y-2 bg-white/5 rounded-xl mt-1 border border-white/5">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2 px-2.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
                          >
                            <p className="font-semibold text-white">{item.name}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition ${
                    isActive ? 'text-ges-gold-400 bg-white/10 font-semibold' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Details & Direct Actions */}
          <div className="pt-2 border-t border-white/10 space-y-3">
            <div className="text-xs text-slate-400 px-3 space-y-1.5">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-ges-gold-400" />
                <a href={`tel:${GES_DATA.contact.phoneClean}`} className="hover:text-white transition">
                  {GES_DATA.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-ges-gold-400" />
                <a href={`mailto:${GES_DATA.contact.email}`} className="hover:text-white transition">
                  {GES_DATA.contact.email}
                </a>
              </p>
              <p className="text-[11px] text-slate-400">
                Airport Heights, Muscat • Sun–Thu: 7:30 AM – 3:30 PM
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                href="/contact"
                className="w-full text-center py-2.5 text-xs font-semibold rounded-xl border border-white/20 text-white bg-white/5 hover:bg-white/10 transition"
              >
                Inquire
              </Link>
              <Link
                href="/contact?type=meeting"
                className="w-full text-center py-2.5 text-xs font-semibold rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white shadow-md transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
