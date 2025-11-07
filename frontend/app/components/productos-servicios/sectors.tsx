// src/components/sectors.tsx
import React from "react";
import { FaMountain, FaHardHat, FaIndustry, FaCar, FaTractor, FaUtensils } from "react-icons/fa";

/**
 * SECTORES (Bento Grid real) - Conduce Fluids
 * - React + Vite + TSX + TailwindCSS
 * - Grid 6 columnas (lg), auto-rows altas, spans asimétricos + dense packing
 * - 1 columna en móvil (sin cortes, sin alturas fijas)
 */

type Sector = {
  key: string;
  title: string;
  description: string;
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accentFrom: string;
  accentTo: string;
  // spans para bento
  spans: { lgCols: number; lgRows: number };
};

const SECTORS: Sector[] = [
  {
    key: "mineria",
    title: "Minería",
    description:
      "Mangueras de alta resistencia diseñadas para soportar abrasión y condiciones extremas.",
    to: "/sectores/mineria",
    icon: FaMountain,
    accentFrom: "from-[#1D3C5B]",
    accentTo: "to-[#8896A5]",
    spans: { lgCols: 3, lgRows: 2 }, // pieza grande izquierda
  },
  {
    key: "construccion",
    title: "Construcción",
    description:
      "Conexiones hidráulicas robustas para maquinaria como excavadoras y retroexcavadoras.",
    to: "/sectores/construccion",
    icon: FaHardHat,
    accentFrom: "from-[#283050]",
    accentTo: "to-[#1D3C5B]",
    spans: { lgCols: 3, lgRows: 1 }, // horizontal superior derecha
  },
  {
    key: "industria-pesada",
    title: "Industria pesada",
    description:
      "Válvulas durables para líneas de producción que operan de forma continua (24/7).",
    to: "/sectores/industria-pesada",
    icon: FaIndustry,
    accentFrom: "from-[#8896A5]",
    accentTo: "to-[#1D3C5B]",
    spans: { lgCols: 3, lgRows: 1 }, // horizontal inferior derecha
  },
  {
    key: "automotriz",
    title: "Automotriz",
    description:
      "Ensambles compactos ideales para bancos de prueba y líneas de validación técnica.",
    to: "/sectores/automotriz",
    icon: FaCar,
    accentFrom: "from-[#1D3C5B]",
    accentTo: "to-[#305070]",
    spans: { lgCols: 2, lgRows: 2 }, // vertical izquierda abajo
  },
  {
    key: "agricola",
    title: "Agrícola",
    description:
      "Sistemas hidráulicos confiables para tractores, sembradoras y equipos de campo.",
    to: "/sectores/agricola",
    icon: FaTractor,
    accentFrom: "from-[#283050]",
    accentTo: "to-[#8896A5]",
    spans: { lgCols: 2, lgRows: 2 }, // vertical centro abajo
  },
  {
    key: "alimenticio",
    title: "Alimenticio",
    description:
      "Mangueras y conexiones higiénicas según normativas alimentarias para plantas de procesamiento de alimentos.",
    to: "/sectores/alimenticio",
    icon: FaUtensils,
    accentFrom: "from-[#8896A5]",
    accentTo: "to-[#283050]",
    spans: { lgCols: 2, lgRows: 2 }, // vertical derecha abajo
  },
];

// Helper para generar clases de bento grid (Tailwind necesita clases completas)
function getBentoClasses(cols: number, rows: number): string {
  const colClasses: Record<number, string> = {
    1: 'lg:col-span-1',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4',
    5: 'lg:col-span-5',
    6: 'lg:col-span-6',
  };
  const rowClasses: Record<number, string> = {
    1: 'lg:row-span-1',
    2: 'lg:row-span-2',
    3: 'lg:row-span-3',
  };
  return `${colClasses[cols] || ''} ${rowClasses[rows] || ''}`;
}

export default function Sectors() {
  return (
    <section
      className="relative w-full text-white py-12 md:py-16 overflow-hidden"
      aria-labelledby="sectors-title"
    >
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_120%_-10%,rgba(40,48,80,0.22),transparent_60%),radial-gradient(900px_400px_at_-20%_110%,rgba(29,60,91,0.22),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <h2
            id="sectors-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white/95"
          >
            ¿Dónde se usan nuestras soluciones?
          </h2>
          <p className="mt-2 text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Nuestros productos están diseñados para rendir al máximo en sectores
            industriales de alta exigencia.
          </p>
        </header>

        {/* BENTO GRID REAL */}
        <ul
          className="
            grid [grid-auto-flow:dense]
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-6
            auto-rows-[minmax(120px,auto)] md:auto-rows-[minmax(140px,auto)]
            gap-6 md:gap-8
          "
        >
          {SECTORS.map((s) => (
            <li
              key={s.key}
              className={getBentoClasses(s.spans.lgCols, s.spans.lgRows)}
            >
              <SectorCard sector={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function SectorCard({ sector }: { sector: Sector }) {
  const Icon = sector.icon;
  return (
    <article
      className="
        group relative h-full rounded-2xl
      "
    >
      {/* Glow azul en hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] overflow-hidden flex flex-col transition-all duration-300 ease-out group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)] group-hover:scale-[1.02]">
        {/* Acento superior */}
        <div className={["h-1 w-full bg-gradient-to-r", sector.accentFrom, sector.accentTo].join(" ")} />

        <div className="p-6 md:p-7 flex-1 flex flex-col">
          <div className="flex items-start gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1D3C5B]/20 ring-1 ring-[#1D3C5B]/30 transition-all duration-300 group-hover:bg-[#1D3C5B]/30 group-hover:ring-[#1D3C5B]/50 group-hover:scale-110">
              <Icon className="w-6 h-6 text-[#9FB6C6] transition-transform duration-300 group-hover:scale-110" />
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-white/95 leading-tight">
              {sector.title}
            </h3>
          </div>

          <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/70">
            {sector.description}
          </p>
        </div>
      </div>
    </article>
  );
}
