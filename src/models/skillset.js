const mongoose = require('mongoose');

// Schema Creation

const skillsetSchema = mongoose.Schema({
  // Schema is basically where we design the model object
  // What properties it'll have, its type, etc.
  field: {
    type: String,
    required: true
  },
  setlist: {
    type: [String]
  }
});

Skillset = module.exports = mongoose.model('Skillset', skillsetSchema);
