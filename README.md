# Web Personal de Consultor Retail & BI

Sitio web minimalista para mostrar servicios de consultoría en CRM, Business Intelligence y Estrategia Comercial.

## Cómo desplegarlo en GitHub Pages

### 1. Crear repositorio en GitHub

1. Ve a https://github.com y crea una cuenta si no tienes
2. Crea un nuevo repositorio público con el nombre: `tu-usuario.github.io`
   - Reemplaza `tu-usuario` con tu nombre de usuario de GitHub
   - Ejemplo: si tu usuario es `jperez`, el repo debe llamarse `jperez.github.io`
3. **NO** marques la opción de añadir README, .gitignore o licencia

### 2. Subir los archivos

**Opción A: Desde la web de GitHub (más fácil)**

1. En tu repositorio, haz clic en "Add file" → "Upload files"
2. Arrastra estos 3 archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Escribe un mensaje de commit: "Initial commit"
4. Haz clic en "Commit changes"

**Opción B: Desde terminal (si tienes Git instalado)**

```bash
# En la carpeta donde tienes los archivos
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a Settings (Configuración) de tu repositorio
2. En el menú lateral, haz clic en "Pages"
3. En "Source" selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Haz clic en "Save"

### 4. ¡Listo!

Tu web estará disponible en: `https://tu-usuario.github.io`

Puede tardar 1-2 minutos en estar activa la primera vez.

## Personalización antes de subir

### Información de contacto (IMPORTANTE)

Abre `index.html` y modifica estas líneas:

```html
<!-- Línea ~92: Cambia el email -->
<a href="mailto:tu-email@ejemplo.com" class="contact-button">Enviar email</a>

<!-- Línea ~93: Cambia tu perfil de LinkedIn -->
<a href="https://www.linkedin.com/in/tu-perfil" target="_blank" class="contact-button">LinkedIn</a>
```

### Tu nombre y título

```html
<!-- Línea ~17: Meta description -->
<meta name="description" content="Consultor especializado en...">

<!-- Línea ~25: Titular principal -->
<h1>Convierto datos en decisiones que impactan en la cuenta de resultados</h1>

<!-- Línea ~26: Subtítulo -->
<p class="subtitle">Tu nombre - Consultor especializado en...</p>
```

### Sección "Sobre mí"

Edita el contenido desde la línea ~70 con tu experiencia real.

## Estructura de archivos

```
tu-usuario.github.io/
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # JavaScript básico
└── README.md       # Este archivo (opcional subirlo)
```

## Hacer cambios después

1. Edita los archivos en tu ordenador
2. Sube los cambios a GitHub (arrastrando de nuevo o con git push)
3. Los cambios se reflejan automáticamente en 1-2 minutos

## Añadir dominio propio (opcional)

Cuando quieras usar tu propio dominio:

1. Compra el dominio (Namecheap, Cloudflare Registrar, etc.)
2. En GitHub Pages Settings, añade tu dominio custom
3. Configura los DNS según las instrucciones que GitHub te dará

## Próximos pasos opcionales

- Añadir Google Analytics
- Conectar formulario a Formspree (gratuito hasta 50 envíos/mes)
- Añadir imágenes o logo
- Crear sección de casos de éxito/portfolio
