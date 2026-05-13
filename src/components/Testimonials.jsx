import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    rating: 5,
    tag: 'Residential',
    quote:
      'The transformation was breathtaking. They completely understood our vision and elevated it with materials we never would have considered. It feels like a luxury hotel.',
    name: 'Sarah & James Chen',
    role: 'Residential Clients',
  },
  {
    rating: 5,
    tag: 'Developer',
    quote:
      'As a developer, I need spaces that command attention. The spatial flow they designed directly resulted in a record-breaking sale for our penthouse project.',
    name: 'Marcus Thorne',
    role: 'Property Developer',
  },
  {
    rating: 5,
    tag: 'Estate Owner',
    quote:
      'Flawless execution. The minimalist approach to interior lighting completely changed the way our family interacts with our home. Truly masterful work.',
    name: 'Priya Sharma',
    role: 'Estate Owner',
  },
  {
    rating: 5,
    tag: 'Bespoke Commission',
    quote:
      'Their attention to detail in the custom woodwork is unparalleled. It\'s rare to find a team that handles both design and execution with such surgical precision.',
    name: 'Robert Vance',
    role: 'Bespoke Commission',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Endorsements</p>
          <h2 className="section-title mb-5">
            Client <span className="italic text-gold">Perspectives.</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Real feedback from clients who experienced the Kayal Interiors transformation—from luxury residences to bespoke commissions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ tag, quote, name, role }) => (
            <div
              key={name}
              className="bg-[#f7f5f2] p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote size={36} className="text-gold/20 absolute top-6 right-6" />
              <p className="text-xs font-semibold text-gold tracking-wide mb-5">
                {tag}
              </p>
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#b8860b" stroke="none" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-7">
                "{quote}"
              </p>
              <div className="border-t border-gray-200 pt-5">
                <p className="font-semibold text-dark text-sm">{name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
