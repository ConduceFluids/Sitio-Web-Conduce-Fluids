# ✅ Checklist de Deploy - Blog Conduce Fluids

## 📋 Lista de Verificación Completa

Sigue estos pasos en orden para completar el deploy del blog.

---

## Fase 1: Preparación Local ✅ (Completado)

- [x] Instalar dependencias de Sanity
- [x] Configurar Sanity Studio
- [x] Crear schemas del blog
- [x] Integrar cliente Sanity en frontend
- [x] Crear rutas del blog
- [x] Crear componentes del blog
- [x] Actualizar Navbar
- [x] Crear documentación

**Estado**: ✅ Completado por el desarrollador

---

## Fase 2: Configuración en Vercel 🔧 (Pendiente)

### Paso 1: Agregar Variables de Entorno

1. [ ] Ir a [Vercel Dashboard](https://vercel.com/dashboard)
2. [ ] Seleccionar el proyecto "conducefluids"
3. [ ] Ir a **Settings** → **Environment Variables**
4. [ ] Agregar las siguientes variables:

| Variable | Valor |
|----------|-------|
| `VITE_SANITY_PROJECT_ID` | `ccpxoq1k` |
| `VITE_SANITY_DATASET` | `production` |

5. [ ] Asegurarse de seleccionar **todos los entornos** (Production, Preview, Development)
6. [ ] Click en **Save**

### Paso 2: Redeploy

1. [ ] Ir a la pestaña **Deployments**
2. [ ] Seleccionar el último deployment
3. [ ] Click en los tres puntos (⋯)
4. [ ] Seleccionar **Redeploy**
5. [ ] Esperar a que complete (~2-3 minutos)

**Estado**: ⏳ Pendiente

---

## Fase 3: Deploy de Sanity Studio 🎨 (Pendiente)

### Requisitos Previos

1. [ ] Tener Node.js instalado (verificar con `node --version`)
2. [ ] Tener acceso a la terminal/consola
3. [ ] Estar logueado en Sanity

### Pasos

1. [ ] Abrir terminal/consola
2. [ ] Navegar a la carpeta del proyecto:
   ```bash
   cd ruta/al/proyecto/CONDUCEFLUIDS
   ```

3. [ ] Navegar a la carpeta studio:
   ```bash
   cd studio
   ```

4. [ ] Instalar dependencias (si es necesario):
   ```bash
   npm install
   ```

5. [ ] Login a Sanity:
   ```bash
   sanity login
   ```
   - Se abrirá el navegador
   - Iniciar sesión con: **conducefluids@gmail.com**

6. [ ] Deploy del Studio:
   ```bash
   npm run deploy
   ```
   - Esperar a que complete
   - Anotar la URL que aparece
   - **Copiar el `appId` que aparece al final** (ejemplo: `z4whnzydvhgfpq7r0v29uvnd`)

7. [ ] Actualizar `sanity.cli.ts` con el appId:
   - Abrir el archivo `studio/sanity.cli.ts`
   - Agregar la sección `deployment` con el `appId` copiado:
   ```typescript
   export default defineCliConfig({
     api: {
       projectId: 'ccpxoq1k',
       dataset: 'production'
     },
     deployment: {
       appId: 'z4whnzydvhgfpq7r0v29uvnd', // Usar el appId que te dio Sanity
     }
   })
   ```
   - Guardar el archivo
   - Esto evitará que te pregunte el appId en futuros deploys

8. [ ] Verificar acceso al Studio:
   - Abrir: `https://conducefluids-blog.sanity.studio`
   - Debería aparecer la pantalla de login

**Estado**: ⏳ Pendiente

---

## Fase 4: Push a Git y Deploy Final 🚀 (Pendiente)

### Paso 1: Commit de Cambios

1. [ ] Abrir terminal en la raíz del proyecto
2. [ ] Verificar cambios:
   ```bash
   git status
   ```

3. [ ] Agregar todos los archivos:
   ```bash
   git add .
   ```

4. [ ] Crear commit:
   ```bash
   git commit -m "Implementar blog con Sanity CMS"
   ```

5. [ ] Push a repositorio:
   ```bash
   git push
   ```

### Paso 2: Verificar Deploy en Vercel

1. [ ] Ir a [Vercel Dashboard](https://vercel.com/dashboard)
2. [ ] Verificar que el deploy se inició automáticamente
3. [ ] Esperar a que complete (~2-3 minutos)
4. [ ] Verificar que el estado sea "Ready"

**Estado**: ⏳ Pendiente

---

## Fase 5: Crear Primer Post de Prueba 📝 (Pendiente)

### Paso 1: Acceder al Studio

1. [ ] Ir a: `https://conducefluids-blog.sanity.studio`
2. [ ] Iniciar sesión con: **conducefluids@gmail.com**

### Paso 2: Crear Post de Prueba

1. [ ] Click en **"Post"** en el menú lateral
2. [ ] Click en **"Create"**
3. [ ] Completar los campos:
   - **Título**: "Bienvenidos a nuestro blog"
   - **Slug**: Click en "Generate"
   - **Autor**: "Conduce Fluids"
   - **Imagen principal**: Subir una imagen de prueba
   - **Extracto**: "Estamos emocionados de compartir contenido valioso sobre mangueras hidráulicas y soluciones industriales."
   - **Contenido**: Escribir un párrafo de bienvenida
   - **Fecha**: Dejar la fecha actual

4. [ ] Click en **"Publish"**

### Paso 3: Verificar en el Sitio Web

1. [ ] Ir a: `https://tudominio.com/blog`
2. [ ] Verificar que aparece el post
3. [ ] Click en el post para ver la página individual
4. [ ] Verificar que todo se ve correctamente

**Estado**: ⏳ Pendiente

---

## Fase 6: Verificación Final 🔍 (Pendiente)

### Funcionalidad

- [ ] La página `/blog` carga correctamente
- [ ] Los posts aparecen en el listado
- [ ] Las imágenes se muestran correctamente
- [ ] Los posts individuales cargan correctamente
- [ ] El contenido se renderiza correctamente
- [ ] El botón "Volver al blog" funciona
- [ ] El CTA al final del post funciona
- [ ] El link "Blog" en el Navbar funciona

### Diseño

- [ ] El diseño es consistente con el resto del sitio
- [ ] Las animaciones funcionan suavemente
- [ ] El diseño es responsive en móvil
- [ ] Las imágenes se ven bien en todos los tamaños
- [ ] Los colores y tipografías son correctos

### SEO

- [ ] Los títulos de página son correctos
- [ ] Las meta descriptions aparecen
- [ ] Las imágenes tienen texto alternativo
- [ ] Las URLs son amigables (slugs)

### Navegación

- [ ] Desktop: Link "Blog" en el Navbar funciona
- [ ] Móvil: Link "Blog" en el menú móvil funciona
- [ ] Navegación entre páginas es fluida
- [ ] No hay errores 404

**Estado**: ⏳ Pendiente

---

## Fase 7: Capacitación del Cliente 👨‍🏫 (Pendiente)

### Documentación Entregada

- [ ] Revisar `INSTRUCCIONES_CLIENTE.md`
- [ ] Revisar `BLOG_SETUP.md` (opcional, más técnico)
- [ ] Revisar `COMANDOS_UTILES.md` (opcional)

### Práctica

- [ ] Crear un segundo post de prueba
- [ ] Editar un post existente
- [ ] Subir imágenes
- [ ] Agregar imágenes dentro del contenido
- [ ] Usar encabezados y listas
- [ ] Despublicar un post

### Preguntas Frecuentes

- [ ] ¿Cómo crear un post?
- [ ] ¿Cómo agregar imágenes?
- [ ] ¿Cómo editar un post?
- [ ] ¿Cómo despublicar un post?
- [ ] ¿Cuánto tarda en aparecer en el sitio?

**Estado**: ⏳ Pendiente

---

## 🎯 Resumen de Estado

| Fase | Estado | Responsable |
|------|--------|-------------|
| 1. Preparación Local | ✅ Completado | Desarrollador |
| 2. Configuración Vercel | ⏳ Pendiente | Cliente/Dev |
| 3. Deploy Sanity Studio | ⏳ Pendiente | Cliente/Dev |
| 4. Push a Git | ⏳ Pendiente | Cliente/Dev |
| 5. Primer Post | ⏳ Pendiente | Cliente |
| 6. Verificación Final | ⏳ Pendiente | Cliente/Dev |
| 7. Capacitación | ⏳ Pendiente | Cliente |

---

## 📞 Soporte

### Si algo no funciona:

1. **Revisar documentación**:
   - `BLOG_SETUP.md` - Guía técnica completa
   - `INSTRUCCIONES_CLIENTE.md` - Guía simple
   - `COMANDOS_UTILES.md` - Comandos de referencia

2. **Verificar configuración**:
   - Variables de entorno en Vercel
   - Sanity Studio deployado
   - Git push completado

3. **Contactar soporte**:
   - Email: conducefluids@gmail.com
   - WhatsApp: +52 477 771 6363

---

## ✅ Checklist Rápido (TL;DR)

Para completar el deploy:

1. [ ] Agregar variables en Vercel
2. [ ] Redeploy en Vercel
3. [ ] `cd studio && npm run deploy`
4. [ ] `git add . && git commit -m "Blog" && git push`
5. [ ] Crear primer post en Sanity Studio
6. [ ] Verificar en el sitio web

---

**¡Éxito con el deploy!** 🚀

