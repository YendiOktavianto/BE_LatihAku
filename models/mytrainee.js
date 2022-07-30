"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class myTrainee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      myTrainee.belongsTo(models.Coach);
      myTrainee.hasMany(models.User, {
        foreignKey: "MyTraineeId",
      });
    }
  }
  myTrainee.init(
    {
      schedule: DataTypes.DATE,
      timeRemaining: DataTypes.INTEGER,
      salary: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "myTrainee",
    }
  );
  return myTrainee;
};
