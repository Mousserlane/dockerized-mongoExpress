const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
BiographyController = require('./controllers/biographyController');
ExperienceController = require('./controllers/experienceController');
KnowledgeController = require('./controllers/knowledgeController');
SkillsetController = require('./controllers/skillsetController');

const app = express();
app.use(bodyParser.json());
// connect to mongodb
const mongooseConnect = () => {
  mongoose.connect('mongodb://mousserdb:27017/site_document', {
    useNewUrlParser: true,
    reconnectTries: 20,
    reconnectInterval: 1000,
    // keepAlive: true,
    // autoReconnect: true,
    poolSize: 10
    // The API container will run first and since our mongo container hasn't
    // been initialized, it'll refuse to connect and won't try again.
    // So I'm using reconnectTries here to fix the race condition problem
    // between these containers.
  });
};
mongooseConnect();
// open mongodb connection so our app can access it
const db = mongoose.connection;

db.on('error', e => {
  console.log('connection error:', e);
  setTimeout(() => {
    console.log('Retrying connection....');
    // After I change the docker network, mongoose reconnectTries wont fire,
    // So I had to make this as an escape hatch
    mongooseConnect();
  }, 1500);
});

db.once('connected', function() {
  // Run our main  application

  // NOTE Might want to move these methods someplace else
  app.get('/', (req, res) => {
    res.send('There is nothing to see here');
  });

  app.get('/api/bio', (req, res) => {
    BiographyController.getBiography((err, bio) => {
      if (err) {
        throw err;
      }
      console.log(bio);
      res.json(bio);
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
});

app.get('/api/knowledge', (req, res) => {
  KnowledgeController.getKnowledge((err, knowledge) => {
    if (err) {
      throw err;
    }
    res.status(200).json(knowledge);
  });
});

app.post('/api/knowledge', (req, res) => {
  var knowledge = req.body;
  KnowledgeController.addKnowledge(knowledge, (err, knowledge) => {
    if (err) {
      throw err; // Create middleware for error
    }
    res.status(200).json(knowledge);
  });
});

app.get('/api/skillset', (req, res) => {
  SkillsetController.getSkillset((err, skillset) => {
    if (err) {
      throw err;
    }
    res.status(200).json(skillset);
  });
});

app.post('/api/skillset', (req, res) => {
  var skillset = req.body;
  SkillsetController.addSkillset(skillset, (err, skillset) => {
    if (err) throw err;

    res.status(200).json(skillset);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});
