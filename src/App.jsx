import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <Highlights />
    </main>
  );
};

export default App;
