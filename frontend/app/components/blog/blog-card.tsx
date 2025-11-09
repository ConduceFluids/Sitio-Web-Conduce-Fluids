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
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <Link to={`/blog/${post.slug.current}`} className="block">
        {/* Imagen */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Fecha y autor */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <time>{formattedDate}</time>
            {post.author && (
              <>
                <span>•</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          {/* Título */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Link */}
          <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all duration-300">
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
      </Link>
    </motion.article>
  );
}

