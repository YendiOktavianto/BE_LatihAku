"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place.belongsTo(models.Booking);
    }
  }
  Place.init(
    {
      name: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the place name",
          },
          len: [3, 100],
        },
      },
      owner: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the place name",
          },
          len: [3, 100],
        },
      },
      price: {
        Type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your price",
          },
          isFloat: true,
        },
      },
      location: {
        Type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your place location",
          },
          len: [3, 100],
        },
      },
      rating: {
        Type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your rating",
          },
          len: [0, 5],
          isFloat: true,
        },
      },
      description: {
        Type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter place description",
          },
          len: [20, 500],
        },
      },
      favourite: {
        Type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please choose this place is favourite or not for you",
          },
        },
      },
      images: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your images",
          },
          isUrl: true,
        },
      },
      phone: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your phone",
          },
          len: [10, 13],
        },
      },
      comments: {
        Type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [20, 300],
        },
      },
      BookingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Place",
    }
  );
  return Place;
};
