import { useEffect } from "react";
import Nav from "./components/Nav";
import Features from "./views/Features";
import Hero from "./views/Hero";
import Monitor from "./views/Monitor";
import Reviews from "./views/Reviews";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./views/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const App = () => {
  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="h-auto w-full bg-background font-primary">
      <Nav />
      <Hero />
      <Monitor />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
