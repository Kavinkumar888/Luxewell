import { ArrowRight } from 'lucide-react'

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Wallpapering',
    date: '16 Aug',
    title: 'Texture, tone & trends: what\'s hot in wallpaper design.',
    excerpt:
      'Learn how to choose wallpaper textures and colours that feel current but won\'t go out of style in a year.',
  },
  {
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
    category: 'Client Stories',
    date: '22 Aug',
    title: 'Client spotlight: elegant dining room transformation.',
    excerpt:
      'See how one simple patterned wall and warm lighting created a restaurant‑style atmosphere at home.',
  },
  {
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    category: 'Wallpapering',
    date: '25 Aug',
    title: 'What it\'s really like to work with a wallpaper pro.',
    excerpt:
      'A walkthrough of the full process – from first call to final inspection – so you know what to expect.',
  },
]

export default function Blog() {
  return (
    <section className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">From the studio</p>
          <h2 className="section-title mb-5">
            Everything you need to know about{' '}
            <span className="italic text-gold">wallpapering.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ img, category, date, title, excerpt }) => (
            <div
              key={title}
              className="bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-gold bg-gold/10 px-2.5 py-1">
                    {category}
                  </span>
                  <span className="text-xs text-gray-400">{date}</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-dark mb-3 leading-snug group-hover:text-gold transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{excerpt}</p>
                <span className="text-xs font-semibold text-gold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Read more <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
