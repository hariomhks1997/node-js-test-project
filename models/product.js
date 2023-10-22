const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('COMPANY', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  companyname:Sequelize.STRING,
  pros: Sequelize.STRING,
  cons: Sequelize.STRING,
  rating:Sequelize.STRING,
  
});

module.exports = Product;
