import { Link } from 'react-router-dom';
import { useState } from 'react';

const businesses = [
  {
    id: 'technology',
    name: 'SG Technology',
    tagline: 'Digital Transformation & IT Excellence',
    color: '#0057A8',
    bg: '#EEF4FB',
    desc: 'SG Technology provides integrated technology solutions that help organizations modernize their infrastructure, harness data, protect their systems and drive digital transformation across their operations.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&auto=format',
    imageAlt: 'Technology infrastructure and circuits',
    capabilities: ['Software Development', 'IT Infrastructure', 'Cybersecurity', 'Cloud Solutions', 'Networking', 'Systems Integration', 'Managed IT', 'Data & AI', 'Workflow Automation'],
    industries: ['Financial Services', 'Government', 'Telecommunications', 'Healthcare', 'Manufacturing'],
    tech: ['Cloud Platforms', 'AI/ML', 'Zero-Trust Security', 'DevOps', 'Enterprise Integration'],
  },
  {
    id: 'construction',
    name: 'SG Construction',
    tagline: 'Infrastructure & Project Delivery',
    color: '#E8882A',
    bg: '#FDF4EE',
    desc: 'SG Construction delivers high-quality residential, commercial, industrial and infrastructure projects with technology-enabled project management, safety standards and sustainable practices.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format',
    imageAlt: 'Construction site with crane and structure',
    capabilities: ['Residential Construction', 'Commercial Build', 'Industrial Facilities', 'Infrastructure', 'Project Management', 'Technology-Enabled Oversight', 'Sustainability & Safety'],
    industries: ['Real Estate', 'Government', 'Oil & Gas', 'Industry & Commerce', 'Healthcare'],
    tech: ['BIM / Digital Twin', 'Project Management Platforms', 'IoT Site Monitoring', 'Drone Surveying'],
  },
  {
    id: 'logistics',
    name: 'SG Logistics',
    tagline: 'Supply Chain & Logistics Intelligence',
    color: '#2A9D8F',
    bg: '#EEF8F7',
    desc: 'SG Logistics applies intelligence, automation and operational discipline to supply chain challenges—from route optimization to inventory management and demand forecasting.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    imageAlt: 'Logistics warehouse and supply chain operations',
    capabilities: ['Route Optimization', 'Inventory Intelligence', 'Demand Forecasting', 'Fulfillment', 'Predictive Maintenance', 'Supply Chain Analytics', 'Automation'],
    industries: ['Manufacturing', 'Retail', 'Agriculture', 'Oil & Gas', 'Healthcare'],
    tech: ['Supply Chain Platforms', 'IoT Tracking', 'AI Forecasting', 'Fleet Management', 'Warehouse Automation'],
  },
  {
    id: 'ecommerce',
    name: 'SG E-Commerce',
    tagline: 'Digital Commerce Growth',
    color: '#7B2FBE',
    bg: '#F5EEF8',
    desc: 'SG E-Commerce helps businesses build, optimize and scale their digital commerce operations—from strategy and storefront design to fulfillment, marketing and growth planning.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format',
    imageAlt: 'Digital commerce and online retail concept',
    capabilities: ['E-Commerce Strategy', 'Digital Marketing', 'Conversion Optimization', 'Operations', 'Fulfillment Integration', 'Analytics', 'Growth Planning'],
    industries: ['Retail', 'SMEs', 'Manufacturing', 'Agriculture', 'Education'],
    tech: ['Commerce Platforms', 'Marketing Automation', 'Analytics & BI', 'Payment Integration', 'CRM'],
  },
  {
    id: 'elearning',
    name: 'SG E-Learning',
    tagline: 'Skills & Digital Learning',
    color: '#C69A32',
    bg: '#FDF8EE',
    desc: 'SG E-Learning designs and delivers workforce development solutions—from self-paced digital courses to live instruction, corporate learning programmes and certification preparation.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format',
    imageAlt: 'Learning and development in a modern environment',
    capabilities: ['Self-Paced Learning', 'Live Instruction', 'Corporate Learning', 'Certification Prep', 'Technology Skills', 'Digital Learning Platforms', 'Learning Analytics'],
    industries: ['Financial Services', 'Healthcare', 'Government', 'Telecommunications', 'Education'],
    tech: ['LMS Platforms', 'Video Learning', 'Virtual Classroom', 'Assessment Tools', 'Analytics'],
  },
  {
    id: 'agriculture',
    name: 'SG Agriculture',
    tagline: 'Agri-business & Digital Agriculture',
    color: '#3A7D44',
    bg: '#EEF5EF',
    desc: 'SG Agriculture applies digital technologies and supply chain expertise to agri-business challenges—from precision farming and produce handling to market intelligence and sustainable practices.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop&auto=format',
    imageAlt: 'Agricultural fields and modern farming',
    capabilities: ['E-Agriculture', 'Precision Farming', 'Manufacturing Optimization', 'Produce Packaging', 'Supply Chain Optimization', 'Market Intelligence', 'Sustainable Agriculture'],
    industries: ['Agriculture', 'Manufacturing', 'Government', 'SMEs', 'Industry & Commerce'],
    tech: ['Agri-IoT', 'Precision Tools', 'Supply Chain Platforms', 'Market Data Systems', 'Cold Chain Technology'],
  },
];

