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
  GraduationCap, 
  BookOpen, 
  Building2, 
  Briefcase, 
  Newspaper, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [schoolsDropdownOpen, setSchoolsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
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
        { name: 'Al Shomoukh International Private School (SIPS)', href: '/schools#sips', sub: 'British Curriculum (K-12)' },
        { name: 'Shomoukh ECE Al Qurum Campus', href: '/schools#shomoukh-qurum', sub: 'Reggio Emilia Approach (Ages 1-4)' },
        { name: 'Shomoukh ECE Al Mouj Campus', href: '/schools#shomoukh-mouj', sub: 'Early Years Excellence Center' },
      ]
    },
    { label: 'Operational Models', href: '/operational' },
    { label: 'Partnerships', href: '/partner' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Press', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Corporate Utility Bar */}
      <div className="hidden lg:block bg-ges-navy-950 text-slate-300 text-xs py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-ges-gold-500" />
              <a href={`tel:${GES_DATA.contact.phoneClean}`}>{GES_DATA.contact.phone}</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-ges-gold-500" />
              <a href={`mailto:${GES_DATA.contact.email}`}>{GES_DATA.contact.email}</a>
            </span>
            <span className="text-slate-400">
              Airport Heights, Muscat • Sun–Thu: 7:30 AM – 3:30 PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-ges-gold-500/20 text-ges-gold-400 border border-ges-gold-500/30">
              Cognia® Globally Accredited
            </span>
            <Link 
              href="/contact?type=meeting" 
              className="text-ges-gold-400 hover:text-white font-medium flex items-center gap-1 transition"
            >
              <Calendar className="w-3.5 h-3.5" />
              Request Executive Meeting
            </Link>
            <div className="text-slate-500">|</div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-white font-semibold">EN</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400 hover:text-white cursor-pointer" title="Arabic interface available on news and documentation">عربي</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-slate-200' 
            : 'bg-white/90 backdrop-blur-sm py-4 text-slate-900 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative h-9 w-36 sm:h-12 sm:w-48 lg:h-14 lg:w-56">
                <Image
                  src="/assets/img/banner/ges-logo.png"
                  alt="GES Quality Education Logo"
                  fill
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
                  className="object-contain object-left transition duration-300 group-hover:opacity-90"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
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
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                          isActive 
                            ? 'text-ges-blue-600 bg-blue-50/80 font-semibold' 
                            : 'text-slate-700 hover:text-ges-navy-950 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5 transition group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition duration-200 z-50">
                        <div className="p-2 border-b border-slate-100 mb-1">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Campuses</p>
                        </div>
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-2.5 rounded-lg hover:bg-slate-50 transition"
                          >
                            <p className="text-xs font-semibold text-slate-800">{item.name}</p>
                            <p className="text-[11px] text-slate-500 mt-0.5">{item.sub}</p>
                          </Link>
                        ))}
                        <div className="pt-2 border-t border-slate-100 mt-1">
                          <Link 
                            href="/schools" 
                            className="flex items-center justify-between p-2 text-xs font-medium text-ges-blue-600 hover:text-ges-navy-950"
                          >
                            <span>Explore all institutions & galleries</span>
                            <ArrowRight className="w-3 h-3" />
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
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive 
                        ? 'text-ges-blue-600 bg-blue-50/80 font-semibold' 
                        : 'text-slate-700 hover:text-ges-navy-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
              >
                Inquire
              </Link>
              <Link
                href="/contact?type=meeting"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-ges-navy-950 hover:bg-ges-navy-800 shadow-sm transition"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex xl:hidden items-center gap-2">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-medium rounded-md bg-ges-navy-950 text-white md:hidden"
              >
                Contact
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
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
          <div className="xl:hidden bg-white border-t border-slate-200 shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div key={link.label} className="border-b border-slate-100 pb-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className={`flex-1 px-3 py-2.5 text-base font-medium rounded-md ${
                            isActive ? 'text-ges-blue-600 bg-blue-50 font-semibold' : 'text-slate-800'
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setSchoolsDropdownOpen(!schoolsDropdownOpen)}
                          className="p-2 text-slate-500"
                          aria-label="Toggle schools submenu"
                        >
                          <ChevronDown className={`w-4 h-4 transition ${schoolsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      {schoolsDropdownOpen && (
                        <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-lg mt-1">
                          {link.items?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block py-1.5 text-xs font-medium text-slate-700 hover:text-ges-blue-600"
                            >
                              • {item.name}
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
                    className={`block px-3 py-2.5 text-base font-medium rounded-md transition ${
                      isActive ? 'text-ges-blue-600 bg-blue-50 font-semibold' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="text-xs text-slate-500 px-3">
                <p>Tel: {GES_DATA.contact.phone}</p>
                <p>Email: {GES_DATA.contact.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/contact"
                  className="w-full text-center py-2.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-800 bg-slate-50"
                >
                  General Inquiries
                </Link>
                <Link
                  href="/contact?type=meeting"
                  className="w-full text-center py-2.5 text-xs font-semibold rounded-lg bg-ges-navy-950 text-white shadow-sm"
                >
                  Request Meeting
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
