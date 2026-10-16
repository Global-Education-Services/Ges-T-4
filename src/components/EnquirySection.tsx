'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    campus: 'Global Education Services (Central Office)',
    preferredDate: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    setErrorMsg('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      // Store in localStorage for audit demonstration
      try {
        const existing = JSON.parse(localStorage.getItem('ges_inquiries') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('ges_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section className="py-24 bg-ges-sand-50 border-b border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative & Contact Info (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-ges-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>Executive Consultations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal leading-tight">
                Connect With GES Leadership
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether requesting an executive meeting, inquiring about school admissions, or exploring public-private partnerships, our central administrative team is here to assist.
              </p>
            </div>

            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-ges-crimson-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Headquarters Address</p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      {GES_DATA.contact.address}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {GES_DATA.contact.poBox}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-ges-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Telephone Helpline</p>
                    <a href={`tel:${GES_DATA.contact.phoneClean}`} className="text-ges-blue-600 hover:underline text-xs mt-0.5 block">
                      {GES_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-ges-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Official Electronic Mail</p>
                    <a href={`mailto:${GES_DATA.contact.email}`} className="text-ges-blue-600 hover:underline text-xs mt-0.5 block">
                      {GES_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-ges-navy-950">Office Working Hours</p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      {GES_DATA.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Assurance */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Inquiries are reviewed by the GES Central Directorate within one working business day.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form (Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ges-navy-950">
                  Submission Successfully Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-ges-navy-950">{formData.name}</strong>. Your inquiry regarding <strong className="text-ges-navy-950">{formData.subject}</strong> has been recorded and routed to the GES Administration team.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiries',
                        campus: 'Global Education Services (Central Office)',
                        preferredDate: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-ges-navy-950 text-white text-xs font-semibold hover:bg-ges-navy-800 transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ges-navy-950 mb-1">
                    Send an Inquiry or Schedule a Meeting
                  </h3>
                  <p className="text-slate-500 text-xs">
                    Please provide your contact information and details regarding your request.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Salim Al Hashmi"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 focus:ring-1 focus:ring-ges-blue-600 bg-slate-50/50"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 focus:ring-1 focus:ring-ges-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Contact Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+968 9000 0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 focus:ring-1 focus:ring-ges-blue-600 bg-slate-50/50"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Subject / Intent *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 focus:ring-1 focus:ring-ges-blue-600 bg-slate-50/50"
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

                {/* Preferred Date if meeting */}
                {formData.subject === 'Executive Meeting Request' && (
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Preferred Meeting Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 focus:ring-1 focus:ring-ges-blue-600 bg-slate-50/50"
                    />
                  </div>
                )}

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Detailed Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify details of your inquiry or consultation agenda..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 focus:ring-1 focus:ring-ges-blue-600 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-ges-navy-950 hover:bg-ges-navy-800 text-white text-sm font-semibold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{status === 'submitting' ? 'Submitting...' : 'Submit Official Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
