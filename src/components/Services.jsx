import {
  MessageSquare,
  Ruler,
  AlignCenter,
  Paintbrush2,
  Droplets,
  Crown,
} from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'Wallpaper Consultation & Design Support',
    desc: 'Not sure what style suits your room? We help you choose patterns, colours and textures that work with your light and furniture – in person or over WhatsApp.',
    tag: 'Great for: new homes, makeovers, cafés and offices.',
  },
  {
    icon: Ruler,
    title: 'Measurement, Wall Preparation & Priming',
    desc: 'Every great finish starts with strong prep. We measure accurately, repair minor wall issues, sand and prime so your wallpaper sits flat and stays that way.',
    tag: 'Includes: surface checks, filler work and base coat.',
  },
  {
    icon: AlignCenter,
    title: 'Pattern Matching & Seam Alignment',
    desc: 'We align patterns and seams with care so joins are barely visible – crucial for florals, geometrics and mural‑style wallpapers.',
    tag: 'Ideal for: TV walls, bed backdrops and photo corners.',
  },
  {
    icon: Paintbrush2,
    title: 'Murals, Kids\' Rooms & Accent Walls',
    desc: 'From playful kids\' themes to dramatic powder rooms, we turn a single wall into a statement while keeping the rest of the décor balanced.',
    tag: 'Popular for: cafés, boutique stores, children\'s bedrooms.',
  },
  {
    icon: Droplets,
    title: 'Moisture-Aware & Textured Installations',
    desc: 'Guidance on where wallpaper works best in Indian homes and which textures to avoid in high‑humidity areas like kitchens or bathrooms.',
    tag: 'Focus on: durability and day‑to‑day maintenance.',
  },
  {
    icon: Crown,
    title: 'High-End & Luxury Wallpapering',
    desc: 'Premium silk, grasscloth and specialty wallpapers receive extra care, ensuring clean seams, smooth corners and a truly luxe finish.',
    tag: 'Perfect for: show homes, suites, boardrooms and galleries.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our best services</p>
          <h2 className="section-title mb-5">
            Services we are <span className="italic text-gold">offering.</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            From simple peel‑and‑stick updates to full wall preparation and luxury
            installations, we customise our work to suit your project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="bg-white p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-all duration-300">
                <Icon size={22} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-dark mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              <p className="text-xs text-gold font-medium border-t border-gray-100 pt-4">
                {tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
