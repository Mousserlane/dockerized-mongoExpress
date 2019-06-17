const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
BiographyController = require('./controllers/biographyController');
ExperienceController = require('./controllers/experienceController');
// connect to mongodb
mongoose.connect('mongodb://{YOUR-DOCKER-HOST}/site_document'); // still struggling with the docker host here
// open mongodb connection so our app can access it
const db = mongoose.connection;

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('There is nothing to see here');
});

app.get('/api/bio', (req, res) => {
  BiographyController.getBiography((err, bio) => {
    if (err) {
      throw err;
    }
    console.log(bio);
    // res.json(bio);
    res.status(200).send({ message: 'successsfully hit' });
  });
});

app.post('/api/bio', (req, res) => {
  var biography = req.body;
  BiographyController.addBiography(biography, (err, bio) => {
    if (err) {
      throw err;
    }
    res.status(200).json(bio);
  });
});

app.get('/api/experiences', (req, res) => {
  ExperienceController.getExperience((err, exp) => {
    if (err) {
      throw err; // Might want to create an abstraction on this one
    }
    res.json(exp);
  }, 50);
});

app.post('/api/experiences', (req, res) => {
  var experience = req.body;
  ExperienceController.addExperience(experience, (err, exp) => {
    if (err) {
      throw err;
    }
    res.status(200).json(exp);
  });
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});
