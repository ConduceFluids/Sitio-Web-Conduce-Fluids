import { motion } from "framer-motion";
import { Link } from "react-router";
import { urlFor } from "~/lib";
import type { Post } from "~/lib";

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  // Formatear fecha
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Obtener URL de imagen optimizada
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(600).height(400).url()
    : '/home-imgs/hero-bg.webp'; // Imagen por defecto

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
    >
      <Link to={`/blog/${post.slug.current}`} className="block h-full cursor-pointer">
        {/* Glassmorphism Card */}
        <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-500">
          
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
            <motion.img
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
            {/* Fecha y autor */}
            <div className="flex items-center gap-3 text-sm text-slate-300 mb-3">
              <time>{formattedDate}</time>
              {post.author && (
                <>
                  <span>•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>

            {/* Título */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Link */}
            <div className="flex items-center text-blue-300 font-medium group-hover:gap-2 transition-all duration-300">
              <span>Leer más</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
          </div>

          {/* Border glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/30" />
        </div>
      </Link>
    </motion.article>
  );
}

