'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING
  }, {});

  return Coffee;
};