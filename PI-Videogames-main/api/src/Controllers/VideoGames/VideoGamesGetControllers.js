const {Op} = require('sequelize');
const {Videogame, Genre} = require('../../db.js');

async function getVideoGames(req, res) {
  const {name} = req.query;
  if (!name) {
    try {
      const videoGames = await Videogame.findAll({
        include: [Genre],
      });
      return res.status(200).json(videoGames);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  } else {
    try {
      const videoGames = await Videogame.findAll({
        where: {
          Nombre: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Genre,
        limit: 15,
      });
      if (videoGames.length === 0) {
        return res.status(400).json({error: 'No se encontraron videojuegos'});
      }
      res.status(200).json(videoGames);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
}

async function getVideoGameDetail(req, res) {
  const {idVideogame} = req.params;
  try {
    const videoGame = await Videogame.findByPk(idVideogame, {
      include: Genre,
    });
    if (!videoGame) {
      return res.status(404).json({error: 'Video juego no encontrado'});
    }

    res.status(200).json(videoGame);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = {
  getVideoGameDetail,
  getVideoGames,
};
