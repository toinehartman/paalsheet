/**
 * Taak model events
 */

'use strict';

import {EventEmitter} from 'events';
import Taak from './taak.model';
var TaakEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TaakEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Taak.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TaakEvents.emit(event + ':' + doc._id, doc);
    TaakEvents.emit(event, doc);
  }
}

export default TaakEvents;
