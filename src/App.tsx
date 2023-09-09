
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
    <main className="bg-heroBg bg-no-repeat bg-cover w-full">
      {/* className="bg-heroBg bg-no-repeat bg-cover w-full" */}
      <div className="bg-heroHd bg-no-repeat bg-cover">
        <Navbar/>
        <Hero />
      </div>
      
      <Intro />
      <Tokenomic />
      <Howto/>
      <Roadmap/>
      <Partner />
      <Footer/>
    </main>
    // <Routes>
    //   <Route path="/" element={<Slide1691 />} />
    // </Routes>
  );
}
export default App;
