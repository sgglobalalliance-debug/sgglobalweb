import { Link } from 'react-router-dom';
import { useState } from 'react';

const solutions = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    problem: 'Organizations struggling to modernize legacy processes, technology and business models in a fast-changing environment.',
    approach: 'We assess your current state, define a phased transformation roadmap, and deliver technology, process and capability changes that are practical and sustainable.',
    capabilities: ['Technology Assessment', 'Digital Strategy', 'Process Re-engineering', 'Change Management', 'Technology Deployment'],
    outcome: 'Organizations that emerge with modern, scalable systems, digitally-enabled teams and a clear path to continuous improvement.',
    arm: 'SG Technology',
  },
  {
    id: 'technology-it',
    title: 'Technology & IT',
    problem: 'Unreliable infrastructure, fragmented systems and limited technical capacity creating risk and operational drag.',
    approach: 'We design, build and manage IT environments—from cloud migrations and network infrastructure to managed services and cybersecurity—so your technology supports rather than limits the business.',
    capabilities: ['Infrastructure Design', 'Cloud Migration', 'Managed IT Services', 'Network & Connectivity', 'IT Support'],
    outcome: 'Stable, secure and scalable IT environments that reduce operational risk and enable organizational productivity.',
    arm: 'SG Technology',
  },
  {
    id: 'business-process',
    title: 'Business Process Optimization',
    problem: 'Inefficient workflows, manual processes and organizational silos reducing productivity and competitiveness.',
    approach: 'We map, analyse and redesign core business processes, then implement automation and technology tools to reduce friction and improve performance.',
    capabilities: ['Process Mapping & Analysis', 'Workflow Automation', 'BPM Implementation', 'Performance Measurement', 'Continuous Improvement'],
    outcome: 'Faster, leaner operations with measurable improvements in throughput, quality and cost-efficiency.',
    arm: 'SG Technology',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Resilience',
    problem: 'Increasing exposure to cyber threats, regulatory compliance requirements and a shortage of in-house security capability.',
    approach: 'We assess your risk posture, design layered security architectures, implement controls and provide ongoing monitoring and response capability.',
    capabilities: ['Risk Assessment', 'Security Architecture', 'Compliance Frameworks', 'Incident Response', 'Security Monitoring'],
    outcome: 'Measurably reduced cyber risk, regulatory confidence and the organizational resilience to withstand and recover from security events.',
    arm: 'SG Technology',
  },
  {
    id: 'construction',
    title: 'Construction & Project Delivery',
    problem: 'Complex construction and infrastructure projects that require rigorous management, professional oversight and technology-enabled coordination.',
    approach: 'SG Construction manages projects from design through delivery—integrating project management disciplines, site technology and quality controls across every phase.',
    capabilities: ['Project Management', 'Site Coordination', 'Quality Assurance', 'Technology-Enabled Oversight', 'Compliance Management'],
    outcome: 'Projects delivered to specification, on schedule and with the documentation and quality records that clients and regulators expect.',
    arm: 'SG Construction',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics',
    problem: 'Supply chains that are fragile, expensive or opaque—creating cost pressure, inventory problems and customer service challenges.',
    approach: 'We analyse supply chain performance, identify the key failure points and implement intelligence-driven improvements across procurement, inventory, distribution and last-mile delivery.',
    capabilities: ['Supply Chain Diagnostic', 'Network Optimization', 'Inventory Management', 'Demand Planning', 'Fulfillment Solutions'],
    outcome: 'Lower supply chain costs, reduced inventory risk, improved service levels and greater end-to-end visibility.',
    arm: 'SG Logistics',
  },
  {
    id: 'digital-commerce',
    title: 'Digital Commerce',
    problem: 'Businesses that lack a credible digital commerce presence or that have underperforming online channels.',
    approach: 'We develop and execute digital commerce strategies covering platform, marketing, operations and growth—tailored to the Nigerian and broader African market context.',
    capabilities: ['Commerce Strategy', 'Platform Implementation', 'Digital Marketing', 'Conversion Optimization', 'Analytics & Reporting'],
    outcome: 'A functioning, growing digital commerce operation that generates real commercial returns.',
    arm: 'SG E-Commerce',
  },
  {
    id: 'learning',
    title: 'Learning & Workforce Development',
    problem: 'Skill gaps, high staff turnover and the challenge of building capability in a fast-changing technology environment.',
    approach: 'We design and deliver workforce development programmes—combining instructional design, digital platforms and domain expertise—to build the skills organizations actually need.',
    capabilities: ['Training Needs Analysis', 'Curriculum Design', 'Digital Learning Platforms', 'Facilitated Training', 'Assessment & Certification'],
    outcome: 'Capable, confident teams with the skills to perform and adapt as technology and business demands evolve.',
    arm: 'SG E-Learning',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Industrial Solutions',
    problem: 'Agri-businesses and industrial operations seeking to modernize, improve yield, reduce waste and access markets more effectively.',
    approach: 'SG Agriculture applies digital tools, supply chain expertise and market intelligence to agri-business challenges at every point in the value chain.',
    capabilities: ['Digital Agriculture Strategy', 'Precision Farming Tools', 'Supply Chain Design', 'Market Access', 'Produce Processing & Packaging'],
    outcome: 'Improved productivity, reduced post-harvest losses, better market positioning and a more sustainable agri-business operation.',
    arm: 'SG Agriculture',
  },
  {
    id: 'data-ai',
    title: 'Data, AI & Automation',
    problem: 'Organizations sitting on large volumes of data but unable to extract insight, or performing manual tasks that could be automated.',
    approach: 'We help organizations build the data infrastructure, analytics capability and AI-powered tools they need to make better decisions and operate more efficiently.',
    capabilities: ['Data Strategy & Architecture', 'Analytics Platforms', 'AI/ML Implementation', 'Process Automation', 'Reporting & Dashboards'],
    outcome: 'Organizations that make decisions from real data, automate repetitive work and continuously improve performance through analytics.',
    arm: 'SG Technology',
  },
];

