'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LogConfigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LogFiles',
          key: 'id',
        },
      },
      priority: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      expression: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LogConfigs');
  }
};