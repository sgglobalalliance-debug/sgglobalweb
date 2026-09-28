import { Link } from 'react-router-dom';
import sgLogoMark from '../assets/sg-logo-footer.png';

const businesses = [
  'SG Technology',
  'SG Construction',
  'SG Logistics',
  'SG E-Commerce',
  'SG E-Learning',
  'SG Agriculture',
];

const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Businesses', to: '/businesses' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#29323A] text-white">
      {/* CTA band */}
      <div className="bg-[#003B73] px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="section-label mb-3">Ready to move forward?</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              Have a challenge worth solving?
            </h2>
            <p className="mt-2 text-white/60 text-sm max-w-md">
              Tell us what you are trying to achieve. Our team will help shape the right path from strategy to execution.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-3 bg-[#C69A32] text-[#003B73] font-semibold text-sm rounded hover:bg-[#d4a840] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded p-1.5 flex-shrink-0">
                <img
                  src={sgLogoMark}
                  alt="SG Global Alliance monogram"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm leading-tight">SG Global Alliance Limited</div>
                <div className="text-[9px] text-[#C69A32] font-semibold tracking-[0.2em] uppercase mt-0.5">INSPIRE NEXT</div>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Connecting strategy, technology and execution to help people, businesses and institutions move to next-level performance.
            </p>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="font-display text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Our Businesses</h3>
            <ul className="space-y-2.5">
              {businesses.map((b) => (
                <li key={b}>
                  <Link to="/businesses" className="text-white/60 text-sm hover:text-[#C69A32] transition-colors">
                    {b}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-white/60 text-sm">
              <p className="leading-relaxed">
                OASIC Estate, 24B Okunola Aina Street,<br />
                Okupe Estate, Maryland,<br />
                Lagos, Nigeria
              </p>
              <div className="space-y-1">
                <a href="tel:+2348023120797" className="block hover:text-white transition-colors">+234 802 312 0797</a>
                <a href="tel:+2347033395702" className="block hover:text-white transition-colors">+234 703 339 5702</a>
              </div>
              <div className="space-y-1">
                <a href="mailto:info@sgglobalalliance.com" className="block hover:text-[#C69A32] transition-colors">info@sgglobalalliance.com</a>
                <a href="mailto:sgglobalalliance@gmail.com" className="block hover:text-[#C69A32] transition-colors">sgglobalalliance@gmail.com</a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} SG Global Alliance Limited. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            RC: Nigeria · Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
