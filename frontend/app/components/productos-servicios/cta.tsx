// src/components/cta.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * CTA - Conduce Fluids
 * - Split layout: mitad blanca / mitad azul (#1D3C5B)
 * - Título grande, texto de apoyo y botón WhatsApp
 * - React + Vite + TSX + TailwindCSS
 *
 * Uso:
 * <CTA />                             // usa valores por defecto
 * <CTA phone="521234567890" />        // con lada país + número, sin signos
 * <CTA 
 *   title="Tu título personalizado"
 *   description="Tu descripción personalizada"
 *   buttonText="Texto del botón"
 *   whatsappMessage="Mensaje de WhatsApp"
 * />
 */

type Props = {
  phone?: string; // E.g. "521234567890" (México: 52 + 10 dígitos)
  title?: string; // Título principal
  description?: string; // Texto descriptivo
  buttonText?: string; // Texto del botón
  whatsappMessage?: string; // Mensaje predefinido para WhatsApp
};

export default function CTA({ 
  phone = "52XXXXXXXXXX",
  title = "¿Necesitas asesoría técnica o cotización inmediata?",
  description = "Nuestro equipo te atiende directamente por WhatsApp para resolver dudas, brindarte soporte y ayudarte a elegir el producto adecuado.",
  buttonText = "Hablar por WhatsApp",
  whatsappMessage = "Hola, necesito asesoría técnica o cotización. ¿Me puedes apoyar?"
}: Props) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full py-12 md:py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <article
          className="
            relative overflow-hidden rounded-3xl shadow-2xl
            backdrop-blur-xl bg-white/60
            ring-1 ring-white/20 ring-black/5
            grid grid-cols-1 md:grid-cols-2
          "
        >
          {/* Lado blanco */}
          <div className="relative bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-14 border-r border-white/30">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0B0F15]">
              {title}
            </h2>
          </div>

          {/* Lado azul */}
          <div className="relative bg-[#1D3C5B]/80 backdrop-blur-sm px-6 py-10 md:px-10 md:py-14 text-white border-l border-white/10">
            <p className="text-base md:text-lg text-white/90 max-w-prose">
              {description}
            </p>

            <div className="mt-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-xl
                  bg-white/95 backdrop-blur-sm text-[#1D3C5B]
                  px-5 py-3 text-sm md:text-base font-semibold
                  ring-1 ring-white/30 shadow-lg
                  hover:bg-white transition-all hover:shadow-xl
                "
              >
                <FaWhatsapp className="h-5 w-5" />
                {buttonText}
              </a>
            </div>

            {/* Decoración sutil */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          </div>
        </article>
      </div>
    </section>
  );
}

