// File: src/components/intro.tsx
// Description: Centered text block with background image
// Tech: React + Vite + TailwindCSS

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
    >
      <div className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] max-w-5xl relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center">
        {/* Imagen de fondo con blur que contiene el texto */}
        <div 
          className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(/home-imgs/intro-img.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />

        {/* Contenedor del texto */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm md:text-base font-medium text-white/90 tracking-wide">
              Desde 1974
            </span>
          </div>
          
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white px-2">
            Experiencia y Liderazgo
          </h2>

          <p className="mx-auto mt-6 sm:mt-8 max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 text-center px-4 sm:px-6">
            En Conduce Fluids tenemos amplia experiencia en conducción de fluidos industriales. Ofrecemos mangueras hidráulicas y conexiones de alta presión con la confianza que dan más de 50 años sirviendo a la industria del Bajío. Nuestro compromiso es modernizar y mantener en marcha tus procesos críticos con asesoría experta y entrega inmediata.
          </p>
        </div>
      </div>
    </section>
  );
}