export default function Solutions() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#003B73] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4">What We Deliver</div>
          <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Solutions Built<br />Around Your Needs.
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg leading-relaxed">
            We organize our capabilities around client challenges, not internal departments. Find the solution that matches what you are trying to achieve.
          </p>
        </div>
      </section>

      {/* Solutions list */}
      <section className="bg-[#F7F9FC] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3">
            {solutions.map((sol, i) => (
              <div key={sol.id} className="bg-white border border-[#DDE4EE] rounded overflow-hidden">
                <button
                  onClick={() => setOpen(open === sol.id ? null : sol.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F7F9FC] transition-colors"
                  aria-expanded={open === sol.id}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-display text-[#C69A32] text-xs font-bold w-8 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="font-display font-bold text-[#003B73] text-base">{sol.title}</h2>
                      <p className="text-[#29323A]/40 text-xs mt-0.5">via {sol.arm}</p>
                    </div>
                  </div>
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    className={`text-[#0057A8] flex-shrink-0 transition-transform duration-200 ${open === sol.id ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {open === sol.id && (
                  <div className="px-6 pb-6 border-t border-[#EEF2F7] pt-6 grid md:grid-cols-3 gap-6 animate-fade-up">
                    <div>
                      <h4 className="section-label mb-2">The Challenge</h4>
                      <p className="text-[#29323A]/70 text-sm leading-relaxed">{sol.problem}</p>
                    </div>
                    <div>
                      <h4 className="section-label mb-2">Our Approach</h4>
                      <p className="text-[#29323A]/70 text-sm leading-relaxed">{sol.approach}</p>
                    </div>
                    <div>
                      <h4 className="section-label mb-2">Capabilities</h4>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {sol.capabilities.map((c) => (
                          <span key={c} className="text-[10px] px-2.5 py-1 bg-[#EEF4FB] text-[#0057A8] font-medium rounded">
                            {c}
                          </span>
                        ))}
                      </div>
                      <h4 className="section-label mb-2">Expected Outcome</h4>
                      <p className="text-[#29323A]/70 text-xs leading-relaxed">{sol.outcome}</p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-[#0057A8] hover:text-[#003B73] transition-colors"
                      >
                        Discuss this solution
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#29323A] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white text-2xl mb-3">Don't see your exact challenge listed?</h2>
          <p className="text-white/55 text-sm mb-6">
            Most real challenges don't fit neatly into categories. Talk to us and we'll help you frame the right approach.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
