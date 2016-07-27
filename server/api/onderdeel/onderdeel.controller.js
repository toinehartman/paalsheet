/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/onderdelen              ->  index
 * POST    /api/onderdelen              ->  create
 * GET     /api/onderdelen/:id          ->  show
 * PUT     /api/onderdelen/:id          ->  update
 * DELETE  /api/onderdelen/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Onderdeel from './onderdeel.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Onderdeels
export function index(req, res) {
  return Onderdeel
    .find().populate({path: 'taken', select: '-onderdeel'}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Onderdeel from the DB
export function show(req, res) {
  return Onderdeel
    .findById(req.params.id).populate({path: 'taken', select: '-onderdeel'}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Onderdeel in the DB
// export function create(req, res) {
//   return Onderdeel.create(req.body)
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }

// Updates an existing Onderdeel in the DB
// export function update(req, res) {
//   if (req.body._id) {
//     delete req.body._id;
//   }
//   return Onderdeel
//     .findById(req.params.id).populate({path: 'taken', select: '-onderdeel'}).exec()
//     .then(handleEntityNotFound(res))
//     .then(saveUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// Deletes a Onderdeel from the DB
// export function destroy(req, res) {
//   return Onderdeel
//     .findById(req.params.id).populate({path: 'taken', select: '-onderdeel'}).exec()
//     .then(handleEntityNotFound(res))
//     .then(removeEntity(res))
//     .catch(handleError(res));
// }
