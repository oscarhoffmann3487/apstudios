import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ModelShowcase from "@/components/ModelShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ServiceCards />
      <ModelShowcase />
      <ProjectShowcase />
      <Testimonials />
      <References />
      <Footer />
    </div>
  );
};

export default Index;