import React from "react";
import Beirut from "../../img/Beirut.png";
import Carrito from "../../img/carrito.jpg";

function NavBar() {
  return (
    <header>
      <div class="conteinerLogo">
        <img id="logoBeirut" src={Beirut} alt="Logo Beirut" />
      </div>

      <div class="conteinerNav">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
              <li class="nav-item">
                <a class="nav-link" href="Index.html">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Beirut.html">
                  Beirut
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Menu.html">
                  Menú
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Encontranos.html">
                  Encontranos
                </a>
              </li>
              <li class="nav-item">
                <img id="carrito" src={Carrito} alt="Carrito" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
