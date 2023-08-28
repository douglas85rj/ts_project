'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stockMovement', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },

    productId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },

    userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },

    quantity: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },

    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stockMovement');
  }
};
