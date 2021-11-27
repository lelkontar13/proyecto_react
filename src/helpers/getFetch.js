import Sfiha from "../img/sfiha.png";
import FatayC from "../img/fatayc.png";
import Falafel from "../img/falafel.png";
import KebbeH from "../img/kebbehorno.png";
import Hummus from "../img/hummus.png";
import Tabule from "../img/tabule.png";
import Shanklish from "../img/shanklish.png";
import Iabrak from "../img/iabrak.png";
import Malfuf from "../img/malfuf.png";
import Baklawa from "../img/baklawa.png";

const productos = [
  { id: 1, foto: Sfiha, name: "Sfiha x2", price: 280, stock: 20 },
  { id: 2, foto: FatayC, name: "Fatay de carne x2", price: 280, stock: 20 },
  { id: 3, foto: Falafel, name: "Falafel x6", price: 380, stock: 20 },
  { id: 4, foto: KebbeH, name: "Kebbe al horno", price: 500, stock: 20 },
  { id: 5, foto: Hummus, name: "Hummus", price: 280, stock: 20 },
  { id: 6, foto: Tabule, name: "Tabule", price: 480, stock: 20 },
  { id: 7, foto: Shanklish, name: "Shanklish", price: 350, stock: 20 },
  { id: 8, foto: Iabrak, name: "Iabrak", price: 500, stock: 20 },
  { id: 9, foto: Malfuf, name: "Malfuf", price: 500, stock: 20 },
  { id: 10, foto: Baklawa, name: "Baklawa", price: 380, stock: 20 },
];

export const getFetch = new Promise((aceptado, rechazada) => {
  //Acciones todo ok
  setTimeout(() => {
    aceptado(productos);
  }, 2000);
});
