const express = require('express');
const app = express();
const swig = require('swig');
const config = require('./config');

// db & swig config

require('./db');
swig.setDefaults(config.swig);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// routes config

const indexRoute = require('./routes/');
const petRoute = require('./routes/pet');

app.use('/', indexRoute);
app.use('/api/pet', petRoute);

app.listen(config.port, () => {
  console.log(`Pet Server is listening on port ${config.port}`);
});
