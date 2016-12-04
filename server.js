const express = require('express');
const app = express();
const swig = require('swig');

const config = require('./config');

const indexRoute = require('./routes/');

swig.setDefaults(config.swig);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use('/', indexRoute);

app.listen(config.port, () => {
  console.log(`Pet Server is listening on port ${config.port}`);
});