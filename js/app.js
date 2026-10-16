const HORAS_PARA_JUEGO_CORTO = 20;
const HORAS_MAXIMAS_PARA_SEGUIR = 40;
const HORAS_MAXIMAS_ALTERNATIVAS = 20;
const HORAS_MINIMAS = 0;
const ID_INICIAL = 0;
const PRIMER_INDICE = 0;
const ID_NO_ENCONTRADO = -1;

// SESION 8, RETO 1: lista de la compra con arrays, Set y Map.
function ejecutarRetoListaCompra() {
  const compra = ["pan", "leche", "huevos", "pan", "tomates", "leche", "pan"];

  console.log("\nSESION 8, RETO 1: lista de la compra");
  compra.push("aceite");
  console.log("Lista tras añadir aceite:", compra);
  console.log("Numero de productos:", compra.length);

  const hayHuevos = compra.includes("huevos");
  console.log("¿Hay huevos?:", hayHuevos);

  const posicionTomates = compra.indexOf("tomates");
  console.log("Posicion de tomates:", posicionTomates);

  const indiceHuevos = compra.indexOf("huevos");
  if (indiceHuevos !== ID_NO_ENCONTRADO) {
    compra.splice(indiceHuevos, 1);
  }
  console.log("Lista tras quitar huevos:", compra);

  const productosDistintos = new Set(compra);
  console.log("Productos distintos:", productosDistintos);
  console.log("Cantidad de productos distintos:", productosDistintos.size);
  console.log("¿Hay leche?:", productosDistintos.has("leche"));

  const unidadesPorProducto = new Map();
  for (const producto of compra) {
    const cantidadActual = unidadesPorProducto.get(producto) ?? 0;
    unidadesPorProducto.set(producto, cantidadActual + 1);
  }

  console.log("Unidades por producto:");
  for (const [producto, cantidad] of unidadesPorProducto) {
    console.log(`${producto}: ${cantidad}`);
  }

  let vueltas = 0;
  while (compra.indexOf("pan") !== ID_NO_ENCONTRADO) {
    compra.splice(compra.indexOf("pan"), 1);
    vueltas++;
  }

  console.log("Vueltas para quitar todos los panes:", vueltas);
  console.log("Lista final:", compra);
}

// SESION 7, RETO 1: datos de los videojuegos del proyecto.
const juegos = [
  {
    id: 1,
    titulo: "La ultima fogata",
    genero: "Aventura",
    plataforma: "PC",
    horasJugadas: 18,
    valoracion: 8,
    fechaInicio: "2026-09-12"
  },
  {
    id: 2,
    titulo: "Taller de robots",
    genero: "Simulacion",
    plataforma: "Nintendo Switch",
    horasJugadas: 7,
    valoracion: 7,
    fechaInicio: "2026-10-02"
  },
  {
    id: 3,
    titulo: "Reinos de ceniza",
    genero: "Rol",
    plataforma: "PC",
    horasJugadas: 54,
    valoracion: 9,
    fechaInicio: "2026-08-21"
  },
  {
    id: 4,
    titulo: "Isla de bolsillo",
    genero: "Estrategia",
    plataforma: "Movil",
    horasJugadas: 12,
    valoracion: 6,
    fechaInicio: "2026-09-30"
  },
  {
    id: 5,
    titulo: "Mensajero de las nubes",
    genero: "Plataformas",
    plataforma: "PlayStation 5",
    horasJugadas: 9,
    valoracion: 8,
    fechaInicio: "2026-10-05"
  },
  {
    id: 6,
    titulo: "Ruta 47",
    genero: "Conduccion",
    plataforma: "Xbox",
    horasJugadas: 26,
    valoracion: 7,
    fechaInicio: "2026-09-03"
  },
  {
    id: 7,
    titulo: "El archivo perdido",
    genero: "Aventura",
    plataforma: "PC",
    horasJugadas: 15,
    valoracion: 9,
    fechaInicio: "2026-10-10"
  },
  {
    id: 8,
    titulo: "Huerto lunar",
    genero: "Simulacion",
    plataforma: "Nintendo Switch",
    horasJugadas: 32,
    valoracion: 8,
    fechaInicio: "2026-07-18"
  }
];

// SESION 7, RETOS 1 Y 2: listados; este tambien es listar(lista) de S8, RETO 2.
function listar(lista) {
  for (const juego of lista) {
    const etiqueta = juego.horasJugadas <= HORAS_PARA_JUEGO_CORTO
      ? "Corto"
      : "Largo";

    console.log(
      `ID: ${juego.id} | ${juego.titulo} | ${juego.genero} | ` +
      `${juego.plataforma} | ${juego.horasJugadas} horas | ` +
      `Empece: ${juego.fechaInicio} | Nota: ${juego.valoracion}/10 | ${etiqueta}`
    );
  }
}

// SESION 7, RETO 2: filtrar con una condicion compuesta y devolver el numero encontrado.
function filtrarJuegos(lista, limiteHoras) {
  if (!Number.isFinite(limiteHoras) || limiteHoras < HORAS_MINIMAS) {
    throw new RangeError("El limite debe ser un numero igual o mayor que cero.");
  }

  const juegosFiltrados = lista.filter(
    (juego) =>
      juego.horasJugadas <= limiteHoras &&
      (juego.genero === "Aventura" || juego.genero === "Simulacion")
  );

  console.table(juegosFiltrados);
  return juegosFiltrados.length;
}

