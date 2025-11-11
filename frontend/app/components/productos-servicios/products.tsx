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

const WHATSAPP_NUMBER = "524775770379";

const categories: ProductCategory[] = [
  {
    title: "Mangueras hidráulicas",
    description:
      "Alta, media y baja presión (500–6000 psi): diseñadas para ofrecer máxima flexibilidad y resistencia en cualquier condición de trabajo.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions1.webp",
    whatsappMessage: "Hola! Me interesa conocer más sobre sus mangueras hidráulicas. ¿Podrían enviarme información sobre disponibilidad y precios?",
  },
  {
    title: "Conectores, coples y adaptadores",
    description:
      "Amplia selección de coples rápidos y conexiones roscadas de alta resistencia, junto con adaptadores para todos los diámetros.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions2.webp",
    whatsappMessage: "Hola! Necesito información sobre conectores, coples y adaptadores. ¿Tienen disponibilidad y podrían cotizarme?",
  },
  {
    title: "Pistones hidráulicos",
    description:
      "Fabricación propia en acero endurecido: diseñados para soportar altas cargas y ciclos de trabajo intensivos con máxima fiabilidad.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions3.webp",
    whatsappMessage: "Hola! Me interesan sus pistones hidráulicos de fabricación propia. ¿Podrían darme más detalles técnicos y cotización?",
  },
  {
    title: "Cilindros neumáticos",
    description:
      "Fabricación propia: construidos en aluminio y acero inoxidable para garantizar rendimiento y larga vida en aplicaciones industriales.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions4.webp",
    whatsappMessage: "Hola! Quisiera información sobre sus cilindros neumáticos de fabricación propia. ¿Tienen catálogo disponible?",
  },
  {
    title: "Automatización y neumática",
    description:
      "Válvulas de control, sensores y reguladores para optimizar procesos y mejorar la eficiencia de tus instalaciones.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions5.webp",
    whatsappMessage: "Hola! Necesito asesoría sobre automatización y neumática. ¿Podrían ayudarme con válvulas de control y sensores?",
  },
  {
    title: "Válvulas y electroválvulas",
    description:
      "Válvulas de bola, aguja y alivio, y electroválvulas con respuesta rápida para sistemas hidráulicos y neumáticos.",
    route: "/products-services",
    image: "/home-imgs/solutions/solutions6.webp",
    whatsappMessage: "Hola! Busco válvulas y electroválvulas para mi sistema. ¿Podrían recomendarme las mejores opciones y cotizarme?",
  },
  {
    title: "Productos Especiales",
    description:
      "Disponible en grado alimenticio, para químicos y alta temperatura, diseñadas para aplicaciones especializadas y entornos extremos.",
    route: "/products-services",
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
            gap-6
          "
        >
          {rest.map((item) => (
            <li key={item.route} className="h-full">
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
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
    >
      {/* Glassmorphism Card */}
      <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-500">
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="relative md:w-1/2 h-72 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80";
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
              {item.description}
            </p>
            <div>
              <WhatsAppButton message={item.whatsappMessage} label="Cotizar" />
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/30" />
      </div>
    </article>
  );
}

function ProductCard({ item }: { item: ProductCategory }) {
  return (
    <article
      className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
    >
      {/* Glassmorphism Card */}
      <div className="relative h-full flex flex-col backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-500">
        
        {/* Image Container */}
        <div className="relative h-72 shrink-0 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80";
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
            {item.description}
          </p>
          <div className="mt-auto">
            <WhatsAppButton message={item.whatsappMessage} label="Cotizar" />
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/30" />
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
      variant="solid"
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

