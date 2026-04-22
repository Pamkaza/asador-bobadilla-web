# Brainstorming de Diseño - Asador Bobadilla

## Contexto
Restaurante asador especializado en carnes a la brasa con Josper, ubicado en Ogíjares, Granada. Ambiente acogedor, cocina casera premium. Necesitamos transmitir: brasas, calor, elegancia rústica, pero con un toque moderno y profesional.

---

## Opción 1: Elegancia Oscura Minimalista (Probabilidad: 0.08)

**Movimiento de Diseño:** Luxury Dark Minimalism - inspirado en restaurantes de alta cocina contemporánea

**Principios Fundamentales:**
- Contraste extremo: fondos oscuros casi negros con acentos dorados/ámbar
- Tipografía serif elegante para crear sofisticación
- Espacios en blanco generosos para "respiración" visual
- Fotografías grandes y dramáticas como protagonistas

**Filosofía de Color:**
- Negro carbón #1a1a1a como fondo dominante (transmite lujo, profundidad)
- Naranja brasa #c8622a como acento estratégico (fuego, energía, calidez)
- Crema #f5f0e8 para textos (legibilidad, elegancia)
- Madera clara #d4a96a para detalles sutiles (conexión con lo rústico)
- El color ámbar aparece solo en CTAs, separadores, y detalles clave

**Paradigma de Layout:**
- Secciones asimétricas: imagen a la izquierda, texto a la derecha (o viceversa)
- Uso de márgenes negativos y overlays de texto sobre imágenes
- Galería tipo masonry con imágenes que "respiran" sin marcos rígidos
- Testimonios en grid de 2 columnas con separadores verticales sutiles

**Elementos Distintivos:**
- Líneas horizontales delgadas en ámbar como separadores entre secciones
- Números grandes (tipografía display) para destacar datos (ej: "25 años", "100% casero")
- Iconos minimalistas (fuego, carne, fuego) en ámbar

**Filosofía de Interacción:**
- Hover effects sutiles: cambio de opacidad, ligero zoom en imágenes
- Botones con efecto "glow" en ámbar al pasar el ratón
- Scroll smooth con fade-in de secciones
- Transiciones de 300ms para mantener elegancia

**Animaciones:**
- Fade-in suave al scroll (opacity 0 → 1 en 600ms)
- Hover en cards: elevación sutil (shadow increase) + cambio de color de borde a ámbar
- Botones: underline animation en ámbar desde izquierda a derecha
- Parallax ligero en hero (velocidad 0.5x)

**Sistema Tipográfico:**
- Títulos: Playfair Display Bold (serif elegante, peso 700)
- Subtítulos: Playfair Display Regular (peso 400)
- Cuerpo: Inter o Lato (sans-serif limpia, peso 400)
- Acentos: Playfair Display en ámbar para destacados
- Jerarquía: H1 48px, H2 36px, H3 24px, Body 16px

---

## Opción 2: Rústico Contemporáneo con Texturas (Probabilidad: 0.07)

**Movimiento de Diseño:** Rustic Contemporary - fusión de lo artesanal con lo moderno

**Principios Fundamentales:**
- Texturas visuales: grano, papel, madera como backgrounds
- Tipografía mixta: serif para títulos, monospace para detalles
- Paleta cálida pero con grises neutros
- Fotografías con vibraciones naturales (no perfectas)

**Filosofía de Color:**
- Gris oscuro #2d2d2d como base (menos extremo que negro puro)
- Naranja brasa #c8622a como protagonista (más presencia que en opción 1)
- Madera clara #d4a96a como color secundario importante
- Crema #f5f0e8 para textos
- Toques de verde oliva #6b8e23 para frescura (hierbas, ingredientes)

**Paradigma de Layout:**
- Secciones con bordes irregulares (clip-path para efecto de papel rasgado)
- Tarjetas con sombras suaves y bordes redondeados variables
- Galería tipo polaroid con rotación leve y sombra dramática
- Testimonios en cards con fondo texturizado

**Elementos Distintivos:**
- Bordes decorativos tipo "marco de madera" alrededor de secciones clave
- Números grandes en ámbar/madera con fondo texturizado
- Iconos dibujados a mano (estilo línea simple)
- Decoraciones tipo "fuego" en SVG animado

