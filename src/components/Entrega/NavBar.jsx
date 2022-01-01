import React from "react";
import Beirut from "../../img/Beirut.png";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header>
      <div class="conteinerLogo">
        <img id="logoBeirut" src={Beirut} alt="Logo Beirut" />
      </div>

      <div class="conteinerNav">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
              <Link to="/">
                <li class="nav-item">Inicio</li>
              </Link>
              <Link to="/beirut">
                <li class="nav-item">Beirut</li>
              </Link>
              <Link to="/menu">
                <li
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menú
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/menu/categoria/salado">
                      <li class="dropdown-item" href="#">
                        Salado
                      </li>
                    </Link>
                    <Link to="/menu/categoria/dulce">
                      <li class="dropdown-item" href="#">
                        Dulce
                      </li>
                    </Link>
                  </ul>
                </li>
              </Link>
              <Link to="/encontranos">
                <li class="nav-item">Encontranos</li>
              </Link>
              <Link to="/cart">
                <li class="nav-item">
                  <CartWidget />
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
