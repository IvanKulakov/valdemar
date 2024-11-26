const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Reviews = sequelize.define('reviews', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Reviews };
