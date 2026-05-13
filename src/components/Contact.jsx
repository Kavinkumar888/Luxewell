import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', project: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Contact us</p>
          <h2 className="section-title mb-5">
            Ready to begin your{' '}
            <span className="italic text-gold">transformation?</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Our studio is currently accepting select commissions for 2026. Let’s discuss the architectural potential of your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left – Info */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-dark mb-8">
              Visit our studio
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              By–appointment studio in Coimbatore, designed for relaxed architectural consultations and material curation. Please send a WhatsApp before visiting so we can prepare relevant samples for you.
            </p>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">Address</p>
                  <p className="text-sm text-gray-700">
                    123 Interior Street, R.S. Puram<br />
                    Coimbatore, Tamil Nadu 641002
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <a href="tel:+919876543210" className="text-sm text-gray-700 hover:text-gold transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:studio@kayalinteriors.com" className="text-sm text-gray-700 hover:text-gold transition-colors">
                    studio@kayalinteriors.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">Business Hours</p>
                  <p className="text-sm text-gray-700">
                    Monday – Saturday: 10:00 AM – 8:00 PM<br />
                    Sunday: 11:00 AM – 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right – Form */}
          <div className="bg-[#f7f5f2] p-8 md:p-10">
            <h3 className="font-playfair text-2xl font-semibold text-dark mb-8">
              Share your project details
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
                  Your name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
                  Phone / WhatsApp <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 00000 00000"
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
                  Project details <span className="text-gold">*</span>
                </label>
                <textarea
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your space, room size, style preferences..."
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              {sent && (
                <p className="text-sm text-green-600 font-medium bg-green-50 px-4 py-3 border border-green-200">
                  ✓ Enquiry sent! We will reply on WhatsApp shortly.
                </p>
              )}

              <button
                type="submit"
                className="btn-gold flex items-center justify-center gap-2 w-full py-4"
              >
                <Send size={15} />
                Send Enquiry
              </button>
              <p className="text-xs text-gray-400 text-center">
                We will reply on WhatsApp and can share photos, videos and options.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
