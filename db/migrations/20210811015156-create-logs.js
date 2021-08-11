'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Logs', {
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
      line: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      remark: {
        type: Sequelize.STRING
      },
      mark: {
        type: Sequelize.INTEGER
      },
      omit: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Logs');
  }
};