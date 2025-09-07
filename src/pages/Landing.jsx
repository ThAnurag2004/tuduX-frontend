import React from 'react'
import Feature from '../components/Landing/Feature'
import FrequentQuestion from '../components/Landing/Faq'
import Hero from '../components/Landing/Hero'
import Navbar from '../components/Landing/Navbar'
import Simulation from '../components/Landing/Simulation'
import Footer from '../components/Landing/Footer'

export const Landing = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <section className="py-20">
        <Hero />
      </section>
      <section className="py-20">
        <Feature />
      </section>
      <section className='py-20 px-4'>
        <Simulation />
      </section>
      <section className='py-20'>
        <FrequentQuestion />
      </section>
      <section className=''>
        <Footer />
      </section>
    </div>
  )
}
