import React from "react";
import * as Data from "../data/instrumentosData"; // Importa los datos
//import "./Principal.css"; // Importa los estilos para la página principal

const Principal = ({ setCategoria }) => {
  return (
    <div className="contenido-principal">
      {/* Imagen Principal y Texto */}
      <div className="header-principal">
        <img
          src="/images/orquetsa.jpg"
          alt="Orquesta"
          className="imagen-orquesta"
        />
        <div>
          <h2 className="titulo-principal">{Data.TEXTO_PRINCIPAL.titulo}</h2>
          <p>{Data.TEXTO_PRINCIPAL.parrafo1}</p>
          <p>{Data.TEXTO_PRINCIPAL.parrafo2}</p>
        </div>
      </div>

      {/* Diagrama (Imagen estática que puedes reemplazar con la tuya) */}
      <img
        src="/images/Instrumenots.webp"
        alt="Diagrama de Instrumentos"
        className="imagen-diagrama"
      />

      {/* Botones Funcionales de Categorías */}
      <div className="botones-categorias">
        <button
          className="boton-categoria"
          onClick={() => setCategoria("viento")}
        >
          Instrumentos de Viento
        </button>
        <button
          className="boton-categoria"
          onClick={() => setCategoria("cuerda")}
        >
          Instrumentos de Cuerda
        </button>
        <button
          className="boton-categoria"
          onClick={() => setCategoria("percusion")}
        >
          Instrumentos de Percusión
        </button>
        <button
          className="boton-categoria"
          onClick={() => setCategoria("teclado")}
        >
          Instrumentos de Teclado
        </button>
      </div>
    </div>
  );
};

export default Principal;
