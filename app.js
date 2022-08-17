const express = require ('express');
const mysql = require ('mysql');
const bodyParser = require ('body-parser')
// let connection = require('./database')

const app = express();
const apiRouter = require('./routes/api')
require('./database')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', apiRouter);

// app.get('/', (req, res)=> {
//     // let sql = "SELECT * from products";
//     // connection.query(sql, function(err, results){
//     //     res.send(results)
//     // })

// })

app.listen(3000, ()=> {
    console.log('listening to port 3000');
    // connection.connect(function(err) {
    //     if(err) throw err;
    //     console.log('DB CONNECTED!')

    // })
})