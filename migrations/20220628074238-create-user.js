"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      phoneNumber: {
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
        // validate: {
        //   isUrl: true,
        // },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [20, 100],
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
    await queryInterface.dropTable("Users");
  },
};
