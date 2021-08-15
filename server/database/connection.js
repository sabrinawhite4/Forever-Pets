require('dotenv').config();

const mongoose = require('mongoose');

exports.init = async function () {
   const connection = mongoose.connect(
      process.env.CONNECTION_STRING,
      { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    ).then(mongoose => mongoose)
    return connection
}
exports.close = async function () {
  return mongoose.connection.close()
}