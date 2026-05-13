export default function About() {
  return (
    <div className="bg-[#FDF9F4] text-[#3D3830] overflow-x-hidden">
      {/* HERO */}
      <section
        id="about"
        className="min-h-[60vh] flex items-end px-[5%] pt-32 pb-16 bg-[#F8F4EE] relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-light text-[#C9A96E]/10 whitespace-nowrap pointer-events-none select-none">
          About
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-xs flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#C9A96E]"></span>
            Our Story
          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-tight text-[#1C1A17] mb-6">
            Crafting Spaces That{" "}
            <em className="text-[#C9A96E] italic">
              Tell Your Story
            </em>
          </h1>

          <p className="text-[#7A6E62] text-lg leading-8 max-w-2xl">
            We believe every home holds a narrative waiting to be revealed —
            one that speaks of the people who live within its walls,
            their aspirations, and their sense of beauty.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="grid lg:grid-cols-2 gap-16 items-center px-[5%] py-24 max-w-7xl mx-auto">
        {/* IMAGE */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Interior"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-[#E8D5B0] -z-10"></div>

          <div className="absolute top-8 -left-8 bg-[#1C1A17] text-white p-6 text-center shadow-lg">
            <span className="block text-5xl font-light text-[#C9A96E]">
              12
            </span>

            <span className="uppercase tracking-[0.2em] text-[10px]">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-xs flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#C9A96E]"></span>
            Who We Are
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-[#1C1A17] leading-tight mb-6">
            A Studio Built on Passion & Precision
          </h2>

          <p className="text-[#7A6E62] leading-8 mb-5">
            Founded in 2012 in the heart of Coimbatore,
            Kayal Interiors began as a dream to bring
            world-class interior design to South India.
          </p>

          <p className="text-[#7A6E62] leading-8 mb-5">
            Our name — Kayal — means "a lotus pond" in Tamil,
            and like the lotus, we believe in finding beauty
            and order in every space.
          </p>

          <div className="w-12 h-px bg-[#C9A96E] my-8"></div>

          <p className="text-[#7A6E62] leading-8">
            From residential havens to commercial landmarks,
            we have transformed over 500 spaces across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F8F4EE] py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-xs mb-5">
              What Drives Us
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-[#1C1A17]">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Client-First Design",
                desc: "Your vision is our blueprint.",
              },
              {
                num: "02",
                title: "Timeless Craftsmanship",
                desc: "Every detail is chosen with intention.",
              },
              {
                num: "03",
                title: "Sustainable Living",
                desc: "Eco-conscious materials with elegance.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white p-12 hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="text-6xl text-[#E8D5B0] font-light mb-5">
                  {item.num}
                </div>

                <h3 className="text-2xl text-[#1C1A17] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#7A6E62] leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-[5%] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-xs mb-5">
            The Creatives
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-[#1C1A17]">
            Meet Our Design Team
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Kavitha Ramaswamy",
              role: "Founder & Principal Designer",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Arjun Nair",
              role: "Lead Architect",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Priya Sundaram",
              role: "Senior Interior Stylist",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((member) => (
            <div key={member.name} className="text-center group">
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
              </div>

              <h3 className="text-2xl text-[#1C1A17] mb-2">
                {member.name}
              </h3>

              <p className="uppercase tracking-[0.18em] text-xs text-[#C9A96E]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1C1A17] py-20 px-[5%]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            ["500+", "Projects Completed"],
            ["12", "Years Experience"],
            ["98%", "Client Satisfaction"],
            ["18", "Design Awards"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-6xl text-[#C9A96E] font-light">
                {num}
              </div>

              <p className="uppercase tracking-[0.2em] text-xs text-white/50 mt-3">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[5%] text-center bg-[#F8F4EE]">
        <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-xs mb-5">
          Work With Us
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-[#1C1A17] mb-5">
          Ready to Begin Your Design Journey?
        </h2>

        <p className="text-[#7A6E62] mb-10">
          Let's create a space that is unmistakably yours.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-[#C9A96E] text-white uppercase tracking-[0.2em] text-xs hover:bg-[#1C1A17] transition"
        >
          Schedule a Consultation
        </a>
      </section>
    </div>
  )
}