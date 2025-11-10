// MissionVision.jsx
import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

/**
 * MISSION / VISION - Conduce Fluids
 * - React + Vite + TailwindCSS
 * - Paleta oscura con acentos metálicos
 * - Sin dependencias externas, sin alturas fijas
 * - Usa <MissionVision/> directamente
 */

export default function MissionVision() {
  return (
    <section
      className="
        relative w-full
        bg-transparent
        text-white 
        py-12 md:py-16
        overflow-hidden
      "
      aria-labelledby="mv-title"
    >
      {/* Fondo con sutil textura/gradiente metálico */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 relative">
        <header className="mb-8 md:mb-12">
          <h2
            id="mv-title"
            className="text-5xl font-bold tracking-tight text-white/95"
          >
            Nuestros Principios
          </h2>
          <p className="mt-2 text-lg md:text-xl text-white/60">
            Nuestra misión, visión y valores que nos guían en cada decisión técnica y cada entrega.
          </p>
        </header>

        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8
          "
        >
          {/* Card: Misión */}
          <article
            className="
              group relative rounded-2xl
            "
            aria-labelledby="mision-title"
          >
            {/* Glow azul en hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div
              className="
                relative rounded-2xl h-full
                bg-white/10 backdrop-blur-sm
                p-6 md:p-7
                border border-white/20
                shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
                transition-all duration-300 ease-out
                group-hover:bg-white/15
                group-hover:border-white/30
                group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)]
                group-hover:scale-[1.02]
              "
            >
              <div className="flex items-start gap-4">
                {/* Ícono simple (react-icons) */}
                <span
                  className="
                    inline-flex size-16 shrink-0 items-center justify-center
                    rounded-xl
                    bg-[#1D3C5B]/20
                    ring-1 ring-[#1D3C5B]/30
                    transition-all duration-300
                    group-hover:bg-[#1D3C5B]/30
                    group-hover:ring-[#1D3C5B]/50
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <FaBullseye className="w-8 h-8 text-[#9FB6C6] transition-transform duration-300 group-hover:scale-110" />
                </span>

                <div>
                  <h3
                    id="mision-title"
                    className="text-2xl md:text-3xl font-semibold text-white/95"
                  >
                    Misión
                  </h3>
                  <div className="mt-2 text-lg leading-relaxed text-white/70">
                    Asegurar la modernización y el funcionamiento óptimo de
                    procesos industriales mediante metodologías calificadas y
                    soporte experto, garantizando calidad en cada proyecto.
                  </div>
                </div>
              </div>

              {/* Barra/acento inferior */}
              <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#1D3C5B] via-[#8896A5] to-transparent opacity-60" />
            </div>
          </article>

          {/* Card: Visión */}
          <article
            className="
              group relative rounded-2xl
            "
            aria-labelledby="vision-title"
          >
            {/* Glow azul en hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div
              className="
                relative rounded-2xl h-full
                bg-white/10 backdrop-blur-sm
                p-6 md:p-7
                border border-white/20
                shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
                transition-all duration-300 ease-out
                group-hover:bg-white/15
                group-hover:border-white/30
                group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)]
                group-hover:scale-[1.02]
              "
            >
              <div className="flex items-start gap-4">
                {/* Ícono simple (react-icons) */}
                <span
                  className="
                    inline-flex size-16 shrink-0 items-center justify-center
                    rounded-xl
                    bg-[#1D3C5B]/20
                    ring-1 ring-[#1D3C5B]/30
                    transition-all duration-300
                    group-hover:bg-[#1D3C5B]/30
                    group-hover:ring-[#1D3C5B]/50
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <FaEye className="w-8 h-8 text-[#9FB6C6] transition-transform duration-300 group-hover:scale-110" />
                </span>

                <div>
                  <h3
                    id="vision-title"
                    className="text-2xl md:text-3xl font-semibold text-white/95"
                  >
                    Visión
                  </h3>
                  <div className="mt-2 text-lg leading-relaxed text-white/70">
                    Ser líderes en la proveeduría de productos y servicios
                    hidráulicos, integrando innovación y eficiencia con las
                    tendencias de Industria 4.0 para impulsar la transformación
                    digital.
                  </div>
                </div>
              </div>

              {/* Barra/acento inferior */}
              <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#1D3C5B] via-[#8896A5] to-transparent opacity-60" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}