const mongoose = require('mongoose');

// Schema Creation

const experienceSchema = mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  company_image: {
    type: String
  },
  from: {
    type: Date
  },
  to: {
    type: Date
  },
  responsibilities: {
    type: String
  }
});

Experiences = module.exports = mongoose.model('Experiences', experienceSchema);
