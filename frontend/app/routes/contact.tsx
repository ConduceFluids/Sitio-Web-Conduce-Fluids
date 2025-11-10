import type { Route } from "./+types/contact";
import FAQ from "~/components/home/FAQ";
import Contact from "~/components/home/contact-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CONDUCE FLUIDS - Contacto" },
    { name: "description", content: "Contáctanos para soluciones en mangueras hidráulicas. Ubicación, horarios y formulario de contacto." },
  ];
}

export default function ContactPage() {
  return (
    <>
    <section className="pt-12">
        <Contact />
        <FAQ />
    </section>
    </>
  );
}
