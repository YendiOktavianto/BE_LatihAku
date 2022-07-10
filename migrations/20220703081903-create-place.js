"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Places", {
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
      owner: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
        },
      },
      location: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      rating: {
        type: Sequelize.FLOAT,
        validate: {
          len: [0, 5],
          isFloat: true,
        },
      },
      description: {
        type: Sequelize.TEXT,
        validate: {
          len: [20, 500],
        },
      },
      favourite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      images: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 13],
        },
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [20, 300],
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
    await queryInterface.dropTable("Places");
  },
};
