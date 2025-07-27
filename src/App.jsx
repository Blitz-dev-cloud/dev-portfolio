import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "dark" : ""
      } transition-colors duration-500`}
    >
      <AnimatedBackground isDark={isDark} />
      <Navigation isDark={isDark} setIsDark={setIsDark} />

      <main>
        <HeroSection isDark={isDark} />
        <AboutSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
      <ScrollToTop isDark={isDark} />
    </div>
  );
};

export default App;
