import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', scrollId: 'home', path: '/' },
  { label: 'About', scrollId: 'about', path: '/' },
  { label: 'Philosophy', scrollId: 'why-choose', path: '/' },
  { label: 'Process', scrollId: 'process', path: '/' },
  { label: 'Projects', scrollId: 'projects', path: '/' },
  { label: 'Contact', scrollId: null, path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle click on nav items
  const handleNavClick = (link) => {
    if (link.path === '/contact') {
      navigate('/contact');
      setActive('contact');
    } else {
      // For home sections
      if (location.pathname !== '/') {
        // If not on home, navigate home first then scroll after render
        navigate('/');
        setTimeout(() => {
          scrollToSection(link.scrollId);
        }, 100);
      } else {
        scrollToSection(link.scrollId);
      }
      setActive(link.scrollId);
    }
    setMobileOpen(false);
  };

  // Update active state based on route or scroll position
  useEffect(() => {
    if (location.pathname === '/contact') {
      setActive('contact');
      return;
    }

    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'why-choose', 'process', 'projects'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // initial call
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - always goes home */}
          <Link
            to="/"
            className="flex flex-col leading-none"
            onClick={() => setActive('home')}
          >
            <span className="font-playfair text-xl font-bold text-dark tracking-wide">
              KAYAL<span className="text-gold"> INTERIORS</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.15em] text-gray-500 uppercase">
              Premium Interior Design • Architecture
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`nav-link ${
                  active === (link.scrollId || link.label.toLowerCase())
                    ? 'text-gold border-gold'
                    : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-dark p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium text-gray-700 hover:text-gold transition-colors py-1 border-b border-gray-50 text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}