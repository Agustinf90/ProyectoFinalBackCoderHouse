const express = require ('express');
const mysql = require ('mysql');
const bodyParser = require ('body-parser');
require('dotenv').config()
require('./database')
require ('./utils.js');

// let connection = require('./database')

const app = express();
const apiRouter = require('./routes/api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static(__dirname + '/public'));
app.use('/api', apiRouter);
// __dirname + /
// app.get('/', (req, res)=> {
//     // let sql = "SELECT * from products";
//     // connection.query(sql, function(err, results){
//     //     res.send(results)
//     // })

// })

app.listen(process.env.PORT || 3000, ()=> {
    console.log('listening to port 3000');
    // connection.connect(function(err) {
    //     if(err) throw err;
    //     console.log('DB CONNECTED!')

    // })
})