// SESION 7, RETO 2: contar por genero usando switch.
function contarPorGenero(lista, genero) {
  switch (genero.toLowerCase()) {
    case "aventura":
      return lista.filter((juego) => juego.genero === "Aventura").length;
    case "simulacion":
      return lista.filter((juego) => juego.genero === "Simulacion").length;
    case "rol":
      return lista.filter((juego) => juego.genero === "Rol").length;
    case "estrategia":
      return lista.filter((juego) => juego.genero === "Estrategia").length;
    case "plataformas":
      return lista.filter((juego) => juego.genero === "Plataformas").length;
    case "conduccion":
      return lista.filter((juego) => juego.genero === "Conduccion").length;
    default:
      console.warn(`No conozco el genero: ${genero}`);
      return 0;
  }
}

// MEJORA OPCIONAL DE S8, RETO 2: obtener generos sin repetir con Set.
function generosDistintos(lista) {
  return new Set(lista.map((juego) => juego.genero));
}

// MEJORA OPCIONAL DE S8, RETO 2: contar juegos por genero con Map.
function contarGenerosConMap(lista) {
  const recuento = new Map();

  for (const juego of lista) {
    const cantidadActual = recuento.get(juego.genero) ?? 0;
    recuento.set(juego.genero, cantidadActual + 1);
  }

  return recuento;
}

// SESION 8, RETO 2: buscar por titulo o genero sin distinguir mayusculas.
function buscarPorTexto(lista, texto) {
  const textoBuscado = texto.toLowerCase();

  return lista.filter((juego) =>
    `${juego.titulo} ${juego.genero}`.toLowerCase().includes(textoBuscado)
  );
}

// SESION 8, RETO 2: asignar el siguiente id, añadir el juego y devolver el id.
function anadir(lista, juego) {
  const idSiguiente = lista.reduce(
    (mayorId, juegoActual) => Math.max(mayorId, juegoActual.id),
    ID_INICIAL
  ) + 1;

  juego.id = idSiguiente;
  lista.push(juego);
  return idSiguiente;
}

// SESION 8, RETO 2: buscar con un bucle, eliminar con splice y devolver true o false.
function eliminarPorId(lista, id) {
  let indiceEncontrado = ID_NO_ENCONTRADO;

  for (let indice = PRIMER_INDICE; indice < lista.length; indice++) {
    if (lista[indice].id === id) {
      indiceEncontrado = indice;
      break;
    }
  }

  if (indiceEncontrado === ID_NO_ENCONTRADO) {
    return false;
  }

  lista.splice(indiceEncontrado, 1);
  return true;
}

// SESION 8, RETO 3: calcular el total, la media y el juego con mas horas.
function estadisticas(lista, campo = "horasJugadas") {
  if (!Array.isArray(lista) || lista.length === 0) {
    console.warn("La lista esta vacia. No hay estadisticas que calcular.");
    return null;
  }

  const valores = lista.map((juego) => juego[campo]);

  if (valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor))) {
    console.warn("Ese campo no contiene numeros validos.");
    return null;
  }

  let total = 0;
  let maximo = valores[PRIMER_INDICE];
  let indiceMaximo = PRIMER_INDICE;

  for (let indice = PRIMER_INDICE; indice < valores.length; indice++) {
    total += valores[indice];

    if (valores[indice] > maximo) {
      maximo = valores[indice];
      indiceMaximo = indice;
    }
  }

  const media = total / valores.length;
  const juegoConValorMaximo = lista[indiceMaximo];

  console.log(
    `Total: ${total} horas | Media: ${media.toFixed(1)} horas | ` +
    `Mas alto en ${campo}: ${juegoConValorMaximo.titulo} (${maximo})`
  );

  return { total, media, maximo, juegoConValorMaximo };
}

if (typeof window !== "undefined") {
  Object.assign(window, {
    ejecutarRetoListaCompra,
    juegos,
    listar,
    filtrarJuegos,
    contarPorGenero,
    generosDistintos,
    contarGenerosConMap,
    buscarPorTexto,
    anadir,
    eliminarPorId,
    estadisticas
  });
}

// SESION 8, RETO 1: ejecutar el ejercicio individual de la lista de la compra.
ejecutarRetoListaCompra();

// SESION 7, RETOS 1 Y 2: ejemplos de los listados y el filtro con dos limites.
console.log("Mi lista de videojuegos:");
console.table(juegos);
listar(juegos);

console.log("\nJuegos pendientes o en curso de hasta 40 horas:");
console.log("Encontrados:", filtrarJuegos(juegos, HORAS_MAXIMAS_PARA_SEGUIR));

console.log("\nJuegos pendientes o en curso de hasta 20 horas:");
console.log("Encontrados:", filtrarJuegos(juegos, HORAS_MAXIMAS_ALTERNATIVAS));

// SESION 8, RETO 2: ejemplo de busqueda y recuento por genero.
console.log("\nBusqueda de 'ISLA':");
console.table(buscarPorTexto(juegos, "ISLA"));

console.log("\nJuegos de aventura:", contarPorGenero(juegos, "aventura"));
console.log("Generos distintos:", generosDistintos(juegos));
console.log("Juegos por genero:", contarGenerosConMap(juegos));

// SESION 8, RETO 3: ejemplo de estadisticas de horas jugadas.
console.log("\nEstadisticas de horas jugadas:");
estadisticas(juegos);
console.log("\nEstadisticas de valoracion:");
estadisticas(juegos, "valoracion");
