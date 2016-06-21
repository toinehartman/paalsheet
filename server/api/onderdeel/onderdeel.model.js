'use strict';

import mongoose from 'mongoose';

var OnderdeelSchema = new mongoose.Schema({
  titel: {
    type: String,
    required: true
  },
  omschrijving: String,
  dag: Date,
  start: Date,
  eind: Date,
  taken: [{
    titel: String
  }]
});

export default mongoose.model('Onderdeel', OnderdeelSchema);
