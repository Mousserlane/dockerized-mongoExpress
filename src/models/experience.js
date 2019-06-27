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

// Method definition
experienceSchema.method({
  _getExperiences
});

// Method Hoisting => To reduce cluttering
// But we should look for better alternatives
function _getExperiences(limit) {
  return new Promise((resolve, reject) => {
    Experiences.find((err, exp) => {
      if (err) {
        console.log('hell');
        reject(err);
      } else {
        resolve('exp');
      }
    }).limit(limit);
  });
}

Experiences = module.exports = mongoose.model('Experiences', experienceSchema);
