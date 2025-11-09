import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuración del cliente Sanity
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ccpxoq1k',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // `false` si quieres datos en tiempo real
  apiVersion: '2024-01-01',
});

// Helper para generar URLs de imágenes optimizadas
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Queries reutilizables
export const queries = {
  // Obtener todos los posts publicados
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,

  // Obtener un post por slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    author,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    content[] {
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        },
        alt,
        caption
      }
    }
  }`,

  // Obtener posts recientes (para sidebar o relacionados)
  recentPosts: `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,
};

// Tipos TypeScript para los posts
export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  author?: string;
  publishedAt: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  content?: any[];
}

