import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CompanyLogos from './components/CompanyLogos'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import WorkingProcess from './components/WorkingProcess'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Services />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
