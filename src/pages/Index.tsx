
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
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
  const location = useLocation();
  const { language } = useLanguage();
  const seo = translations[language].seo.home;

  useEffect(() => {
    if (location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#222324] text-white">
      <Seo title={seo.title} description={seo.description} path="/" />
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
