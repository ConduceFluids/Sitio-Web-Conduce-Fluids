// File: src/components/Contact.tsx
// Description: Contact section with two locations and business hours for Conduce Fluids
// Tech: React + TailwindCSS

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
  interests: string[];
}

const ContactComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    interests: []
  });

  const [selectedLocation, setSelectedLocation] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Pronto nos pondremos en contacto.');
  };

  const locations = [
    {
      name: "Conduce Fluids",
      address: "Blvd. Vasco de Quiroga 210, Las Fuentes, 37270 León de los Aldama, Gto.",
      mapUrl: "https://www.google.com/maps?q=Blvd.%20Vasco%20de%20Quiroga%20210%2C%20Las%20Fuentes%2C%2037270%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.&output=embed"
    },
    {
      name: "Conduce Fluids Sucursal Delta",
      address: "Blvd. Delta 101F, Fracciones de Santa Julia, 37290 León de los Aldama, Gto.",
      mapUrl: "https://www.google.com/maps?q=Blvd.%20Delta%20101F%2C%20Fracciones%20de%20Santa%20Julia%2C%2037290%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.&output=embed"
    }
  ];

  const getScheduleForDay = () => {
    const today = new Date().getDay();
    const schedule = [
      "Cerrado",
      "09:00 a.m. – 07:00 p.m.",
      "09:00 a.m. – 07:00 p.m.",
      "09:00 a.m. – 07:00 p.m.",
      "09:00 a.m. – 07:00 p.m.",
      "09:00 a.m. – 07:00 p.m.",
      "09:00 a.m. – 02:00 p.m."
    ];
    return schedule[today];
  };

  return (
    <section id="contact" className="relative w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ubicación & Contacto
          </h2>
          <p className="text-lg text-white/90">
            Comunícate con nosotros. O, aún mejor, ¡ven a visitarnos! Nos encanta recibir a nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:items-stretch">
          {/* Contact Info & Form */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Contact Methods */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">¡Escríbenos hoy!</h3>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <FaPhone className="text-white/80 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Teléfonos</p>
                    <p className="text-white font-medium">477 771 6363 · 477 771 6364</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-white/80 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Correo</p>
                    <p className="text-white font-medium">conducefluids@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="text-white/80 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Horario de hoy</p>
                    <p className="text-white font-medium">{getScheduleForDay()}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-white/10 pt-6 mb-6">
                <p className="text-white/70 text-sm mb-3">Síguenos en redes sociales</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/521477716363?text=Hola%20Conduce%20Fluids"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-lg transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/conducefluids/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-lg transition-all cursor-pointer"
                  >
                    <FaFacebookF className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/conducefluids/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-lg transition-all cursor-pointer"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/70 text-sm mb-4">Cuéntanos brevemente qué necesitas</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white text-sm mb-2 block">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@correo.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-white text-sm mb-2 block">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe tu necesidad (manguera, conexión, presión, aplicación)..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 resize-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-white text-sm mb-3 block">Estoy buscando...</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'mangueras', label: 'Mangueras hidráulicas' },
                      { value: 'conexiones', label: 'Conexiones y adaptadores' },
                      { value: 'valvulas', label: 'Válvulas y acoples' },
                      { value: 'ensamble', label: 'Ensamble de mangueras' },
                      { value: 'pruebas', label: 'Pruebas de presión' },
                      { value: 'soporte', label: 'Soporte técnico' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2 text-white/90 text-sm cursor-pointer hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.value)}
                          onChange={() => handleCheckboxChange(option.value)}
                          className="w-4 h-4 bg-white/10 border-white/20 rounded accent-white"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 rounded-lg transition-all cursor-pointer"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>

          {/* Locations & Maps */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Location Selector */}
            <div className="flex gap-3">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLocation(index)}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    selectedLocation === index
                      ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {location.name.includes('Delta') ? 'Sucursal Delta' : 'Sucursal Principal'}
                </button>
              ))}
            </div>

            {/* Location Info */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-white/80 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{locations[selectedLocation].name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{locations[selectedLocation].address}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-80 md:h-[460px]">
                <iframe
                  title={`Ubicación ${locations[selectedLocation].name}`}
                  src={locations[selectedLocation].mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
