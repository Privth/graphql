'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    engine: DataTypes.FLOAT
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};