const express = require(`express`);
const app = express();

const config = require(`./config`);

app.listen(config.port, () => {
  console.log(`Pet Server is listening on port ${config.port}`);
});