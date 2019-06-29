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
  // Insert instance methods here
});

experienceSchema.statics = {
  getExperiences
};

// Method Hoisting => To reduce cluttering
// But we should look for better alternatives
function getExperiences(limit) {
  return new Promise((resolve, reject) => {
    Experiences.find((err, obj) => {
      if (err) {
        console.log('error:', err);
        reject(err);
      } else {
        resolve(obj);
      }
    }).limit(limit);
  });
}

function postExperience(data) {
  return new Promise((resolve, reject) => {
    Experiences.create(data, (err, response) => {
      if (err) {
        reject(err);
      }
      resolve(response);
    });
  });
}

Experiences = module.exports = mongoose.model('Experiences', experienceSchema);
