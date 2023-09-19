import { Build } from "./pages/build/Build";
import { Flexible1 } from "./pages/flexible/Flexible1";
import { Flexible2 } from "./pages/flexible/Flexible2";
import { Footer } from "./pages/footer/Footer";
import { Header } from "./pages/header/Header";
import { Intro } from "./pages/intro/Intro";
import { Power } from "./pages/power/Power";
import { Unlock } from "./pages/unlock/Unlock";
import { WhySetpoint } from "./pages/whysetpoint/WhySetpoint";

function App() {
  return (
    <div>
    <Header />
    <main className="">
      <Intro />
      <WhySetpoint />
      <Power />
      <Build />
      <Flexible1 />
      <Flexible2 />
      <Unlock />
      <Footer />
    </main>

    </div>
  );
}
export default App;
