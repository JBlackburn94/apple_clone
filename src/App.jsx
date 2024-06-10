import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <Highlights />
      <Features />
    </main>
  );
};

export default App;
