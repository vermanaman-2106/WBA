import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/background.webp" 
            alt="Photographer at work" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Behind the <span className="accent-text">Lens</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              Crafting timeless wedding stories with cinematic elegance and authentic emotion
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Get In Touch</span>
            </a>
          </div>
        </div>
      </section>

          {/* About Content */}
          <section id="story" className="w-full px-4 sm:px-6 py-16 bg-gradient-to-br from-white to-amber-50">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden">
              <img 
                src="/about.webp" 
                alt="Photographer portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
              My Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm a Delhi-based wedding photographer with a passion for capturing the most 
                intimate and beautiful moments of your special day. With years of experience 
                in both traditional and destination weddings, I specialize in creating 
                cinematic, timeless imagery that tells your unique love story.
              </p>
              <p>
                My approach combines editorial elegance with authentic emotion, ensuring that 
                every photograph not only looks stunning but also captures the genuine feelings 
                and connections that make your wedding day truly special.
              </p>
              <p>
                From the bustling streets of Delhi to exotic destinations worldwide, I've had 
                the privilege of documenting love stories across diverse cultures and settings, 
                each one as unique and beautiful as the next.
              </p>
            </div>
            
            {/* Awards & Recognition */}
            <div className="mt-12 pt-8 border-t border-amber-200">
              <h3 className="text-xl font-medium mb-4 text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                Recognition
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-800">Wedding Photography Awards</div>
                  <div>Best Destination Wedding 2023</div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Featured Publications</div>
                  <div>WeddingSutra, ShaadiSaga</div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Client Reviews</div>
                  <div>50+ Five-Star Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Ready to Get Started Section */}
          <section className="w-full px-4 sm:px-6 py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to Get <span className="accent-text">Started?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's create beautiful memories together. I'd love to hear about your vision
            and help you plan the perfect photography experience for your special day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Start Your Journey</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-amber-300 text-gray-800 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-400 active:scale-95"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">View My Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


