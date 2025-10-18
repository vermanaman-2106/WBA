"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getGalleryImages } from "@/sanity/lib/data";
import { GalleryImage } from "@/sanity/lib/types";

const filters = ["All", "Weddings", "Pre-Weddings", "Destination"] as const;

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery images from Sanity
  useEffect(() => {
    async function fetchImages() {
      try {
        const images = await getGalleryImages();
        console.log('Fetched images from Sanity:', images);
        setGalleryImages(images || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        // Fallback to static images if Sanity fails
        const fallbackImages = [
          {
            _id: 'fallback-1',
            title: 'Elegant Wedding',
            description: 'A beautiful traditional wedding ceremony',
            location: 'Delhi, India',
            category: 'weddings',
            mediaType: 'image',
            image: {
              asset: {
                url: '/featuredwork1.webp'
              },
              alt: 'Elegant Wedding'
            }
          },
          {
            _id: 'fallback-2',
            title: 'Pre-Wedding Shoot',
            description: 'Romantic pre-wedding photography session',
            location: 'Goa, India',
            category: 'preweddings',
            mediaType: 'image',
            image: {
              asset: {
                url: '/featuredwork2.webp'
              },
              alt: 'Pre-Wedding Shoot'
            }
          },
          {
            _id: 'fallback-3',
            title: 'Destination Wedding',
            description: 'Stunning destination wedding celebration',
            location: 'Udaipur, India',
            category: 'destination',
            mediaType: 'image',
            image: {
              asset: {
                url: '/featuredwork3.webp'
              },
              alt: 'Destination Wedding'
            }
          },
          {
            _id: 'fallback-4',
            title: 'Intimate Ceremony',
            description: 'Beautiful intimate wedding ceremony',
            location: 'Mumbai, India',
            category: 'weddings',
            mediaType: 'image',
            image: {
              asset: {
                url: '/featuredwork4.webp'
              },
              alt: 'Intimate Ceremony'
            }
          },
          {
            _id: 'fallback-5',
            title: 'Traditional Wedding',
            description: 'Classic traditional wedding celebration',
            location: 'Punjab, India',
            category: 'weddings',
            mediaType: 'image',
            image: {
              asset: {
                url: '/featuredwork5.webp'
              },
              alt: 'Traditional Wedding'
            }
          },
          {
            _id: 'fallback-6',
            title: 'Garden Wedding',
            description: 'Romantic garden wedding celebration',
            location: 'Bangalore, India',
            category: 'destination',
            mediaType: 'image',
            image: {
              asset: {
                url: '/featuredwork6.webp'
              },
              alt: 'Garden Wedding'
            }
          }
        ];
        setGalleryImages(fallbackImages);
        setLoading(false);
      }
    }
    
    fetchImages();
  }, []);

  // Filter images based on active category
  const filteredImages = active === "All" 
    ? galleryImages 
    : galleryImages.filter(image => 
        image.category.toLowerCase() === active.toLowerCase().replace('-', '')
      );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/background.webp" 
            alt="Portfolio background" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Featured <span className="accent-text">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the artistry behind each photograph, where every frame tells a story of love, joy, and unforgettable moments
          </p>
        </div>
      </section>

          {/* Portfolio Content */}
          <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16 bg-gradient-to-br from-white to-amber-50">

      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((f, index) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 border hover-scale ${
                active === f ? "text-white shadow-lg" : "text-gray-700 hover:text-gray-800 hover:shadow-md"
              }`}
              style={{ 
                backgroundColor: active === f ? "var(--accent)" : "transparent", 
                borderColor: "var(--accent)",
                animationDelay: `${0.2 + index * 0.1}s`
              }}
            >
              {f}
            </button>
        ))}
      </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
              <p className="text-gray-600">Loading portfolio...</p>
            </div>
          </div>
        ) : filteredImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [&_div]:mb-4">
            {filteredImages.map((item, index) => (
              <div key={item._id} className="break-inside-avoid group animate-fade-in-scale" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-xl bg-amber-100 aspect-[4/5] hover-lift">
                  {item.mediaType === 'video' ? (
                    // Video content
                    item.video?.asset?.url || item.videoUrl ? (
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={item.video?.asset?.url || item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                        ) : (
                          <div className="w-full h-full bg-amber-200 flex items-center justify-center">
                            <span className="text-amber-700">No video</span>
                          </div>
                        )
                  ) : (
                    // Image content
                    item.image?.asset?.url ? (
                      <Image
                        src={item.image.asset.url}
                        alt={item.image.alt || item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      ) : (
                        <div className="w-full h-full bg-amber-200 flex items-center justify-center">
                          <span className="text-amber-700">No image</span>
                        </div>
                      )
                  )}
                  
                  {/* Media type indicator */}
                  <div className="absolute top-3 right-3">
                    {item.mediaType === 'video' ? (
                      <div className="bg-black/60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        Video
                      </div>
                    ) : (
                      <div className="bg-black/60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        Image
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm opacity-90 mb-2">{item.description}</p>
                      )}
                      {item.location && (
                        <p className="text-xs opacity-75">{item.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-medium mb-2 text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                    No {active === "All" ? "images" : active.toLowerCase()} found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {active === "All" 
                      ? "Add some beautiful images to your portfolio through Sanity Studio."
                      : `No ${active.toLowerCase()} images available yet. Add some through Sanity Studio.`
                    }
                  </p>
              <a
                href="/studio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Images
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}


