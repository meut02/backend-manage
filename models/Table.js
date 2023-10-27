const { DataTypes } = require('sequelize');
const sequelize = require('../util/database'); // Make sure to configure your database connection

const Table = sequelize.define('Table', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Table;
