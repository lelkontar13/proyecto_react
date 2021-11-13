import React from "react";
import Whatsapp from "../img/LogoWhatsapp.png";

function ItemsListContainer() {
  return (
    <main class="cuerpo">
      <div class="textoMain">
        <p>¿Ya probaste nuestra comida?</p>
      </div>
      <div class="whatsapp">
        <a href="https://wa.me/c/5491132380968">
          <img id="logoWhatsapp" src={Whatsapp} alt="Logo Whatsapp" />
        </a>
      </div>
    </main>
  );
}

export default ItemsListContainer;
