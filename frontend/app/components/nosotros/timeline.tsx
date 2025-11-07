// Timeline.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// Estilos modulares del timeline
export const TIMELINE_STYLES = {
  // Estilos del título (fecha + texto)
  title: {
    // Título en desktop (sticky)
    desktop: "hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white",
    // Título en mobile
    mobile: "md:hidden block text-2xl mb-4 text-left font-bold text-white",
    // Estilo de la fecha (primera parte antes del " – ")
    date: "block text-blue-400",
    // Estilo del texto del título (segunda parte después del " – ")
    titleText: "block",
  },
  // Estilos de la descripción
  description: "text-white text-lg md:text-xl font-normal mb-6",
  // Estilos de la imagen
  image: "rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full max-w-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
};

export const Timeline: React.FC<{ data: TimelineEntry[]; styles?: typeof TIMELINE_STYLES }> = ({ data, styles = TIMELINE_STYLES }) => {
  const ref = useRef<HTMLDivElement | null>(null); // referencia al contenido del timeline
  const containerRef = useRef<HTMLDivElement | null>(null); // referencia al viewport/containing wrapper
  const [height, setHeight] = useState<number>(0);

  // recalcula la altura cuando cambie el contenido (images cargadas, resize, etc.)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      // queremos la altura total del bloque que contiene las entradas
      setHeight(el.offsetHeight || el.getBoundingClientRect().height || 0);
    };

    update();

    // ResizeObserver para detectar cambios internos (imagenes, texto, etc.)
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    } else {
      // fallback
      window.addEventListener("resize", update);
      window.addEventListener("load", update);
    }

    return () => {
      if (ro) ro.disconnect();
      else {
        window.removeEventListener("resize", update);
        window.removeEventListener("load", update);
      }
    };
  }, [ref]);

  // useScroll ligado al container (viewport del timeline)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset puede ajustarse según el comportamiento deseado
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-6xl font-bold mb-4 text-white max-w-4xl">
          Nuestra Historia
        </h2>
        <p className="text-white text-2xl max-w-sm">
        Conoce nuestra trayectoria y los hitos que nos han consolidado como líderes en el sector.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            aria-hidden={false}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-600 border border-white p-2" />
              </div>
              <h3 className={styles.title.desktop}>
                {item.title.split(" – ").map((part, idx) => 
                  idx === 0 ? (
                    <span key={idx} className={styles.title.date}>{part}</span>
                  ) : (
                    <span key={idx} className={styles.title.titleText}>{part}</span>
                  )
                )}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className={styles.title.mobile}>
                {item.title.split(" – ").map((part, idx) => 
                  idx === 0 ? (
                    <span key={idx} className={styles.title.date}>{part}</span>
                  ) : (
                    <span key={idx} className={styles.title.titleText}>{part}</span>
                  )
                )}
              </h3>
              <div>{item.content}</div>
            </div>
          </div>
        ))}

        {/* Linea vertical absoluta */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          aria-hidden
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// ---------------- Demo / usage (todo dentro del mismo archivo) ----------------

// Datos del timeline
interface TimelineData {
  title: string;
  description: string;
  image: string;
  altText: string;
}

const TIMELINE_DATA: TimelineData[] = [
  {
    title: "1974 – Pioneros en León",
    description: "Nacemos como los primeros en vender mangueras hidráulicas en León, Guanajuato.",
    image: "/about-imgs/timeline/timeline1.webp",
    altText: "Pioneros en León 1974",
  },
  {
    title: "1980s – Expansión Regional",
    description: "Nos consolidamos en el Bajío siendo líderes en ventas durante la década de 1980.",
    image: "/about-imgs/timeline/timeline2.webp",
    altText: "Expansión Regional 1980s",
  },
  {
    title: "1990-2000 – Calidad Certificada",
    description: "Obtenemos certificaciones ISO y ampliamos cobertura de ventas a nivel nacional.",
    image: "/about-imgs/timeline/timeline3.webp",
    altText: "Calidad Certificada 1990-2000",
  },
  {
    title: "2010-2020 – Industria 4.0",
    description: "Implementamos monitoreo inteligente y servicios digitales.",
    image: "/about-imgs/timeline/timeline4.webp",
    altText: "Industria 4.0 2010-2020",
  },
  {
    title: "2025 – Liderazgo Integral",
    description: "Consolidamos soluciones completas y soporte experto.",
    image: "/about-imgs/timeline/timeline5.webp",
    altText: "Liderazgo Integral 2025",
  },
];

// Función para generar el contenido de cada entrada
const createTimelineContent = (item: TimelineData): React.ReactNode => (
  <div>
    <p className={TIMELINE_STYLES.description}>{item.description}</p>
    <div className="w-full">
      <img
        src={item.image}
        alt={item.altText}
        loading="lazy"
        className={TIMELINE_STYLES.image}
      />
    </div>
  </div>
);

export default function TimelineDemo(): React.ReactNode {
  const data: TimelineEntry[] = TIMELINE_DATA.map((item) => ({
    title: item.title,
    content: createTimelineContent(item),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
