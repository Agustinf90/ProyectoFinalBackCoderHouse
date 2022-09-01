const express = require ('express');
const mysql = require ('mysql');
const bodyParser = require ('body-parser');
require('dotenv').config()
require('./database/database')
require ('./utils.js');


const app = express();
const apiRouter = require('./routes/api')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static(__dirname + '/public'));
app.use('/api', apiRouter);



const server = app.listen(process.env.PORT || 3000, ()=> {
    console.log('listening to port 3000');
})

const { Server } = require('socket.io')

const io = new Server(server)
const log = []

io.on('connection', socket=>{

    socket.on('message', data=>{
        log.push(data);
        io.emit('log',log)

    })
})