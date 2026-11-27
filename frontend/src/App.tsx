import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirdFacts from "./components/BirdFacts";
import BirdSpecies from "./pages/BirdSpecies";
import FeatureCards from "./components/FeatureCards";
import FeaturedBirds from "./components/FeaturedBirds";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BirdDetails from "./pages/BirdDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <Routes>
          <Route path="/" element={<BirdSpecies />} />
          <Route path="/madarak" element={<BirdSpecies />} />
          <Route path="/madarak/:slug" element={<BirdDetails />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
