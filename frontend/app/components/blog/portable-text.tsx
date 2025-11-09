import { PortableText as BasePortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '~/lib';

// Componentes personalizados para renderizar el contenido
const components: PortableTextComponents = {
  block: {
    // Estilos para diferentes niveles de encabezados
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-6 italic text-gray-700 bg-blue-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          target={value?.blank ? '_blank' : undefined}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      
      const imageUrl = urlFor(value).width(1200).url();
      
      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || 'Imagen del post'}
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextProps {
  value: any;
}

export function PortableText({ value }: PortableTextProps) {
  return <BasePortableText value={value} components={components} />;
}

