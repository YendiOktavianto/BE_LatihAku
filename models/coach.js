"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coach.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      ktp: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      address: DataTypes.TEXT,
      favourite: DataTypes.BOOLEAN,
      comments: DataTypes.TEXT,
      budget: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Coach",
    }
  );
  return Coach;
};
