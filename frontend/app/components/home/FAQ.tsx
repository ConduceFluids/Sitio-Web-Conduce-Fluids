// File: src/components/FAQ.tsx
// Description: FAQ component with categories for Conduce Fluids
// Tech: React + TailwindCSS

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

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

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="relative w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-white/90">
            Encuentra respuestas rápidas a las dudas más comunes
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FAQ_DATA.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(index);
                setExpandedFaq(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-white/30 backdrop-blur-md border border-white/40 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="space-y-2">
              {FAQ_DATA[selectedCategory].items.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-white/10 last:border-0 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left hover:text-white/90 transition-colors duration-200 group"
                  >
                    <span className="text-white font-medium pr-4">{item.question}</span>
                    <FaPlus 
                      className={`text-white/80 flex-shrink-0 transition-all duration-300 ease-in-out ${
                        expandedFaq === index ? 'rotate-45' : 'rotate-0'
                      } group-hover:text-white`} 
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-white/80 pb-5 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

