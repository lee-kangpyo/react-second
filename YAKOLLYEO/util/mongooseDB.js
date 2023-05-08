const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = () => {
  function connect() {
    mongoose.connect(process.env.MONGOOSE_SERVER)
      .then(() => console.log('mongodb connected'))
      .catch((err) => console.error('mongodb connection error', err));
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};