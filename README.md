# APEX — Street Run

Juego sencillo de carreras en español, hecho con HTML, CSS y JavaScript, sin dependencias de ejecución.

## Jugar

Abre `dist/index.html` en un navegador moderno. También puedes servir `dist/` con cualquier servidor estático. Las fuentes de Google son opcionales: hay fuentes de respaldo para jugar sin conexión.

1. Introduce un nombre de piloto (2–18 caracteres).
2. Pulsa **Comenzar carrera**.
3. Cambia de carril con **← / →** o **A / D**. En celular usa los botones.
4. Pulsa **P**, espacio o el botón de pausa para detener/continuar.
5. Evita el tráfico y supera tu récord. La velocidad aumenta progresivamente.

## Login simple

El acceso utiliza un nombre de piloto, sin contraseña. Es un perfil de demostración local, no autenticación de servidor. El navegador guarda el nombre y los récords por piloto con `localStorage`. No hay cuentas remotas ni sincronización entre dispositivos. Si el almacenamiento está bloqueado, se puede jugar, pero el progreso no persiste.

## Archivos

- `dist/index.html`: interfaz y formulario de acceso.
- `dist/style.css`: diseño adaptable a computadoras y celulares.
- `dist/game.js`: pista Canvas, movimiento, colisiones, pausa y récords.

La partida se pausa automáticamente al cambiar de pestaña o perder el foco.
