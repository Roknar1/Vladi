# RIFT ARENA — Instinto salvaje

Juego de peleas 2D de personajes originales, inspirado en los combates con transformaciones bestiales. Funciona con HTML, CSS, Canvas y Web Audio, sin dependencias de ejecución.

## Jugar

Abre `dist/index.html` o sirve `dist/` con un servidor estático. Inicia sesión con un alias, elige la dificultad y pulsa **Elegir luchador**. Hay 12 personajes disponibles desde el inicio. Sus estadísticas afectan al daño, velocidad de movimiento y defensa.

- **Duelo libre:** elige tu luchador y un rival CPU, incluso un duelo espejo. Gana dos rounds de 60 segundos.
- **Historia:** tres encuentros, cada uno al mejor de tres rounds, con introducción, objetivo y desenlace propios del personaje. Los capítulos intermedios comparten la trama del proyecto Génesis. La revancha conserva el capítulo actual; volver al selector reinicia el recorrido. La finalización de cada historia queda registrada por perfil local.
- **Música:** pulsa **Escuchar** o **Sonido ON**. Cada personaje tiene un bucle instrumental sintetizado original, con melodía, tonalidad, tempo y timbre propios, además de bajo y percusión. Cambia al seleccionar personaje y acompaña su combate. Incluye control de volumen y silencio. No contiene canciones extraídas de otros videojuegos ni pistas de estudio. La música se detiene al pausar o esconder la pestaña.

## Luchadores

| Luchador | Forma bestial | Tema original |
|---|---|---|
| Raiken | Lobo | Luna de acero |
| Vex | Tigre | Líneas de fuego |
| Nyra | Pantera | Sombra violeta |
| Bronn | Oso | Montaña de hierro |
| Kaida | Dragón | Ceniza imperial |
| Soren | Halcón | Cielo de cristal |
| Amara | Serpiente | Veneno de seda |
| Dante | Toro | Pulso de bronce |
| Reina | Zorro | Neón travieso |
| Kairo | Chacal | Arena y circuito |
| Mako | Tiburón | Marea profunda |
| Onyx | Cuervo | Réquiem de silicio |

La pantalla de selección incluye retratos vectoriales, origen, biografía, objetivo, estadísticas, explicación de combate y escucha del tema. Mako procede del Callao, Perú.

## Controles

| Tecla | Acción |
|---|---|
| A / D o ← / → | Moverse |
| W o ↑ | Saltar |
| J | Golpe rápido |
| K | Patada de mayor alcance |
| S o ↓ | Mantener bloqueo |
| L | Especial con 100 de energía |
| B | Transformación con 100 de instinto |
| P / Escape | Pausar o continuar |

La transformación dura 8 segundos, cambia la apariencia y aumenta el daño un 25 % y la velocidad un 15 %. El instinto empieza completo en cada round y se recarga al intercambiar golpes. La CPU también puede transformarse. La energía del especial es independiente del instinto.

Controles táctiles incluidos. En teléfonos se recomienda orientación horizontal durante los combates. Canvas se adapta a la resolución con densidad de hasta 2×. Fuentes web opcionales con alternativas locales.

## Perfil y datos

Login local con alias de 2–18 caracteres y sin contraseña; no es autenticación de servidor. `localStorage` guarda el perfil, las victorias, el personaje elegido y las historias completadas. No sincroniza entre dispositivos. Si el almacenamiento está bloqueado se puede jugar sin persistencia. Mantiene compatibilidad con el alias del juego anterior.

## Archivos

- `dist/index.html`: acceso, selección, historia, HUD y controles.
- `dist/style.css`: diseño responsive.
- `dist/game.js`: plantel, relatos, retratos, síntesis musical, motor de combate, transformaciones y CPU.

## Verificación de esta versión

Comprobación de sintaxis JavaScript y simulaciones del motor: selección de los 12 personajes, aplicación de daño, activación y caducidad de transformación, progreso de tres capítulos y guardado del final, pausa/reanudación y programación/limpieza de los 12 temas. Revisión visual en navegador del selector, biografía, activación musical y arranque del modo historia.
