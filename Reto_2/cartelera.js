const peliculas = [
  { titulo: "La ultima estacion", categoria: "Drama", duracion: 118, edadMinima: 12 },
  { titulo: "Plan de domingo", categoria: "Comedia", duracion: 96, edadMinima: 7 },
  { titulo: "Mision en la sierra", categoria: "Aventura", duracion: 132, edadMinima: 12 },
  { titulo: "Pequenos inventores", categoria: "Animacion", duracion: 89, edadMinima: 0 },
  { titulo: "La ciudad sumergida", categoria: "Ciencia ficcion", duracion: 141, edadMinima: 12 },
  { titulo: "Una familia peculiar", categoria: "Comedia", duracion: 104, edadMinima: 7 },
  { titulo: "El bosque de cristal", categoria: "Aventura", duracion: 109, edadMinima: 7 },
  { titulo: "Cartas desde el mar", categoria: "Drama", duracion: 125, edadMinima: 12 }
];

function listarTodas() {
  const peliculasConEtiqueta = peliculas.map((pelicula) => ({
    ...pelicula,
    etiqueta: pelicula.duracion <= 110 ? "Corta" : "Larga"
  }));

  console.log("Listado completo con etiqueta de duracion:");
  console.table(peliculasConEtiqueta);
}

function listarPeliculasFamiliares() {
  const peliculasFamiliares = peliculas.filter(
    (pelicula) =>
      pelicula.edadMinima <= 7 &&
      (pelicula.categoria === "Animacion" || pelicula.categoria === "Comedia")
  );

  console.log("Peliculas familiares (para todos los publicos o mayores de 7):");
  console.table(peliculasFamiliares);
  console.log("Total de peliculas familiares:", peliculasFamiliares.length);
}

function filtrarPorDuracion(limiteMinutos) {
  if (!Number.isFinite(limiteMinutos) || limiteMinutos < 0) {
    throw new RangeError("El limite debe ser un numero igual o mayor que cero.");
  }

  const peliculasEncontradas = peliculas.filter(
    (pelicula) => pelicula.duracion <= limiteMinutos
  );

  console.table(peliculasEncontradas);
  return peliculasEncontradas.length;
}

function contarPorCategoria(categoria) {
  switch (categoria.toLowerCase()) {
    case "drama":
      return peliculas.filter((pelicula) => pelicula.categoria === "Drama").length;
    case "comedia":
      return peliculas.filter((pelicula) => pelicula.categoria === "Comedia").length;
    case "aventura":
      return peliculas.filter((pelicula) => pelicula.categoria === "Aventura").length;
    case "animacion":
      return peliculas.filter((pelicula) => pelicula.categoria === "Animacion").length;
    case "ciencia ficcion":
      return peliculas.filter((pelicula) => pelicula.categoria === "Ciencia ficcion").length;
    default:
      return 0;
  }
}

// Ejemplos: ejecuta cada funcion con valores distintos en la consola.
listarTodas();
listarPeliculasFamiliares();
console.log("Peliculas de hasta 110 minutos:", filtrarPorDuracion(110));
console.log("Peliculas de hasta 130 minutos:", filtrarPorDuracion(130));
console.log("Peliculas de comedia:", contarPorCategoria("comedia"));
