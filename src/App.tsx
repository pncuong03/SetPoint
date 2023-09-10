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
    <main className="bg-heroBg bg-no-repeat lg:bg-cover lg:bg-fixed w-[100%] lg:bg-contain">
      <div className="bg-heroHd bg-no-repeat md:bg-cover lg:bg-contain">
        <Navbar />
        <Hero />
      </div>

      <Intro />
      <Tokenomic />
      <div className="bg-roadmapBg bg-no-repeat md:bg-cover lg:bg-contain">
        <Howto />
        <Roadmap />
      </div>

      <Partner />
      <Footer />
    </main>
  );
}
export default App;