**Filosofía de Interacción:**
- Hover con rotación leve (2-3 grados) en cards
- Efectos de "levantamiento" más pronunciados
- Transiciones más lentas (400ms) para sentir más "peso"
- Click feedback con pequeña vibración visual

**Animaciones:**
- Entrada de secciones: slide-in desde abajo + fade-in (700ms)
- Cards: rotate + scale on hover (rotate: 1deg, scale: 1.02)
- Testimonios: carrusel con transición suave (500ms)
- Iconos: pulse animation continua (respiración)

**Sistema Tipográfico:**
- Títulos: Merriweather Bold (serif cálido, peso 700)
- Subtítulos: Merriweather Regular (peso 400)
- Cuerpo: Lato (sans-serif amigable, peso 400)
- Detalles: IBM Plex Mono (monospace para precios, horarios)
- Jerarquía: H1 52px, H2 40px, H3 28px, Body 16px

---

## Opción 3: Moderno Audaz con Gradientes Dinámicos (Probabilidad: 0.06)

**Movimiento de Diseño:** Bold Contemporary - diseño moderno con personalidad fuerte

**Principios Fundamentales:**
- Gradientes dinámicos como elementos de diseño (no solo fondos)
- Tipografía display grande y atrevida
- Formas geométricas (triángulos, círculos) como decoración
- Movimiento constante (animaciones fluidas)

**Filosofía de Color:**
- Negro carbón #1a1a1a como base
- Gradiente naranja-rojo: #c8622a → #e74c3c (dinamismo)
- Crema #f5f0e8 para contraste
- Madera clara #d4a96a como acento secundario
- Toques de blanco puro para puntos de luz

**Paradigma de Layout:**
- Secciones con formas geométricas: diagonal cuts, circles, waves
- Hero con gradiente animado de fondo
- Cards en grid con espacios variables (masonry)
- Testimonios en carrusel con navegación visible

**Elementos Distintivos:**
- Gradientes animados en botones y separadores
- Formas geométricas como decoración (triángulos, círculos)
- Números grandes con gradiente de color
- Líneas curvas SVG animadas entre secciones

**Filosofía de Interacción:**
- Hover con cambio de gradiente
- Botones con efecto "ripple" en ámbar
- Transiciones rápidas (250ms) para sensación de dinamismo
- Click feedback con animación de escala

**Animaciones:**
- Gradientes animados en loop (duración: 4s)
- Entrada de secciones: scale-up + fade-in (500ms)
- Botones: ripple effect + color shift on hover
- Formas geométricas: rotación lenta continua (20s)
- Testimonios: auto-scroll con pausa on hover

**Sistema Tipográfico:**
- Títulos: Bebas Neue (display bold, peso 700)
- Subtítulos: Playfair Display (serif elegante, peso 600)
- Cuerpo: Inter (sans-serif moderna, peso 400)
- Acentos: Bebas Neue en gradiente
- Jerarquía: H1 64px, H2 44px, H3 32px, Body 16px

---

## Decisión Final

**Selecciono: Opción 1 - Elegancia Oscura Minimalista**

Esta opción mejor transmite la propuesta del Asador Bobadilla porque:
1. El contraste extremo (negro + ámbar) evoca fuego y brasas sin ser agresivo
2. La tipografía serif (Playfair Display) comunica sofisticación y tradición
3. Los espacios en blanco generosos reflejan la calidad premium del restaurante
4. Las fotografías grandes como protagonistas muestran la calidad de la comida
5. Es moderno pero no trendy, durará años sin parecer "anticuado"
6. Funciona perfectamente en móvil (contraste, legibilidad)

**Paleta Final:**
- Fondos: Negro carbón #1a1a1a, Gris oscuro #2d2d2d
- Acento: Naranja brasa #c8622a (solo en CTAs, separadores, detalles)
- Texto: Crema #f5f0e8
- Detalles: Madera clara #d4a96a

**Tipografía:**
- Display: Playfair Display (serif elegante)
- Body: Inter (sans-serif limpia)

**Filosofía:**
Lujo accesible, fuego contenido, tradición con modernidad.
