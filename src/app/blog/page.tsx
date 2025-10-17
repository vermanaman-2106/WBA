export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/background.webp" 
            alt="Blog background" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            My <span className="accent-text">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Behind-the-scenes moments, wedding tips, and the stories behind the photographs
          </p>
        </div>
      </section>

          {/* Blog Content */}
          <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16 bg-gradient-to-br from-white to-amber-50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="rounded-2xl overflow-hidden border border-amber-200 bg-white">
            <div className="h-40 bg-amber-100" />
            <div className="p-4">
              <h3 className="text-lg mb-1 text-gray-800">Elegant Delhi Wedding #{i + 1}</h3>
              <p className="text-sm text-gray-600">A cinematic celebration captured beautifully.</p>
            </div>
          </article>
        ))}
        </div>
      </section>
    </div>
  );
}


