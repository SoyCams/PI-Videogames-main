//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {conn} = require('./src/db.js');
const axios = require('axios');
const {Genre} = require('./src/db.js');
const {YOUR_API_KEY} = process.env;
const {apis} = require('./src/ConectionsApi/apiURL.js');

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  axios.get(`${apis.apiGenre.baseURL}?key=${YOUR_API_KEY}`).then(({data}) => {
    const generos = [];
    data.results.forEach((genero) => {
      const newGenero = {
        Nombre: genero.name,
      };
      generos.push(newGenero);
    });
    Genre.bulkCreate(generos)
      .then(() => {
        console.log('DB cargada');
      })
      .catch((error) => [console.log(error.message)]);
  });
});
