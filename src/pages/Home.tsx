import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

// Animated network hero
function NetworkHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Nodes representing the 6 business arms + center
    const nodes = [
      { x: 0.5, y: 0.5, label: 'SG', r: 8, color: '#C69A32', pulse: 0 },       // center
      { x: 0.25, y: 0.25, label: 'Technology', r: 5, color: '#4A9EFF', pulse: 0.3 },
      { x: 0.75, y: 0.2, label: 'Construction', r: 5, color: '#E8882A', pulse: 0.8 },
      { x: 0.85, y: 0.6, label: 'Logistics', r: 5, color: '#2A9D8F', pulse: 1.2 },
      { x: 0.65, y: 0.82, label: 'E-Commerce', r: 5, color: '#7B2FBE', pulse: 1.7 },
      { x: 0.22, y: 0.75, label: 'E-Learning', r: 5, color: '#C69A32', pulse: 2.1 },
      { x: 0.15, y: 0.45, label: 'Agriculture', r: 5, color: '#3A7D44', pulse: 2.6 },
    ];

    // Secondary background nodes
    const bgNodes: { x: number; y: number; r: number; phase: number }[] = Array.from({ length: 18 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 2 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      t += 0.008;

      // Draw connections from center to each business node
      nodes.slice(1).forEach((node) => {
        const cx = nodes[0].x * w;
        const cy = nodes[0].y * h;
        const nx = node.x * w;
        const ny = node.y * h;

        const grad = ctx.createLinearGradient(cx, cy, nx, ny);
        grad.addColorStop(0, 'rgba(198,154,50,0.3)');
        grad.addColorStop(1, `${node.color}20`);

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw bg node connections (subtle)
      bgNodes.forEach((bn, i) => {
        bgNodes.forEach((bn2, j) => {
          if (j <= i) return;
          const dx = (bn.x - bn2.x) * w;
          const dy = (bn.y - bn2.y) * h;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(bn.x * w, bn.y * h);
            ctx.lineTo(bn2.x * w, bn2.y * h);
            ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw bg nodes
      bgNodes.forEach((bn) => {
        const pulse = Math.sin(t * 0.7 + bn.phase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(bn.x * w, bn.y * h, bn.r * (0.7 + pulse * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.06 + pulse * 0.06})`;
        ctx.fill();
      });

      // Draw business nodes
      nodes.slice(1).forEach((node) => {
        const pulse = Math.sin(t + node.pulse) * 0.5 + 0.5;
        const nx = node.x * w;
        const ny = node.y * h;

        // Outer ring
        ctx.beginPath();
        ctx.arc(nx, ny, node.r * (1.6 + pulse * 0.4), 0, Math.PI * 2);
        ctx.strokeStyle = `${node.color}30`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node
        ctx.beginPath();
        ctx.arc(nx, ny, node.r, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      // Center SG node
      const centerPulse = Math.sin(t * 1.2) * 0.5 + 0.5;
      const cx = nodes[0].x * w;
      const cy = nodes[0].y * h;

      // Glow rings
      ctx.beginPath();
      ctx.arc(cx, cy, nodes[0].r * (2.5 + centerPulse * 0.5), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(198,154,50,${0.1 + centerPulse * 0.1})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, nodes[0].r * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(198,154,50,0.15)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, nodes[0].r, 0, Math.PI * 2);
      ctx.fillStyle = '#C69A32';
      ctx.fill();

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
      aria-hidden="true"
    />
  );
}

const businesses = [
  {
    name: 'SG Technology',
    tagline: 'Digital Transformation & IT Excellence',
    color: '#0057A8',
    bg: '#EEF4FB',
    tags: ['Software Development', 'Cloud & Infrastructure', 'Data & AI'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="2" stroke="#0057A8" strokeWidth="1.8" />
        <line x1="3" y1="11" x2="25" y2="11" stroke="#0057A8" strokeWidth="1.5" />
        <circle cx="6.5" cy="9" r="1" fill="#0057A8" />
        <circle cx="10" cy="9" r="1" fill="#0057A8" />
        <path d="M8 15l3 3 6-6" stroke="#C69A32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'SG Construction',
    tagline: 'Infrastructure & Project Delivery',
    color: '#E8882A',
    bg: '#FDF4EE',
    tags: ['Commercial & Industrial', 'Project Management', 'Sustainability'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22h20M7 22V12l7-6 7 6v10" stroke="#E8882A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="11" y="16" width="6" height="6" rx="0.5" stroke="#E8882A" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'SG Logistics',
    tagline: 'Supply Chain & Logistics Intelligence',
    color: '#2A9D8F',
    bg: '#EEF8F7',
    tags: ['Route Optimization', 'Inventory Intelligence', 'Analytics'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 17h14l3-9h4l2 9" stroke="#2A9D8F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="21" r="2" stroke="#2A9D8F" strokeWidth="1.5" />
        <circle cx="21" cy="21" r="2" stroke="#2A9D8F" strokeWidth="1.5" />
        <path d="M3 11h8" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'SG E-Commerce',
    tagline: 'Digital Commerce Growth',
    color: '#7B2FBE',
    bg: '#F5EEF8',
    tags: ['E-Commerce Strategy', 'Conversion Optimization', 'Growth Planning'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 5h3l2.5 12h13l2.5-9H8.5" stroke="#7B2FBE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="21" r="1.5" fill="#7B2FBE" />
        <circle cx="19" cy="21" r="1.5" fill="#7B2FBE" />
        <path d="M17 10l2 2-2 2" stroke="#C69A32" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'SG E-Learning',
    tagline: 'Skills & Digital Learning',
    color: '#C69A32',
    bg: '#FDF8EE',
    tags: ['Corporate Learning', 'Certification Prep', 'Digital Platforms'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l12 5-12 5L2 9l12-5z" stroke="#C69A32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v6c0 2 3.6 4 8 4s8-2 8-4v-6" stroke="#C69A32" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="26" y1="9" x2="26" y2="15" stroke="#C69A32" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'SG Agriculture',
    tagline: 'Agri-business & Digital Agriculture',
    color: '#3A7D44',
    bg: '#EEF5EF',
    tags: ['Precision Farming', 'Supply-Chain Optimization', 'Market Intelligence'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 22V12" stroke="#3A7D44" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 12C14 12 8 10 6 5c4 0 8 3 8 7z" fill="#3A7D44" opacity="0.2" stroke="#3A7D44" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 14C14 14 20 12 22 7c-4 0-8 3-8 7z" fill="#3A7D44" opacity="0.2" stroke="#3A7D44" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="6" y1="22" x2="22" y2="22" stroke="#3A7D44" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const solutionSteps = [
  { n: '01', label: 'Consult', desc: 'We listen carefully to understand your challenge, context and strategic objectives before recommending any path.' },
  { n: '02', label: 'Design', desc: 'Our specialists design a tailored solution that integrates the right capabilities, tools and approaches for your situation.' },
  { n: '03', label: 'Execute', desc: 'Experienced teams deliver the solution with precision—on time, within scope, to a high professional standard.' },
  { n: '04', label: 'Train', desc: 'We transfer knowledge and capability so your people can sustain and extend the results after we engage.' },
  { n: '05', label: 'Support', desc: 'Ongoing partnership, continuous improvement and responsive support as your needs evolve.' },
];

const techCapabilities = [
  'AI & Data', 'Cloud', 'Cybersecurity', 'Automation', 'Platforms', 'Analytics', 'Integration',
];

const industries = [
  { name: 'Oil & Gas', icon: '⚙️' },
  { name: 'Government', icon: '🏛️' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'SMEs', icon: '💼' },
  { name: 'Education', icon: '🎓' },
  { name: 'Telecommunications', icon: '📡' },
  { name: 'Financial Services', icon: '🏦' },
  { name: 'Industry & Commerce', icon: '🏗️' },
  { name: 'Real Estate', icon: '🏢' },
];

const insightTopics = [
  { title: 'Technology & AI', desc: 'How artificial intelligence is reshaping operations across African industries.', tag: 'AI & Technology' },
  { title: 'Construction & Infrastructure', desc: 'Emerging approaches to infrastructure delivery in growing economies.', tag: 'Infrastructure' },
  { title: 'Supply Chain', desc: 'Building supply chains that are resilient, data-driven and sustainable.', tag: 'Supply Chain' },
  { title: 'Digital Commerce', desc: 'The evolving landscape of e-commerce and digital business in Africa.', tag: 'Digital Commerce' },
  { title: 'Future Skills', desc: 'How organizations are upskilling workforces for the digital economy.', tag: 'Learning' },
  { title: 'Agriculture & Sustainability', desc: 'Precision farming and technology-enabled agri-business transformation.', tag: 'Agriculture' },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#003B73] overflow-hidden">
        <NetworkHero />

        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/80 via-[#003B73]/60 to-[#0057A8]/40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="section-label mb-6 animate-fade-up">SG Global Alliance Limited</div>
            <h1
              className="font-display font-extrabold text-white leading-[1.05] tracking-tight animate-fade-up"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              INSPIRE<br />
              <span className="text-[#C69A32]">NEXT.</span>
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-xl animate-fade-up-delay-1">
              Consulting, technology and execution for organizations ready to move forward.
            </p>
            <p className="mt-3 text-white/55 text-base leading-relaxed max-w-xl animate-fade-up-delay-1">
              SG Global Alliance brings together specialist capabilities across technology, construction, logistics, e-commerce, e-learning and agriculture to solve complex business and operational challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                to="/businesses"
                className="px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all"
              >
                Explore Our Businesses
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-3">
          <div className="w-px h-8 bg-white/30 animate-pulse" />
          <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-[#0057A8] py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-white/80 text-xs font-semibold tracking-[0.25em] uppercase">
            Strategy&nbsp;&nbsp;•&nbsp;&nbsp;Technology&nbsp;&nbsp;•&nbsp;&nbsp;Execution&nbsp;&nbsp;•&nbsp;&nbsp;Training&nbsp;&nbsp;•&nbsp;&nbsp;Support
          </p>
        </div>
      </div>

      {/* GROUP INTRO */}
      <section className="bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Who We Are</div>
              <h2 className="font-display font-bold text-[#003B73] leading-tight gold-underline" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                One Group.<br />Six Specialist<br />Capabilities.
              </h2>
              <p className="mt-8 text-[#29323A]/70 leading-relaxed">
                SG Global Alliance Limited is a Nigerian consulting and solutions group that brings together six specialist business arms under one coordinated leadership structure. We exist to help organizations move from where they are to where they need to be—through strategy, technology and execution.
              </p>
              <p className="mt-4 text-[#29323A]/70 leading-relaxed">
                Each subsidiary operates with domain expertise, shared values and integrated delivery capability. When your challenge is complex, we mobilize across multiple disciplines to deliver a connected solution.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-[#0057A8] text-sm font-semibold hover:text-[#003B73] transition-colors"
              >
                About the Group
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Business Arms', value: '6', sub: 'specialist subsidiaries' },
                { label: 'Capabilities', value: '50+', sub: 'service areas' },
                { label: 'Industries', value: '10', sub: 'sectors served' },
                { label: 'Approach', value: '5-Step', sub: 'delivery model' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded p-6 border border-[#DDE4EE]">
                  <div className="font-display text-3xl font-extrabold text-[#003B73]">{stat.value}</div>
                  <div className="text-[#29323A]/80 text-sm font-medium mt-1">{stat.label}</div>
                  <div className="text-[#29323A]/40 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESSES GRID */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="section-label mb-3">Our Businesses</div>
              <h2 className="font-display font-bold text-[#003B73] text-3xl leading-tight">
                Six domains.<br />One connected group.
              </h2>
            </div>
            <Link to="/businesses" className="text-[#0057A8] text-sm font-semibold hover:text-[#003B73] flex items-center gap-2 transition-colors">
              View All Businesses
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businesses.map((biz) => (
              <div key={biz.name} className="bg-[#F7F9FC] border border-[#DDE4EE] rounded p-6 card-hover group">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: biz.bg }}
                >
                  {biz.icon}
                </div>
                <h3 className="font-display font-bold text-[#003B73] text-lg">{biz.name}</h3>
                <p className="text-[#29323A]/60 text-sm mt-1 mb-4">{biz.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {biz.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                      style={{ color: biz.color, borderColor: `${biz.color}30`, backgroundColor: `${biz.color}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/businesses"
                  className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                  style={{ color: biz.color }}
                >
                  Explore
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS PROCESS */}
      <section className="bg-[#003B73] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <div className="section-label mb-3">How We Work</div>
            <h2 className="font-display font-bold text-white text-3xl leading-tight">
              From challenge to measurable action.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[2.4rem] left-[10%] right-[10%] h-px bg-white/10" />
            {solutionSteps.map((step, i) => (
              <div key={step.n} className="relative flex flex-col items-center text-center px-4 py-6">
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-full border border-[#C69A32]/40 flex items-center justify-center bg-[#003B73] z-10 relative">
                    <span className="font-display text-[#C69A32] text-xs font-bold">{step.n}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{step.label}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Explore Our Solutions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Technology</div>
              <h2 className="font-display font-bold text-[#003B73] text-3xl leading-tight">
                Technology is the<br />connective tissue.
              </h2>
              <p className="mt-6 text-[#29323A]/65 leading-relaxed">
                Across every business arm, technology amplifies what we do. From AI-driven insights to cloud infrastructure, cybersecurity to automation—we embed technology capability into every engagement.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {techCapabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-4 py-2 bg-white border border-[#DDE4EE] text-[#003B73] text-sm font-semibold rounded hover:border-[#0057A8] hover:bg-[#EEF4FB] transition-colors cursor-default"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded overflow-hidden bg-[#003B73]" style={{ minHeight: 320 }}>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop&auto=format"
                alt="Technology infrastructure"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                style={{ minHeight: 320 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003B73]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm font-display font-semibold">
                  "Technology enables strategy and execution across every domain we operate in."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <div className="section-label mb-3">Industries</div>
            <h2 className="font-display font-bold text-[#003B73] text-3xl leading-tight">
              Sectors we serve.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-[#F7F9FC] border border-[#DDE4EE] rounded p-5 flex flex-col items-center text-center gap-3 card-hover group cursor-default"
              >
                <span className="text-2xl" role="img" aria-hidden="true">{ind.icon}</span>
                <span className="font-display font-semibold text-[#29323A] text-xs leading-tight group-hover:text-[#0057A8] transition-colors">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 text-[#0057A8] text-sm font-semibold hover:text-[#003B73] transition-colors">
              Explore All Industries
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="section-label mb-3">Knowledge & Insights</div>
              <h2 className="font-display font-bold text-[#003B73] text-3xl leading-tight">
                Perspectives from<br />our specialists.
              </h2>
            </div>
            <Link to="/insights" className="text-[#0057A8] text-sm font-semibold hover:text-[#003B73] flex items-center gap-2 transition-colors">
              All Insights
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {insightTopics.map((topic) => (
              <article
                key={topic.title}
                className="bg-white border border-[#DDE4EE] rounded overflow-hidden card-hover group"
              >
                <div className="h-2 bg-[#0057A8]" />
                <div className="p-6">
                  <span className="section-label">{topic.tag}</span>
                  <h3 className="font-display font-bold text-[#003B73] text-base mt-2 mb-2 group-hover:text-[#0057A8] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-[#29323A]/60 text-sm leading-relaxed">{topic.desc}</p>
                  <div className="mt-4 pt-4 border-t border-[#DDE4EE]">
                    <span className="text-[10px] text-[#29323A]/35 font-medium uppercase tracking-wider">
                      Placeholder — content coming soon
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#29323A] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label mb-4">Let's Work Together</div>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Have a challenge<br />worth solving?
          </h2>
          <p className="mt-5 text-white/55 leading-relaxed max-w-xl mx-auto">
            Tell us what you are trying to achieve. Our team will help shape the right path from strategy to execution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
