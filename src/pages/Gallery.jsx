import { useState } from "react"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const galleryItems = [
    {
      title: "Prestige Villa",
      category: "residential",
      subtitle: "Residential · Living Room",
      height: "h-[380px]",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern Modular Kitchen",
      category: "kitchen",
      subtitle: "Kitchen · Modular",
      height: "h-[250px]",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "TechPark Office Lobby",
      category: "office",
      subtitle: "Commercial · Office",
      height: "h-[320px]",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Master Bedroom Suite",
      category: "bedroom",
      subtitle: "Residential · Bedroom",
      height: "h-[290px]",
      image:
        "https://images.unsplash.com/photo-1505693536294-233fb141754c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "La Petite Café",
      category: "commercial",
      subtitle: "Commercial · Restaurant",
      height: "h-[350px]",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Heritage Haveli",
      category: "residential",
      subtitle: "Residential · Traditional",
      height: "h-[220px]",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const filters = [
    "all",
    "residential",
    "commercial",
    "kitchen",
    "bedroom",
    "office",
  ]

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="bg-[#FDF9F4] overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-[40vh] md:min-h-[45vh] flex items-end px-[5%] pt-28 md:pt-32 pb-10 md:pb-12 bg-[#F8F4EE] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[22vw] md:text-[18vw] text-[#C9A96E]/10 font-light pointer-events-none">
          Gallery
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-[10px] md:text-xs flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#C9A96E]"></span>
            Our Portfolio
          </div>

          <h1 className="text-4xl md:text-7xl font-light text-[#1C1A17] leading-tight">
            Spaces We've{" "}
            <em className="text-[#C9A96E] italic">
              Transformed
            </em>
          </h1>
        </div>
      </section>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 px-[5%] py-8 md:py-10 border-b border-[#E2D9CE]">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 md:px-6 py-2 md:py-3 uppercase tracking-[0.15em] text-[10px] md:text-xs border transition ${
              activeFilter === filter
                ? "bg-[#1C1A17] text-[#C9A96E] border-[#1C1A17]"
                : "border-[#E2D9CE] text-[#7A6E62] hover:border-[#C9A96E]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <section className="px-[5%] py-10 md:py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid relative overflow-hidden group cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className={`${item.height} w-full object-cover group-hover:scale-105 transition duration-700`}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#1C1A17]/0 group-hover:bg-[#1C1A17]/70 transition duration-300 flex items-end p-4 md:p-6">
                <div className="translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-xl md:text-2xl mb-2">
                    {item.title}
                  </h3>

                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-[#C9A96E]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-[#1C1A17] py-16 md:py-24 px-[5%]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 row-span-2 min-h-[300px] md:min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                alt="Main Project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-h-[140px] md:min-h-[200px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
                alt="Kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-h-[140px] md:min-h-[200px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693536294-233fb141754c?q=80&w=1200&auto=format&fit=crop"
                alt="Bedroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-[10px] md:text-xs flex items-center gap-4 mb-5">
              <span className="w-8 h-px bg-[#C9A96E]"></span>
              Featured Project
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
              The Nair Residence — A Study in Quiet Luxury
            </h2>

            <p className="text-white/60 leading-8 mb-10 text-sm md:text-base">
              A 4,200 sq ft home transformed into a sanctuary of restrained
              elegance inspired by Chettinad architecture and modern minimalism.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12">
              {[
                ["Location", "Coimbatore"],
                ["Area", "4,200 sq ft"],
                ["Category", "Luxury Residential"],
                ["Duration", "8 Months"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-t border-white/10 pt-4"
                >
                  <div className="uppercase tracking-[0.18em] text-[9px] md:text-[10px] text-white/40 mb-2">
                    {label}
                  </div>

                  <div className="text-[#C9A96E] text-lg md:text-xl">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#C9A96E] text-white uppercase tracking-[0.18em] text-[10px] md:text-xs hover:bg-[#b8914e] transition"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* LOAD MORE */}
      <div className="text-center py-12 md:py-16">
        <button className="px-8 md:px-10 py-3 md:py-4 border border-[#E2D9CE] uppercase tracking-[0.18em] text-[10px] md:text-xs text-[#7A6E62] hover:border-[#C9A96E] hover:text-[#C9A96E] transition">
          Load More Projects
        </button>
      </div>
    </div>
  )
}