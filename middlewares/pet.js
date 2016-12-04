
const mongoose = require('mongoose');

require('../models/pet');

const Pet = mongoose.model('Pet');

// const Pet = require('../models/pet');

module.exports = {
  list(req, res, next) {
    Pet
      .find()
      .exec()
      .then(list => {
        return res.json({
          meta: {
            code: 200,
            message: 'Pet list',
          },
          data: list,
        });
      })
      .catch(ex => {
        return res.json({
          meta: {
            code: 500,
            message: ex.message,
          },
          data: {},
        });
      });
  },

  add(req, res, next) {
    const pet = new Pet(req.body);
    pet.save()
      .then(inserted => {
        return res.json({
          meta: {
            code: 200,
            message: 'Pet saved',
          },
          data: inserted,
        });
      })
      .catch(ex => {
        return res.json({
          meta: {
            code: 500,
            message: ex.message,
          },
        });
      });
  },
};
