// File: src/components/solutions-cards.tsx
// Description: 4 glassmorphism cards showcasing Conduce Fluids solutions
// Tech: React + TailwindCSS

import React from "react";

interface Card {
  title: string;
  desc: string;
  category: string;
  image: string;
  href?: string;
}

const CARDS: Card[] = [
  {
    title: "Mangueras hidráulicas de alto desempeño",
    desc: "Durabilidad y rendimiento óptimo en sistemas de alta presión para entornos exigentes.",
    category: "Productos",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
    href: "/productos/mangueras-hidraulicas",
  },
  {
    title: "Conexiones y accesorios de precisión",
    desc: "Ajuste perfecto y máxima seguridad en cada aplicación con estándares industriales.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80",
    href: "/productos/conexiones-accesorios",
  },
  {
    title: "Servicio de ensamble y pruebas",
    desc: "Ensamble experto y pruebas rigurosas para garantizar un funcionamiento impecable.",
    category: "Servicios",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
    href: "/servicios/ensamble-pruebas",
  },
  {
    title: "Integración de proyectos Industria 4.0",
    desc: "Soluciones avanzadas para conectar y optimizar sistemas hidráulicos con analítica.",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    href: "/servicios/industria-4-0",
  },
];

export default function SolutionsCards() {
  return (
    <section className="relative w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
            >
              <a href={card.href} className="block h-full">
                {/* Glassmorphism Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/30" />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
