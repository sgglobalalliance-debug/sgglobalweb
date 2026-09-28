import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sgLogo from '../assets/sg-logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Businesses', to: '/businesses' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

function SGLogo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      src={sgLogo}
      alt="SG Global Alliance Limited"
      height={40}
      className={`h-10 w-auto object-contain rounded-sm ${
        dark ? '' : 'bg-white/90 px-1.5 py-0.5'
      }`}
    />
  );
}

export function SGMonogram() {
  return <SGLogo />;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur ${
        transparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/96 border-b border-[#DDE4EE] shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <SGLogo dark={!transparent} />
            <div>
              <div
                className={`font-display text-sm font-800 tracking-tight leading-none ${
                  transparent ? 'text-white' : 'text-[#003B73]'
                }`}
                style={{ fontWeight: 800 }}
              >
                SG Global Alliance
              </div>
              <div
                className={`text-[9px] font-semibold tracking-[0.18em] uppercase mt-0.5 ${
                  transparent ? 'text-[#C69A32]' : 'text-[#C69A32]'
                }`}
              >
                INSPIRE NEXT
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-[13px] font-medium rounded transition-colors duration-150 ${
                    active
                      ? transparent
                        ? 'text-[#C69A32]'
                        : 'text-[#0057A8]'
                      : transparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-[#29323A]/70 hover:text-[#29323A]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-[13px] font-semibold bg-[#0057A8] text-white rounded hover:bg-[#003B73] transition-colors duration-200"
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded ${transparent ? 'text-white' : 'text-[#29323A]'}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DDE4EE] px-6 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  location.pathname === link.to
                    ? 'bg-[#EEF2F7] text-[#0057A8]'
                    : 'text-[#29323A]/70 hover:text-[#29323A] hover:bg-[#F7F9FC]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 px-4 py-2.5 text-sm font-semibold bg-[#0057A8] text-white rounded text-center hover:bg-[#003B73] transition-colors"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
