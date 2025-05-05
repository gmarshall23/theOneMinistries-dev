console.log('load-data.js now running');

const mongoose = require('mongoose');
const Encourage = require('../models/Encourage');
const Study = require('../models/Study');
const Script = require('../models/Script.js');
const Charity = require('../models/Charity');
const studyData = require('./study_seed.json');
const scriptData = require('./scrip_seed.json');
const charityData = require('./charity_seed.json');
const encourageData = require('./encourage_seed.json');

mongoose.connect('mongodb://localhost:27017/the-one-ministries-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to the-one-ministries-db");

  // Create an array to gather all seed promises
  const promises = [];

  // Seed the Study collection
  for (let obj of studyData) {
    const p = Study.findOne({ title: obj.title })
      .then((existingStudy) => {
        if (existingStudy) {
          console.log(`Study with title "${obj.title}" already exists. Skipping...`);
          return;
        }
        const study = new Study(obj);
        return study.save().then(() => {
          console.log("Study data saved:", obj);
        });
      })
      .catch((err) => {
        console.error("Error saving study data:", err);
      });
    promises.push(p);
  }

  // Seed the Script collection
  for (let obj of scriptData) {
    const p = Script.findOne({ quote: obj.quote })
      .then((existingScript) => {
        if (existingScript) {
          console.log(`Script with quote "${obj.quote}" already exists. Skipping...`);
          return;
        }
        const script = new Script(obj);
        return script.save().then(() => {
          console.log("Script data saved:", obj);
        });
      })
      .catch((err) => {
        console.error("Error saving script data:", err);
      });
    promises.push(p);
  }

  // Seed the Charity collection
  for (let obj of charityData) {
    const p = Charity.findOne({ title: obj.title })
      .then((existingCharity) => {
        if (existingCharity) {
          console.log(`Charity with title "${obj.title}" already exists. Skipping...`);
          return;
        }
        const charity = new Charity(obj);
        return charity.save().then(() => {
          console.log("Charity data saved:", obj);
        });
      })
      .catch((err) => {
        console.error("Error saving charity data:", err);
      });
    promises.push(p);
  }

  // Seed the Encourage collection
  for (let obj of encourageData) {
    const p = Encourage.findOne({ title: obj.title })
      .then((existingEncourage) => {
        if (existingEncourage) {
          console.log(`Encourage with title "${obj.title}" already exists. Skipping...`);
          return;
        }
        const encourage = new Encourage(obj);
        return encourage.save().then(() => {
          console.log("Encourage data saved:", obj);
        });
      })
      .catch((err) => {
        console.error("Error saving encourage data:", err);
      });
    promises.push(p);
  }

  // Wait for all seeding promises and then disconnect.
  return Promise.all(promises)
    .then(() => {
      console.log("All data seeded successfully.");
      return mongoose.disconnect();
    })
    .then(() => {
      console.log("Disconnected from the database");
    });
})
.catch((err) => {
  console.error("Database connection error:", err);
});
