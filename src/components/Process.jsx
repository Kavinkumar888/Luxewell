const steps = [
  {
    num: '01',
    title: 'Initial Consultation',
    subtitle: 'Understand your vision',
    desc: 'We meet to understand your vision, lifestyle, and architectural preferences. Our experts conduct a spatial assessment to map out the possibilities of your environment.',
  },
  {
    num: '02',
    title: 'Design & Architecture',
    subtitle: 'Concept to blueprint',
    desc: 'We translate your vision into detailed plans, focusing on spatial harmony, material selection, and bespoke craftsmanship.',
  },
  {
    num: '03',
    title: 'Material Curation',
    subtitle: 'Select premium finishes',
    desc: 'Exclusive material sourcing and master craftsmanship ensure your home is a definitive, one-of-a-kind reflection of your personal legacy.',
  },
  {
    num: '04',
    title: 'Precision Execution',
    subtitle: 'Build & deliver',
    desc: 'Our team executes with surgical precision, handling both design and execution for a seamless experience and guaranteed quality.',
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Methodology</p>
          <h2 className="section-title mb-5">
            Our Execution <span className="italic text-gold">Masterplan.</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            From initial consultation to the final handover, our process is designed for clarity, quality, and a seamless transformation of your space.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative p-8 border-t-4 border-gray-100 hover:border-t-gold transition-all duration-300 group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gray-100 z-10"></div>
              )}

              <span className="font-playfair text-5xl font-bold text-gray-100 group-hover:text-gold/20 transition-colors duration-300 block mb-4">
                {step.num}
              </span>
              <h3 className="font-playfair text-lg font-semibold text-dark mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-gold font-semibold tracking-wide uppercase mb-3">
                {step.subtitle}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
