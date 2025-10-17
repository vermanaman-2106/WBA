export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/background.webp" 
            alt="Contact background" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Let's <span className="accent-text">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? I'd love to hear about your vision and help create beautiful memories together.
          </p>
        </div>
      </section>

          {/* Contact Content */}
          <section className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-16 bg-gradient-to-br from-white to-amber-50">
      <form className="grid gap-4">
        <input placeholder="Name" className="h-12 rounded-xl px-4 bg-white text-gray-800 placeholder-gray-500 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200" />
        <input placeholder="Email" type="email" className="h-12 rounded-xl px-4 bg-white text-gray-800 placeholder-gray-500 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200" />
        <input placeholder="Phone" className="h-12 rounded-xl px-4 bg-white text-gray-800 placeholder-gray-500 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200" />
        <input placeholder="Event Type" className="h-12 rounded-xl px-4 bg-white text-gray-800 placeholder-gray-500 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200" />
        <textarea placeholder="Message" rows={5} className="rounded-xl p-4 bg-white text-gray-800 placeholder-gray-500 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200" />
        <button type="submit" className="h-12 rounded-full text-white" style={{ backgroundColor: "var(--accent)" }}>Send Inquiry</button>
      </form>

        <div className="mt-8 flex gap-4 text-sm">
          <a href="https://wa.me/" target="_blank" className="underline text-gray-600 hover:text-amber-600">WhatsApp</a>
          <a href="https://instagram.com/" target="_blank" className="underline text-gray-600 hover:text-amber-600">Instagram</a>
          <a href="mailto:hello@example.com" className="underline text-gray-600 hover:text-amber-600">Email</a>
        </div>
      </section>
    </div>
  );
}


