"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      "users", // table name
      "middle_name", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
    await queryInterface.addColumn(
      "users", // table name
      "address", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
    await queryInterface.addColumn(
      "users", // table name
      "addhar_card_number", // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
