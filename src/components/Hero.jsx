import { CheckCircle2, Star, ArrowRight } from 'lucide-react'


const stats = [
  { value: '0', label: 'Bespoke Commissions' },
  { value: '0+', label: 'Years of Mastery' },
  { value: '0%', label: 'In-House Execution' },
  { value: '0yr', label: 'Structural Guarantee' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f7f5f2] min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            {/* Badge */}

            <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/5 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                Premium Interior Design
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.12] mb-6">
              Bespoke Interior Architecture<br />
              <span className="italic text-gold">Kayal Interiors</span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-7 max-w-xl">
              Transforming spaces with premium interior solutions and architectural precision. Strategic renovations, custom millwork, and premium spatial layouts for elevated real estate value and well-being.
            </p>


            <ul className="flex flex-col gap-2.5 mb-9">
              {[
                'Elevated Real Estate Value',
                'Psychological Sanctuary',
                'Spatial Harmony',
                'Unreplicable Identity',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>


            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#process" className="btn-gold flex items-center gap-2">
                Our Philosophy <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                Schedule Consultation
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-playfair text-3xl font-bold text-dark">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Premium wallpaper installation – LuxeWall Coimbatore"
                className="w-full h-[560px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-4 shadow-xl max-w-[220px]">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">
                  Clean Installation
                </p>
                <p className="text-sm font-medium text-dark">
                  RS Puram • Coimbatore
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Textured feature wall for a modern apartment.
                </p>
              </div>
              {/* Rating badge */}
              <div className="absolute top-6 right-6 bg-dark text-white px-4 py-3 flex flex-col items-center shadow-xl">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#b8860b" stroke="none" />
                  ))}
                </div>
                <p className="text-xs font-bold">Rated 5.0</p>
                <p className="text-[10px] text-gray-400 text-center mt-0.5 leading-tight">
                  Homeowners, cafés &<br />offices across CBE
                </p>
              </div>
            </div>

            {/* Decorative border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
