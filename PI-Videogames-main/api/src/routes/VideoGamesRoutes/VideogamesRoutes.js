const express = require('express');
const {
  postVideoGames,
  getVideoGames,
  getVideoGameDetail,
} = require('../../Controllers/VideoGames/VideoGamesPostControllers');
const router = express.Router();

router.post('/', postVideoGames);
router.get('/', getVideoGames);
router.get('/:idVideogame', getVideoGameDetail);

module.exports = router;
