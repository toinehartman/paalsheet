/**
 * Onderdeel model events
 */

'use strict';

import {EventEmitter} from 'events';
import Onderdeel from './onderdeel.model';
var OnderdeelEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OnderdeelEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Onderdeel.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OnderdeelEvents.emit(event + ':' + doc._id, doc);
    OnderdeelEvents.emit(event, doc);
  }
}

export default OnderdeelEvents;
