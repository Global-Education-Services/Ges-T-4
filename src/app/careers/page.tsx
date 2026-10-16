'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Briefcase, 
  CheckCircle2, 
  Send, 
  FileText, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import { GES_DATA, CareerStep } from '@/data/gesData';

export default function CareersPage() {
  const { intro, steps } = GES_DATA.careers;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    roleCategory: 'Teaching & Academics',
    specialization: '',
    yearsExperience: '3-5 years',
    highestDegree: 'Bachelor Degree',
    coverLetter: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.specialization.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Specialization/Subject).');
      return;
    }
    setErrorMsg('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      try {
        const existing = JSON.parse(localStorage.getItem('ges_job_applications') || '[]');
        existing.push({ ...form, submittedAt: new Date().toISOString() });
        localStorage.setItem('ges_job_applications', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="bg-ges-sand-50">
      
      {/* Section A: Careers Hero */}
      <section className="relative bg-ges-navy-950 text-white py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Talent Acquisition & Faculty</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Careers at GES Quality Education Network
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Build your educational or administrative career with Oman’s premier private education group. We recruit top educational talent globally and provide structured continuous professional development.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white text-xs font-semibold transition shadow-md"
              >
                <span>Submit Candidate Application</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/15"
              >
                <span>Review 6-Step Selection Process</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Section B: Why Work With GES */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section B: Professional Environment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
              Why Build Your Career With GES
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-ges-sand-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-ges-blue-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ges-navy-950">Continuous Professional Development</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Regular international pedagogy workshops, leadership development, and curriculum training in British & Reggio Emilia frameworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ges-sand-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ges-navy-950">Structured Mentoring & Growth</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Transparent appraisal systems designed for meritocratic promotions and career advancement across network campuses.
              </p>
            </div>
          </div>
        </section>

        {/* Section C: 6-Step Application Process */}
        <section id="process" className="scroll-mt-28 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Section C: Structured Candidate Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
              The 6-Step Application & Selection Process
            </h2>
            <p className="text-slate-600 text-sm">
              Our transparent recruitment lifecycle ensures fair assessment, pedagogical alignment, and cultural fit for every educator and specialist.
            </p>
          </div>

          {/* Stepper Grid (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-ges-blue-400 hover:shadow-md transition flex flex-col justify-between space-y-4 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-ges-navy-950 text-white font-serif text-sm font-bold flex items-center justify-center">
                      {st.step}
                    </span>
                    <div className="relative w-7 h-7">
                      <Image
                        src={st.icon}
                        alt={`Step ${st.step}`}
                        fill
                        sizes="28px"
                        className="object-contain opacity-80"
                      />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-ges-navy-950 mb-1">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section D: Functional Candidate Application Form */}
        <section id="application-form" className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-ges-navy-950">
                Application Submitted Successfully!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-ges-navy-950">{form.name}</strong>. Your candidate dossier for <strong className="text-ges-navy-950">{form.specialization} ({form.roleCategory})</strong> has been received by the GES Talent Acquisition Directorate.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-ges-navy-950 text-white text-xs font-semibold hover:bg-ges-navy-800 transition"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">Section D: Formal Application</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ges-navy-950 font-semibold mt-1">
                  Candidate Dossier Submission
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Please complete the following details. Validated applications are reviewed by our HR and Academic team.
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
                  <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Candidate full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@email.com"
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
                    placeholder="+968 9000 0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Category of Interest *</label>
                  <select
                    value={form.roleCategory}
                    onChange={(e) => setForm({ ...form, roleCategory: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                  >
                    <option value="Teaching & Academics">Teaching & Academics (K-12)</option>
                    <option value="Early Childhood Education">Early Childhood & Reggio Emilia (Ages 1-4)</option>
                    <option value="Academic Leadership">Academic Leadership & Head of Department</option>
                    <option value="School Administration">School Administration & Admissions</option>
                    <option value="Finance & Operations">Finance, HR & Operational Governance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Subject / Specialization *</label>
                  <input
                    type="text"
                    required
                    value={form.specialization}
                    onChange={(e) => setForm({ ...form, specialization: e.target.value })}
                    placeholder="e.g. British English, Mathematics, STEM"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Years of Experience</label>
                  <select
                    value={form.yearsExperience}
                    onChange={(e) => setForm({ ...form, yearsExperience: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                  >
                    <option value="1-2 years">1 - 2 years</option>
                    <option value="3-5 years">3 - 5 years</option>
                    <option value="6-10 years">6 - 10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Highest Qualification</label>
                  <select
                    value={form.highestDegree}
                    onChange={(e) => setForm({ ...form, highestDegree: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                  >
                    <option value="Bachelor Degree">Bachelor Degree & PGCE</option>
                    <option value="Master Degree">Master Degree / M.Ed</option>
                    <option value="Doctorate">Doctorate / Ph.D</option>
                    <option value="Diploma">Early Childhood Education Diploma</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Statement of Purpose / Experience Summary</label>
                <textarea
                  rows={4}
                  value={form.coverLetter}
                  onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                  placeholder="Outline your pedagogical philosophy, experience with British or Reggio Emilia curriculum, and reasons for applying to GES Quality Education..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-ges-blue-600 bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-ges-navy-950 hover:bg-ges-navy-800 text-white text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <span>{status === 'submitting' ? 'Submitting Application...' : 'Submit Application Form'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
