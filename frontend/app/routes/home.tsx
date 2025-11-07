import type { Route } from "./+types/home";
import { Hero } from "../components/home";
import Intro from "~/components/home/intro";
import SolutionsCards from "~/components/home/solutions-cards";
import  ServicesCards  from "~/components/home/services-cards";
import FAQ from "~/components/home/FAQ";
import Contact from "~/components/home/contact";

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
      <FAQ />
      <Contact />
    </>
  );
}
