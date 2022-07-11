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
            msg: "Please enter or choose your schedule",
          },
          isDate: true,
        },
      },
      timeRemaining: {
        Type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your time remaining",
          },
          isInt: true,
          min: 1,
        },
      },
      salary: {
        Type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your salary",
          },
          isFloat: true,
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
