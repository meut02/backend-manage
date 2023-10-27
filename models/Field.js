const { DataTypes } = require('sequelize');
const sequelize = require('../util/database'); // Make sure to configure your database connection

const Field = sequelize.define('Field', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Field;
