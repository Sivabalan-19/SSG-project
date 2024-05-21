const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')


const app = express()

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:'',
    database :'cquestion'
})


app.get('/sub', (req, res) => {
    const sql = 'SELECT question FROM cquest';
   
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
    console.log(req.body)
    const sql = `SELECT descr FROM cquest where id ="`+req.index+`"`;
   
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal server error');
        return;
      }

      
      res.json(results);
    });
  });






app.listen(8081, () => {
    console.log("Listening....");
})
