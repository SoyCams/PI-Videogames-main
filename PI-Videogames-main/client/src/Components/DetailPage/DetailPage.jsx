import { useEffect } from "react";
import { connect } from "react-redux";
import { getGameById } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const DetailPage = ({ game, getGameById }) => {
  const { id } = useParams();

  useEffect(() => {
    getGameById(id);
  }, [id, getGameById]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detalle del videojuego</h1>
      <p>ID: {game.id}</p>
      <p>Nombre: {game.nombre}</p>
      <img src={game.imagen} alt={game.nombre} />
      <p>Plataformas: {game.plataformas.join(", ")}</p>
      <p>Descripción: {game.descripcion}</p>
      <p>Fecha de lanzamiento: {game.fechaLanzamiento}</p>
      <p>Rating: {game.rating}</p>
      <p>Géneros: {game.generos.join(", ")}</p>
    </div>
  );
};

DetailPage.propTypes = {
  game: PropTypes.object.isRequired,
  getGameById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGameById: (id) => dispatch(getGameById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
