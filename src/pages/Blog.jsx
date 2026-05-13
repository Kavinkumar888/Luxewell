export default function BlogPage() {
  const blogPosts = [
    {
      category: "Vastu & Wellness",
      title:
        "How Vastu Shastra Shapes Modern Home Design in Tamil Nadu",
      excerpt:
        "Ancient wisdom meets contemporary living — discover how our designers balance sacred geometry with modern aesthetics.",
      author: "Priya Sundaram",
      date: "8 Oct 2024",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Colour Theory",
      title:
        "The Psychology of Colour: Choosing the Right Palette for Each Room",
      excerpt:
        "Learn how different colours affect mood, perception of space, and wellbeing.",
      author: "Kavitha Ramaswamy",
      date: "1 Oct 2024",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Modular Design",
      title:
        "5 Modular Kitchen Mistakes Homeowners Make",
      excerpt:
        "A modular kitchen is a major investment. Avoid the most common design mistakes.",
      author: "Arjun Nair",
      date: "22 Sep 2024",
      image:
        "https://images.unsplash.com/photo-1505693536294-233fb141754c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Lighting Design",
      title:
        "Layered Lighting: The Secret to Magical Interiors",
      excerpt:
        "Ambient, task, and accent lighting transform ordinary rooms into beautiful experiences.",
      author: "Priya Sundaram",
      date: "14 Sep 2024",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Project Spotlight",
      title:
        "Behind the Design: Heritage Chettinad Residence",
      excerpt:
        "A look inside one of our most ambitious restoration projects.",
      author: "Kavitha Ramaswamy",
      date: "5 Sep 2024",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Sustainability",
      title:
        "Building Beautiful, Building Responsibly",
      excerpt:
        "Explore how sustainable materials and smart planning shape modern luxury interiors.",
      author: "Arjun Nair",
      date: "28 Aug 2024",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const popularPosts = [
    {
      title: "The Return of Warm Minimalism",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Layered Lighting: The Secret",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Vastu Shastra & Modern Homes",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Heritage Chettinad Residence",
      image:
        "https://images.unsplash.com/photo-1505693536294-233fb141754c?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <div className="bg-[#FDF9F4] overflow-x-hidden text-[#3D3830]">
      {/* HERO */}
      <section className="min-h-[42vh] flex items-end px-[5%] pt-32 pb-16 bg-[#1C1A17] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[18vw] text-[#C9A96E]/10 font-light pointer-events-none">
          Journal
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="uppercase tracking-[0.25em] text-[#C9A96E] text-xs flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#C9A96E]"></span>
            Design Insights
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            The Kayal{" "}
            <em className="text-[#C9A96E] italic">
              Design Journal
            </em>
          </h1>

          <p className="text-white/60 text-lg leading-8">
            Ideas, inspiration, and insider knowledge from our studio.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-[5%] py-20">
        <div className="grid lg:grid-cols-2 border border-[#E2D9CE] overflow-hidden">
          {/* IMAGE */}
          <div className="min-h-[500px] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
              alt="Featured Blog"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-6 left-6 bg-[#C9A96E] text-white px-5 py-2 text-[10px] uppercase tracking-[0.2em]">
              Featured
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-[#F8F4EE] p-10 md:p-16 flex flex-col justify-between">
            <div>
              <div className="uppercase tracking-[0.2em] text-[#C9A96E] text-xs mb-4">
                Design Trends · 2024
              </div>

              <h2 className="text-4xl font-light text-[#1C1A17] leading-tight mb-6">
                The Return of Warm Minimalism
              </h2>

              <p className="text-[#7A6E62] leading-8 mb-8">
                Minimalism is evolving into spaces that feel warm,
                inviting, and deeply human.
              </p>

              <div className="flex items-center gap-5 mb-10">
                <div className="w-12 h-12 rounded-full bg-[#E8D5B0] flex items-center justify-center text-sm font-medium text-[#7A5C30]">
                  KR
                </div>

                <div>
                  <div className="text-sm font-medium text-[#1C1A17]">
                    Kavitha Ramaswamy
                  </div>

                  <div className="text-xs text-[#7A6E62]">
                    15 October, 2024
                  </div>
                </div>

                <div className="ml-auto border border-[#E2D9CE] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#7A6E62]">
                  8 min read
                </div>
              </div>
            </div>

            <button className="w-fit px-10 py-4 bg-[#1C1A17] text-white uppercase tracking-[0.18em] text-xs hover:bg-[#C9A96E] transition">
              Read Article
            </button>
          </div>
        </div>
      </section>

      {/* BLOG + SIDEBAR */}
      <section className="max-w-7xl mx-auto px-[5%] pb-24 grid lg:grid-cols-[1fr_320px] gap-20">
        {/* BLOGS */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E2D9CE] pb-6 mb-10 gap-5">
            <h3 className="text-4xl font-light text-[#1C1A17]">
              Latest Articles
            </h3>

            <div className="flex flex-wrap gap-3">
              {["All", "Trends", "Tips", "Projects"].map(
                (item) => (
                  <button
                    key={item}
                    className="px-5 py-2 border border-[#E2D9CE] uppercase tracking-[0.12em] text-[11px] text-[#7A6E62] hover:border-[#C9A96E] hover:text-[#C9A96E] transition"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/10] mb-5 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-[#1C1A17]/0 group-hover:bg-[#1C1A17]/20 transition"></div>
                </div>

                <div className="uppercase tracking-[0.2em] text-[#C9A96E] text-[10px] mb-3">
                  {post.category}
                </div>

                <h4 className="text-2xl leading-snug mb-4 group-hover:text-[#C9A96E] transition">
                  {post.title}
                </h4>

                <p className="text-[#7A6E62] text-sm leading-7 mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-[#7A6E62]">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-3 mt-16">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 border text-sm transition ${
                  num === 1
                    ? "bg-[#1C1A17] border-[#1C1A17] text-[#C9A96E]"
                    : "border-[#E2D9CE] text-[#7A6E62] hover:border-[#C9A96E]"
                }`}
              >
                {num}
              </button>
            ))}

            <button className="w-10 h-10 border border-[#E2D9CE] text-[#7A6E62] hover:border-[#C9A96E]">
              →
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside>
          {/* SEARCH */}
          <div className="mb-14">
            <h4 className="text-2xl mb-6 border-b border-[#E2D9CE] pb-4">
              Search
            </h4>

            <div className="flex border border-[#E2D9CE]">
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-1 px-4 py-3 bg-transparent outline-none"
              />

              <button className="px-5 bg-[#C9A96E] text-white">
                →
              </button>
            </div>
          </div>

          {/* POPULAR POSTS */}
          <div className="mb-14">
            <h4 className="text-2xl mb-6 border-b border-[#E2D9CE] pb-4">
              Popular Posts
            </h4>

            <div className="space-y-6">
              {popularPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="w-20 h-16 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h5 className="text-lg hover:text-[#C9A96E] cursor-pointer transition">
                      {post.title}
                    </h5>

                    <p className="text-xs text-[#7A6E62] mt-1">
                      15 Oct 2024
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="mb-14">
            <h4 className="text-2xl mb-6 border-b border-[#E2D9CE] pb-4">
              Topics
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "Trends",
                "Vastu",
                "Lighting",
                "Kitchen",
                "Bedroom",
                "Commercial",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-[#E2D9CE] text-xs uppercase tracking-[0.12em] text-[#7A6E62] hover:border-[#C9A96E] hover:text-[#C9A96E] cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="bg-[#1C1A17] p-10">
            <h4 className="text-3xl text-white mb-4">
              Stay Inspired
            </h4>

            <p className="text-white/50 text-sm leading-7 mb-8">
              Join our monthly newsletter for design inspiration and
              project reveals.
            </p>

            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none mb-4"
            />

            <button className="w-full py-4 bg-[#C9A96E] text-white uppercase tracking-[0.18em] text-xs hover:bg-[#b8914e] transition">
              Subscribe →
            </button>
          </div>
        </aside>
      </section>
    </div>
  )
}