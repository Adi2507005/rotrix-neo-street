const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon">
            About The Rotrix
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-semibold text-accent">
              Gen Z's Anime Revolution
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The Rotrix was born from the fusion of anime culture and streetwear rebellion. 
              We create bold, retro-futuristic clothing that speaks to the digital generation - 
              those who grew up with manga, mecha, and neon-lit cityscapes.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Every piece combines high-quality materials with cutting-edge anime-inspired 
              graphics, creating streetwear that's not just clothing - it's a statement of 
              identity for the bold and fearless.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-primary">100%</div>
                <div className="text-sm text-foreground/70">Original Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-accent">24/7</div>
                <div className="text-sm text-foreground/70">Anime Vibes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-primary">₹799+</div>
                <div className="text-sm text-foreground/70">Affordable Price</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-electric p-8">
              <h4 className="text-xl font-orbitron font-semibold mb-4 text-primary">
                Why Choose The Rotrix?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-3">⚡</span>
                  <span>Bold anime graphics that stand out in any crowd</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">🎌</span>
                  <span>Retro-futuristic designs inspired by Japanese culture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">💯</span>
                  <span>Premium quality materials at affordable prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">🚀</span>
                  <span>Fast delivery across India with easy returns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;