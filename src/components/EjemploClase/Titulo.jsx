import Input from "./Input";

const Titulo = ({ titulo, subtitulo, handlerOnClick }) => {
  // handlerOnClick();

  return (
    <>
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
      <Input placeholder="soy input de titulo" />
    </>
  );
};

export default Titulo;

/* UNA FORMA
const Titulo = (props) => {
    

  return (
    <>
      <h2>props.titulo</h2>
      <p>props.subtitulo</p>
    </>
  );
};

export default Titulo;*/

/* OTRA FORMA
const Titulo = (props) => {
    
    const{titulo, subtitulo, handlerOnClick} = props

  return (
    <>
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
    </>
  );
};

export default Titulo; */
