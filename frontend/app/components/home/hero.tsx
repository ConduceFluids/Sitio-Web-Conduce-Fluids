import { useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { getLenisInstance } from "../../hooks/useSmoothScroll";

type Align = "left" | "center";

interface HeroProps {
  title?: string;
  subtitle?: string;
  slogan?: string;
  backgroundUrl?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: Align;
}

export default function Hero({
  title = "Mangueras Hidráulicas y Soluciones Para la Industria",
  subtitle = "Mangueras y conexiones hidráulicas de alta presión con ensamble profesional, pruebas y soporte técnico especializado.",
  slogan = "Experiencia y Liderazgo. Tu Mejor Conexión.",
  backgroundUrl = "/home-imgs/hero-bg.webp",
  primaryLabel = "Contactános",
  primaryHref = "/contact",
  secondaryLabel = "Ver más",
  secondaryHref = "/products-services",
  align = "left",
}: HeroProps) {
  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";
  
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = getLenisInstance();
    const section = sectionRef.current;
    const background = backgroundRef.current;
    
    if (!section || !background) return;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      
      // Calcular posición relativa del Hero en la ventana
      // Cuando el Hero está en su posición inicial (rect.top = 0), parallaxOffset = 0
      // Cuando el Hero sale de la pantalla (rect.top < 0), parallaxOffset aumenta
      // El factor 0.5 hace que la imagen se mueva más lento que el scroll (efecto parallax)
      const parallaxOffset = Math.max(0, -rect.top) * 0.5;
      
      background.style.transform = `translateY(${parallaxOffset}px)`;
    };

    if (lenis) {
      // Usar Lenis si está disponible
      lenis.on("scroll", updateParallax);
      updateParallax(); // Llamar inicialmente
      
      return () => {
        lenis.off("scroll", updateParallax);
      };
    } else {
      // Fallback a scroll nativo
      const handleScroll = () => {
        requestAnimationFrame(updateParallax);
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      updateParallax(); // Llamar inicialmente
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Imagen de fondo con parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        aria-hidden="true"
      />

      {/* Overlay blanco ~20% */}
      <div className="absolute inset-0 bg-[#333333]/35" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative z-10 h-full w-full flex items-end">
        <div className={`max-w-4xl px-6 md:px-10 mb-6 md:mb-10 flex flex-col gap-4 ${alignClasses}`}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
            {title}
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/90">
            {subtitle}
          </p>
          <p className="max-w-2xl text-lg md:text-xl text-white/90 font-bold">
            {slogan}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <Button variant="solid" href={primaryHref}>
              {primaryLabel}
            </Button>
            <Button variant="glass" href={secondaryHref}>
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>

      {/* Fades opcionales para legibilidad */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/40 to-transparent" />
    </section>
  );
}
