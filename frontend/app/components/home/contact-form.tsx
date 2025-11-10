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

interface SubmitState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const ContactComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    interests: []
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: null
  });

  const [selectedLocation, setSelectedLocation] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous errors when user starts typing
    if (submitState.error) {
      setSubmitState({ ...submitState, error: null });
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return 'Por favor ingresa tu nombre.';
    }
    if (!formData.email.trim()) {
      return 'Por favor ingresa tu correo electrónico.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Por favor ingresa un correo electrónico válido.';
    }
    if (!formData.message.trim()) {
      return 'Por favor escribe un mensaje.';
    }
    if (formData.message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres.';
    }
    return null;
  };

  const handleSubmit = async () => {
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitState({
        loading: false,
        success: false,
        error: validationError
      });
      return;
    }

    // Set loading state
    setSubmitState({
      loading: true,
      success: false,
      error: null
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success state
        setSubmitState({
          loading: false,
          success: true,
          error: null
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          message: '',
          interests: []
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitState({
            loading: false,
            success: false,
            error: null
          });
        }, 5000);
      } else {
        // Error from API
        setSubmitState({
          loading: false,
          success: false,
          error: data.message || 'Error al enviar el mensaje. Por favor intenta de nuevo.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitState({
        loading: false,
        success: false,
        error: 'Error de conexión. Por favor verifica tu internet e intenta de nuevo.'
      });
    }
  };

  const locations = [
    {
      name: "Conduce Fluids",
      address: "Blvd. Vasco de Quiroga 210, Las Fuentes, 37270 León de los Aldama, Gto.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119099.42228258541!2d-101.6581924!3d21.1182687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe5580feba39%3A0xe286daaf97d5ee2f!2sCONDUCE%20FLUIDS%20SA%20de%20CV!5e0!3m2!1ses-419!2smx!4v1762533749696!5m2!1ses-419!2smx"
    },
    {
      name: "Conduce Fluids Sucursal Delta",
      address: "Blvd. Delta 101F, Fracciones de Santa Julia, 37290 León de los Aldama, Gto.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119099.42228258541!2d-101.6581924!3d21.1182687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe094177f539%3A0x3508ff08f171964d!2sCONDUCE%20FLUIDS%20Sucursal%20Delta!5e0!3m2!1ses-419!2smx!4v1762533765455!5m2!1ses-419!2smx"
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

                {/* Success Message */}
                {submitState.success && (
                  <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-100 text-sm font-medium text-center">
                      ✓ ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitState.error && (
                  <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-100 text-sm font-medium text-center">
                      ✕ {submitState.error}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={submitState.loading}
                  className={`w-full font-semibold py-3 rounded-lg transition-all ${
                    submitState.loading
                      ? 'bg-white/10 border border-white/20 text-white/50 cursor-not-allowed'
                      : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white cursor-pointer'
                  }`}
                >
                  {submitState.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
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
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ border: 0 }}
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
