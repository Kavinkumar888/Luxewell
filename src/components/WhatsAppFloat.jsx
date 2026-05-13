import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918147844618?text=Hi%20LuxeWall%2C%20I%20am%20interested%20in%20your%20wallpaper%20services%20in%20Coimbatore."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 rounded-full"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
      <MessageCircle size={26} fill="white" stroke="none" />
    </a>
  )
}
