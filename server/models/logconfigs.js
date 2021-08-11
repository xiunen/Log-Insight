'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogConfigs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LogConfigs.init({
    fileid: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    name: DataTypes.STRING,
    expression: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LogConfigs',
  });
  return LogConfigs;
};