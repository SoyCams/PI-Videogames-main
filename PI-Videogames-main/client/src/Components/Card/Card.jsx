/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={`/game/${props.id}`}>
      <div>
        <img className={styles.imagen} src={props.imagen} alt={props.nombre} />
        <h1>{props.nombre}</h1>
        {props.generos.map((genero, index) => (
          <h2 key={index}>{genero}</h2>
        ))}
      </div>
    </Link>
  );
};

export default Card;
