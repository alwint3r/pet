const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + config.db);
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose failed to connect to ' + config.db);
  process.exit(1);
});
