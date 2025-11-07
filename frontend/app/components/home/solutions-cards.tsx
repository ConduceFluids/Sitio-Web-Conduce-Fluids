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
      "Ofrecemos mangueras hidráulicas diseñadas para soportar las condiciones más exigentes, garantizando durabilidad y un rendimiento óptimo en sistemas de alta presión.",
    route: "/productos/mangueras-hidraulicas",
    image: "/home-imgs/solutions/solutions1.webp",
  },
  {
    title: "Conectores, coples y adaptadores",
    description:
      "Contamos con una amplia gama de conectores, coples y adaptadores fabricados con la más alta precisión, asegurando un ajuste perfecto y la máxima seguridad en todas sus aplicaciones.",
    route: "/productos/conectores-coples-adaptadores",
    image: "/home-imgs/solutions/solutions2.webp",
  },
  {
    title: "Pistones hidráulicos",
    description:
      "Proporcionamos pistones hidráulicos de alta calidad diseñados para aplicaciones industriales exigentes, ofreciendo precisión, resistencia y confiabilidad en cada operación.",
    route: "/productos/pistones-hidraulicos",
    image: "/home-imgs/solutions/solutions3.webp",
  },
  {
    title: "Cilindros neumáticos",
    description:
      "Ofrecemos cilindros neumáticos de alto rendimiento para aplicaciones industriales, garantizando eficiencia energética, durabilidad y precisión en sistemas de automatización.",
    route: "/productos/cilindros-neumaticos",
    image: "/home-imgs/solutions/solutions4.webp",
  },
  {
    title: "Automatización neumática",
    description:
      "Implementamos soluciones completas de automatización neumática para optimizar sus procesos industriales, mejorando la eficiencia operativa y reduciendo tiempos de producción.",
    route: "/servicios/automatizacion-neumatica",
    image: "/home-imgs/solutions/solutions5.webp",
  },
  {
    title: "Válvulas y electroválvulas",
    description:
      "Proveemos válvulas y electroválvulas de precisión para el control eficiente de fluidos en sistemas hidráulicos y neumáticos, asegurando máxima confiabilidad y control.",
    route: "/productos/valvulas-electrovalvulas",
    image: "/home-imgs/solutions/solutions6.webp",
  },
];

// ===== Hook: Animación on-scroll (IntersectionObserver) =====
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

// ===== Header con reveal =====
const AnimatedHeader: React.FC = () => {
  const [hRef, hIn] = useScrollAnimation();
  const [pRef, pIn] = useScrollAnimation();
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2
        ref={hRef}
        className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-white ${
          hIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Productos y Servicios
      </h2>
      <p
        ref={pRef}
        className={`text-lg text-white/90 mt-4 transition-all duration-700 ease-out delay-150 ${
          pIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
      className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-white/30 bg-white/20 backdrop-blur hover:bg-white/30 text-gray-900 shadow-sm transition-all hover:shadow-md"
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
    <section className="relative font-sans">
      <div className="px-[5%]">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="py-24 md:py-48 flex flex-col items-center">
            <AnimatedHeader />

            {/* Stack sticky con imágenes */}
            <div className="w-full">
              {services.map((svc, idx) => {
                const isEven = idx % 2 === 0;
                
                // Componente de imagen reutilizable
                const ImageContainer = () => (
                  <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
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
                      "sticky top-[18%] mb-16 rounded-3xl overflow-hidden " +
                      "bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-xl " +
                      "border border-white/20 shadow-2xl shadow-black/10 " +
                      "grid grid-cols-1 md:grid-cols-2 gap-0 " +
                      "min-h-[480px] md:min-h-[420px]"
                    }
                  >
                    {/* Para índices pares: imagen primero, luego contenido */}
                    {isEven && <ImageContainer />}

                    {/* Contenedor de contenido */}
                    <div className="flex flex-col justify-between gap-6 p-8 md:p-12 h-full">
                      <div className="flex-1 flex flex-col justify-center max-w-3xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-white line-clamp-2">
                          {svc.title}
                        </h3>
                        <p className="mt-3 text-white/90 line-clamp-4">
                          {svc.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
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
