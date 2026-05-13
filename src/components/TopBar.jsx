import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-dark text-gray-400 text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone size={12} />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:studio@kayalinteriors.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail size={12} />
            <span>studio@kayalinteriors.com</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>Coimbatore, Tamil Nadu</span>
          </span>
        </div>
        <a
          href="https://wa.me/919876543210?text=I%20would%20like%20to%20discuss%20a%20new%20interior%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1 text-xs font-medium hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={11} />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  )
}
