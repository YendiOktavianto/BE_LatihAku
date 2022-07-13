"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.MyCoach, {
        foreignKey: "UserId",
      });

      User.hasOne(models.Booking, {
        foreignKey: "BookingId",
      });
    }
  }
  User.init(
    {
      firstName: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your First Name",
          },
          len: [3, 100],
        },
      },
      lastName: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your Last Name",
          },
          len: [3, 100],
        },
      },
      phoneNumber: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your Phone Number",
          },
          len: [10, 13],
        },
      },
      email: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your Email",
          },
          isEmail: true,
        },
      },
      password: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your password",
          },
        },
      },
      profileImage: {
        Type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
      address: {
        Type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your address",
          },
          len: [20, 100],
        },
      },
      BookingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
