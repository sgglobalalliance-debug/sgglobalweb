import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="pt-16 min-h-screen bg-[#F7F9FC] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display text-8xl font-extrabold text-[#DDE4EE] mb-4">404</div>
        <h1 className="font-display font-bold text-[#003B73] text-2xl mb-3">Page not found</h1>
        <p className="text-[#29323A]/50 text-sm mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="px-6 py-3 bg-[#0057A8] text-white font-semibold text-sm rounded hover:bg-[#003B73] transition-colors">
          Back to Home
        </a>
      </div>
    </main>
  );
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
