'use strict';

import mongoose from 'mongoose';

var OnderdeelSchema = new mongoose.Schema({
  titel: {
    type: String,
    required: true
  },
  omschrijving: String,
  start: Date,
  eind: Date,
  taken: [{type: mongoose.Schema.Types.ObjectId, ref: 'Taak'}]
});

export default mongoose.model('Onderdeel', OnderdeelSchema);
