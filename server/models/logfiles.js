'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LogFiles.init({
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LogFiles',
  });
  return LogFiles;
};