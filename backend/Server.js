const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cquestion'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

app.get('/sub', (req, res) => {
  const sql = 'SELECT id, question FROM cquest';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal server error');
      return;
    }
    res.json(results);
  });
});

app.post('/desc', (req, res) => {
    console.log(req.body.index.id)
  db.query(`SELECT descr FROM cquest WHERE id = "${req.body.index.id}"`, (err, results) => {
    
    if (results.length === 0) {
      res.status(404).send('Question not found');
      return;
    }
    res.send({message:results});
  });
});



app.listen(8081, () => {
  console.log('Server is running on http://localhost:8081');
});
