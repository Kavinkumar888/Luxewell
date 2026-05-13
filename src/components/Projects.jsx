const projects = [
  {
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    title: 'Modern Living Room Makeover',
    desc: 'Geometric wallpaper behind the sofa adds depth and interest while keeping the colour palette calm and neutral.',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Bold Office Feature Wall',
    desc: 'A textured accent behind the desk creates a powerful backdrop for client calls and meetings.',
  },
  {
    img: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80',
    title: 'Dining Room Elegance',
    desc: 'Classic patterned wallpaper frames the dining table, turning everyday meals into an occasion.',
  },
  {
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    title: 'Luxe Powder Room Upgrade',
    desc: 'Deep floral wallpaper gives this compact washroom a dramatic, boutique‑hotel feel.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our complete project</p>
          <h2 className="section-title mb-5">
            Our <span className="italic text-gold">quality</span> work.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            A few examples of how we have used wallpaper to add depth, character and
            personality to Coimbatore spaces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ img, title, desc }) => (
            <div
              key={title}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {desc}
                </p>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
