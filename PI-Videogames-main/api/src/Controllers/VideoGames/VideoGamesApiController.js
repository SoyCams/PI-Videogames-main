const axios = require('axios');
const {apis} = require('../../ConectionsApi/apiURL.js');
const {YOUR_API_KEY} = process.env;

async function getVideogameApi(req, res) {
  try {
    const {data} = await axios.get(
      `${apis.apiVideoGame.baseURL}?key=${YOUR_API_KEY}&page_size=100`
    );
    const {results, count, next} = data;
    const videosGames = [];
    let currentpage = 1;
    let currentResults = results;

    while (videosGames.length < 100 && currentResults.length > 0) {
      currentResults.forEach((videoGame) => {
        const newvideoGame = {
          id: videoGame.id,
          nombre: videoGame.name,
          descripcion: videoGame.slug,
          plataformas: videoGame.platforms.map(
            (nombre) => nombre.platform.name
          ),
          generos: videoGame.genres.map((genero) => genero.name),
          imagen: videoGame.background_image,
          lanzamiento: videoGame.released,
          rating: videoGame.rating,
        };
        videosGames.push(newvideoGame);
      });
      if (currentpage * 100 < count && next) {
        const {data: nextPageData} = await axios.get(next);
        currentResults = nextPageData.results;
        currentpage++;
      } else {
        break;
      }
    }
    return res.status(200).json(videosGames);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = {
  getVideogameApi,
};
