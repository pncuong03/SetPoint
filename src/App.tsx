import { Navbar } from "./pages/navbar/Navbar";
import { Hero } from "./pages/hero/Hero";
import { Howto } from "./pages/howto/Howto";
import { Intro } from "./pages/intro/Intro";
import { Tokenomic } from "./pages/tokenomic/Tokenomic";
import { Roadmap } from "./pages/roadmap/Roadmap";
import { Partner } from "./pages/partner/Partner";
import { Footer } from "./pages/footer/Footer";

function App() {
  return (
    <main className="bg-heroBg bg-no-repeat  lg:bg-cover lg:bg-fixed w-[100%]">
      <div className="bg-heroHd bg-no-repeat md:bg-cover lg:bg-contain">
        <Navbar />
        <Hero />
      </div>
      <Intro />
      <div className="bg-tokenomicBg bg-no-repeat bg-cover ">

      <Tokenomic />
      </div>
      
        <Howto />
      <div className="bg-roadmapBg bg-no-repeat bg-cover">
        <Roadmap />
      </div>

      <Partner />
      <Footer />
    </main>
  );
}
export default App;
