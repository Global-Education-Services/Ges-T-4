'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialType === 'meeting' ? 'Executive Meeting Request' : 'General Inquiries',
    preferredDate: '',
    timePreference: 'Morning (8:00 AM - 11:30 AM)',
    institution: 'GES Central Administration',
    message: ''
  });

  useEffect(() => {
    if (initialType === 'meeting') {
      setForm((prev) => ({ ...prev, subject: 'Executive Meeting Request' }));
    } else if (initialType === 'admissions') {
      setForm((prev) => ({ ...prev, subject: 'School Admissions Inquiry' }));
    } else if (initialType === 'partnership') {
      setForm((prev) => ({ ...prev, subject: 'Public-Private Partnership (PPP)' }));
    }
  }, [initialType]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }
    setErrorMsg('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      try {
        const existing = JSON.parse(localStorage.getItem('ges_contact_submissions') || '[]');
        existing.push({ ...form, timestamp: new Date().toISOString() });
        localStorage.setItem('ges_contact_submissions', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-ges-navy-950">
            Inquiry Dispatched Successfully!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-ges-navy-950">{form.name}</strong>. Your communication regarding <strong className="text-ges-navy-950">{form.subject}</strong> has been transmitted to the GES secretariat. A representative will respond within 24 hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 rounded-xl bg-ges-navy-950 text-white text-xs font-semibold hover:bg-ges-navy-800 transition"
            >
              Submit Another Communication
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Interactive Inquiry Dispatcher
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold mt-1">
              Send an Official Message
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              All communications are routed directly to the appropriate executive department.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Salim Al Hashmi"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Official Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="name@organization.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Contact Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+968 2455 4422"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Subject / Category *</label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
              >
                <option value="Executive Meeting Request">Executive Meeting Request</option>
                <option value="School Admissions Inquiry">School Admissions Inquiry</option>
                <option value="Public-Private Partnership (PPP)">Public-Private Partnership (PPP)</option>
                <option value="School Management & Licensing">School Management & Licensing</option>
                <option value="Careers & Employment">Careers & Employment</option>
                <option value="General Inquiries">General Inquiries</option>
              </select>
            </div>
          </div>

          {/* Additional Meeting Fields if selected */}
          {form.subject === 'Executive Meeting Request' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-ges-sand-50 rounded-2xl border border-slate-200">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Time Window</label>
                <select
                  value={form.timePreference}
                  onChange={(e) => setForm({ ...form, timePreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-white"
                >
                  <option value="Morning (8:00 AM - 11:30 AM)">Morning (8:00 AM - 11:30 AM)</option>
                  <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                </select>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Detailed Message / Agenda *</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Enter the details of your inquiry or proposed consultation agenda..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-ges-navy-950 hover:bg-ges-navy-800 text-white text-sm font-semibold transition flex items-center justify-center gap-2 shadow-sm"
          >
            <span>{status === 'submitting' ? 'Transmitting...' : 'Dispatch Inquiry'}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
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
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Institutional Channel</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Contact GES Quality Education
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Connect with our central executive offices in Muscat, Sultanate of Oman. Schedule an in-person meeting or submit an official academic inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Contact Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Directory (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
                Headquarters Directory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
                Global Education Services Company
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Central headquarters administering Al Shomoukh International Private School and Shomoukh Early Childhood Education Centers across Muscat.
              </p>
            </div>

            {/* Structured Contact Block */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-ges-crimson-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Campus Location</p>
                    <p className="text-slate-600 text-xs mt-0.5">{GES_DATA.contact.address}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{GES_DATA.contact.poBox}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-ges-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Central Phone</p>
                    <a href={`tel:${GES_DATA.contact.phoneClean}`} className="text-ges-blue-600 hover:underline text-xs mt-0.5 block">
                      {GES_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-ges-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Direct Email</p>
                    <a href={`mailto:${GES_DATA.contact.email}`} className="text-ges-blue-600 hover:underline text-xs mt-0.5 block">
                      {GES_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Operating Hours</p>
                    <p className="text-slate-600 text-xs mt-0.5">{GES_DATA.contact.workingHours}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* School Campus Direct Portals */}
            <div className="p-6 rounded-3xl bg-ges-sand-100 border border-slate-200 space-y-4">
              <p className="text-xs font-bold text-ges-navy-950 uppercase tracking-wider">
                Direct School Portals
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-semibold text-slate-800">Al Shomoukh International (SIPS)</span>
                  <a href="http://alshomoukh.com/" target="_blank" rel="noreferrer" className="text-ges-blue-600 font-medium hover:underline">
                    alshomoukh.com
                  </a>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-semibold text-slate-800">Shomoukh ECE (Qurum & Al Mouj)</span>
                  <a href="https://www.shomoukh.com/" target="_blank" rel="noreferrer" className="text-ges-blue-600 font-medium hover:underline">
                    shomoukh.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Suspense wrapped form (Col 7) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center bg-white rounded-3xl">Loading contact dispatcher...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
}
