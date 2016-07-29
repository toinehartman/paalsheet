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
    match: [/[a-z0-9]+[_a-z0-9\.-]*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/i, 'Please fill a valid email address']
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Taak'
  }],
  dagen: [String],
  praam: [String],
  bonnen: Number,
  opmerking: String,
  mentor: Number,
  busje: [String],
  balie: [String]
});

BondslidSchema.virtual('fullname').get(function() {
  return this.firstname.concat(' ', this.lastname)
})

BondslidSchema.virtual('fullname').set(function(name) {
  var names = name.spilt(' ')

  this.firstname = names.shift()
  this.lastname = ' '.join(names)
})

export default mongoose.model('Bondslid', BondslidSchema);
