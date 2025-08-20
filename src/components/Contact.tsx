const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            Have questions about our anime streetwear? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card-electric p-6">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-primary">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-foreground/70">
                      123 Anime Street, Cyber District<br/>
                      Neo Tokyo, India - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-foreground/70">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl">✉️</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-foreground/70">hello@therotrix.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl">🕒</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-foreground/70">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br/>
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <div className="card-electric p-6">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-primary">
                Quick Info
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                  <p className="text-sm text-foreground/70">
                    Free delivery across India within 3-5 business days
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Easy Returns</h4>
                  <p className="text-sm text-foreground/70">
                    7-day hassle-free return policy for all products
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Customer Support</h4>
                  <p className="text-sm text-foreground/70">
                    24/7 customer support via WhatsApp and email
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Secure Payment</h4>
                  <p className="text-sm text-foreground/70">
                    COD and UPI payments accepted with secure processing
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-electric p-6">
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-primary">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors duration-300 cursor-pointer">
                  <span className="text-accent text-xl">📷</span>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors duration-300 cursor-pointer">
                  <span className="text-accent text-xl">📘</span>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors duration-300 cursor-pointer">
                  <span className="text-accent text-xl">🐦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;