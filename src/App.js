import StickyCard from "./components/cards/StickyCard";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parralax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/service/Service";
import Skills from "./components/stack/Skills";
import TechStack from "./components/stack/Skills";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-[#0E0900] text-gray-300 font-sans">
      <Cursor />
      <div className="scroll-container overflow-y-auto snap-y snap-mandatory">
        <section id="Homepage" className="snap-start h-screen w-full overflow-hidden">
          <Navbar />
          <Hero />
        </section>
        <section id="Services" className="snap-start h-screen w-full overflow-hidden">
          <Parallax type="services" />
        </section>
        <section className="snap-start h-screen w-full overflow-hidden">
          <Service />
        </section>
        <section className="snap-start h-screen w-full overflow-hidden">
          <Skills />
        </section>
        <section id="Portfolio" className="snap-start h-screen w-full overflow-hidden">
          <Parallax type="Portfolio" />
        </section>
      
          <Portfolio />
       
      </div>
  
    </div>
  );
};

export default App;
