import FeatureCards from './components/FeatureCards';
import FeaturedBirds from './components/FeaturedBirds';
import Hero from './components/Hero';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <Hero />
        <FeatureCards />
        <FeaturedBirds />
      </main>
    </>
  )
}

export default App