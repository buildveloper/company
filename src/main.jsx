import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Moon, Sun, ShieldCheck, Phone, Mail, MapPin, Star, ArrowRight, Hammer } from 'lucide-react'

const services = [
  {
    title: 'Driveway Replacement',
    description:
      'Remove failing slabs and install reinforced driveways engineered for Georgia movement, drainage, and long-term curb appeal.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Patios & Extensions',
    description:
      'Create custom outdoor living spaces with clean finishing, optional decorative borders, and seamless flow from home to yard.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Stamped Concrete',
    description:
      'Luxury decorative concrete that replicates natural stone or brick with custom patterns and color accents.',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sidewalks & Steps',
    description:
      'Safe, code-conscious walkways and steps with precision slope and stable footings.',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Foundations & Slabs',
    description:
      'Reliable concrete slabs and foundational pours for residential structures and additions.',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Retaining Walls',
    description:
      'Structural and aesthetic retaining solutions that control grade changes while elevating property value.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80'
  }
]

const beforeAfter = [
  {
    title: 'Cracked Driveway to Premium Finish',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Worn Patio to Outdoor Living Space',
    before: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1200&q=80'
  }
]

const testimonials = [
  '“Great service and price... Jimmy and his crew got the job done quickly. Highly recommended.” — R.F., Gainesville (Mar 14, 2025)',
  '“Veteran-run Concrete Professionals did an exceptional job at very reasonable prices.” — A.P., Gainesville (Jan 8, 2025)',
  '“The basketball court in my backyard was a hot mess. I wish I had called Concrete Professionals to do it originally.” — Gregory L., BBB (Nov 23, 2025)'
]

function App() {
  const [dark, setDark] = React.useState(() => localStorage.getItem('theme') !== 'light')
  const [slide, setSlide] = React.useState(0)

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  React.useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 4200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-500'>
      <header className='sticky top-0 z-50 backdrop-blur bg-white/65 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800'>
        <nav className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
          <a href='#top' className='group'>
            <p className='font-semibold tracking-wide group-hover:text-amber-500 transition-colors'>Concrete Professionals</p>
            <p className='text-xs text-amber-500'>Honoring All Who Served</p>
          </a>
          <div className='flex items-center gap-3'>
            <a href='#contact' className='px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-all hover:-translate-y-0.5'>Free Estimate</a>
            <button aria-label='toggle theme' onClick={() => setDark((v) => !v)} className='p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:rotate-12 transition-transform'>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          </div>
        </nav>
      </header>

      <section id='top' className='relative overflow-hidden'>
        <img src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=80' alt='Premium concrete construction project' className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-900/70 to-zinc-900/30' />
        <div className='relative max-w-7xl mx-auto px-4 py-24 md:py-36 grid md:grid-cols-2 gap-12'>
          <div className='animate-fade-up'>
            <p className='uppercase text-sm tracking-[0.2em] text-amber-400'>Buford & Gainesville, GA</p>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight mt-3 text-white'>Luxury Concrete Craftsmanship. Military-Level Standards.</h1>
            <p className='mt-5 text-zinc-200'>For nearly 9 years, Army veteran Jimmy Buckland and team have delivered high-integrity concrete work for homeowners who demand precision, reliability, and professional communication from start to finish.</p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <a href='tel:6783277025' className='btn'><Phone size={16} /> (678) 327-7025</a>
              <a href='#services' className='btn-ghost text-white border-white/40 hover:bg-white/10'>View Services <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className='rounded-3xl p-6 bg-white/10 dark:bg-zinc-900/40 backdrop-blur border border-white/20 animate-fade-up delay-150'>
            <h3 className='text-xl font-semibold mb-4 text-white'>Why Homeowners Choose Us</h3>
            {[
              'A+ BBB Rating & Accredited (2025)',
              '355 Facebook reviews with 98% recommendation rate',
              '85 Nextdoor recommendations across North Georgia',
              'Cash, check, and card accepted'
            ].map((i) => (
              <p key={i} className='flex items-start gap-2 mb-3 text-zinc-100'>
                <ShieldCheck className='text-amber-400 mt-1' size={16} />
                {i}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id='services' className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold mb-8'>Concrete Services</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((item, idx) => (
            <article key={item.title} className='card reveal' style={{ animationDelay: `${idx * 90}ms` }}>
              <img src={item.image} alt={item.title} className='w-full h-44 object-cover rounded-xl mb-4' loading='lazy' />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold mb-8'>Before & After Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {beforeAfter.map((project) => (
            <article key={project.title} className='card reveal'>
              <h3 className='mb-4'>{project.title}</h3>
              <div className='grid grid-cols-2 gap-3'>
                <figure>
                  <img src={project.before} alt={`${project.title} before`} className='rounded-xl h-44 w-full object-cover' loading='lazy' />
                  <figcaption className='text-xs mt-2 text-zinc-500 dark:text-zinc-400'>Before</figcaption>
                </figure>
                <figure>
                  <img src={project.after} alt={`${project.title} after`} className='rounded-xl h-44 w-full object-cover' loading='lazy' />
                  <figcaption className='text-xs mt-2 text-zinc-500 dark:text-zinc-400'>After</figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold mb-8'>Client Testimonials</h2>
        <div className='card min-h-32 relative overflow-hidden'>
          {testimonials.map((t, i) => (
            <blockquote key={t} className={`absolute inset-0 p-6 flex items-start gap-3 transition-all duration-700 ${i === slide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
              <Star className='text-amber-500 mt-1 shrink-0' />
              <p>{t}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8'>
        <div className='card reveal'>
          <h2 className='text-2xl font-bold mb-4'>Frequently Asked Questions</h2>
          <ul className='space-y-3 text-sm'>
            <li><b>Do you offer free estimates?</b><br />Yes. We provide fast, no-obligation estimates with transparent scope recommendations.</li>
            <li><b>Can you replace existing cracked concrete?</b><br />Absolutely. We demolish failing sections and repour reinforced slabs designed for longevity.</li>
            <li><b>Do you offer decorative concrete?</b><br />Yes, including stamped concrete finishes for patios, walkways, and driveways.</li>
          </ul>
        </div>
        <div id='contact' className='card reveal'>
          <h2 className='text-2xl font-bold mb-4'>Get Your Estimate</h2>
          <form className='space-y-3'>
            <input className='input' placeholder='Full Name' />
            <input className='input' placeholder='Phone' />
            <input className='input' placeholder='Email' />
            <textarea className='input min-h-28' placeholder='Tell us about your project' />
            <button className='w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-colors'>Request Quote</button>
          </form>
        </div>
      </section>

      <footer className='border-t border-zinc-200 dark:border-zinc-800 mt-16'>
        <div className='max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm'>
          <div>
            <p className='font-semibold mb-2'>Concrete Professionals</p>
            <p>Veteran-owned concrete specialists serving Buford and Gainesville.</p>
          </div>
          <div className='space-y-2'>
            <p className='flex gap-2'><Phone size={14} />(678) 327-7025 / (470) 618-6658</p>
            <p className='flex gap-2'><Mail size={14} />jbuckland37@yahoo.com</p>
            <p className='flex gap-2'><MapPin size={14} />Gainesville, Georgia</p>
          </div>
          <div>
            <p className='font-semibold mb-2'>SEO Keywords</p>
            <p>concrete contractor Buford GA, driveway replacement Gainesville, stamped concrete contractor near me, veteran owned concrete company Georgia</p>
          </div>
        </div>
      </footer>

      <a href='tel:6783277025' className='fixed bottom-4 right-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-3 rounded-full shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center gap-2'>
        <Hammer size={16} /> Call Now
      </a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
