import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-white/10 backdrop-blur-xl border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img
              src="/CONDUCE_LOGO.webp"
              alt="Conduce Fluids"
              className="h-24 w-auto"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Más de 50 años sirviendo a la industria del Bajío con soluciones en mangueras hidráulicas y conducción de fluidos.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-sm" />
              </a>
              <a
                href="https://wa.me/524775770379"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("intro")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Soluciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-white/60 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Blvd. Vasco de Quiroga 210, Las Fuentes, León, Gto.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-white/60 flex-shrink-0" />
                <a 
                  href="tel:+524777716363" 
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  +52 477 771 6363
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-white/60 flex-shrink-0" />
                <a 
                  href="mailto:contacto@conducefluids.com" 
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  contacto@conducefluids.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-white/80">
                <span>Lun - Vie:</span>
                <span>09:00 - 19:00</span>
              </li>
              <li className="flex justify-between text-white/80">
                <span>Sábado:</span>
                <span>09:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-white/80">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Conduce Fluids. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

