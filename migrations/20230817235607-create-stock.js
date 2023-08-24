'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    
        productId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Produtos',
                key: 'id'
            }
            
            },
         quantity: {
             type: Sequelize.INTEGER,
           allowNull: false,
           references: {  
                model: 'Produtos',
                key: 'quantity'
            }
          
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
    Stock.belongsTo(Product, { foreignKey: 'productId' });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stock');
  }
};