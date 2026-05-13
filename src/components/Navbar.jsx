// Navbar.jsx

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (path) => {
    navigate(path)
    setMobileOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="flex flex-col leading-none"
          >
            <span className="text-xl font-bold tracking-wide text-[#1C1A17]">
              KAYAL
              <span className="text-[#C9A96E]">
                {' '}
                INTERIORS
              </span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500">
              Premium Interior Design
            </span>
          </Link>

          {/* DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.path)}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path
                    ? 'text-[#C9A96E]'
                    : 'text-gray-700 hover:text-[#C9A96E]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.path)}
                className="text-left text-sm text-gray-700 hover:text-[#C9A96E]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}