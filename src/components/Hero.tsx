import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyberpunk-grid">
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Floating Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyber-blue/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-electric-pink/25 rounded-full blur-2xl animate-float delay-2000"></div>
        
        {/* Neon Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-yellow to-transparent opacity-50"></div>
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-30"></div>
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-electric-pink to-transparent opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-9xl font-orbitron font-black mb-6 glitch-cyberpunk text-neon-purple leading-none" data-text="THE ROTRIX">
            THE ROTRIX
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-yellow to-electric-pink mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl md:text-3xl text-foreground font-poppins font-light tracking-wide">
            <span className="text-neon-yellow">Anime Streetwear.</span>{" "}
            <span className="text-cyber-blue">Bold.</span>{" "}
            <span className="text-electric-pink">Retro.</span>{" "}
            <span className="text-neon-purple">You.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('products')}
            className="btn-cyberpunk px-10 py-5 text-lg"
          >
            Shop Collection
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-10 py-5 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-deep-black transition-all duration-300 rounded-lg font-bold uppercase tracking-wider text-lg hover:shadow-neon-purple"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-yellow rounded-full flex justify-center pulse-cyberpunk">
            <div className="w-1 h-3 bg-neon-yellow rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-purple opacity-50"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-yellow opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-blue opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric-pink opacity-50"></div>
    </section>
  );
};

export default Hero;