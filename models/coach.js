"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coach.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your name",
          },
          len: [3, 100],
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your phone number",
          },
          len: [10, 13],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert the name",
          },
          len: [3, 100],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your password",
          },
        },
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [3, 100],
        },
      },
      ktp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your ktp number",
          },
          len: [16, 16],
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Rate this Coach",
          },
          isFloat: true,
          min: 0,
          max: 5,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Describe your personality or skill",
          },
          len: [20, 300],
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your address",
          },
          len: [20, 100],
        },
      },
      favourite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your favourite or not",
          },
        },
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your comments",
          },
          len: [20, 100],
        },
      },
      budget: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please Insert your budget",
          },
          isFloat: true,
        },
      },
      MyCoachId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Coach",
    }
  );
  return Coach;
};
