import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/20 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Brand Name with Glitch Effect */}
        <h1 
          className="text-6xl md:text-8xl font-orbitron font-black mb-6 glitch text-neon"
          data-text="THE ROTRIX"
        >
          THE ROTRIX
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-inter font-light mb-8 text-foreground/90">
          Anime Streetwear. <span className="text-accent font-semibold">Bold.</span>{" "}
          <span className="text-primary font-semibold">Retro.</span>{" "}
          <span className="text-accent font-semibold">You.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="btn-neon text-lg px-8 py-6"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Collection
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;