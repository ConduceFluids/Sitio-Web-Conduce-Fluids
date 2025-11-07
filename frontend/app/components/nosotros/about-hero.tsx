// File: frontend/app/components/nosotros/about-hero.tsx
// Description: Hero section for About page with image and description
// Tech: React + TailwindCSS

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 md:py-28">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="pt-10 order-1 lg:order-1 space-y-6 md:space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Conduce <span className="text-blue-400">Fluids</span>
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-blue-300">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <span className="text-lg font-medium">León, Guanajuato</span>
            </div>

            {/* Description */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90">
                  Conduce Fluids, desde León, Guanajuato, es líder en mangueras hidráulicas y conexiones de precisión. Ofrecemos soporte experto y soluciones con Industria 4.0 para maximizar la eficiencia y durabilidad de tus procesos industriales.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">50+</div>
                <div className="text-sm md:text-base text-white/70 mt-1">Años</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">1974</div>
                <div className="text-sm md:text-base text-white/70 mt-1">Fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">4.0</div>
                <div className="text-sm md:text-base text-white/70 mt-1">Industria</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
                <img
                  src="/about-imgs/about-hero-bg.webp"
                  alt="Conduce Fluids - Mangueras hidráulicas y conexiones"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80";
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

