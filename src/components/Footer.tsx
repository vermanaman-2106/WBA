import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
        <footer className="mt-20 w-full">
          <div className="w-full px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-3xl border border-amber-200 overflow-hidden bg-gradient-to-br from-white to-amber-50">
                <div className="h-1" style={{ backgroundColor: "var(--accent)" }} />

            <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10">
            {/* Left: Logo + Tagline */}
            <div>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/logo.webp"
                    alt="WEDDINGS BY ARTISTIC"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <div>
                    <div className="text-sm font-light tracking-[0.2em] uppercase text-gray-600 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      WEDDINGS BY
                    </div>
                    <div className="text-2xl font-bold tracking-wide text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                      ARTISTIC
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Capturing Forever Moments</p>
            </div>

            {/* Center: Quick Links */}
            <div>
              <div className="text-sm font-semibold mb-3 text-gray-800">Quick Links</div>
              <nav className="grid grid-cols-2 gap-2 text-sm text-gray-600 max-w-xs">
                <Link href="/" className="hover:text-gray-800">Home</Link>
                <Link href="/about" className="hover:text-gray-800">About</Link>
                <Link href="/portfolio" className="hover:text-gray-800">Portfolio</Link>
                <Link href="/contact" className="hover:text-gray-800">Contact</Link>
                <Link href="/blog" className="hover:text-gray-800">Blog</Link>
              </nav>
            </div>

            {/* Right: Social */}
            <div>
              <div className="text-sm font-semibold mb-3 text-gray-800">Connect</div>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="https://instagram.com" target="_blank" className="transition-colors hover:underline" style={{ color: "var(--accent)" }}>
                  Instagram
                </Link>
                <Link href="https://youtube.com" target="_blank" className="transition-colors hover:underline" style={{ color: "var(--accent)" }}>
                  YouTube
                </Link>
                <Link href="https://pinterest.com" target="_blank" className="transition-colors hover:underline" style={{ color: "var(--accent)" }}>
                  Pinterest
                </Link>
              </div>
            </div>
            </div>

            <div className="border-t border-amber-200 px-6 md:px-10 py-6 text-xs text-gray-600 flex items-center justify-between gap-4 flex-wrap">
                  <div>© WEDDINGS BY ARTISTIC 2025</div>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:underline hover:text-gray-800">Privacy</Link>
                <Link href="/terms" className="hover:underline hover:text-gray-800">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


