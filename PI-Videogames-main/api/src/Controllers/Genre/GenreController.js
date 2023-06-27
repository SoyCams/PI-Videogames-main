const {Genre} = require('../../db');
const axios = require('axios');

async function getGenres(req, res) {
  try {
    const genresDB = await Genre.findAll({
      include: [VideoGames],
    });

    return res.status(200).json(genresDB);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}
module.exports = {getGenres};
