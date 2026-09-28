import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'All',
  'AI & Technology',
  'Business Transformation',
  'Infrastructure',
  'Supply Chain',
  'Digital Commerce',
  'Learning',
  'Agriculture',
  'Sustainability',
];

const placeholderArticles = [
  { title: 'How AI Is Reshaping Business Operations in Nigeria', cat: 'AI & Technology', sub: 'The convergence of artificial intelligence with enterprise operations is creating new efficiency possibilities for African businesses.', date: '— Placeholder —' },
  { title: 'Building Digital-First Organizations in Emerging Markets', cat: 'Business Transformation', sub: 'What it takes for African enterprises to truly transform—not just digitize the surface of their operations.', date: '— Placeholder —' },
  { title: 'Infrastructure Delivery in a Complex Environment', cat: 'Infrastructure', sub: 'How project management discipline and technology are improving construction outcomes in challenging contexts.', date: '— Placeholder —' },
  { title: 'Supply Chain Resilience After Disruption', cat: 'Supply Chain', sub: 'Lessons from recent supply chain shocks and what organizations should build into their logistics networks.', date: '— Placeholder —' },
  { title: 'The Rise of African E-Commerce: Opportunity and Execution', cat: 'Digital Commerce', sub: 'Understanding the infrastructure, payment and logistics dynamics that shape digital commerce in Africa.', date: '— Placeholder —' },
  { title: 'Closing the Digital Skills Gap in Nigerian Organizations', cat: 'Learning', sub: 'How corporate learning programmes are helping organizations keep pace with technology change.', date: '— Placeholder —' },
  { title: 'Precision Agriculture: From Promise to Practice', cat: 'Agriculture', sub: 'How digital tools are beginning to change outcomes for smallholder and commercial farmers in West Africa.', date: '— Placeholder —' },
  { title: 'Sustainable Business in the African Context', cat: 'Sustainability', sub: 'What sustainability means for Nigerian businesses operating in a resource-intensive economy.', date: '— Placeholder —' },
  { title: 'Cybersecurity Threats Facing African Enterprises', cat: 'AI & Technology', sub: 'The evolving threat landscape and what organizations must do to protect critical systems.', date: '— Placeholder —' },
  { title: 'Cloud Adoption Strategies for Mid-Size Organizations', cat: 'AI & Technology', sub: 'A practical guide to cloud migration priorities for organizations without large IT teams.', date: '— Placeholder —' },
  { title: 'Transforming Government Service Delivery Through Technology', cat: 'Business Transformation', sub: 'How public sector modernization programmes create citizen value and operational efficiency.', date: '— Placeholder —' },
  { title: 'Cold Chain Logistics and Food Security', cat: 'Supply Chain', sub: 'The critical role of cold chain infrastructure in reducing post-harvest losses and improving food access.', date: '— Placeholder —' },
];

const catColors: Record<string, string> = {
  'AI & Technology': '#0057A8',
  'Business Transformation': '#7B2FBE',
  'Infrastructure': '#E8882A',
  'Supply Chain': '#2A9D8F',
  'Digital Commerce': '#C69A32',
  'Learning': '#3A7D44',
  'Agriculture': '#3A7D44',
  'Sustainability': '#2A9D8F',
};

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = placeholderArticles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.cat === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.sub.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#003B73] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4">Knowledge & Insights</div>
          <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Perspectives from<br />Our Specialists.
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg leading-relaxed">
            Analysis, perspective and practical thinking from across the SG Global Alliance group. Content will be published here as our knowledge programme develops.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[#DDE4EE] px-6 py-5 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#003B73] text-white'
                    : 'bg-[#F7F9FC] text-[#29323A]/60 hover:text-[#29323A] border border-[#DDE4EE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search insights…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm border border-[#DDE4EE] rounded bg-[#F7F9FC] text-[#29323A] placeholder-[#29323A]/30 focus:outline-none focus:border-[#0057A8] transition-colors w-56"
            />
            <svg className="absolute left-2.5 top-2.5 text-[#29323A]/30" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-[#F7F9FC] py-12 px-6 min-h-96">
        <div className="max-w-7xl mx-auto">
          {/* Notice */}
          <div className="mb-8 flex items-start gap-3 bg-[#EEF4FB] border border-[#0057A8]/20 rounded p-4">
            <svg className="flex-shrink-0 mt-0.5 text-[#0057A8]" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-[#0057A8] text-xs leading-relaxed">
              This insights library is being developed. The articles shown below are <strong>topic placeholders</strong> for future CMS-published content — titles and summaries indicate the areas we will cover.
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-[#29323A]/40">
              <p className="font-display text-lg">No insights match your filter.</p>
              <button onClick={() => { setActiveCategory('All'); setSearch(''); }} className="mt-3 text-sm text-[#0057A8] hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((article) => (
                <article key={article.title} className="bg-white border border-[#DDE4EE] rounded overflow-hidden card-hover group">
                  <div className="h-1.5" style={{ backgroundColor: catColors[article.cat] ?? '#0057A8' }} />
                  <div className="p-6">
                    <span
                      className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded"
                      style={{
                        color: catColors[article.cat] ?? '#0057A8',
                        backgroundColor: `${catColors[article.cat] ?? '#0057A8'}12`,
                      }}
                    >
                      {article.cat}
                    </span>
                    <h3 className="font-display font-bold text-[#003B73] text-sm mt-3 mb-2 leading-snug group-hover:text-[#0057A8] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[#29323A]/60 text-xs leading-relaxed">{article.sub}</p>
                    <div className="mt-5 pt-4 border-t border-[#EEF2F7] flex items-center justify-between">
                      <span className="text-[9px] text-[#29323A]/30 uppercase tracking-wider font-medium">{article.date}</span>
                      <span className="text-[10px] text-[#29323A]/25 italic">Content coming soon</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0057A8] py-14 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-2">Want to discuss these topics?</h2>
          <p className="text-white/60 text-sm mb-5">Speak with our specialists about the issues that matter most to your organization.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69A32] text-[#003B73] font-bold text-sm rounded hover:bg-[#d4a840] transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
