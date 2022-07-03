'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Place.init({
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    price: DataTypes.FLOAT,
    location: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    favourite: DataTypes.BOOLEAN,
    images: DataTypes.STRING,
    phone: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};