const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FechaDeLanzamiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
