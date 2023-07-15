const express = require('express');
const {
  getVideogameApi,
} = require('../../Controllers/VideoGames/VideoGamesApiController');

const router = express.Router();

router.get('/', getVideogameApi);

module.exports = router;
