// src/components/products.tsx
import React from "react";
import { Button } from "../../ui/button";

/**
 * PRODUCTS - Conduce Fluids
 * - React + Vite + TSX + TailwindCSS
 * - Estética industrial oscura con acentos metálicos
 * - 7 categorías: 1 destacada (full width) + 6 en grid simétrico
 * - Sin alturas fijas; cards flex para que se estiren de forma uniforme
 */

type ProductCategory = {
  title: string;
  description: string;
  route: string;
  image: string;
  whatsappMessage: string;
};

const WHATSAPP_NUMBER = "524777716363";

const categories: ProductCategory[] = [
  {
    title: "Mangueras hidráulicas",
    description:
      "Alta, media y baja presión (500–6000 psi): diseñadas para ofrecer máxima flexibilidad y resistencia en cualquier condición de trabajo.",
    route: "/productos/mangueras-hidraulicas",
    image: "/home-imgs/solutions/solutions1.webp",
    whatsappMessage: "Hola! Me interesa conocer más sobre sus mangueras hidráulicas. ¿Podrían enviarme información sobre disponibilidad y precios?",
  },
  {
    title: "Conectores, coples y adaptadores",
    description:
      "Amplia selección de coples rápidos y conexiones roscadas de alta resistencia, junto con adaptadores para todos los diámetros.",
    route: "/productos/conectores-y-adaptadores",
    image: "/home-imgs/solutions/solutions2.webp",
    whatsappMessage: "Hola! Necesito información sobre conectores, coples y adaptadores. ¿Tienen disponibilidad y podrían cotizarme?",
  },
  {
    title: "Pistones hidráulicos",
    description:
      "Fabricación propia en acero endurecido: diseñados para soportar altas cargas y ciclos de trabajo intensivos con máxima fiabilidad.",
    route: "/productos/pistones-hidraulicos",
    image: "/home-imgs/solutions/solutions3.webp",
    whatsappMessage: "Hola! Me interesan sus pistones hidráulicos de fabricación propia. ¿Podrían darme más detalles técnicos y cotización?",
  },
  {
    title: "Cilindros neumáticos",
    description:
      "Fabricación propia: construidos en aluminio y acero inoxidable para garantizar rendimiento y larga vida en aplicaciones industriales.",
    route: "/productos/cilindros-neumaticos",
    image: "/home-imgs/solutions/solutions4.webp",
    whatsappMessage: "Hola! Quisiera información sobre sus cilindros neumáticos de fabricación propia. ¿Tienen catálogo disponible?",
  },
  {
    title: "Automatización y neumática",
    description:
      "Válvulas de control, sensores y reguladores para optimizar procesos y mejorar la eficiencia de tus instalaciones.",
    route: "/productos/automatizacion-y-neumatica",
    image: "/home-imgs/solutions/solutions5.webp",
    whatsappMessage: "Hola! Necesito asesoría sobre automatización y neumática. ¿Podrían ayudarme con válvulas de control y sensores?",
  },
  {
    title: "Válvulas y electroválvulas",
    description:
      "Válvulas de bola, aguja y alivio, y electroválvulas con respuesta rápida para sistemas hidráulicos y neumáticos.",
    route: "/productos/valvulas-y-electrovalvulas",
    image: "/home-imgs/solutions/solutions6.webp",
    whatsappMessage: "Hola! Busco válvulas y electroválvulas para mi sistema. ¿Podrían recomendarme las mejores opciones y cotizarme?",
  },
  {
    title: "Productos Especiales",
    description:
      "Disponible en grado alimenticio, para químicos y alta temperatura, diseñadas para aplicaciones especializadas y entornos extremos.",
    route: "/productos/especiales",
    image: "/home-imgs/solutions/solutions1.webp",
    whatsappMessage: "Hola! Necesito productos especiales (grado alimenticio, químicos o alta temperatura). ¿Podrían asesorarme?",
  },
];

export default function Products() {
  const [featured, ...rest] = categories;

  return (
    <section
      className="relative w-full text-white py-12 md:py-16 overflow-hidden"
      aria-labelledby="products-title"
    >
      {/* Fondo con brillos sutiles/metalizados */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_120%_-10%,rgba(40,48,80,0.22),transparent_60%),radial-gradient(900px_400px_at_-20%_110%,rgba(29,60,91,0.22),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <h2
            id="products-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white/95"
          >
            Productos
          </h2>
          <p className="mt-2 text-lg md:text-xl text-white/60">
            Proveeduría especializada en hidráulica y neumática para entornos industriales exigentes.
          </p>
        </header>

        {/* Tarjeta destacada (full width) */}
        <FeaturedCard item={featured} />

        {/* Grid 3×2 simétrico para las 6 restantes */}
        <ul
          className="
            mt-6 md:mt-8
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 md:gap-8
          "
        >
          {rest.map((item) => (
            <li key={item.route}>
              <ProductCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===== UI SUBCOMPONENTS ===== */

function FeaturedCard({ item }: { item: ProductCategory }) {
  return (
    <article
      className="
        group relative rounded-2xl overflow-hidden
      "
    >
      {/* Glow azul en hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div
        className="
          relative rounded-2xl
          bg-white/10 backdrop-blur-sm
          border border-white/20
          shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
          p-6 md:p-8
          flex flex-col md:flex-row items-start gap-6
          transition-all duration-300 ease-out
          group-hover:bg-white/15
          group-hover:border-white/30
          group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)]
          group-hover:scale-[1.02]
        "
      >
        <div
          className="
            relative shrink-0
            w-full md:w-48 h-32 md:h-40
            rounded-xl overflow-hidden
            bg-[#1D3C5B]/20 ring-1 ring-[#1D3C5B]/30
            group-hover:ring-[#1D3C5B]/50 transition-all duration-300
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-white/95">
            {item.title}
          </h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-white/70">
            {item.description}
          </p>

          <div className="mt-5">
            <WhatsAppButton message={item.whatsappMessage} label="Cotizar" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductCard({ item }: { item: ProductCategory }) {
  return (
    <article
      className="
        group relative rounded-2xl h-full overflow-hidden
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
        <div
          className="
            relative w-full h-40 rounded-xl overflow-hidden
            bg-[#1D3C5B]/20 ring-1 ring-[#1D3C5B]/30
            group-hover:ring-[#1D3C5B]/50 transition-all duration-300
            mb-4
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-white/95">
          {item.title}
        </h3>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
          {item.description}
        </p>

        <div className="mt-5 pt-2">
          <WhatsAppButton message={item.whatsappMessage} label="Cotizar" />
        </div>

        {/* Acento inferior */}
        <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#1D3C5B] via-[#8896A5] to-transparent opacity-60" />
      </div>
    </article>
  );
}

function WhatsAppButton({ message, label }: { message: string; label: string }) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      variant="glass"
      onClick={handleClick}
      className="text-sm px-4 py-2 text-white"
    >
      {label}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M7 12h10M13 8l4 4-4 4" />
      </svg>
    </Button>
  );
}

