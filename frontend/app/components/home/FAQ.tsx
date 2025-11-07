// File: src/components/FAQ.tsx
// Description: FAQ component with categories for Conduce Fluids
// Tech: React + TailwindCSS + Framer Motion

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    category: "Productos & Servicios",
    items: [
      {
        question: "¿Qué tipo de mangueras hidráulicas manejan?",
        answer: "Contamos con una amplia variedad de mangueras hidráulicas para alta, media y baja presión. Siempre tenemos lo que tu equipo necesita."
      },
      {
        question: "¿Tienen medidas estándar o pueden fabricar a la medida?",
        answer: "Tenemos medidas estándar, pero también ofrecemos soluciones personalizadas según tus necesidades. ¡Nos adaptamos a tu sistema!"
      },
      {
        question: "¿Qué presión soportan sus mangueras?",
        answer: "Nuestras mangueras están diseñadas para soportar presiones industriales exigentes. Te asesoramos para elegir la adecuada."
      },
      {
        question: "¿Venden sólo mangueras o también conexiones y adaptadores?",
        answer: "Vendemos mangueras, conectores, adaptadores y todo lo que necesitas para una instalación hidráulica segura y funcional."
      },
      {
        question: "¿Realizan crimpado (ensamble) en tienda?",
        answer: "Sí, crimpamos al momento en nuestra tienda. Tu solución lista en minutos, con total precisión."
      }
    ]
  },
  {
    category: "Tiempos & Entregas",
    items: [
      {
        question: "¿Cuánto tarda el crimpado?",
        answer: "Nuestro servicio express lo hace en minutos. ¡Rápido, confiable y bien hecho!"
      },
      {
        question: "¿Tienen servicio express o entregas el mismo día?",
        answer: "Contamos con atención inmediata y entregas el mismo día dentro de León, según disponibilidad."
      },
      {
        question: "¿Puedo pedir por WhatsApp o redes sociales?",
        answer: "Sí, puedes hacer tu pedido directamente por WhatsApp o DM. ¡Respondemos rápido y te cotizamos al instante!"
      },
      {
        question: "¿Hacen envíos fuera de León?",
        answer: "Claro, hacemos envíos a todo México. Pregúntanos por la cobertura y tiempos según tu zona."
      }
    ]
  },
  {
    category: "Asesoría Técnica",
    items: [
      {
        question: "¿Me pueden ayudar a elegir la manguera correcta para mi equipo?",
        answer: "Por supuesto. Nuestro equipo te asesora con gusto, según la presión, temperatura y tipo de conexión."
      },
      {
        question: "¿Qué tipo de conexión es compatible con mi sistema?",
        answer: "Te ayudamos a identificar la conexión ideal. Con nosotros, eliges lo que realmente necesitas."
      },
      {
        question: "¿Cómo sé si necesito cambiar mi manguera hidráulica?",
        answer: "Si notas desgaste, fugas o pérdida de presión, es momento. ¡Trae tu muestra y te asesoramos sin costo! También enviamos a tu domicilio a alguno de nuestros asesores especializados."
      }
    ]
  },
  {
    category: "Pagos & Promos",
    items: [
      {
        question: "¿Qué formas de pago aceptan?",
        answer: "Aceptamos efectivo, transferencia, tarjetas de débito y crédito. Fácil, seguro y rápido."
      },
      {
        question: "¿Tienen promociones o descuentos por volumen?",
        answer: "Sí, ofrecemos descuentos especiales por volumen."
      },
      {
        question: "¿Facturan? ¿Qué datos necesitan para hacerlo?",
        answer: "Claro que facturamos. Solo necesitamos tu RFC y datos fiscales completos. Sencillo y transparente."
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const faqItemVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-white/90">
            Encuentra respuestas rápidas a las dudas más comunes
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FAQ_DATA.map((category, index) => (
            <motion.button
              key={index}
              variants={categoryVariants}
              onClick={() => {
                setSelectedCategory(index);
                setExpandedFaq(null);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer ${
                selectedCategory === index
                  ? 'bg-white/30 backdrop-blur-md border border-white/40 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-2"
              >
                {FAQ_DATA[selectedCategory].items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-b border-white/10 last:border-0 overflow-hidden"
                  >
                    <motion.button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      whileHover={{ x: 4 }}
                      className="w-full flex items-center justify-between py-5 text-left hover:text-white/90 transition-colors duration-200 group cursor-pointer"
                    >
                      <span className="text-white font-medium pr-4">{item.question}</span>
                      <motion.div
                        animate={{
                          rotate: expandedFaq === index ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <FaPlus 
                          className="text-white/80 flex-shrink-0 group-hover:text-white" 
                        />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={faqItemVariants}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="text-white/80 pb-5 text-sm leading-relaxed"
                          >
                            {item.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

