import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleCotizarClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      // Si estamos en home, hacer scroll a contacto
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Si estamos en otra página, navegar a home y luego scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/CONDUCE_LOGO.webp"
              alt="Conduce Fluids"
              className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Nosotros</NavLink>
            <NavLink to="/products-services">Productos y Servicios</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleCotizarClick}
              className="px-6 py-3 rounded-2xl font-medium text-white bg-gray-900 shadow-md hover:bg-gray-800 active:scale-[0.99] transition-all duration-300 cursor-pointer"
            >
              Cotizar Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-5 h-4 flex flex-col justify-between"
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-white rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, translateY: 0 },
                  open: { rotate: 45, translateY: 6 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, translateY: 0 },
                  open: { rotate: -45, translateY: -6 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="px-4 pt-2 pb-4 space-y-2 bg-white/10 backdrop-blur-xl border-t border-white/20"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Inicio
                </MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.15, duration: 0.2 }}
              >
                <MobileNavLink
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                <MobileNavLink
                  to="/products-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Productos y Servicios
                </MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.25, duration: 0.2 }}
              >
                <MobileNavLink
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </MobileNavLink>
              </motion.div>
              <motion.button
                onClick={handleCotizarClick}
                className="w-full mt-3 bg-gray-900 text-white shadow-md hover:bg-gray-800 active:scale-[0.99] font-medium py-3 px-4 rounded-2xl transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cotizar Ahora
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Desktop Nav Link Component
function NavLink({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="relative px-4 py-2 text-white/90 font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:text-white"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
      <span className="relative">{children}</span>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/60 group-hover:w-3/4 transition-all duration-300"></div>
    </Link>
  );
}

// Mobile Nav Link Component
function MobileNavLink({
  children,
  to,
  onClick,
}: {
  children: React.ReactNode;
  to: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block w-full text-left px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all"
    >
      {children}
    </Link>
  );
}
