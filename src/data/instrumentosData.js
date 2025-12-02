// Este archivo contendrá todos los textos e información de los instrumentos.

export const TITULO = "Autumn Sonata";

export const TEXTO_PRINCIPAL = {
  titulo: "Instrumentos",
  parrafo1:
    "La música clásica se distingue por su rica variedad de instrumentos musicales que han evolucionado a lo largo de siglos. En este artículo, exploraremos los instrumentos de la música clásica, desde los más conocidos hasta los menos habituales, proporcionando un panorama completo de los instrumentos que se usan normalmente en este género.",
  parrafo2:
    "Los principales instrumentos del Clasicisimo incluyen las cuerdas frotadas (violín, viola, violonchelo, contrabajo), el nuevo pianoforte y los instrumentos de viento madera (flauta travesera, oboe, fagot, clarinete) y viento metal (trompeta, trompas). La percusión se limitaba principalmente a los timbales.",
};

// --- Datos de las Categorías de Instrumentos ---

export const INSTRUMENTOS_POR_CATEGORIA = {
  cuerda: {
    titulo: "Intrumentos de Cuerda",
    subcategorias: [
      {
        nombre: "Cuerda Frotada",
        instrumentos: [
          { nombre: "Violín", imagenSrc: "Cuerda/Violín.jpg" }, // Cambia por la ruta real de tu imagen
          { nombre: "Viola", imagenSrc: "Cuerda/Viola.jpg" },
          { nombre: "Violonchelo", imagenSrc: "Cuerda/Violonchelo.jpg" },
          { nombre: "Contrabajo", imagenSrc: "Cuerda/Contrabajo.jpg" },
        ],
      },
      {
        nombre: "Cuerda Pulsada",
        instrumentos: [
          { nombre: "Arpa", imagenSrc: "Cuerda/arpaa.jpg" },
          { nombre: "Guitarra", imagenSrc: "Cuerda/Guitarra.jpg" },
        ],
      },
    ],
  },
  viento: {
    titulo: "Intrumentos de Viento",
    subcategorias: [
      {
        nombre: "Viento Madera",
        instrumentos: [
          { nombre: "Flauta travesera", imagenSrc: "viento/Flauta.jpg" },
          { nombre: "Clarinete", imagenSrc: "viento/Clarinete.jpg" },
          { nombre: "Piccolo", imagenSrc: "viento/Piccolo.jpeg" },
          { nombre: "Fagot", imagenSrc: "viento/Fagot.jpg" },
          { nombre: "Oboe", imagenSrc: "viento/Oboe.jpg" },
        ],
      },
      {
        nombre: "Viento Metal",
        instrumentos: [
          { nombre: "Trompeta", imagenSrc: "viento/Trompeta.jpg" },
          { nombre: "Trombón", imagenSrc: "viento/Trombón.jpg" },
          { nombre: "Trompa", imagenSrc: "viento/Trompa.jpg" },
        ],
      },
    ],
  },
  teclado: {
    titulo: "Intrumentos de Teclado",
    subcategorias: [
      {
        nombre: "", // No hay subtítulo en la imagen para teclado
        instrumentos: [
          { nombre: "Órgano", imagenSrc: "Teclado/Órgano.jpg" },
          { nombre: "Clavecín", imagenSrc: "Teclado/Clavecín.jpg" },
          { nombre: "Fortepiano", imagenSrc: "Teclado/Fortepiano.jpg" },
          { nombre: "Clavicordio", imagenSrc: "Teclado/Clavicordio.jpg" },
        ],
      },
    ],
  },
  percusion: {
    titulo: "Intrumentos de Percusión",
    subcategorias: [
      {
        nombre: "", // No hay subtítulo en la imagen para percusión
        instrumentos: [
          { nombre: "Triángulo", imagenSrc: "Perscucion/Triángulo.jpg" },
          { nombre: "Timbales", imagenSrc: "Perscucion/Timbales.jpg" },
          { nombre: "Pandereta", imagenSrc: "Perscucion/Pandereta.jpg" },
        ],
      },
    ],
  },
};
