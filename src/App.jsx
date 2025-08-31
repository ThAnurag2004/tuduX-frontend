
import Feature from './components/Feature'
import FrequentQuestion from './components/Faq'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Simulation from './components/Simulation'
import Footer from './components/Footer'


function App() {
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

export default App
