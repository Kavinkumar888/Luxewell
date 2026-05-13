import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'Bespoke interior architecture for residences, commercial spaces, and luxury developments.',
  'Exclusive material sourcing: imported marble, sustainable woods, and premium finishes.',
  'Strategic renovations and custom millwork for elevated real estate value.',
  'Master craftsmanship and in-house execution for a seamless experience.',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
              alt="LuxeWall wallpaper studio – Coimbatore"
              className="w-full h-[520px] object-cover"
            />
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 bg-gold w-40 h-40 -z-10"></div>
            <div className="absolute -top-6 -left-6 border-2 border-gold/20 w-40 h-40 -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-4">About Kayal Interiors</p>
            <h2 className="section-title mb-6">
              Transforming spaces with{' '}
              <span className="italic text-gold">premium interior solutions</span>.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Kayal Interiors delivers bespoke interior architecture, strategic renovations, and premium spatial layouts that command higher market valuations and promote well-being.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our philosophy blends exclusive material sourcing, master craftsmanship, and a science-driven approach to well-being. Every project is a one-of-a-kind reflection of your personal legacy, executed with precision and clarity from consultation to handover.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-gold">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  )
}
