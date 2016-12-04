const express = require('express');
const router = express.Router();

const index = require('../middlewares/index');

router.get('/', index.index);

module.exports = router;
