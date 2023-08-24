'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    
        name: {
            type: Sequelize.STRING(128),
            allowNull: false,
        },
    
        description: {
            type: Sequelize.STRING(128),
            allowNull: false,
        },
    
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false    
        },
    
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};