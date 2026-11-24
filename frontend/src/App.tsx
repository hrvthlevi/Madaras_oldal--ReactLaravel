import BirdFacts from "./components/BirdFacts";
import BirdSpecies from "./pages/BirdSpecies";
import FeatureCards from "./components/FeatureCards";
import FeaturedBirds from "./components/FeaturedBirds";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <BirdSpecies />
      </main>
    </>
  );
}

export default App;
