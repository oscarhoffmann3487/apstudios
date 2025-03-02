
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ModelShowcase from "@/components/ModelShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#222324] text-white">
      <Navbar />
      <Hero />
      <ServiceCards />
      <ModelShowcase />
      <ProjectShowcase />
      <Testimonials />
      <References />
      <ContactForm />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
