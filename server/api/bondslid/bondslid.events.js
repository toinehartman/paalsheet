/**
 * Bondslid model events
 */

'use strict';

import {EventEmitter} from 'events';
import Bondslid from './bondslid.model';
var BondslidEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BondslidEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Bondslid.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BondslidEvents.emit(event + ':' + doc._id, doc);
    BondslidEvents.emit(event, doc);
  }
}

export default BondslidEvents;
