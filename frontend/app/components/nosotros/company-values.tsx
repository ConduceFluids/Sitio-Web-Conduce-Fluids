// CompanyValues.jsx
import React from "react";
import { FaShieldAlt, FaLightbulb, FaStar, FaUsers, FaCheckCircle, FaHeart } from "react-icons/fa";

/**
 * VALORES - Conduce Fluids
 * - React + Vite + TailwindCSS
 * - Paleta oscura con acentos metálicos (azul/gris)
 * - Grid responsive sin alturas fijas, tarjetas consistentes
 */

const VALUES = [
  { key: "integridad", label: "Integridad", icon: FaShieldAlt },
  { key: "entendimiento", label: "Entendimiento", icon: FaLightbulb },
  { key: "excelencia", label: "Excelencia", icon: FaStar },
  { key: "unidad", label: "Unidad", icon: FaUsers },
  { key: "responsabilidad", label: "Responsabilidad", icon: FaCheckCircle },
  { key: "pasion", label: "Pasión", icon: FaHeart },
];

export default function CompanyValues() {
  return (
    <section
      className="relative w-full bg-transparent text-white pb-12 md:pb-16 overflow-hidden"
      aria-labelledby="values-title"
    >
      {/* Fondo con brillos sutiles/metalizados */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_120%_-10%,rgba(40,48,80,0.22),transparent_60%),radial-gradient(900px_400px_at_-20%_110%,rgba(29,60,91,0.22),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">

        <ul
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 md:gap-8
          "
        >
          {VALUES.map(({ key, label, icon: Icon }) => (
            <li
              key={key}
              className="
                group relative rounded-2xl
              "
            >
              {/* Glow azul en hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div
                className="
                  relative rounded-2xl h-full
                  bg-white/10 backdrop-blur-sm
                  border border-white/20
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
                  p-6 md:p-7
                  flex flex-col
                  transition-all duration-300 ease-out
                  group-hover:bg-white/15
                  group-hover:border-white/30
                  group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)]
                  group-hover:scale-[1.02]
                "
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      inline-flex size-12 shrink-0 items-center justify-center
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
                    <Icon className="w-6 h-6 text-[#9FB6C6] transition-transform duration-300 group-hover:scale-110" />
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white/95">
                      {label}
                    </h3>
                    {/* Si en el futuro quieres descripciones, colócalas aquí */}
                    {/* <p className="mt-2 text-sm md:text-base leading-relaxed text-white/70">
                      Descripción opcional del valor.
                    </p> */}
                  </div>
                </div>

                {/* Acento inferior */}
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#1D3C5B] via-[#8896A5] to-transparent opacity-60" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
