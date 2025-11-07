// File: frontend/app/routes/about.tsx
// Description: About page route - Nosotros
// Tech: React Router + TailwindCSS

import TimelineDemo from "~/components/nosotros/timeline";
import AboutHero from "../components/nosotros/about-hero";

export function meta() {
  return [
    { title: "Nosotros - Conduce Fluids | Mangueras Hidráulicas en León, Guanajuato" },
    { 
      name: "description", 
      content: "Conduce Fluids, desde León, Guanajuato, es líder en mangueras hidráulicas y conexiones de precisión con más de 50 años de experiencia." 
    },
  ];
}

export default function About() {
  return (
    <main className="relative min-h-screen">
      <AboutHero />
      <TimelineDemo />
    </main>
  );
}

