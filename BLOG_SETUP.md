# Configuración del Blog con Sanity CMS

Este documento contiene todas las instrucciones necesarias para configurar y usar el blog de Conduce Fluids con Sanity CMS.

## 📋 Contenido

1. [Configuración Inicial](#configuración-inicial)
2. [Variables de Entorno en Vercel](#variables-de-entorno-en-vercel)
3. [Uso de Sanity Studio](#uso-de-sanity-studio)
4. [Crear Posts](#crear-posts)
5. [Deploy](#deploy)

---

## 🚀 Configuración Inicial

### 1. Instalar Dependencias

Ya están instaladas en el proyecto:
- `@sanity/client` - Cliente para conectar con Sanity
- `@sanity/image-url` - Optimización de imágenes
- `@portabletext/react` - Renderizado de contenido

### 2. Estructura del Proyecto

```
CONDUCEFLUIDS/
├── frontend/
│   ├── app/
│   │   ├── components/blog/
│   │   │   ├── blog-card.tsx
│   │   │   ├── portable-text.tsx
│   │   │   └── index.ts
│   │   ├── routes/
│   │   │   ├── blog.tsx (listado de posts)
│   │   │   └── blog.$slug.tsx (post individual)
│   │   └── lib/
│   │       └── sanity.ts (configuración del cliente)
│   └── .env.example
└── studio/
    ├── schemas/
    │   ├── post.ts (schema del blog post)
    │   └── index.ts
    ├── sanity.config.ts
    └── package.json
```

---

## 🔐 Variables de Entorno en Vercel

### Paso 1: Acceder a Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Selecciona tu proyecto "conducefluids"
3. Ve a **Settings** → **Environment Variables**

### Paso 2: Agregar Variables

Agrega las siguientes variables de entorno:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `VITE_SANITY_PROJECT_ID` | `ccpxoq1k` | ID del proyecto de Sanity |
| `VITE_SANITY_DATASET` | `production` | Dataset de Sanity |

**Importante:** Asegúrate de seleccionar todos los entornos (Production, Preview, Development).

### Paso 3: Redeploy

Después de agregar las variables:
1. Ve a la pestaña **Deployments**
2. Selecciona el último deployment
3. Click en los tres puntos (⋯) → **Redeploy**

---

## 🎨 Uso de Sanity Studio

### Acceder al Studio

Hay dos formas de acceder a Sanity Studio:

#### Opción 1: Studio Deployado (Recomendado para el cliente)

1. Ejecuta en la carpeta `studio/`:
   ```bash
   cd studio
   npm run deploy
   ```

2. Accede a: `https://conducefluids-blog.sanity.studio`

3. Inicia sesión con: **conducefluids@gmail.com**

#### Opción 2: Studio Local (Para desarrollo)

1. En la carpeta `studio/`:
   ```bash
   cd studio
   npm run dev
   ```

2. Accede a: `http://localhost:3333`

---

## ✍️ Crear Posts

### Paso a Paso para Crear un Post

1. **Acceder al Studio**
   - Ve a tu Sanity Studio (deployado o local)
   - Inicia sesión

2. **Crear Nuevo Post**
   - Click en **"Post"** en el menú lateral
   - Click en el botón **"Create"** o **"+"**

3. **Completar los Campos**

   | Campo | Descripción | Requerido |
   |-------|-------------|-----------|
   | **Título** | Título del post | ✅ Sí |
   | **Slug** | URL del post (se genera automáticamente) | ✅ Sí |
   | **Autor** | Nombre del autor (por defecto: "Conduce Fluids") | ❌ No |
   | **Imagen principal** | Imagen destacada del post | ❌ No |
   | **Extracto** | Resumen corto (máx. 200 caracteres) | ✅ Sí |
   | **Contenido** | Contenido completo del post | ❌ No |
   | **Fecha de publicación** | Fecha y hora de publicación | ✅ Sí |

4. **Agregar Contenido**

   El editor de contenido permite:
   - **Texto normal**: Escribe directamente
   - **Encabezados**: Usa los estilos H1, H2, H3, H4
   - **Negrita/Cursiva**: Selecciona texto y usa los botones
   - **Listas**: Listas numeradas o con viñetas
   - **Enlaces**: Selecciona texto → botón de enlace
   - **Imágenes**: Click en el botón "+" → "Image"
     - Arrastra y suelta imágenes
     - Agrega texto alternativo (alt)
     - Agrega pie de foto (caption)

5. **Generar Slug**
   - Escribe el título primero
   - Click en **"Generate"** junto al campo Slug
   - El slug se crea automáticamente (ej: "mi-primer-post")

6. **Subir Imagen Principal**
   - Click en el campo "Imagen principal"
   - Arrastra y suelta una imagen o click en "Select"
   - Agrega texto alternativo (importante para SEO)

7. **Publicar**
   - Click en **"Publish"** en la esquina superior derecha
   - El post aparecerá inmediatamente en el sitio web

### Tips para Crear Buenos Posts

✅ **Buenas Prácticas:**
- Usa títulos descriptivos y claros
- El extracto debe ser atractivo (aparece en las cards)
- Agrega siempre una imagen principal de buena calidad
- Usa encabezados (H2, H3) para organizar el contenido
- Agrega imágenes dentro del contenido para hacerlo más visual
- Incluye texto alternativo en todas las imágenes (SEO)

❌ **Evita:**
- Títulos muy largos (más de 60 caracteres)
- Extractos muy largos (máximo 200 caracteres)
- Imágenes muy pesadas (Sanity las optimiza pero mejor subirlas ya optimizadas)
- Contenido sin estructura (usa encabezados)

---

## 🚀 Deploy

### Deploy Automático

El blog ya está configurado para deploy automático en Vercel:

1. **Hacer cambios en el código**
   ```bash
   git add .
   git commit -m "Actualización del blog"
   git push
   ```

2. **Vercel detecta los cambios automáticamente**
   - Se inicia un nuevo deployment
   - En ~2-3 minutos el sitio está actualizado

### Deploy de Sanity Studio

Para actualizar el Studio deployado:

```bash
cd studio
npm run deploy
```

---

## 🎯 URLs del Blog

### Producción
- **Listado de posts**: `https://tudominio.com/blog`
- **Post individual**: `https://tudominio.com/blog/slug-del-post`

### Desarrollo Local
- **Frontend**: `http://localhost:5173/blog`
- **Sanity Studio**: `http://localhost:3333`

---

## 🆘 Solución de Problemas

### Los posts no aparecen en el sitio

1. Verifica que las variables de entorno estén configuradas en Vercel
2. Asegúrate de que el post esté publicado (no en borrador)
3. Revisa que la fecha de publicación no sea futura
4. Haz un redeploy en Vercel

### Imágenes no se muestran

1. Verifica que la imagen tenga el campo `asset` en Sanity
2. Revisa que `VITE_SANITY_PROJECT_ID` esté correctamente configurado
3. Limpia el caché del navegador

### Error al acceder a Sanity Studio

1. Verifica que estés logueado con la cuenta correcta
2. Revisa que el `projectId` en `studio/sanity.config.ts` sea correcto
3. Intenta hacer logout y login nuevamente

---

## 📞 Contacto

Para soporte técnico o dudas sobre el blog:
- Email: conducefluids@gmail.com
- WhatsApp: +52 477 771 6363

---

## 📝 Notas Adicionales

### Límites del Plan Gratuito de Sanity

- ✅ 1,000,000 llamadas API/mes (más que suficiente)
- ✅ 10GB de ancho de banda
- ✅ 5GB de almacenamiento
- ✅ Hasta 5 usuarios en el equipo

### SEO

El blog está optimizado para SEO:
- Meta tags dinámicos por post
- Open Graph para redes sociales
- URLs amigables (slugs)
- Imágenes optimizadas automáticamente
- Estructura semántica HTML5

### Rendimiento

- Imágenes optimizadas con CDN de Sanity
- Caché inteligente
- Server-Side Rendering (SSR)
- Core Web Vitals optimizados

