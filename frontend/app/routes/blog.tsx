import type { Route } from "./+types/blog";
import { motion } from "framer-motion";
import { client, queries } from "~/lib";
import type { Post } from "~/lib";
import BlogCard from "~/components/blog/blog-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - CONDUCE FLUIDS" },
    { 
      name: "description", 
      content: "Conocimiento y novedades del mundo de las mangueras hidráulicas y soluciones industriales" 
    },
  ];
}

export async function loader() {
  try {
    const posts = await client.fetch<Post[]>(queries.allPosts);
    return { posts };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [] };
  }
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-50 h-50 bg-blue-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestro Blog
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Conocimiento y novedades del mundo de las mangueras hidráulicas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-white">
              Próximamente publicaremos contenido interesante. ¡Mantente atento!
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

