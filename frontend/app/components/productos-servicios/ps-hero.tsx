// File: frontend/app/components/productos-servicios/ps-hero.tsx
// Description: Hero section for Products & Services page
// Tech: React + TailwindCSS

export default function PSHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 md:py-28">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="pt-10 order-1 lg:order-1 space-y-6 md:space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Productos y <span className="text-blue-400">Servicios</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-start gap-3 text-blue-300">
              <svg 
                className="w-6 h-6 mt-1 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span className="text-lg font-medium">Soluciones hidráulicas y neumáticas de calidad industrial</span>
            </div>

            {/* Description */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90">
                  Ofrecemos una amplia gama de mangueras hidráulicas, conectores, pistones, cilindros neumáticos y soluciones de automatización. Productos de alta calidad que cumplen con los estándares más exigentes de la industria.
                </p>
              </div>
            </div>

            {/* Feature Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">6+</div>
                <div className="text-sm md:text-base text-white/70 mt-1">Categorías</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">100%</div>
                <div className="text-sm md:text-base text-white/70 mt-1">Calidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">24/7</div>
                <div className="text-sm md:text-base text-white/70 mt-1">Soporte</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Image Grid */}
              <div className="relative grid grid-cols-2 gap-4 rounded-3xl overflow-hidden">
                {/* Large Image */}
                <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
                  <img
                    src="/home-imgs/solutions/solutions1.webp"
                    alt="Mangueras hidráulicas"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                </div>

                {/* Small Images */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square">
                  <img
                    src="/home-imgs/solutions/solutions3.webp"
                    alt="Pistones hidráulicos"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square">
                  <img
                    src="/home-imgs/solutions/solutions5.webp"
                    alt="Automatización neumática"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

