const mongoose = require('mongoose');

// Schema Creation

const biographySchema = mongoose.Schema({
  // Schema is basically where we design the model object
  // What properties it'll have, its type, etc.
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  about_me: {
    type: String
  },
  avatar_url: {
    type: String
  },
  type: {
    type: String, // using this so we can use the findOne method
    required: true
  }
});

Biography = module.exports = mongoose.model('Biography', biographySchema);
