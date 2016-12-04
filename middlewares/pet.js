
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

  getOne(req, res, next) {
    const id = req.params.id;
    const query = {
      _id: id,
    };

    Pet.findOne(query)
      .then(result => {
        if (!result) {
          res.status(404);

          return res.json({
            meta: {
              code: 404,
              message: 'Pet is not found',
            },
          });
        }

        return res.json({
          meta: {
            code: 200,
            message: 'Found pet',
          },
          data: result,
        });
      })
      .catch(ex => {
        return res.json({
          meta: {
            code: 500,
            message: ex.message,
          }
        });
      });
  },

  update(req, res, next) {
    const update = req.body;
    const query = {
      _id: req.params.id,
    };

    Pet
      .findOneAndUpdate(query, update)
      .exec()
      .then(() => {
        return res.json({
          meta: {
            code: 200,
            message: 'Pet is updated',
          }
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

  remove(req, res, next) {
    const query = {
      _id: req.params.id,
    };

    Pet
      .findOneAndRemove(query)
      .exec()
      .then(() => {
        return res.json({
          meta: {
            code: 200,
            message: 'Pet is removed',
          },
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
