const express = require('express');
const {
  postVideoGames,
} = require('../../Controllers/VideoGames/VideoGamesPostControllers');
const {
  getVideoGames,
  getVideoGameDetail,
} = require('../../Controllers/VideoGames/VideoGamesGetControllers');
const router = express.Router();

router.post('/', postVideoGames);
router.get('/', getVideoGames);
router.get('/:idVideogame', getVideoGameDetail);

module.exports = router;
