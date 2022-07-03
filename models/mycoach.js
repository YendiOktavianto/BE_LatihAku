'use strict';
const {
  Model
} = require('sequelize');
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
  MyCoach.init({
    schedule: DataTypes.DATE,
    timeRemaining: DataTypes.INTEGER,
    salary: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'MyCoach',
  });
  return MyCoach;
};