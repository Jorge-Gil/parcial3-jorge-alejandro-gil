const Message = require('../models/mensajes');

socket.on('chat message', (msg) => {
  const message = new Message({
    author: msg.author,
    message: msg.message,
  });

  message.save((err) => {
    if (err) console.error(err);
    else console.log('Mensaje guardado en la base de datos');
  });

  // Respond to sender with their own message
  socket.emit('chat message', msg);
});


app.get('/', (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) console.error(err);
    else {
      res.render('index', { messages });
    }
  });
});
