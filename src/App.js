import React, { useState } from "react";
import "./styles.css"; // Estilos globales
// Agrega estas líneas al inicio de src/App.js, junto a otros imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importa los íconos de marcas (brands) que son las redes sociales
import {
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

// ... el resto de tus imports ...
import Navegacion from "./components/Navegacion";
import Principal from "./components/Principal";
import SeccionInstrumentos from "./components/SeccionInstrumentos";
import * as Data from "./data/instrumentosData";

function App() {
  // 'principal' es la página de inicio.
  // Puede ser 'cuerda', 'viento', 'teclado', o 'percusion'
  const [categoriaActual, setCategoriaActual] = useState("principal");

  // Función para renderizar el contenido según el estado
  const renderContenido = () => {
    switch (categoriaActual) {
      case "principal":
        return <Principal setCategoria={setCategoriaActual} />;
      case "cuerda":
      case "viento":
      case "teclado":
      case "percusion":
        return (
          <SeccionInstrumentos
            categoria={categoriaActual}
            setCategoria={setCategoriaActual}
          />
        );
      default:
        return <Principal setCategoria={setCategoriaActual} />;
    }
  };

  return (
    <div className="app-container">
      {/* Cabecera / Header */}
      <header className="app-header">
        <h1 className="logo">{Data.TITULO}</h1>
        {/* Imagen o logo de la esquina superior derecha */}
        <div
          className="logo-derecha"
          style={{ backgroundImage: "url('/images/hoja.png')" }}
        ></div>
      </header>
      <div className="main-layout">
        <div className="contenido-area">{renderContenido()}</div>

        {/* Barra de Navegación Lateral */}
        <Navegacion setCategoria={setCategoriaActual} />
      </div>

      {/* Pie de página / Footer */}
      <footer className="app-footer">
        <p>© 2025 Autumn Sonata</p>

        <div className="social-links">
          {/* 1. Icono de Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* 2. Icono de TikTok */}
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>

          {/* 3. Icono de Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
