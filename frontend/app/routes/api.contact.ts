import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action({ request }: { request: Request }) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return Response.json(
      { success: false, message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message, interests } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Por favor completa todos los campos requeridos.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: 'Por favor ingresa un email válido.' },
        { status: 400 }
      );
    }

    // Format interests for display
    const interestsLabels: Record<string, string> = {
      'mangueras': 'Mangueras hidráulicas',
      'conexiones': 'Conexiones y adaptadores',
      'valvulas': 'Válvulas y acoples',
      'ensamble': 'Ensamble de mangueras',
      'pruebas': 'Pruebas de presión',
      'soporte': 'Soporte técnico'
    };

    const formattedInterests = interests && interests.length > 0
      ? interests.map((int: string) => interestsLabels[int] || int).join(', ')
      : 'No especificado';

    // Get current date/time in Mexico timezone
    const mexicoDate = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Professional email template with Conduce Fluids branding
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Contacto - Conduce Fluids</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f9; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                
                <!-- Header with Logo and Gradient -->
                <tr>
                  <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
                    <img src="https://conducefluids.com/CONDUCE_LOGO.webp" alt="Conduce Fluids" style="max-width: 200px; height: auto; margin-bottom: 20px;" />
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                      Nuevo Contacto desde tu Sitio Web
                    </h1>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <!-- Client Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px;">
                          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Nombre del Cliente
                          </p>
                          <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">
                            ${name}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px;">
                          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Correo Electrónico
                          </p>
                          <p style="margin: 0;">
                            <a href="mailto:${email}" style="color: #3b82f6; font-size: 16px; font-weight: 500; text-decoration: none;">
                              ${email}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Interests -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px;">
                          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Intereses
                          </p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px; line-height: 1.6;">
                            ${formattedInterests}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px;">
                          <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Mensaje
                          </p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px; line-height: 1.8;">
                            ${message}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Date/Time -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px;">
                          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Fecha de Recepción
                          </p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px;">
                            ${mexicoDate}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Call to Action -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                      <tr>
                        <td style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 20px; border-radius: 8px; text-align: center;">
                          <p style="margin: 0 0 12px 0; color: #1e40af; font-size: 15px; font-weight: 600;">
                            Responde pronto para mantener una excelente relación con tus clientes
                          </p>
                          <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px; margin-top: 8px;">
                            Responder a ${name}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; line-height: 1.6;">
                      Este mensaje fue enviado desde el formulario de contacto de tu sitio web
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                      <strong>Conduce Fluids</strong> | Soluciones Hidráulicas Profesionales
                    </p>
                    <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 12px;">
                      477 771 6363 · 477 771 6364 | conducefluids@gmail.com
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Conduce Fluids <onboarding@resend.dev>',
      to: 'conducefluids@gmail.com',
      subject: `Nuevo Contacto: ${name} - ${formattedInterests.split(',')[0]}`,
      html: emailTemplate,
      replyTo: email,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json(
        { success: false, message: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return Response.json({
      success: true,
      message: '¡Mensaje enviado exitosamente!',
      emailId: data?.id
    });

  } catch (error) {
    console.error('Unexpected error in contact handler:', error);
    return Response.json(
      { success: false, message: 'Error inesperado. Por favor intenta de nuevo más tarde.' },
      { status: 500 }
    );
  }
}

