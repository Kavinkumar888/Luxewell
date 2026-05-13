import { Zap, Palette, Users, BadgeDollarSign } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Bespoke Materials',
    desc: 'We hand-select every finish, from imported marble to sustainable, acoustic woods, ensuring your environment feels as inherently expensive as it looks.',
  },
  {
    icon: Palette,
    title: 'Spatial Design',
    desc: 'We rethink restrictive floor plans to create fluid, intuitive environments that adapt perfectly to the way you and your family actually live.',
  },
  {
    icon: Users,
    title: 'Flawless Execution',
    desc: 'Our team delivers with surgical precision, handling both design and execution for a seamless experience.',
  },
  {
    icon: BadgeDollarSign,
    title: 'The Guarantee',
    desc: 'We offer a structural guarantee and in-house execution for every project, ensuring quality and peace of mind.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-choose" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            The Studio Advantage
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Why Choose <span className="italic text-gold">Kayal?</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-base">
            We transform spaces with premium interior solutions, exclusive material sourcing, and master craftsmanship for a one-of-a-kind reflection of your personal legacy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-white/10 p-7 hover:border-gold/50 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Icon size={22} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
