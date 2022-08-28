"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlacePayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlacePayment.belongsTo(models.Booking);
    }
  }
  PlacePayment.init(
    {
      bankName: DataTypes.STRING,
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
      BookingId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "PlacePayment"
    }
  );
  return PlacePayment;
};
