const express = require('express');
const router = express.Router();

const petMiddleware = require('../middlewares/pet');

router.get('/', petMiddleware.list);
router.post('/', petMiddleware.add);

module.exports = router;
