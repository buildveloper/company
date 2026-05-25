import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Moon, Sun, ShieldCheck, Phone, Mail, MapPin, Star, CheckCircle2 } from 'lucide-react'

const services = [
  ['Driveway Replacement', 'Remove failing slabs and install reinforced driveways engineered for Georgia movement, drainage, and long-term curb appeal.'],
  ['Patios & Extensions', 'Create custom outdoor living spaces with clean finishing, optional decorative borders, and seamless flow from home to yard.'],
  ['Stamped Concrete', 'Luxury decorative concrete that replicates natural stone or brick with custom patterns and color accents.'],
  ['Sidewalks & Steps', 'Safe, code-conscious walkways and steps with precision slope and stable footings.'],
  ['Foundations & Slabs', 'Reliable concrete slabs and foundational pours for residential structures and additions.'],
  ['Retaining Walls', 'Structural and aesthetic retaining solutions that control grade changes while elevating property value.']
]

const testimonials = [
  '“Great service and price... Jimmy and his crew got the job done quickly. Highly recommended.” — R.F., Gainesville (Mar 14, 2025)',
  '“Veteran-run Concrete Professionals did an exceptional job at very reasonable prices.” — A.P., Gainesville (Jan 8, 2025)',
  '“The basketball court in my backyard was a hot mess. I wish I had called Concrete Professionals to do it originally.” — Gregory L., BBB (Nov 23, 2025)'
]

function App(){
  const [dark,setDark]=React.useState(()=>localStorage.getItem('theme')!=='light')
  React.useEffect(()=>{document.documentElement.classList.toggle('dark',dark);localStorage.setItem('theme',dark?'dark':'light')},[dark])
  return <div className='bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300'>
    <header className='sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800'>
      <nav className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div><p className='font-semibold tracking-wide'>Concrete Professionals</p><p className='text-xs text-amber-500'>Honoring All Who Served</p></div>
        <div className='flex items-center gap-3'>
          <a href='#contact' className='px-4 py-2 rounded-full bg-amber-500 text-black font-semibold'>Free Estimate</a>
          <button aria-label='toggle theme' onClick={()=>setDark(v=>!v)} className='p-2 rounded-full border border-zinc-300 dark:border-zinc-700'>{dark?<Sun size={18}/>:<Moon size={18}/>}</button>
        </div>
      </nav>
    </header>
    <section className='max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12'>
      <div>
        <p className='uppercase text-sm tracking-[0.2em] text-amber-500'>Buford & Gainesville, GA</p>
        <h1 className='text-4xl md:text-6xl font-bold leading-tight mt-3'>Premium Veteran-Owned Concrete Craftsmanship Built to Last.</h1>
        <p className='mt-5 text-zinc-700 dark:text-zinc-300'>For nearly 9 years, Army veteran Jimmy Buckland and team have delivered high-integrity concrete work for homeowners who demand precision, reliability, and professional communication from start to finish.</p>
        <div className='mt-7 flex flex-wrap gap-3'>
          <a href='tel:6783277025' className='btn'><Phone size={16}/> (678) 327-7025</a>
          <a href='#services' className='btn-ghost'>View Services</a>
        </div>
      </div>
      <div className='rounded-3xl p-6 bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800'>
        <h3 className='text-xl font-semibold mb-4'>Why Homeowners Choose Us</h3>
        {['A+ BBB Rating & Accredited (2025)','355 Facebook reviews with 98% recommendation rate','85 Nextdoor recommendations across North Georgia','Cash, check, and card accepted'].map(i=><p key={i} className='flex items-start gap-2 mb-3'><ShieldCheck className='text-amber-500 mt-1' size={16}/>{i}</p>)}
      </div>
    </section>

    <section id='services' className='max-w-7xl mx-auto px-4 py-16'>
      <h2 className='text-3xl font-bold mb-8'>Concrete Services</h2>
      <div className='grid md:grid-cols-3 gap-6'>{services.map(([t,d])=><article key={t} className='card'><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className='max-w-7xl mx-auto px-4 py-16'>
      <h2 className='text-3xl font-bold mb-8'>Service Areas</h2>
      <p>Primary coverage includes Buford, Gainesville, Hall County, and Gwinnett County — with project support across surrounding North Georgia communities.</p>
    </section>

    <section className='max-w-7xl mx-auto px-4 py-16'>
      <h2 className='text-3xl font-bold mb-8'>Client Testimonials</h2>
      <div className='space-y-4'>{testimonials.map(t=><blockquote key={t} className='card flex items-start gap-3'><Star className='text-amber-500 mt-1'/><p>{t}</p></blockquote>)}</div>
    </section>

    <section className='max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8'>
      <div className='card'><h2 className='text-2xl font-bold mb-4'>Frequently Asked Questions</h2><ul className='space-y-3 text-sm'>
        <li><b>Do you offer free estimates?</b><br/>Yes. We provide fast, no-obligation estimates with transparent scope recommendations.</li>
        <li><b>Can you replace existing cracked concrete?</b><br/>Absolutely. We demolish failing sections and repour reinforced slabs designed for longevity.</li>
        <li><b>Do you offer decorative concrete?</b><br/>Yes, including stamped concrete finishes for patios, walkways, and driveways.</li>
      </ul></div>
      <div id='contact' className='card'><h2 className='text-2xl font-bold mb-4'>Get Your Estimate</h2>
        <form className='space-y-3'>
          <input className='input' placeholder='Full Name'/><input className='input' placeholder='Phone'/><input className='input' placeholder='Email'/><textarea className='input min-h-28' placeholder='Tell us about your project'></textarea>
          <button className='w-full py-3 rounded-xl bg-amber-500 text-black font-semibold'>Request Quote</button>
        </form>
      </div>
    </section>

    <footer className='border-t border-zinc-200 dark:border-zinc-800 mt-16'>
      <div className='max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm'>
        <div><p className='font-semibold mb-2'>Concrete Professionals</p><p>Veteran-owned concrete specialists serving Buford and Gainesville.</p></div>
        <div className='space-y-2'><p className='flex gap-2'><Phone size={14}/>(678) 327-7025 / (470) 618-6658</p><p className='flex gap-2'><Mail size={14}/>jbuckland37@yahoo.com</p><p className='flex gap-2'><MapPin size={14}/>Gainesville, Georgia</p></div>
        <div><p className='font-semibold mb-2'>SEO Keywords</p><p>concrete contractor Buford GA, driveway replacement Gainesville, stamped concrete contractor near me, veteran owned concrete company Georgia</p></div>
      </div>
    </footer>

    <a href='tel:6783277025' className='fixed bottom-4 right-4 bg-amber-500 text-black font-semibold px-5 py-3 rounded-full shadow-2xl'>Call Now</a>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
