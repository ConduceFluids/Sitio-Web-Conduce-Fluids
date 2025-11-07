// File: src/components/services.tsx
// Description: Sticky stacked service cards with images for Conduce Fluids
// Tech: React + Vite + TailwindCSS + React Router (optional navigation)

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

// ===== DATA: Productos y Servicios (con imágenes) =====
const services = [
  {
    title: "Mangueras hidráulicas",
    description:
      "Mangueras diseñadas para soportar condiciones exigentes, garantizando durabilidad y rendimiento óptimo en sistemas de alta presión.",
    route: "/productos/mangueras-hidraulicas",
    image: "/home-imgs/solutions/solutions1.webp",
  },
  {
    title: "Conectores, coples y adaptadores",
    description:
      "Amplia gama de conectores y adaptadores fabricados con alta precisión, asegurando ajuste perfecto y máxima seguridad en sus aplicaciones.",
    route: "/productos/conectores-coples-adaptadores",
    image: "/home-imgs/solutions/solutions2.webp",
  },
  {
    title: "Pistones hidráulicos",
    description:
      "Pistones de alta calidad para aplicaciones industriales exigentes, ofreciendo precisión, resistencia y confiabilidad en cada operación.",
    route: "/productos/pistones-hidraulicos",
    image: "/home-imgs/solutions/solutions3.webp",
  },
  {
    title: "Cilindros neumáticos",
    description:
      "Cilindros de alto rendimiento para aplicaciones industriales, garantizando eficiencia energética, durabilidad y precisión en automatización.",
    route: "/productos/cilindros-neumaticos",
    image: "/home-imgs/solutions/solutions4.webp",
  },
  {
    title: "Automatización neumática",
    description:
      "Soluciones completas de automatización neumática para optimizar procesos industriales, mejorando eficiencia operativa y reduciendo tiempos.",
    route: "/servicios/automatizacion-neumatica",
    image: "/home-imgs/solutions/solutions5.webp",
  },
  {
    title: "Válvulas y electroválvulas",
    description:
      "Válvulas y electroválvulas de precisión para control eficiente de fluidos en sistemas hidráulicos y neumáticos con máxima confiabilidad.",
    route: "/productos/valvulas-electrovalvulas",
    image: "/home-imgs/solutions/solutions6.webp",
  },
];

// ===== Hook: Animación on-scroll (IntersectionObserver optimizado) =====
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

// ===== Header con reveal optimizado =====
const AnimatedHeader: React.FC = () => {
  const [containerRef, inView] = useScrollAnimation();
  return (
    <div 
      ref={containerRef}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2
        className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-white ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Productos y Servicios
      </h2>
      <p
        className={`text-lg text-white/90 mt-4 transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Soluciones hidráulicas confiables para procesos críticos.
      </p>
    </div>
  );
};

// ===== Botón glass reutilizable (sin imágenes, estilo industrial) =====
const GlassButton: React.FC<{
  label: string;
  onClick?: () => void;
  href?: string;
}> = ({ label, onClick, href }) => {
  const Tag: any = href ? "a" : "button";
  return (
    <Tag
      onClick={onClick}
      href={href}
      className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-white/30 bg-white/20 backdrop-blur hover:bg-white/30 text-gray-900 shadow-sm transition-all hover:shadow-md cursor-pointer"
    >
      {label}
    </Tag>
  );
};

// ===== Sección principal: StickyFeatureSection (Servicios) =====
export default function SolutionsCards() {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate(route);

  return (
    <section id="solutions" className="relative font-sans">
      <div className="px-[5%]">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          <div className="py-16 md:py-32 lg:py-48 flex flex-col items-center w-full">
            <AnimatedHeader />

            {/* Stack sticky con imágenes - optimizado para evitar stutter */}
            <div className="w-full space-y-8 md:space-y-12">
              {services.map((svc, idx) => {
                const isEven = idx % 2 === 0;
                
                // Componente de imagen reutilizable
                const ImageContainer = () => (
                  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/30" />
                  </div>
                );

                return (
                  <div
                    key={idx}
                    className={
                      "sticky top-[25%] mb-8 rounded-2xl md:rounded-3xl overflow-hidden " +
                      "bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-xl " +
                      "border border-white/20 shadow-2xl shadow-black/10 " +
                      "will-change-transform " +
                      "grid grid-cols-1 md:grid-cols-2 gap-0 " +
                      "h-[600px] sm:h-[550px] md:h-[440px]"
                    }
                  >
                    {/* Para índices pares: imagen primero, luego contenido */}
                    {isEven && <ImageContainer />}

                    {/* Contenedor de contenido - altura fija para mantener consistencia */}
                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 md:p-10 lg:p-12 h-full">
                      <div className="flex flex-col justify-center flex-1">
                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white leading-tight">
                          {svc.title}
                        </h3>
                        <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-2">
                        <GlassButton label="Saber más" onClick={() => handleNavigate(svc.route)} />
                      </div>
                    </div>

                    {/* Para índices impares: contenido primero, luego imagen */}
                    {!isEven && <ImageContainer />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fondo sutil industrial */}
      <div className="pointer-events-none absolute inset-0 -z-10 " />
    </section>
  );
}
