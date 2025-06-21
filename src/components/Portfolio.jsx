import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
// import Contact from "./Contact";
import Footer from "./Footer";
import AboutSection from "./About";
import ProjectsSection from "./Projects";
import { useState , useEffect} from "react";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative">
      <Navbar 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Portfolio;