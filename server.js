const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',   // replace with your MySQL server host
  user: 'root',        // replace with your MySQL username
  password: 'xxxxxxx', // replace with your MySQL password
  database: 'testdb'   // replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Serve the HTML client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API to query the MySQL database
app.post('/query', (req, res) => {
  const { query } = req.body;
  
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

