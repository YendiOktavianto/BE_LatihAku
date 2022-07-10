"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyCoach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MyCoach.init(
    {
      schedule: {
        Type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your schedule",
          },
        },
      },
      timeRemaining: {
        Type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your time remaining",
          },
        },
      },
      salary: {
        Type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your salary",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MyCoach",
    }
  );
  return MyCoach;
};
