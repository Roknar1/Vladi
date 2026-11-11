# Nimbo Quest

Aventura original de plataformas 2D con estética retro: 32 niveles en ocho mundos, login sencillo, monedas, bloques sorpresa, tuberías de bonificación y guardianes. El protagonista es Nilo, un pequeño mensajero que devuelve las ocho luces a las islas del cielo.

El juego anterior, **IRON FRONT**, permanece disponible en `dist/iron-front/index.html` y mediante el enlace del menú de Nimbo Quest.

## Abrir y jugar

Abre `dist/index.html` en un navegador moderno o sirve `dist/` con cualquier servidor estático. No necesita compilación ni instalación de dependencias. Las fuentes web son opcionales y tienen alternativas locales.

Introduce un alias de 2–18 caracteres y pulsa **¡Vamos a jugar!**. Los mundos y niveles se desbloquean al completar el anterior. Puedes repetir los ya desbloqueados. Activa **SONIDO ON** para escuchar la música y los efectos originales.

## Mundos

Cada mundo contiene cuatro niveles; el cuarto tiene un guardián. Los niveles se generan de manera determinista con módulos y variaciones propias en longitudes, huecos, bloques y enemigos; no son mapas copiados de otro videojuego.

| Mundo | Guardián | Tema musical original |
|---|---|---|
| Praderas de menta | Musgón, guardián del valle | Un camino de tréboles |
| Grutas de cristal | Ónix, el eco de piedra | Ecos de cuarzo |
| Dunas de miel | Dorado, centinela de arena | Pasos en la arena |
| Archipiélago celeste | Cúmulo, pastor de tormentas | Correo entre nubes |
| Jardines de escarcha | Boreal, el gigante dormido | Copos de luz |
| Bosque de luciérnagas | Raíz, el corazón del bosque | Linternas en las hojas |
| Torres del crepúsculo | Véspero, vigía lunar | Vals de las estrellas |
| Volcán de las auroras | Umbra, el coleccionista de luz | El último amanecer |

## Controles

| Acción | Tecla |
|---|---|
| Moverse | A / D o ← / → |
| Saltar | Espacio / Z / W / ↑ |
| Correr | Shift / X |
| Entrar en una tubería marcada ↓ | S / ↓, estando encima |
| Lanzar chispa con la mejora flor | J |
| Pausar o continuar | P / Escape |

Mantén salto para llegar más alto; suelta para un salto corto. Incluye controles táctiles y botón de pantalla completa. En móvil se recomienda orientación horizontal durante el juego.

## Mecánicas

- Cinco vidas al comenzar desde el mapa. Cada 50 monedas otorgan una vida adicional.
- Golpea los bloques ✦ desde abajo para conseguir monedas o mejoras.
- **Fruta:** Nilo crece, puede romper ladrillos y resiste un impacto antes de volver al tamaño normal.
- **Flor:** añade chispas que rebotan en el suelo; se lanzan con J.
- **Cristal:** protección temporal durante ocho segundos.
- Pisa escarabajos y aves al caer; esquiva los bichos con pinchos.
- Usa las tuberías con flecha para visitar un jardín de monedas. La tubería de salida o el extremo derecho devuelve al nivel.
- Las banderas guardan un punto de retorno dentro de la partida. No sobreviven a cerrar la página.
- Cada nivel tiene un tiempo límite y un faro de llegada. En los niveles de guardián hay que vencerlo antes de poder terminar.
- Los guardianes reciben daño con un salto encima o una chispa cuando su escudo está desactivado. Al reaparecer durante un jefe, su resistencia se restaura.
- Completar un mundo concede una vida; terminar el nivel 8–4 muestra el desenlace.

## Perfil y música

Login local sin contraseña; no es autenticación de servidor. `localStorage` guarda el alias, récord, niveles desbloqueados y campaña completada. No sincroniza entre dispositivos. Si el almacenamiento está bloqueado, el juego funciona sin persistencia. Recupera el alias del juego anterior si existe.

Ocho melodías originales sintetizadas con Web Audio, con bajo y percusión. Efectos propios de salto, moneda, golpe de bloque, rotura, mejora, pisotón, daño, muerte, tubería, victoria, vida adicional, chispa y punto de retorno. El audio requiere una pulsación del usuario y se detiene al pausar. No contiene canciones ni grabaciones extraídas de otros juegos.

## Archivos

- `dist/index.html`: acceso, mapa, HUD, ayuda y controles.
- `dist/style.css`: diseño adaptable.
- `dist/game.js`: escenarios, física, colisiones, enemigos, guardianes, mejoras, gráficos Canvas y sonido.
- `dist/iron-front/`: versión anterior de IRON FRONT, conservada para seguir jugando.

## Verificación

Comprobación de sintaxis y simulaciones de los 32 niveles: huecos superables, ataques y derrota de los ocho guardianes, desbloqueos y final, bloques golpeados desde abajo, mejoras, daño y reaparición, tuberías de ida y vuelta, vidas por monedas, salto, pausa y síntesis musical. Revisión visual en navegador del acceso, mapa, primer nivel y pausa. Esto no equivale a una partida manual completa de balance de los 32 niveles.
