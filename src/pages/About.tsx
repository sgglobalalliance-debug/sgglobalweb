import { Link } from 'react-router-dom';

const values = [
  { title: 'Integrity', desc: 'We do what we say. Our commitments are firm and our conduct is transparent in every engagement.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest professional standards—in our work, our communication and our outputs.' },
  { title: 'Partnership', desc: 'We build relationships of genuine trust. Client success is how we measure our own performance.' },
  { title: 'Innovation', desc: 'We bring curiosity and creativity to every challenge, seeking smarter and more effective solutions.' },
  { title: 'Execution', desc: 'We deliver. Strategy without execution is theory. We stay engaged until results are realized.' },
  { title: 'Impact', desc: 'We are motivated by creating real, lasting improvement for the organizations and communities we serve.' },
];

const capabilities = [
  { arm: 'SG Technology', areas: ['Digital Transformation', 'IT Infrastructure', 'Cybersecurity', 'Cloud', 'Data & AI'] },
  { arm: 'SG Construction', areas: ['Infrastructure', 'Project Management', 'Commercial Build', 'Sustainability'] },
  { arm: 'SG Logistics', areas: ['Supply Chain', 'Route Optimization', 'Fulfillment', 'Analytics'] },
  { arm: 'SG E-Commerce', areas: ['Commerce Strategy', 'Digital Marketing', 'Operations', 'Growth'] },
  { arm: 'SG E-Learning', areas: ['Corporate Training', 'Digital Platforms', 'Certification', 'Skills'] },
  { arm: 'SG Agriculture', areas: ['Precision Farming', 'Agri-Supply Chain', 'Market Intelligence', 'Sustainability'] },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Page hero */}
      <section className="bg-[#003B73] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4">About the Group</div>
          <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Who We Are
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl leading-relaxed">
            A consulting and solutions group with deep specialist capabilities and a commitment to moving organizations forward.
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-4">Our Purpose</div>
            <h2 className="font-display font-bold text-[#003B73] text-3xl mb-6 gold-underline">Why We Exist</h2>
            <p className="text-[#29323A]/70 leading-relaxed mb-4">
              SG Global Alliance Limited was established to address the gap between strategy and execution that many Nigerian and African organizations face. We combine consulting rigour, technology capability and practical delivery experience to help clients navigate change and build sustainable performance.
            </p>
            <p className="text-[#29323A]/70 leading-relaxed">
              Our brand promise—<strong className="text-[#003B73]">INSPIRE NEXT</strong>—reflects our belief that every organization has an unrealized next level. Our role is to help them find and reach it.
            </p>
          </div>
          <div className="space-y-0">
            {[
              { title: 'Mission', text: 'To deliver integrated consulting, technology and operational solutions that create measurable value for clients, communities and stakeholders across Africa and beyond.' },
              { title: 'Vision', text: 'To be the most trusted and impactful consulting and solutions group serving African enterprises in their pursuit of world-class performance.' },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#C69A32] pl-6 py-4">
                <h3 className="font-display font-bold text-[#003B73] text-lg mb-2">{item.title}</h3>
                <p className="text-[#29323A]/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-label mb-3">What We Stand For</div>
            <h2 className="font-display font-bold text-[#003B73] text-3xl">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-[#F7F9FC] border border-[#DDE4EE] rounded p-6 card-hover">
                <div className="w-1 h-6 bg-[#C69A32] mb-4 rounded-full" />
                <h3 className="font-display font-bold text-[#003B73] text-base mb-2">{v.title}</h3>
                <p className="text-[#29323A]/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#003B73] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-label mb-3">Our Model</div>
            <h2 className="font-display font-bold text-white text-3xl">How We Work</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {[
                { n: '01', h: 'Integrated Group Structure', t: 'Six specialist subsidiaries operate under a shared leadership, values and quality framework. When your challenge spans disciplines, we coordinate a seamlessly integrated response.' },
                { n: '02', h: 'Domain Expertise', t: 'Each subsidiary is led and staffed by professionals with deep experience in their sector. You engage specialists, not generalists wearing multiple hats.' },
                { n: '03', h: 'Technology-Enabled Delivery', t: 'Every engagement is supported by the tools, data and digital capability that modern business demands—whether or not technology is the primary focus.' },
                { n: '04', h: 'Results Orientation', t: 'We measure success by client outcomes: reduced costs, improved performance, new capabilities built, and challenges resolved.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="font-display text-[#C69A32] font-bold text-xs mt-1 flex-shrink-0">{item.n}</span>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-1">{item.h}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.t}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded overflow-hidden bg-[#002B5A]" style={{ minHeight: 380 }}>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=650&h=500&fit=crop&auto=format"
                alt="Business team collaborating"
                className="w-full h-full object-cover opacity-50"
                style={{ minHeight: 380 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B5A]/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Capability model */}
      <section className="bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-label mb-3">Capability Map</div>
            <h2 className="font-display font-bold text-[#003B73] text-3xl">Group Capability Model</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.arm} className="bg-white border border-[#DDE4EE] rounded p-5 card-hover">
                <h3 className="font-display font-bold text-[#003B73] text-sm mb-3">{cap.arm}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cap.areas.map((a) => (
                    <span key={a} className="text-[10px] font-medium px-2 py-1 bg-[#EEF4FB] text-[#0057A8] rounded">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="section-label mb-3">Leadership</div>
          <h2 className="font-display font-bold text-[#003B73] text-3xl mb-4">The Team</h2>
          <p className="text-[#29323A]/60 max-w-xl mx-auto text-sm leading-relaxed mb-10">
            Our leadership section will be published here. To connect with our team, please use the contact form.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-[#F7F9FC] border border-[#DDE4EE] rounded p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#DDE4EE] mx-auto mb-3 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="10" r="4" stroke="#B0BBC8" strokeWidth="1.5" />
                    <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#B0BBC8" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="h-2 bg-[#DDE4EE] rounded w-3/4 mx-auto mb-1" />
                <div className="h-2 bg-[#EEF2F7] rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#29323A]/30 text-xs">Leadership profiles — coming soon</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0057A8] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white text-2xl mb-3">Ready to work with us?</h2>
          <p className="text-white/60 text-sm mb-6">Start a conversation with our team about your challenge.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
