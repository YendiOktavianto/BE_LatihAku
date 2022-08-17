"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User);
      Booking.hasMany(models.Place, {
        foreignKey: "BookingId"
      });

      Booking.hasOne(models.PlacePayment, {
        foreignKey: "PlaceId"
      });
    }
  }
  Booking.init(
    {
      bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please choose the date"
          },
          isDate: true
        }
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the text"
          },
          len: [20, 300]
        }
      }
    },
    {
      sequelize,
      modelName: "Booking"
    }
  );
  return Booking;
};
