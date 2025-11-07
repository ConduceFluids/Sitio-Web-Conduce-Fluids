import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1.5"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1.5"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/10 backdrop-blur-xl border-t border-white/20">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Inicio
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            Nosotros
          </MobileNavLink>
          <button
            onClick={handleCotizarClick}
            className="w-full mt-3 bg-gray-900 text-white shadow-md hover:bg-gray-800 active:scale-[0.99] font-medium py-3 px-4 rounded-2xl transition-all"
          >
            Cotizar Ahora
          </button>
        </div>
      </div>
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
