"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function HomePage() {
  const heroReveal = useReveal();
  const aboutReveal = useReveal();
  const featuredReveal = useReveal();
  const testimonialsReveal = useReveal();
  const ctaReveal = useReveal();


  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-screen w-full overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ zIndex: -1 }}
          >
            <source src="/homebackground.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/background.webp"
              alt="Wedding Photography Background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-center opacity-30"
              style={{ zIndex: -2 }}
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />

          {/* Content */}
          <div
            ref={heroReveal.ref}
            className={`relative h-full flex items-center justify-center px-6 transition-all duration-1000 ${
              heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-4xl text-center">
              {/* Main Heading */}
              <div className="mb-8">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-none tracking-tight opacity-0 translate-y-8 animate-fade-in-up"
                  style={{
                    fontFamily: "var(--font-heading)",
                    animationDelay: "0.3s",
                    animationFillMode: "forwards"
                  }}
                >
                  <span className="block">Weddings</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-thin text-amber-300 mt-2 tracking-widest">
                    BY ARTISTIC
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide opacity-0 translate-y-8 animate-fade-in-up"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards"
                }}
              >
                Capturing timeless moments with artistic vision and elegant simplicity
              </p>

              {/* Decorative Line */}
              <div
                className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 opacity-0 translate-y-8 animate-fade-in-up"
                style={{
                  animationDelay: "0.9s",
                  animationFillMode: "forwards"
                }}
              />

              {/* CTA Buttons */}
              <div
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 translate-y-8 animate-fade-in-up"
                style={{
                  animationDelay: "1.2s",
                  animationFillMode: "forwards"
                }}
              >
                <Link
                  href="/portfolio"
                  className="group relative px-8 py-4 text-white border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/5 backdrop-blur-sm min-w-[200px]"
                >
                  <span className="relative z-10 font-light tracking-wide group-hover:tracking-wider transition-all duration-300">
                    View Our Work
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 text-black font-medium transition-all duration-500 hover:scale-105 min-w-[200px]"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <span className="relative z-10 tracking-wide group-hover:tracking-wider transition-all duration-300">
                    Start Your Story
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Location Badge */}
              <div
                className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 opacity-0 translate-y-8 animate-fade-in-up"
                style={{
                  animationDelay: "1.5s",
                  animationFillMode: "forwards"
                }}
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Based in Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-8 animate-fade-in-up"
            style={{
              animationDelay: "1.8s",
              animationFillMode: "forwards"
            }}
          >
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-xs font-light tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" ref={aboutReveal.ref} className={`w-full px-4 sm:px-6 py-20 bg-gradient-to-br from-white to-amber-50 transition-all duration-1000 ${
        aboutReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Portrait Image */}
            <div className="order-2 md:order-1">
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden hover-lift group">
          <Image
                  src="/about.webp"
                  alt="Photographer portrait"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl mb-8 text-gray-800 animate-fade-in-up delay-200" style={{ fontFamily: "var(--font-heading)" }}>
                Behind the <span className="accent-text">Lens</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="animate-fade-in-up delay-300">
                  I'm a Delhi-based wedding photographer with a passion for capturing the most
                  intimate and beautiful moments of your special day. With years of experience
                  in both traditional and destination weddings, I specialize in creating
                  cinematic, timeless imagery that tells your unique love story.
                </p>
                <p className="animate-fade-in-up delay-400">
                  My approach combines editorial elegance with authentic emotion, ensuring that
                  every photograph not only looks stunning but also captures the genuine feelings
                  and connections that make your wedding day truly special.
                </p>
              </div>

              <div className="mt-8 animate-fade-in-up delay-500">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-95 hover-glow"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <span className="group-hover:tracking-wider transition-all duration-300">Know More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="gallery" ref={featuredReveal.ref} className={`w-full px-4 sm:px-6 py-20 bg-gradient-to-br from-amber-50 to-white transition-all duration-1000 ${
        featuredReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 animate-fade-in-up delay-200" style={{ fontFamily: "var(--font-heading)" }}>
              Featured <span className="accent-text">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
              A curated selection of our most cherished moments, showcasing the beauty and emotion of your special day.
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&_div]:mb-6">
            {[
              { src: "/featuredwork1.webp", title: "Elegant Wedding", location: "Delhi, India" },
              { src: "/featuredwork2.webp", title: "Pre-Wedding Shoot", location: "Goa, India" },
              { src: "/featuredwork3.webp", title: "Destination Wedding", location: "Udaipur, India" },
              { src: "/featuredwork4.webp", title: "Intimate Ceremony", location: "Mumbai, India" },
              { src: "/featuredwork5.webp", title: "Traditional Wedding", location: "Punjab, India" },
              { src: "/featuredwork6.webp", title: "Garden Wedding", location: "Bangalore, India" }
            ].map((work, index) => (
              <div key={index} className="break-inside-avoid animate-fade-in-scale" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <Link href="/portfolio" className="block group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer hover-lift">
          <Image
                    src={work.src}
                    alt={work.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Explore More Stories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsReveal.ref} className={`w-full px-4 sm:px-6 py-20 bg-gradient-to-br from-white to-amber-50 transition-all duration-1000 ${
        testimonialsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 animate-fade-in-up delay-200" style={{ fontFamily: "var(--font-heading)" }}>
              What <span className="accent-text">Couples Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
              The stories and memories we've captured together, told through the voices of the couples we've had the privilege to work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya & Rahul",
                feedback: "Absolutely stunning work! NV captured every precious moment of our wedding day with such artistry and attention to detail. We couldn't be happier with the results.",
                rating: 5
              },
              {
                name: "Anita & Vikram",
                feedback: "Professional, creative, and so easy to work with. The photos exceeded our expectations and we'll treasure them forever. Highly recommended!",
                rating: 5
              },
              {
                name: "Sneha & Arjun",
                feedback: "From the pre-wedding shoot to the big day, every moment was captured beautifully. The candid shots are our favorites - so natural and emotional.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="group animate-fade-in-scale" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-amber-200 hover-lift">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed mb-6">
                    "{testimonial.feedback}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">Happy Couple</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaReveal.ref} className={`w-full px-4 sm:px-6 py-20 bg-gradient-to-br from-amber-50 to-white transition-all duration-700 ${
        ctaReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
            Let's Create Your <span className="accent-text">Wedding Story</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your vision and create beautiful memories together.
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
              <span className="group-hover:tracking-wider transition-all duration-300">View Our Work</span>
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