const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGames = require('./VideoGamesRoutes/VideogamesRoutes.js');
const genresDB = require('./GenreRoutes/GenreRoutes.js');
const apis = require('./VideoGamesRoutes/VideogamesApiRoute.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGames);
router.use('/genres', genresDB);
router.use('/api', apis);

module.exports = router;
