"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class myFavouriteCoach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      myFavouriteCoach.belongsTo(models.User);
      myFavouriteCoach.hasMany(models.Coach, {
        foreignKey: "MyFavouriteCoachId",
      });
    }
  }
  myFavouriteCoach.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      favourite: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "myFavouriteCoach",
    }
  );
  return myFavouriteCoach;
};
