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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the place name",
          },
          len: [3, 100],
        },
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the place name",
          },
          len: [3, 100],
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your price",
          },
          isFloat: true,
        },
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your place location",
          },
          len: [3, 100],
        },
      },
      rating: {
        type: DataTypes.FLOAT,
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
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter place description",
          },
          len: [20, 500],
        },
      },
      favourite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please choose this place is favourite or not for you",
          },
        },
      },
      images: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your images",
          },
          isUrl: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your phone",
          },
          len: [10, 13],
        },
      },
      comments: {
        type: DataTypes.TEXT,
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
