import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 nav-cyberpunk ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <h1 
              className="text-2xl md:text-3xl font-orbitron font-black text-neon-yellow glitch-cyberpunk"
              data-text="ROTRIX"
            >
              ROTRIX
            </h1>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-yellow to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-neon-yellow transition-colors duration-300 font-poppins font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-neon-yellow transition-colors duration-300 font-poppins font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-foreground hover:text-neon-yellow transition-colors duration-300 font-poppins font-medium"
          >
            Collection
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-neon-yellow transition-colors duration-300 font-poppins font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-neon-yellow hover:text-neon-purple transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Neon Line Effect */}
      <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
        <div className="neon-line w-full"></div>
      </div>
    </nav>
  );
};

export default Navigation;