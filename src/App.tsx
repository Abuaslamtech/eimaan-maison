import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Skincare    from './components/Skincare'
import Consultation from './components/Consultation'
import Fragrance   from './components/Fragrance'
import Gifting     from './components/Gifting'
import Visit       from './components/Visit'
import CtaBanner   from './components/CtaBanner'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skincare />
        <Consultation />
        <Fragrance />
        <Gifting />
        <Visit />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
