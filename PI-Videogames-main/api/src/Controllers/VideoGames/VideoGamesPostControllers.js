const {Op} = require('sequelize');
const {Videogame, Genre} = require('../../db.js');

async function postVideoGames(req, res) {
  const {
    Nombre,
    Descripcion,
    Plataformas,
    Imagen,
    FechaDeLanzamiento,
    Rating,
    genreId,
  } = req.body;
  if (
    !Nombre ||
    !Descripcion ||
    !Plataformas ||
    !Imagen ||
    !FechaDeLanzamiento ||
    !Rating
  ) {
    return res.status(401).send('Faltan Datos');
  }
  try {
    const videoGame = await Videogame.create({
      Nombre,
      Descripcion,
      Plataformas,
      Imagen,
      FechaDeLanzamiento,
      Rating,
    });
    const genre = await Genre.findByPk(genreId);
    await videoGame.addGenre(genre);
    return res.status(200).json(videoGame);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = {
  postVideoGames,
};