export default function Businesses() {
  const [active, setActive] = useState<string | null>(null);
  const selected = businesses.find((b) => b.id === active) || null;

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#003B73] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4">Our Businesses</div>
          <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Six Specialist Arms.<br />One Coordinated Group.
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg leading-relaxed">
            Each subsidiary brings deep domain expertise. Together, they cover the full spectrum of what modern organizations need to perform and grow.
          </p>
        </div>
      </section>

      {/* Business grid nav */}
      <section className="bg-[#F7F9FC] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {businesses.map((biz) => (
              <button
                key={biz.id}
                onClick={() => setActive(active === biz.id ? null : biz.id)}
                className={`text-left bg-white border rounded p-6 transition-all card-hover ${
                  active === biz.id
                    ? 'border-[#0057A8] shadow-md'
                    : 'border-[#DDE4EE]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: biz.color }}
                  />
                  <h3 className="font-display font-bold text-[#003B73] text-base">{biz.name}</h3>
                </div>
                <p className="text-[#29323A]/60 text-xs">{biz.tagline}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: biz.color }}>
                  {active === biz.id ? 'Close' : 'View details'}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: active === biz.id ? 'rotate(90deg)' : undefined, transition: 'transform 0.2s' }}>
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Expanded business detail */}
          {selected && (
            <div className="bg-white border border-[#DDE4EE] rounded overflow-hidden animate-fade-up">
              <div className="relative h-56 bg-[#003B73] overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.imageAlt}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003B73]/80 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <div className="section-label mb-1">{selected.name}</div>
                  <h2 className="font-display font-bold text-white text-2xl">{selected.tagline}</h2>
                </div>
              </div>
              <div className="p-8 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <p className="text-[#29323A]/70 text-sm leading-relaxed">{selected.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm font-semibold text-white rounded transition-colors"
                    style={{ backgroundColor: selected.color }}
                  >
                    Start a Conversation
                  </Link>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#003B73] text-sm mb-3">Capabilities</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.capabilities.map((c) => (
                      <span key={c} className="text-[10px] font-medium px-2.5 py-1 rounded border border-[#DDE4EE] text-[#29323A]/70">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-display font-bold text-[#003B73] text-sm mt-5 mb-3">Industries Served</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.industries.map((ind) => (
                      <span key={ind} className="text-[10px] font-medium px-2.5 py-1 rounded text-white" style={{ backgroundColor: selected.color }}>
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#003B73] text-sm mb-3">Related Technology</h4>
                  <div className="space-y-2">
                    {selected.tech.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-[#29323A]/70">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selected.color }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0057A8] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white text-2xl mb-3">
            Not sure which business arm fits your need?
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Tell us your challenge. We'll identify the right expertise across the group.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
