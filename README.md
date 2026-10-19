# sprint0

<img src="imagenes/captura.png" alt="captura">

## Análisis de la web

Es un ejercicio de JavaScript para llevar una lista sencilla de videojuegos y practicar arrays, objetos y funciones.

## Que guarda cada juego

Hay ocho juegos de ejemplo. Puedes cambiar los datos por juegos que conozcas o que tengas en tu lista.

| Dato | Para que sirve |
| --- | --- |
| `id` | Numero para encontrar el juego |
| `titulo` | Nombre del juego |
| `genero` | Tipo de juego |
| `plataforma` | Donde se puede jugar |
| `horasJugadas` | Horas que llevo jugadas |
| `valoracion` | Nota que le doy, del 1 al 10 |
| `fechaInicio` | Fecha en la que lo empece |

## Que hace

Al abrir `index.html` se ven los ejemplos en la consola del navegador. Desde ahi se pueden probar las funciones:

- `listar(juegos)` muestra los juegos.
- `filtrarJuegos(juegos, 20)` busca los juegos de aventura o simulacion que no pasan de esas horas.
- `contarPorGenero(juegos, "aventura")` cuenta los juegos de ese genero.
- `buscarPorTexto(juegos, "ISLA")` busca por nombre o genero, aunque se escriba en mayusculas.
- `anadir(juegos, juegoNuevo)` añade un juego y devuelve su id.
- `eliminarPorId(juegos, 99)` devuelve `false` si no encuentra el id.
- `estadisticas(juegos)` enseña las horas totales, la media y el juego con mas horas.
- `estadisticas(juegos, "valoracion")` calcula esas estadisticas sobre las valoraciones.

Tambien use un `Set` para ver generos distintos y un `Map` para contarlos.

## Sesiones 7 y 8

En `js/app.js` hay comentarios que marcan cada parte:

- Sesion 7, reto 1: datos de los videojuegos.
- Sesion 7, reto 2: listado con etiqueta, filtro compuesto y recuento con `switch`.
- Sesion 8, reto 1: lista de la compra con arrays, `Set` y `Map`, dentro de `ejecutarRetoListaCompra()`.
- Sesion 8, reto 2: busqueda, alta y eliminacion. El listado de S7 tambien sirve como `listar(lista)`.
- Sesion 8, reto 3: estadisticas.
- Mejoras opcionales de S8: generos distintos con `Set` y recuento con `Map`.

El reto 1 de S8 tambien se ejecuta al abrir la pagina y puedes repetirlo desde la consola con `ejecutarRetoListaCompra()`. El trabajo del proyecto y los retos aplicables estan juntos en `js/app.js`. El reto individual de depuracion de S7 se hace aparte; no forma parte de esta aplicacion.

## Como se abre

Abre `index.html` en el navegador y luego la consola (F12). La pagina carga `js/app.js`; no hace falta cargar los archivos de practica por separado. La carpeta del proyecto se llama `sprint0`.

## Uso de IA

Use un asistente de IA para ayudarme a cambiar el tema y revisar el codigo. Tengo que revisar los ejemplos, poner mis propios juegos si quiero y asegurarme de que entiendo las funciones antes de entregarlo.

## Trabajo

Trabajo individual.
