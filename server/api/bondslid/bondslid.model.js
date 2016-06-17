'use strict';

import mongoose from 'mongoose';

var BondslidSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
});

export default mongoose.model('Bondslid', BondslidSchema);
