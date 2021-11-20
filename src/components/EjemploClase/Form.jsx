import Boton from "./Boton";

function Form({ title, children, boton }) {
  console.log(boton);
  console.log("Form");
  return (
    <>
      <h2>{title}</h2>
      {children}
      <input type="text" placeholder="soy input" /> <br />
      {boton({ buttonText: "boton" })}
    </>
  );
}

export default Form;
