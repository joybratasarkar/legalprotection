import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import LegalPractices from './components/LegalPractices'
import PhilosophySection from './components/PhilosophySection'
export default function Home() {
  return (
    <div>
      <Hero /> 
      {/* <About /> */}
      <LegalPractices/>
      <PhilosophySection/>
    </div>
  );
}
