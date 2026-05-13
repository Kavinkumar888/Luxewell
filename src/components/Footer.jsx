import { Instagram, Facebook, Youtube } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex flex-col leading-none mb-5 block">
              <span className="font-playfair text-2xl font-bold text-white tracking-wide">
                KAYAL<span className="text-gold"> INTERIORS</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.15em] text-gray-500 uppercase mt-1">
                Premium Interior Design • Architecture
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Transforming spaces with premium interior solutions and architectural precision. Bespoke commissions, exclusive material sourcing, and master craftsmanship for a one-of-a-kind legacy.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">
              Expertise
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-sm text-gray-500 hover:text-gold transition-colors duration-200">Wallpapers</a></li>
              <li><a href="#services" className="text-sm text-gray-500 hover:text-gold transition-colors duration-200">Flooring</a></li>
              <li><a href="#services" className="text-sm text-gray-500 hover:text-gold transition-colors duration-200">Curtains</a></li>
              <li><a href="#services" className="text-sm text-gray-500 hover:text-gold transition-colors duration-200">Wall Panels</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="tel:+918147844618" className="hover:text-gold transition-colors">
                  +91 81478 44618
                </a>
              </li>
              <li>
                <a href="mailto:info@luxewallsstudio.com" className="hover:text-gold transition-colors">
                  info@luxewallsstudio.com
                </a>
              </li>
              <li className="leading-relaxed">
                R.S. Puram, Coimbatore<br />
                Tamil Nadu, India
              </li>
            </ul>
            <a
              href="https://wa.me/918147844618?text=Hi%20LuxeWall%2C%20I%20am%20interested%20in%20your%20wallpaper%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-xs font-semibold bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} LuxeWall Studio, Coimbatore. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Premium Wallpaper & Wall Décor Services
          </p>
        </div>
      </div>
    </footer>
  )
}
