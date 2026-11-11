# RIFT ARENA

Juego de peleas 2D para navegador, en español. Sustituye el anterior juego de carreras APEX.

## Jugar

Abre `dist/index.html` o sirve la carpeta `dist` con un servidor estático. No necesita instalación ni compilación. Las fuentes web son opcionales y tienen alternativas locales.

Introduce un alias de 2–18 caracteres y pulsa **Iniciar combate**. Gana dos rounds contra Vex. Hay tres niveles de dificultad, rounds de 60 segundos, bloqueo, salto y energía para ataques especiales. Cada victoria se guarda por perfil en el navegador.

| Tecla | Acción |
|---|---|
| A / D o ← / → | Moverse |
| W o ↑ | Saltar |
| J | Golpe rápido |
| K | Patada de mayor alcance |
| S o ↓ | Mantener bloqueo |
| L | Especial con energía completa |
| P / Escape | Pausar o continuar |

Incluye botones táctiles, sonido opcional, pantalla completa, pausa al perder el foco y renderizado Canvas adaptable con densidad de hasta 2×. En teléfonos se recomienda orientación horizontal.

## Login

Perfil local sin contraseña; no es autenticación de servidor. No solicita correo ni contraseñas. El alias y las victorias se guardan en `localStorage`; si no está disponible, la partida funciona sin persistencia. Se recupera el alias del juego anterior si existe.

## Archivos

- `dist/index.html`: acceso, menú, HUD y controles.
- `dist/style.css`: interfaz responsive.
- `dist/game.js`: motor de combate, rival CPU, gráficos vectoriales, efectos y audio sintetizado.

Personajes y escenario originales dibujados mediante Canvas; sin librerías de ejecución ni recursos gráficos externos. El historial Git conserva las versiones anteriores.
