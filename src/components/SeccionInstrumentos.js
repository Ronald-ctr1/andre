import React from "react";
//import "./SeccionInstrumentos.css"; // Importa los estilos para la sección de instrumentos
import * as Data from "../data/instrumentosData"; // Importa los datos

const SeccionInstrumentos = ({ categoria, setCategoria }) => {
  // Obtiene los datos de la categoría actual (cuerda, viento, etc.)
  const datosCategoria = Data.INSTRUMENTOS_POR_CATEGORIA[categoria];

  if (!datosCategoria) {
    return <h2>Categoría no encontrada.</h2>;
  }

  return (
    <div className="contenido-principal">
      <h2 className="titulo-categoria">{datosCategoria.titulo}</h2>

      {/* Mapea las subcategorías (ej: Cuerda Frotada, Cuerda Pulsada) */}
      {datosCategoria.subcategorias.map((sub, index) => (
        <React.Fragment key={index}>
          {/* Muestra el subtítulo solo si existe */}
          {sub.nombre && <h3 className="subtitulo-categoria">{sub.nombre}</h3>}

          <div className="instrumentos-grid">
            {/* Mapea cada instrumento dentro de la subcategoría */}
            {sub.instrumentos.map((instr, i) => (
              <div key={i} className="instrumento-card">
                {/* Nota: Debes asegurarte de que tus imágenes estén en la carpeta 'public' o importarlas correctamente. */}
                <img
                  src={`/images/${instr.imagenSrc}`}
                  alt={instr.nombre}
                  className="instrumento-imagen"
                />
                <p className="instrumento-nombre">{instr.nombre}</p>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}

      <button
        className="boton-volver"
        onClick={() => setCategoria("principal")} // Vuelve a la página principal
      >
        Volver
      </button>
    </div>
  );
};

export default SeccionInstrumentos;
