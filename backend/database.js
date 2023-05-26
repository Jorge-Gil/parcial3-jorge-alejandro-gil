// const mongoose = require('mongoose');

// // Replace this with your MongoDB connection string
// const connectionString = 'mongodb+srv://admin:admin@cluster0.x2xsgp7.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// exports.dbConnection = db;

const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      autoIndex: true,
    });
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar en DB");
  }
};

module.exports = {
    dbConnection,
};