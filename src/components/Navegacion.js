import React from "react";
//import "./Navegacion.css"; // Importa los estilos para la navegación

// Se pasa la función 'setCategoria' como prop para cambiar el estado en App.js
const Navegacion = ({ setCategoria }) => {
  // Función para manejar el clic en los botones de instrumentos
  const handleInstrumentosClick = (categoria) => {
    // La categoría es 'principal' para volver a la página inicial
    if (categoria !== "principal") {
      setCategoria(categoria);
    }
  };

  return (
    <div className="navegacion-sidebar">
      <ul>
        {/* Botones Decorativos que no hacen nada */}
        <li>
          <button className="nav-item">Inicio</button>
        </li>
        <li>
          <button className="nav-item">Historia</button>
        </li>
        <li>
          <button className="nav-item">Artistas</button>
        </li>

        {/* Botón Funcional para 'Instrumentos' */}
        <li>
          <button
            className="nav-item active" // Clase 'active' para el botón de Instrumentos
            onClick={() => setCategoria("principal")} // Al hacer clic en el botón Instrumentos, regresa al índice de Instrumentos.
          >
            Instrumentos
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navegacion;
