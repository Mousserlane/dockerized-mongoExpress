// @flow
const mongoose = require('mongoose');

// Schema Creation

const experienceSchema: Object = mongoose.Schema({
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
  getExperiences,
  postExperience
};

// Method Hoisting => To reduce cluttering
// But we should look for better alternatives
function getExperiences(limit: number): Promise<any> {
  return new Promise(
    (resolve: Function, reject: Function): void => {
      Experiences.find(
        (err: Object, obj: Object): void => {
          if (err) {
            console.log('error:', err);
            reject(err);
          } else {
            resolve(obj);
          }
        }
      ).limit(limit);
    }
  );
}

function postExperience(data: Object): Promise<any> {
  return new Promise((resolve: Function, reject: Function) => {
    Experiences.create(data, (err: Object, response: Object) => {
      if (err) {
        reject(err);
      }
      resolve(response);
    });
  });
}

const Experiences = (module.exports = mongoose.model(
  'Experiences',
  experienceSchema
));
