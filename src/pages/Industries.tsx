import { Link } from 'react-router-dom';
import { useState } from 'react';

const industries = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    desc: 'A sector where technology reliability, process precision and regulatory compliance are non-negotiable. SG Global Alliance supports upstream, midstream and downstream operations through IT infrastructure, cybersecurity, logistics and operational optimization.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Oil refinery and industrial infrastructure',
    capabilities: ['SG Technology — IT & OT Integration', 'SG Logistics — Supply Chain Optimization', 'SG Construction — Industrial Facilities'],
  },
  {
    id: 'government',
    name: 'Government',
    desc: 'Public sector organizations seeking to digitize services, improve citizen experience and build institutional capability. We support government agencies with technology modernization, infrastructure development, training and process improvement.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Government and institutional building',
    capabilities: ['SG Technology — e-Government Systems', 'SG E-Learning — Public Sector Training', 'SG Construction — Public Infrastructure'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    desc: 'From hospital management systems to clinical logistics and workforce training, we help healthcare providers operate with greater efficiency, safety and quality.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Healthcare facility and medical environment',
    capabilities: ['SG Technology — Health IT Systems', 'SG Logistics — Medical Supply Chain', 'SG E-Learning — Clinical Training'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    desc: 'Manufacturing operations require efficient supply chains, reliable technology, skilled workforces and modern facilities. The SG Group brings multi-disciplinary expertise to manufacturing challenges across Nigeria and the region.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Manufacturing plant and production floor',
    capabilities: ['SG Technology — MES & Automation', 'SG Logistics — Production Supply Chain', 'SG Agriculture — Agri-Processing'],
  },
  {
    id: 'smes',
    name: 'SMEs',
    desc: 'Small and medium enterprises that need enterprise-grade capability without enterprise-scale budgets. We design right-sized solutions that help SMEs compete, grow and build resilience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Small business and entrepreneurship',
    capabilities: ['SG Technology — IT Essentials', 'SG E-Commerce — Digital Commerce', 'SG E-Learning — Business Skills'],
  },
  {
    id: 'education',
    name: 'Education',
    desc: 'Educational institutions navigating technology adoption, infrastructure development and the shift to digital learning. We support institutions with platforms, connectivity, training and campus infrastructure.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Educational institution and campus',
    capabilities: ['SG E-Learning — Digital Learning Platforms', 'SG Technology — EdTech Infrastructure', 'SG Construction — Campus Development'],
  },
  {
    id: 'telecoms',
    name: 'Telecommunications',
    desc: 'Telecom operators and tower companies requiring IT systems, infrastructure, cybersecurity and operational efficiency solutions in a competitive, technology-intensive market.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Telecommunications technology and network infrastructure',
    capabilities: ['SG Technology — Network & IT', 'SG Construction — Infrastructure Rollout', 'SG Logistics — Equipment Logistics'],
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    desc: 'Banks, fintechs, insurance companies and capital markets firms facing digital transformation, cybersecurity and regulatory demands. We deliver technology, security and capability solutions for a regulated, high-stakes environment.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Financial services and banking technology',
    capabilities: ['SG Technology — Fintech & Security', 'SG E-Learning — Compliance Training', 'SG E-Commerce — Digital Payments'],
  },
  {
    id: 'industry-commerce',
    name: 'Industry & Commerce',
    desc: 'Importers, distributors, wholesalers and industrial businesses seeking to optimize operations, logistics and digital channels.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Commercial and industrial operations',
    capabilities: ['SG Logistics — Distribution Optimization', 'SG E-Commerce — B2B Commerce', 'SG Technology — ERP & Systems'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    desc: 'Real estate developers, property managers and investors who require construction expertise, technology platforms and digital marketing capability.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=400&fit=crop&auto=format',
    imageAlt: 'Real estate development and property',
    capabilities: ['SG Construction — Development Delivery', 'SG Technology — PropTech Platforms', 'SG E-Commerce — Digital Marketing'],
  },
];

export default function Industries() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#003B73] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4">Industries</div>
          <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Sectors We Serve.
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg leading-relaxed">
            The SG Group brings relevant experience and specialist capability across ten key sectors of the Nigerian and African economy.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section className="bg-[#F7F9FC] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(active === ind.id ? null : ind.id)}
                className={`text-left rounded border p-5 transition-all card-hover ${
                  active === ind.id
                    ? 'bg-[#003B73] border-[#003B73] text-white'
                    : 'bg-white border-[#DDE4EE] text-[#003B73]'
                }`}
              >
                <h3 className={`font-display font-bold text-sm mb-1 ${active === ind.id ? 'text-white' : 'text-[#003B73]'}`}>
                  {ind.name}
                </h3>
                <p className={`text-xs leading-relaxed line-clamp-2 ${active === ind.id ? 'text-white/60' : 'text-[#29323A]/50'}`}>
                  {ind.desc.slice(0, 80)}…
                </p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {active && (() => {
            const ind = industries.find((i) => i.id === active)!;
            return (
              <div className="bg-white border border-[#DDE4EE] rounded overflow-hidden animate-fade-up">
                <div className="relative h-48 overflow-hidden bg-[#003B73]">
                  <img src={ind.image} alt={ind.imageAlt} className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003B73]/80 to-transparent" />
                  <div className="absolute bottom-5 left-7">
                    <h2 className="font-display font-bold text-white text-2xl">{ind.name}</h2>
                  </div>
                </div>
                <div className="p-7 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="section-label mb-3">Sector Context</h3>
                    <p className="text-[#29323A]/70 text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                  <div>
                    <h3 className="section-label mb-3">SG Group Capabilities for this Sector</h3>
                    <div className="space-y-2.5">
                      {ind.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C69A32] flex-shrink-0 mt-1.5" />
                          <span className="text-sm text-[#29323A]/70">{cap}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#0057A8] hover:text-[#003B73] transition-colors"
                    >
                      Discuss your sector challenge
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003B73] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white text-2xl mb-3">Your industry, your challenge.</h2>
          <p className="text-white/55 text-sm mb-6">Tell us where you operate and what you are trying to solve.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
