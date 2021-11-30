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
  {
    id: 1,
    foto: Sfiha,
    nombre: "Sfiha x2",
    precio: 280,
    stock: 20,
    categoria: "salado",
    detalle: "Empanada de carne abierta.",
  },
  {
    id: 2,
    foto: FatayC,
    nombre: "Fatay de carne x2",
    precio: 280,
    stock: 20,
    categoria: "salado",
    detalle: "Empanada de carne cerrada.",
  },
  {
    id: 3,
    foto: Falafel,
    nombre: "Falafel x6",
    precio: 380,
    stock: 20,
    categoria: "salado",
    detalle: "Albondigas de habas y garbanzos.",
  },
  {
    id: 4,
    foto: KebbeH,
    nombre: "Kebbe al horno",
    precio: 500,
    stock: 20,
    categoria: "salado",
    detalle: "Albondigas de carne y trigo.",
  },
  {
    id: 5,
    foto: Hummus,
    nombre: "Hummus",
    precio: 280,
    stock: 20,
    categoria: "salado",
    detalle: "Puré de garbanzos.",
  },
  {
    id: 6,
    foto: Tabule,
    nombre: "Tabule",
    precio: 480,
    stock: 20,
    categoria: "salado",
    detalle: "Ensalada de perejil, tomate, cebolla y trigo.",
  },
  {
    id: 7,
    foto: Shanklish,
    nombre: "Shanklish",
    precio: 350,
    stock: 20,
    categoria: "salado",
    detalle: "Queso arabe fermentado.",
  },
  {
    id: 8,
    foto: Iabrak,
    nombre: "Iabrak",
    precio: 500,
    stock: 20,
    categoria: "salado",
    detalle: "Hojas de parra rellenas con arroz y carne.",
  },
  {
    id: 9,
    foto: Malfuf,
    nombre: "Malfuf",
    precio: 500,
    stock: 20,
    categoria: "salado",
    detalle: "Hojas de repollo rellenas con arroz y carne.",
  },
  {
    id: 10,
    foto: Baklawa,
    nombre: "Baklawa",
    precio: 380,
    stock: 20,
    categoria: "dulce",
    detalle: "Bocaditos de masa filo rellenos con nueces y almibar.",
  },
];

export const getFetch = new Promise((aceptado, rechazada) => {
  //Acciones todo ok
  setTimeout(() => {
    aceptado(productos);
  }, 2000);
});

export const getFetchBis = new Promise((aceptado) => {
  setTimeout(() => {
    aceptado(productos);
  }, 3000);
});
