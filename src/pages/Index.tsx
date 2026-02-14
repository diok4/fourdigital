import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ProjectTypes from "@/components/ProjectTypes";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <ProjectTypes />
        <Portfolio />
        <Testimonials />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
