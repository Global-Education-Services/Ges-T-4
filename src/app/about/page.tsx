import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Users, 
  Calendar, 
  GraduationCap, 
  ArrowRight, 
  Download,
  Building,
  Target,
  Compass
} from 'lucide-react';
import { GES_DATA } from '@/data/gesData';
import { ChairmanSection } from '@/components/ChairmanSection';
import { VisionMissionValues } from '@/components/VisionMissionValues';
import { InstitutionShowcase } from '@/components/InstitutionShowcase';

export const metadata = {
  title: 'About GES Quality Education | Leadership, Vision & Campuses',
  description: 'Established in 2012 by the Al Hashmi family, GES Quality Education is Oman’s premier private education group, committed to academic excellence, innovation, and Oman Vision 2040.',
};

export default function AboutPage() {
  const leadership = GES_DATA.leadership;
  const historyMilestones = [
    {
      year: '2012',
      title: 'Founding of Global Education Services',
      description: 'The Al Hashmi family established GES in the Sultanate of Oman, envisioning transformative, internationally benchmarked educational opportunities for the nation.'
    },
    {
      year: '2015',
      title: 'Inauguration of Al Shomoukh International Private School (SIPS)',
      description: 'Opening of the flagship K-12 British Curriculum campus in Hay Al Hail South, welcoming students from over 30 nationalities.'
    },
    {
      year: '2018',
      title: 'Early Childhood Education Expansion (Al Qurum)',
      description: 'Establishment of the purpose-built Shomoukh Early Childhood Education Center in Shatti Al Qurum inspired by the Reggio Emilia Approach.'
    },
    {
      year: '2021',
      title: 'Cognia® Global Accreditation',
      description: 'GES institutions received full accreditation from Cognia (USA), affirming rigorous continuous improvement and academic distinction.'
    },
    {
      year: '2022',
      title: 'MENA Early Years Benchmark (Al Mouj Campus)',
      description: 'Launch of Shomoukh ECE Al Mouj Campus, recognized with sustainable initiative honors and regional accolades.'
    },
    {
      year: '2025',
      title: 'Celebrating 13 Years of Educational Leadership',
      description: 'Managing 4 institutions, 5,000+ learners, and 700+ educators while expanding PPP and licensing models aligned with Oman Vision 2040.'
    }
  ];

  return (
    <div className="bg-ges-sand-50">
      
      {/* Section A: Editorial Hero */}
      <section className="relative bg-ges-navy-950 text-white py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-ges-gold-400 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>About Global Education Services</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              A Definitive Statement of Excellence in Quality Education
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Founded in 2012 by the Al Hashmi family, GES Quality Education is Oman’s premier private education group, dedicated to nurturing young minds with knowledge, skills, and values to thrive globally.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="/assets/downloads/GES Corporate Broucher.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ges-blue-600 hover:bg-ges-blue-500 text-white text-xs font-semibold transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Corporate Brochure (PDF)</span>
              </a>
              <a
                href="/assets/downloads/awards.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/15"
              >
                <Award className="w-4 h-4 text-ges-gold-400" />
                <span>Awards & Accreditations (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section A Body: Full Corporate History & Narrative */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-slate-600 text-base leading-relaxed">
              <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
                Our Heritage, Purpose & Oman Vision 2040
              </h2>
              {GES_DATA.about.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <Image
                  src="/assets/img/project-1.jpg"
                  alt="GES Campus Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              {/* Campus Doors Callout (Section E) */}
              <div className="mt-6 p-6 rounded-2xl bg-ges-sand-100 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-ges-navy-950 uppercase tracking-wider">
                  <Building className="w-4 h-4 text-ges-blue-600" />
                  <span>{GES_DATA.about.campusDoors}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {GES_DATA.about.campusDoorsSub}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section B: History & Journey Timeline */}
      <section className="py-20 bg-ges-sand-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl text-center mx-auto space-y-3">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              13 Years of Milestones (2012–2025)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ges-navy-950 font-normal">
              Our Journey of Educational Transformation
            </h2>
            <p className="text-slate-600 text-sm">
              Strategic expansion, international accreditations, and community partnerships shaping the landscape of learning in Oman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historyMilestones.map((m) => (
              <div 
                key={m.year}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition space-y-3 relative group"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ges-navy-950 text-white font-serif text-sm font-bold">
                  <span>{m.year}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-ges-navy-950">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Chairman's Address Verbatim */}
      <ChairmanSection />

      {/* Section C: Management Team Profiles */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-ges-blue-600 uppercase tracking-widest">
              Executive Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ges-navy-950 font-normal">
              Leadership & Executive Board
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Distinguished educational leaders, governance specialists, and academic directors guiding the strategic trajectory of GES Quality Education.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-ges-sand-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ges-navy-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ges-navy-950 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-ges-blue-600 font-semibold uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed font-light">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section D & E: Vision, Mission, Values & Campuses */}
      <VisionMissionValues />
      <InstitutionShowcase />

    </div>
  );
}
