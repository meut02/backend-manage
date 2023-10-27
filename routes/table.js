
const express = require('express');
const router = express.Router();
const { sequelize } = require('../models/Table'); 
const { QueryTypes } = require('sequelize');

router.post('/create-table', async (req, res) => {
  const { tableName } = req.body;
  await sequelize.query(`CREATE TABLE IF NOT EXISTS ${tableName} (id INT PRIMARY KEY)`);
  res.json({ message: 'Table created successfully' });
});

router.post('/add-field', async (req, res) => {
  const { tableName, fieldName, fieldType } = req.body;
  await sequelize.query(`ALTER TABLE ${tableName} ADD COLUMN ${fieldName} ${fieldType}`);
  res.json({ message: 'Field added successfully' });
});

module.exports = router;

