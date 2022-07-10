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
    }
  }
  Place.init(
    {
      name: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name",
          },
        },
      },
      owner: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your owner",
          },
        },
      },
      price: {
        Type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your price",
          },
        },
      },
      location: {
        Type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your location",
          },
        },
      },
      rating: {
        Type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your rating",
          },
        },
      },
      description: {
        Type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your description",
          },
        },
      },
      favourite: {
        Type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your favourite",
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
        },
      },
      phone: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your phone",
          },
        },
      },
      comments: {
        Type: DataTypes.TEXT,
        allowNull: false,
        validate: {},
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
