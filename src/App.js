import HeroSection from "./component/HeroSection";
import IntroductionPart from "./component/introPart/IntroductionPart";
import Navbar from "./component/Navbar";
import ServicesPart from "./component/service/ServicesPart";

function App() {
   return (
      <div className="bg-[#f5f5f5]">
         <Navbar />
         <HeroSection />
         <ServicesPart />
         <IntroductionPart />
      </div>
   );
}

export default App;
