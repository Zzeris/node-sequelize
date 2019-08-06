'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CoffeShops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCoffee: {
        type: Sequelize.INTEGER,
        references: {model: 'Coffees', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      idShop: {
        type: Sequelize.INTEGER,
        references: {model: 'Shops', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shops');
  }
};