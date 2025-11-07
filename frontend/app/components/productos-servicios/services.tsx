// src/components/services.tsx
import React from "react";
import { Button } from "../../ui/button";
import { FaUserTie, FaTools, FaWrench, FaCog, FaTruck, FaCogs, FaHeadset } from "react-icons/fa";

/**
 * SERVICES - Conduce Fluids
 * - React + Vite + TSX + TailwindCSS
 * - 7 servicios: 1 destacado full width + 6 en grilla simétrica (3x2)
 * - Estilo oscuro con acentos metálicos, sin alturas fijas
 */

type ServiceItem = {
  key: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaLabel: string;
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SERVICES: ServiceItem[] = [
  {
    key: "asesoria",
    title: "Asesoría técnica personalizada",
    description:
      "Nuestros ingenieros evalúan tu operación para ofrecer la mejor solución hidráulica, reduciendo paros y mejorando seguridad.",
    bullets: ["Diagnóstico según industria", "Selección de productos", "Recomendaciones de eficiencia"],
    ctaLabel: "Solicitar servicio",
    to: "/servicios/asesoria-tecnica",
    icon: FaUserTie,
  },
  {
    key: "fabricacion",
    title: "Fabricación a medida",
    description:
      "Fabricamos mangueras de alta presión cumpliendo normas SAE y DIN, para máxima durabilidad.",
    bullets: ["Corte a medida", "Ensambles personalizados"],
    ctaLabel: "Solicitar servicio",
    to: "/servicios/fabricacion-a-medida",
    icon: FaTools,
  },
  {
    key: "mantenimiento",
    title: "Mantenimiento y reparación",
    description:
      "Prolonga la vida útil de tus líneas hidráulicas con mantenimiento preventivo y correctivo.",
    bullets: ["Inspección y reparación", "Sustitución de piezas", "Programas periódicos"],
    ctaLabel: "Solicitar servicio",
    to: "/servicios/mantenimiento-reparacion",
    icon: FaWrench,
  },
  {
    key: "instalacion",
    title: "Instalación en sitio",
    description:
      "Montaje profesional de sistemas hidráulicos y neumáticos, con supervisión técnica.",
    bullets: ["Montaje completo", "Supervisión de proyectos"],
    ctaLabel: "Solicitar servicio",
    to: "/servicios/instalacion-en-sitio",
    icon: FaCog,
  },
  {
    key: "logistica",
    title: "Entrega rápida y logística",
    description:
      "Logística especializada para envíos urgentes en toda la república.",
    bullets: ["Entrega a domicilio", "Envíos express"],
    ctaLabel: "Solicitar servicio",
    to: "/servicios/logistica",
    icon: FaTruck,
  },
  {
    key: "venta-accesorios",
    title: "Venta de accesorios y complementos",
    description:
      "Stock de accesorios certificados: abrazaderas, adaptadores, filtros y más.",
    bullets: ["Abrazaderas y adaptadores", "Kits de montaje"],
    ctaLabel: "Solicitar servicio",
    to: "/servicios/accesorios",
    icon: FaCogs,
  },
  {
    key: "soporte",
    title: "Soporte postventa",
    description:
      "Soporte multicanal y garantía extendida para tu tranquilidad.",
    bullets: ["Atención a garantías", "Seguimiento de pedidos", "Chat técnico"],
    ctaLabel: "Contactar soporte",
    to: "/soporte",
    icon: FaHeadset,
  },
];

export default function Services() {
  const [featured, ...rest] = SERVICES;
  return (
    <section
      className="relative w-full text-white py-12 md:py-16 overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* Fondo con brillos metálicos sutiles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_120%_-10%,rgba(40,48,80,0.22),transparent_60%),radial-gradient(900px_400px_at_-20%_110%,rgba(29,60,91,0.22),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <h2
            id="services-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white/95"
          >
            Servicios Profesionales
          </h2>
          <p className="mt-2 text-lg md:text-xl text-white/60">
            Soluciones hidráulicas y neumáticas con ingeniería aplicada y respuesta ágil.
          </p>
        </header>

        {/* Destacado */}
        <FeaturedServiceCard item={featured} />

        {/* Resto: grilla simétrica 3x2 */}
        <ul className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rest.map((item) => (
            <li key={item.key}>
              <ServiceCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===== Subcomponentes ===== */

function FeaturedServiceCard({ item }: { item: ServiceItem }) {
  const Icon = item.icon;
  return (
    <article className="group relative rounded-2xl">
      {/* Glow azul en hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 transition-all duration-300 ease-out group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)] group-hover:scale-[1.02]">
        <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#1D3C5B]/20 ring-1 ring-[#1D3C5B]/30 transition-all duration-300 group-hover:bg-[#1D3C5B]/30 group-hover:ring-[#1D3C5B]/50 group-hover:scale-110">
          <Icon className="w-7 h-7 text-[#9FB6C6] transition-transform duration-300 group-hover:scale-110" />
        </span>

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-white/95">{item.title}</h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-white/70">
            {item.description}
          </p>

          {item.bullets && (
            <ul className="mt-4 grid gap-2 text-white/75">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-[#8896A5]" />
                  <span className="text-sm md:text-[15px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5">
            <Button variant="glass" to={item.to} className="text-sm px-4 py-2 text-white">
              {item.ctaLabel}
              <svg viewBox="0 0 24 24" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M7 12h10M13 8l4 4-4 4" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = item.icon;
  return (
    <article className="group relative rounded-2xl h-full">
      {/* Glow azul en hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative rounded-2xl h-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] p-6 md:p-7 flex flex-col transition-all duration-300 ease-out group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)] group-hover:scale-[1.02]">
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1D3C5B]/20 ring-1 ring-[#1D3C5B]/30 transition-all duration-300 group-hover:bg-[#1D3C5B]/30 group-hover:ring-[#1D3C5B]/50 group-hover:scale-110">
            <Icon className="w-6 h-6 text-[#9FB6C6] transition-transform duration-300 group-hover:scale-110" />
          </span>
          <h3 className="text-lg md:text-xl font-semibold text-white/95">{item.title}</h3>
        </div>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">{item.description}</p>

        {item.bullets && (
          <ul className="mt-4 grid gap-2 text-white/75">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block size-1.5 rounded-full bg-[#8896A5]" />
                <span className="text-sm md:text-[15px] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 pt-1">
          <Button variant="glass" to={item.to} className="text-sm px-4 py-2 text-white">
            {item.ctaLabel}
            <svg viewBox="0 0 24 24" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 12h10M13 8l4 4-4 4" />
            </svg>
          </Button>
        </div>

        {/* Acento inferior */}
        <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#1D3C5B] via-[#8896A5] to-transparent opacity-60" />
      </div>
    </article>
  );
}
