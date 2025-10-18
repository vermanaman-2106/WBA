import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/background.webp" 
            alt="Blog background" 
            width={1920}
            height={1080}
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
        {[
          { src: "/featuredwork1.webp", title: "Elegant Wedding", description: "A cinematic celebration captured beautifully in Delhi." },
          { src: "/featuredwork2.webp", title: "Pre-Wedding Shoot", description: "Romantic moments captured in the beautiful beaches of Goa." },
          { src: "/featuredwork3.webp", title: "Destination Wedding", description: "A royal celebration in the palaces of Udaipur." },
          { src: "/featuredwork4.webp", title: "Intimate Ceremony", description: "An elegant and intimate wedding celebration in Mumbai." },
          { src: "/featuredwork5.webp", title: "Traditional Wedding", description: "Rich cultural traditions beautifully documented in Punjab." },
          { src: "/featuredwork6.webp", title: "Garden Wedding", description: "A magical outdoor celebration in the gardens of Bangalore." }
        ].map((post, i) => (
          <article key={i} className="group rounded-2xl overflow-hidden border border-amber-200 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.src}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {post.description}
              </p>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                Read More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
        </div>
      </section>
    </div>
  );
}


