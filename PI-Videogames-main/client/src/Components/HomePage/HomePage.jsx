/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { getApiVideoGame } from "../../Redux/Actions";
import { connect } from "react-redux";
import Card from "../Card/Card";

const HomePage = (props) => {
  const { videoGameApi, videoGameByName } = props;
  const [gamesDispApi, setGamesDisp] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const [sortBy, setSortBy] = useState(""); // Estado para el tipo de ordenamiento ("nombre" o "rating")
  const [sortDirection, setSortDirection] = useState("");

  useEffect(() => {
    props.getApiVideoGame();
  }, []);

  useEffect(() => {
    if (videoGameByName.length !== 0) {
      setGamesDisp(videoGameByName);
    } else {
      setGamesDisp(videoGameApi);
    }
  }, [videoGameApi, videoGameByName]);

  useEffect(() => {
    let sorted = [...gamesDispApi];

    if (sortBy === "nombre") {
      sorted = sorted.sort((a, b) =>
        sortDirection === "asc"
          ? a.nombre.localeCompare(b.nombre)
          : b.nombre.localeCompare(a.nombre)
      );
    } else if (sortBy === "rating") {
      sorted = sorted.sort((a, b) =>
        sortDirection === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }

    setSortedGames(sorted);
  }, [gamesDispApi, sortBy, sortDirection]);

  const handleGenreFilter = (genre) => {
    if (genre) {
      const filteredGames = videoGameApi.filter((game) =>
        game.generos.includes(genre)
      );
      setGamesDisp(filteredGames);
      setSortedGames(filteredGames);
    } else {
      setGamesDisp(videoGameApi);
      setSortedGames(videoGameApi);
    }
    setCurrentPage(1);
  };
  const handleSortByAlphabet = () => {
    setSortBy("nombre");
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleSortByRating = () => {
    setSortBy("rating");
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Implementacion lógica para el paginado
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = sortedGames.slice(indexOfFirstGame, indexOfLastGame);
  // const totalPages = Math.ceil(sortedGames.length / gamesPerPage);

  return (
    <div>
      <h1>API</h1>
      <div>
        <button onClick={() => handleGenreFilter(null)}>Todos</button>
        <button onClick={() => handleGenreFilter("Aventura")}>Aventura</button>
        <button onClick={() => handleGenreFilter("Acción")}>Acción</button>
        <button onClick={() => handleGenreFilter("Deporte")}>Deporte</button>
      </div>
      <div>
        <button onClick={handleSortByAlphabet}>Ordenar por nombre</button>
        <button onClick={handleSortByRating}>Ordenar por rating</button>
        <button onClick={() => handlePageChange(2)}>Cambiar a página 2</button>
      </div>
      {currentGames.map((videoGame, index) => (
        <div key={index}>
          {
            <Card
              id={videoGame.id}
              nombre={videoGame.nombre}
              imagen={videoGame.imagen}
              generos={videoGame.generos}
            />
          }
        </div>
      ))}
      <h1>DB</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videoGameApi: state.videoGameApi,
    videoGameByName: state.videoGameByName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApiVideoGame: () => dispatch(getApiVideoGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
