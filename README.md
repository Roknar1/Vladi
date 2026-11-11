# IRON FRONT — Operación Eclipse

Juego original de acción lateral 2D para un jugador. Sustituye a RIFT ARENA en la versión actual de este repositorio. Inspirado en el género arcade run-and-gun: correr, saltar, apuntar, disparar y derrotar jefes. No es una reproducción de Contra y no incluye sus niveles, gráficos, música ni grabaciones de sonido.

## Iniciar

Abre `dist/index.html` en un navegador moderno o sirve la carpeta `dist` con un servidor estático. No necesita compilación ni instalación de dependencias. Las fuentes externas son opcionales, con alternativas locales.

Introduce un alias de 2–18 caracteres, entra al cuartel y pulsa **Iniciar misión**. Activa **AUDIO ON** para escuchar la música y los efectos. El navegador requiere esa interacción para habilitar el audio.

## Campaña: ocho sectores originales

| Sector | Escenario | Jefe | Tema musical |
|---|---|---|---|
| 01 | Selva de cobre | Centinela M-09 | Código verde |
| 02 | Presa del trueno | Hidra de acero | Presión crítica |
| 03 | Fundición roja | Forja Coloso | Acero en llamas |
| 04 | Tren fantasma | Locomotora Cerbero | Sin frenos |
| 05 | Bastión polar | Arácnido Glacial | Cero absoluto |
| 06 | Dunas de ceniza | Escorpión Titán | Horizonte abrasado |
| 07 | Órbita quebrada | Prisma Orbital | Gravedad cero |
| 08 | Corazón Eclipse | Eclipse / Entidad Cero | Última frecuencia |

Cada sector tiene paleta, decoración, longitud y jefe propios. La geometría se construye con módulos de plataformas y huecos. Los jefes usan patrones distintos: ráfagas dirigidas, abanicos, proyectiles con gravedad, bombardeos, refuerzos, barridos telegrafiados y anillos de proyectiles.

Al completar un sector se desbloquea el siguiente y se recupera una vida (máximo 7). Los sectores desbloqueados se pueden repetir desde el cuartel. Hay un desenlace al terminar los ocho.

## Controles

| Acción | Teclado |
|---|---|
| Moverse | A / D o ← / → |
| Apuntar arriba o diagonal | W / ↑, combinado con movimiento |
| Agacharse; apuntar abajo en el aire | S / ↓ |
| Disparar automáticamente mientras mantienes la tecla | J / Z |
| Saltar | K / X / espacio |
| Lanzar granada | L / C |
| Pausar o continuar | P / Escape |

Incluye controles táctiles y botón de pantalla completa. En móviles se recomienda orientación horizontal. La partida se pausa al perder el foco o esconder la pestaña.

## Reglas

- 5 vidas al iniciar una misión desde el cuartel y 3 puntos de resistencia por vida.
- Breve invulnerabilidad después de un impacto y al reaparecer.
- Balizas de retorno dentro de cada sector; los huecos consumen una vida.
- Tres granadas por vida, con daño de área.
- Fusil de munición ilimitada, mejora **S** de disparo triple y mejora **B** de bláster (180 disparos por mejora).
- Los botiquines **+** recuperan resistencia.
- Al morir durante un jefe, su resistencia se restaura para el siguiente intento.
- Al agotar las vidas puedes reiniciar el sector. Las misiones desbloqueadas se conservan.

## Música y sonidos

Ocho bucles instrumentales originales sintetizados con Web Audio: melodías y tempos diferentes, bajo y percusión. No son pistas extraídas de otro videojuego ni grabaciones de estudio.

Efectos propios para pasos, salto, aterrizaje, fusil, bláster, impactos, explosiones, muerte, mejoras, balizas, granadas, alerta de jefe, inicio y final de misión. Se pueden silenciar desde la cabecera. La música se detiene al pausar.

## Perfil y almacenamiento

Login local sin contraseña, no autenticación de servidor. Guarda alias, récord, sectores desbloqueados y campaña completada en `localStorage`. Recupera el alias del proyecto anterior cuando aún no existe uno para Iron Front. Los puntos de retorno son temporales y no sobreviven al cierre de la página. No hay sincronización entre dispositivos; con almacenamiento bloqueado se puede jugar sin persistencia.

## Archivos y comprobaciones

- `dist/index.html`: acceso, cuartel, selector de misión, HUD y controles.
- `dist/style.css`: interfaz adaptable.
- `dist/game.js`: física a paso fijo, escenarios, enemigos, jefes, audio y gráficos Canvas originales.

Verificado con análisis de sintaxis y simulaciones del motor: plataformas alcanzables y huecos superables en los ocho sectores; ataques y derrota de cada jefe; desbloqueos y final; colisiones de disparos, armas, granadas, daño, invulnerabilidad, muerte y reaparición; pausa; programación y limpieza del audio.

La revisión visual en navegador de esta versión no se completó por un bloqueo de la infraestructura de vista previa. Las pruebas automatizadas no sustituyen una partida completa de verificación visual y balance.
