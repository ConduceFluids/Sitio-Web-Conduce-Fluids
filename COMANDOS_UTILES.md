# 🚀 Comandos Útiles - Blog Conduce Fluids

## 📋 Referencia Rápida de Comandos

### Frontend (React Router)

```bash
# Navegar al frontend
cd frontend

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Verificar tipos TypeScript
npm run typecheck
```

### Sanity Studio

```bash
# Navegar al studio
cd studio

# Instalar dependencias
npm install

# Modo desarrollo (abre en http://localhost:3333)
npm run dev

# Build para producción
npm run build

# Deploy del Studio
npm run deploy
```

### Git & Deploy

```bash
# Ver estado de cambios
git status

# Agregar todos los cambios
git add .

# Commit con mensaje
git commit -m "Descripción de los cambios"

# Push a repositorio (trigger deploy en Vercel)
git push

# Ver historial de commits
git log --oneline

# Crear nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama
```

### Vercel

```bash
# Instalar Vercel CLI (si no está instalado)
npm install -g vercel

# Login a Vercel
vercel login

# Deploy manual
vercel

# Deploy a producción
vercel --prod

# Ver logs
vercel logs
```

---

## 🔧 Comandos de Desarrollo

### Limpiar caché y reinstalar

```bash
# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Studio
cd studio
rm -rf node_modules package-lock.json
npm install
```

### Ver versiones instaladas

```bash
# Node version
node --version

# NPM version
npm --version

# Sanity CLI version
sanity --version
```

---

## 🐛 Troubleshooting

### Si el frontend no inicia

```bash
cd frontend
rm -rf node_modules .react-router
npm install
npm run dev
```

### Si Sanity Studio no inicia

```bash
cd studio
rm -rf node_modules .sanity
npm install
npm run dev
```

### Si las imágenes no cargan

```bash
# Verificar variables de entorno
cd frontend
cat .env.local

# Deberían estar:
# VITE_SANITY_PROJECT_ID=ccpxoq1k
# VITE_SANITY_DATASET=production
```

### Limpiar caché del navegador

**Chrome/Edge**:
- Windows: `Ctrl + Shift + Delete`
- Mac: `Cmd + Shift + Delete`

**Firefox**:
- Windows: `Ctrl + Shift + Delete`
- Mac: `Cmd + Shift + Delete`

---

## 📝 Comandos de Sanity CLI

```bash
# Login a Sanity
sanity login

# Logout de Sanity
sanity logout

# Ver proyectos
sanity projects list

# Crear nuevo dataset
sanity dataset create nombre-dataset

# Ver datasets
sanity dataset list

# Exportar datos
sanity dataset export production backup.tar.gz

# Importar datos
sanity dataset import backup.tar.gz production

# Ver usuarios del proyecto
sanity users list

# Actualizar Sanity CLI
npm install -g @sanity/cli@latest
```

---

## 🔍 Comandos de Inspección

### Ver estructura de archivos

```bash
# Windows
tree /F

# Mac/Linux
tree
```

### Buscar en archivos

```bash
# Buscar texto en archivos
grep -r "texto-a-buscar" .

# Buscar archivos por nombre
find . -name "nombre-archivo"
```

### Ver tamaño de carpetas

```bash
# Windows
dir /s

# Mac/Linux
du -sh *
```

---

## 🌐 URLs Importantes

### Desarrollo Local
- Frontend: http://localhost:5173
- Studio: http://localhost:3333

### Producción
- Sitio web: https://tudominio.com
- Blog: https://tudominio.com/blog
- Studio: https://conducefluids-blog.sanity.studio

### Dashboards
- Vercel: https://vercel.com/dashboard
- Sanity: https://www.sanity.io/manage

---

## 📦 Instalación de Herramientas

### Node.js (si no está instalado)
```bash
# Descargar de: https://nodejs.org/
# Versión recomendada: LTS (Long Term Support)
```

### Git (si no está instalado)
```bash
# Descargar de: https://git-scm.com/
```

### Sanity CLI
```bash
npm install -g @sanity/cli
```

### Vercel CLI
```bash
npm install -g vercel
```

---

## 🔐 Variables de Entorno

### Frontend (.env.local)
```bash
VITE_SANITY_PROJECT_ID=ccpxoq1k
VITE_SANITY_DATASET=production
```

### Vercel (Dashboard)
1. Ir a: https://vercel.com/dashboard
2. Seleccionar proyecto
3. Settings → Environment Variables
4. Agregar las mismas variables

---

## 📊 Monitoreo

### Ver logs en tiempo real

```bash
# Frontend (desarrollo)
npm run dev

# Studio (desarrollo)
cd studio
npm run dev

# Vercel (producción)
vercel logs --follow
```

### Verificar build

```bash
# Frontend
cd frontend
npm run build

# Studio
cd studio
npm run build
```

---

## 🎯 Comandos Más Usados (Top 10)

1. `cd frontend && npm run dev` - Iniciar desarrollo frontend
2. `cd studio && npm run dev` - Iniciar Studio local
3. `cd studio && npm run deploy` - Deploy del Studio
4. `git add . && git commit -m "mensaje" && git push` - Guardar y deployar cambios
5. `npm install` - Instalar dependencias
6. `sanity login` - Login a Sanity
7. `vercel logs` - Ver logs de producción
8. `npm run build` - Build de producción
9. `git status` - Ver estado de cambios
10. `npm run typecheck` - Verificar tipos TypeScript

---

## 💡 Tips

### Alias útiles (opcional)

Agrega a tu `.bashrc` o `.zshrc`:

```bash
# Alias para comandos frecuentes
alias fdev="cd frontend && npm run dev"
alias sdev="cd studio && npm run dev"
alias sdeploy="cd studio && npm run deploy"
alias gp="git add . && git commit -m"
```

Uso:
```bash
fdev  # Inicia frontend dev
sdev  # Inicia studio dev
sdeploy  # Deploy studio
gp "mi mensaje"  # Git commit rápido
```

---

## 📞 Ayuda

Si necesitas ayuda con algún comando:

```bash
# Ver ayuda de npm
npm help

# Ver ayuda de git
git help

# Ver ayuda de sanity
sanity help

# Ver ayuda de vercel
vercel help
```

---

**Última actualización**: Noviembre 2024

