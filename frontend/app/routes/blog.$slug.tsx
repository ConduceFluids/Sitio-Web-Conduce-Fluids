import type { Route } from "./+types/blog.$slug";
import { motion } from "framer-motion";
import { client, queries, urlFor } from "~/lib";
import type { Post } from "~/lib";
import { PortableText } from "~/components/blog/portable-text";
import { Button } from "~/ui/button";
import CTA from "~/components/productos-servicios/cta";

export function meta({ data }: Route.MetaArgs) {
  if (!data?.post) {
    return [
      { title: "Post no encontrado - CONDUCE FLUIDS" },
      { name: "description", content: "El post que buscas no existe" },
    ];
  }

  const { post } = data;
  return [
    { title: `${post.title} - CONDUCE FLUIDS Blog` },
    { name: "description", content: post.excerpt },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { 
      property: "og:image", 
      content: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : '' 
    },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const post = await client.fetch<Post>(queries.postBySlug, { 
      slug: params.slug 
    });
    
    if (!post) {
      throw new Response("Post no encontrado", { status: 404 });
    }

    return { post };
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Response("Post no encontrado", { status: 404 });
  }
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  // Formatear fecha
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen">
      {/* Hero con imagen destacada */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {post.mainImage && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${urlFor(post.mainImage).width(1920).height(1080).url()})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </>
        )}
        
        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Button 
                to="/blog" 
                variant="solid"
                className="mb-6 text-white"
              >
                ← Regresar
              </Button>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                {post.author && (
                  <span className="text-lg">Por {post.author}</span>
                )}
                <span className="text-lg">•</span>
                <time className="text-lg">{formattedDate}</time>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenido del post */}
      <article className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Content wrapper with gradient background */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 md:p-12">
            {/* Excerpt destacado */}
            <div className="mb-8 pb-8">
              <p className="text-xl md:text-2xl text-white font-medium mb-8">
                {post.excerpt}
              </p>
              <div 
                className="h-[2px] w-full rounded-full"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.3) 80%, transparent 100%)'
                }}
              />
            </div>

            {/* Contenido principal */}
            <div className="prose prose-lg max-w-none text-white">
              {post.content && <PortableText value={post.content} />}
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5" />
          </div>
        </motion.div>
      </article>

      {/* CTA al final del post */}
      <div className="pb-12">
        <CTA 
          title="¿En que podemos ayudarte?"
          description="Nuestro equipo te atiende directamente por WhatsApp para resolver dudas, brindarte soporte y ayudarte a elegir el producto o servicio adecuado."
          buttonText="Contactar ahora"
          whatsappMessage={`Hola, leí el artículo "${post.title}" y me gustaría obtener más información`}
          phone="524775770379"
        />
      </div>
    </div>
  );
}

