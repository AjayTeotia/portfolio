{
  /*Import Components*/
}
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

{
  /*Speed Insights*/
}
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Background Gradient */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Container */}
      <div className="container mx-auto">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Technologies */}
        <Technologies />

        {/* Experiences */}
        <Experiences />

        {/* Project */}
        <Project />

        {/* Contact */}
        <Contact />
      </div>

      {/* Speed Insights */}
      <SpeedInsights />
    </div>
  );
};

export default App;
