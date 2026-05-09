// src/App.jsx
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import SorcerersSection from './components/SorcerersSection'
import VoidGallery from './components/VoidGallery'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SorcerersSection />
        <VoidGallery />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}