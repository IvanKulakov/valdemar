const { Sequelize } = require('sequelize');

module.exports = new Sequelize('valdemar', 'valdemor.', 'password', {
  dialect: 'mysql',
  host: process.env.HOST,
});
