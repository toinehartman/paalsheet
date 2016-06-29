'use strict';

import mongoose from 'mongoose';

var TaakSchema = new mongoose.Schema({
  omschrijving: {
    type: String,
    required: true
  },
  titel: String,
  onderdeel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Onderdeel',
    default: null
  }
});

export default mongoose.model('Taak', TaakSchema);
