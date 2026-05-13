import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import GalleryPage from './pages/Gallery'
import Contact from './pages/Contact'

function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Process />
      <Testimonials />
    </>
  )
}

function AboutPage() {
  return <About />
}

function ServicesPage() {
  return <Services />
}

function Gallery() {
  return <GalleryPage />
}

function ProjectsPage() {
  return <Projects />
}

function BlogPage() {
  return <Blog />
}

function ContactPage() {
  return <Contact />
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FDF9F4]">
        {/* HEADER */}
        <TopBar />
        <Navbar />

        {/* ROUTES */}
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* ABOUT */}
          <Route path="/about" element={<AboutPage />} />

          {/* SERVICES */}
          <Route path="/services" element={<ServicesPage />} />

          {/* GALLERY */}
          <Route path="/gallery" element={<Gallery />} />

          {/* PROJECTS */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* BLOG */}
          <Route path="/blog" element={<BlogPage />} />

          {/* CONTACT */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* FOOTER */}
        <Footer />

        {/* FLOAT BUTTON */}
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}