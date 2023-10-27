// server.js
const express = require('express');
const app = express();
const port = 3000;
const { sequelize } = require('./models/Table'); 
const { QueryTypes } = require('sequelize');
const cors = require('cors');

app.use(express.json());
app.use(cors()); // Enable CORS to allow requests from your frontend

// Import your Sequelize models here
const Field = require('./models/Field');
const Table=require('./models/Table')

app.use('/Table', require('./routes/table'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/Table/get-tables', async (req, res) => {
  try {
    const tables = await sequelize.query('SHOW TABLES', { type: QueryTypes.SELECT });
    const tableNames = tables.map((table) => table[`Tables_in_${sequelize.config.database}`]);
    res.json({ tables: tableNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch table names' });
  }
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/Expense',userRoutes)


app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });

