import type { Route } from "./+types/home";
import { Hero } from "../components/home";
import Intro from "~/components/home/intro";
import SolutionsCards from "~/components/home/solutions-cards";
import  ServicesCards  from "~/components/home/services-cards";
import FAQ from "~/components/home/FAQ";
import Contact from "~/components/home/contact";
import CTA from "~/components/productos-servicios/cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CONDUCE FLUIDS - Inicio" },
    { name: "description", content: "Soluciones en mangueras hidráulicas industriales" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesCards />
      <SolutionsCards />
      <CTA 
        title="¿Qué producto necesitas?"
        description="Nuestro equipo te atiende directamente por WhatsApp para resolver dudas, brindarte soporte y ayudarte a elegir el producto adecuado."
        buttonText="Cotizar ahora"
        whatsappMessage="Hola, me interesa conocer más"
        phone="524777716363"
      />  
      <FAQ />
      <Contact />
    </>
  );
}
