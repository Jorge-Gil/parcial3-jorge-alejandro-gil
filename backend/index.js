


const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


const server = require('http').createServer(app);

const io = require('socket.io')(server);

const { dbConnection } = require("./database");
dbConnection();

app.use(cors());

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(process.env.PORT, () => {
  console.log('Server listening on port 3001');
});
