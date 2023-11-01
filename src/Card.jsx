//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import "./index.css";

function Card(props) {
  const { item } = props;
  return (
    <div className="card">
      <p>
        Este es tu gato según tu nombre:{" "}
        <b>
          {item?.name} {item?.lastname}
        </b>{" "}
      </p>
      <img
        src={`https://cataas.com/cat/says/${item?.name}?fontSize=50&fontColor=yellow`}
        alt={item?.name}
        className="image"
      />
    </div>
  );
}

export default Card;
