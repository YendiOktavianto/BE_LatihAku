'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return await queryInterface.addColumn("Coaches", "MyFavouriteCoachId", {
      type: Sequelize.INTEGER,
      references: {
        model: "myFavouriteCoaches",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return await queryInterface.removeColumn("Coaches", "MyFavouriteCoachId");
  }
};
