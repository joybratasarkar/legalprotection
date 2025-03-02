import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
// import Testimonials from "./components/Testimonials";
import Contact from "../components/ContactForm";
import AboutDetails from "../components/AboutDetails";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
    return (
        <div>
            {/* <Hero /> */}
            <AboutDetails />
            <About />
            <Services />
            <WhyChooseUs />
            {/* <Testimonials /> */}
            {/* <Contact /> */}
        </div>
    );
}
