// File: frontend/app/routes/products-services.tsx
// Description: Products & Services page route
// Tech: React Router + TailwindCSS

import PSHero from "~/components/productos-servicios/ps-hero";
import Contact from "~/components/home/contact-form";
import Products from "~/components/productos-servicios/products";
import Services from "~/components/productos-servicios/services";
import Sectors from "~/components/productos-servicios/sectors";
import CTA from "~/components/productos-servicios/cta";

export function meta() {
  return [
    { title: "Productos y Servicios - Conduce Fluids | Mangueras Hidráulicas y Soluciones Industriales" },
    { 
      name: "description", 
      content: "Descubre nuestra amplia gama de mangueras hidráulicas, conectores, pistones, cilindros neumáticos y soluciones de automatización industrial." 
    },
  ];
}

export default function ProductsServices() {
  return (
    <main className="relative min-h-screen">
      <PSHero />
      <Products />
      <Services />
      <Sectors />
      <CTA />
      <Contact />
    </main>
  );
}

