const express = require('express');
const router = express.Router();

const petMiddleware = require('../middlewares/pet');

router.get('/', petMiddleware.list);
router.post('/', petMiddleware.add);
router.get('/:id', petMiddleware.getOne);
router.put('/:id', petMiddleware.update);
router.delete('/:id', petMiddleware.remove);

module.exports = router;
