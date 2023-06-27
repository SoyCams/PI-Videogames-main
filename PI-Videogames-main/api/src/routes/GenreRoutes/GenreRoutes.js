const express = require('express');
const {getGenres} = require('../../Controllers/Genre/GenreController');

const router = express.Router();

router.get('/', getGenres);

module.exports = router;
