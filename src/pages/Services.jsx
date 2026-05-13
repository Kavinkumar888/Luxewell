export default function ServicesPage() {
  const services = [
    {
      num: "01",
      label: "Residential",
      title: "Residential Interior Design",
      desc: "Your home is your sanctuary. We design spaces that balance beauty with functionality.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Full home design & styling",
        "Living room & bedroom design",
        "Kitchen & bathroom renovation",
        "Custom furniture & joinery",
        "Lighting design consultation",
      ],
    },
    {
      num: "02",
      label: "Commercial",
      title: "Commercial Space Design",
      desc: "We create commercial environments that inspire employees and elevate your brand.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Office & co-working design",
        "Retail & boutique interiors",
        "Restaurant interiors",
        "Brand-aligned concepts",
        "Turnkey project management",
      ],
    },
    {
      num: "03",
      label: "Vastu",
      title: "Vastu-Compliant Design",
      desc: "Blending Vastu Shastra with modern design to create positive spaces.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Vastu consultation",
        "Direction planning",
        "Energy-flow layouts",
        "Traditional motif integration",
        "Remedial solutions",
      ],
    },
    {
      num: "04",
      label: "Modular",
      title: "Modular Kitchen & Wardrobe",
      desc: "Smart modular solutions built for elegance, efficiency, and storage.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Kitchen installation",
        "Wardrobe solutions",
        "Walk-in closet design",
        "Premium fittings",
        "5-year warranty",
      ],
    },
  ]

  return (
    <div className="bg-[#FDF9F4] text-[#3D3830] overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-[45vh] md:min-h-[55vh] flex items-end px-[5%] pt-28 md:pt-32 pb-12 md:pb-16 bg-[#1C1A17] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[22vw] md:text-[18vw] text-[#C9A96E]/10 font-light pointer-events-none">
          Services
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-[10px] md:text-xs flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#C9A96E]"></span>
            What We Offer
          </div>

          <h1 className="text-4xl md:text-7xl font-light text-white leading-tight mb-6">
            Design Services{" "}
            <em className="text-[#C9A96E] italic">
              Tailored
            </em>{" "}
            to You
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-7 md:leading-8 max-w-2xl">
            From concept to final reveal, we transform ordinary spaces into
            extraordinary experiences.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-[5%] py-14 md:py-24">
        {services.map((service, index) => (
          <div
            key={service.num}
            className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center py-14 md:py-20 border-b border-[#E2D9CE] ${
              index % 2 !== 0 ? "lg:[direction:rtl]" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative lg:[direction:ltr]">
              <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 border border-[#E2D9CE]"></div>

                <div className="absolute bottom-4 left-4 bg-[#1C1A17] text-[#C9A96E] px-4 py-2 uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                  {service.label}
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="lg:[direction:ltr]">
              <div className="text-5xl md:text-7xl font-light text-[#E8D5B0] mb-4">
                {service.num}
              </div>

              <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-[10px] md:text-xs mb-5">
                {service.label}
              </div>

              <h2 className="text-3xl md:text-5xl font-light text-[#1C1A17] mb-6 leading-tight">
                {service.title}
              </h2>

              <p className="text-[#7A6E62] text-sm md:text-base leading-7 md:leading-8 mb-8">
                {service.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-[#E2D9CE] pb-3 flex items-center gap-3 text-sm md:text-base"
                  >
                    <span className="text-[#C9A96E]">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] px-8 md:px-10 py-3 md:py-4 uppercase tracking-[0.18em] text-[10px] md:text-xs hover:bg-[#C9A96E] hover:text-white transition"
              >
                Get a Quote
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="bg-[#F8F4EE] py-16 md:py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-[10px] md:text-xs mb-5">
              How We Work
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-[#1C1A17]">
              Our Design Process
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
            {[
              "Discovery",
              "Concept",
              "Design",
              "Execution",
              "Reveal",
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full border mx-auto mb-5 md:mb-6 flex items-center justify-center text-lg md:text-xl ${
                    index === 0
                      ? "bg-[#C9A96E] text-white border-[#C9A96E]"
                      : "border-[#E2D9CE] text-[#C9A96E]"
                  }`}
                >
                  {`0${index + 1}`}
                </div>

                <h4 className="text-lg md:text-xl text-[#1C1A17] mb-3">
                  {step}
                </h4>

                <p className="text-xs md:text-sm text-[#7A6E62] leading-6 md:leading-7">
                  Professional interior workflow crafted for premium results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-[10px] md:text-xs mb-5">
            Investment
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-[#1C1A17]">
            Design Packages
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              plan: "Starter",
              title: "Essential Design",
              price: "₹45K",
            },
            {
              plan: "Premium",
              title: "Full Design",
              price: "₹85K",
              featured: true,
            },
            {
              plan: "Luxury",
              title: "White Glove",
              price: "Custom",
            },
          ].map((card) => (
            <div
              key={card.plan}
              className={`p-8 md:p-12 border relative ${
                card.featured
                  ? "bg-[#1C1A17] border-[#1C1A17]"
                  : "bg-[#F8F4EE] border-[#E2D9CE]"
              }`}
            >
              {card.featured && (
                <div className="absolute top-0 right-6 md:right-8 bg-[#C9A96E] text-white text-[9px] md:text-[10px] uppercase tracking-[0.15em] px-4 py-2">
                  Most Popular
                </div>
              )}

              <div className="uppercase tracking-[0.2em] text-[#C9A96E] text-[10px] md:text-xs mb-5">
                {card.plan}
              </div>

              <h3
                className={`text-3xl md:text-4xl font-light mb-5 ${
                  card.featured ? "text-white" : "text-[#1C1A17]"
                }`}
              >
                {card.title}
              </h3>

              <div className="text-4xl md:text-5xl text-[#C9A96E] font-light mb-10">
                {card.price}
              </div>

              <a
                href="/contact"
                className={`block text-center py-3 md:py-4 uppercase tracking-[0.18em] text-[10px] md:text-xs transition ${
                  card.featured
                    ? "border border-white/20 text-white hover:bg-white/10"
                    : "bg-[#C9A96E] text-white hover:bg-[#b8914e]"
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}