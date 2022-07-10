"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Coaches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 13],
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profileImage: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
      ktp: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [16, 16],
        },
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
          min: 0,
          max: 5,
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [20, 300],
        },
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [20, 100],
        },
      },
      favourite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [20, 100],
        },
      },
      budget: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Coaches");
  },
};
