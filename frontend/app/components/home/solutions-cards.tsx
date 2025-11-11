// File: src/components/services.tsx
// Description: Sticky stacked service cards with images for Conduce Fluids
// Tech: React + Vite + TailwindCSS + React Router (optional navigation)

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";

// ===== DATA: Productos y Servicios (con imágenes) =====
const services = [
  {
    title: "Mangueras hidráulicas",
    description:
      "Mangueras diseñadas para soportar condiciones exigentes, garantizando durabilidad y rendimiento óptimo en sistemas de alta presión.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions1.webp",
  },
  {
    title: "Conectores, coples y adaptadores",
    description:
      "Amplia gama de conectores y adaptadores fabricados con alta precisión, asegurando ajuste perfecto y máxima seguridad en sus aplicaciones.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions2.webp",
  },
  {
    title: "Pistones hidráulicos",
    description:
      "Pistones de alta calidad para aplicaciones industriales exigentes, ofreciendo precisión, resistencia y confiabilidad en cada operación.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions3.webp",
  },
  {
    title: "Cilindros neumáticos",
    description:
      "Cilindros de alto rendimiento para aplicaciones industriales, garantizando eficiencia energética, durabilidad y precisión en automatización.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions4.webp",
  },
  {
    title: "Automatización neumática",
    description:
      "Soluciones completas de automatización neumática para optimizar procesos industriales, mejorando eficiencia operativa y reduciendo tiempos.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions5.webp",
  },
  {
    title: "Válvulas y electroválvulas",
    description:
      "Válvulas y electroválvulas de precisión para control eficiente de fluidos en sistemas hidráulicos y neumáticos con máxima confiabilidad.",
    route: "/products-services",
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
    <div ref={containerRef} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-white ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Nuestras Soluciones
      </h2>
      <p
        className={`text-base sm:text-lg text-white/90 mt-3 sm:mt-4 transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Soluciones hidráulicas confiables para procesos críticos.
      </p>
    </div>
  );
};

// ===== Sección principal: StickyFeatureSection (Servicios) =====
export default function SolutionsCards() {

  return (
    <section id="solutions" className="relative font-sans">
      <div className="px-[5%]">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          <div className="py-12 sm:py-16 md:py-24 lg:py-40 flex flex-col items-center w-full">
            <AnimatedHeader />

            {/* Stack: sticky activado en todos los tamaños de pantalla */}
            <div className="w-full space-y-6 sm:space-y-8 md:space-y-12">
              {services.map((svc, idx) => {
                const isEven = idx % 2 === 0;

                const ImageContainer = () => (
                  <div className="relative w-full h-56 sm:h-64 md:h-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/30" />
                  </div>
                );

                return (
                  <div
                    key={idx}
                    className={
                      // Sticky activado en todos los tamaños de pantalla
                      "sticky top-[25vh] mb-6 sm:mb-8 rounded-2xl md:rounded-3xl overflow-hidden " +
                      "bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-xl " +
                      "border border-white/20 shadow-2xl shadow-black/10 will-change-transform " +
                      "grid grid-cols-1 md:grid-cols-2 gap-0 " +
                      // Altura adaptable: móvil auto; en md+ limitamos con clamp para evitar cortes
                      "h-auto md:h-[clamp(360px,60vh,520px)]"
                    }
                  >
                    {isEven && <ImageContainer />}

                    <div className="flex flex-col justify-between gap-4 sm:gap-6 p-5 sm:p-7 md:p-10 lg:p-12 h-full">
                      <div className="flex flex-col justify-center flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                          {svc.title}
                        </h3>
                        <p className="mt-2.5 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1.5">
                        <Button variant="solid" to={svc.route}>
                          Saber más
                        </Button>
                      </div>
                    </div>

                    {!isEven && <ImageContainer />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fondo sutil industrial */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
    </section>
  );
}
