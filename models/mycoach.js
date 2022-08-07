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
      MyCoach.belongsTo(models.User);
      MyCoach.hasMany(models.Coach, {
        foreignKey: "MyCoachId",
      });
    }
  }
  MyCoach.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      schedule: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter or choose your schedule",
          },
          isDate: true,
        },
      },
      timeRemaining: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.FLOAT,
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
