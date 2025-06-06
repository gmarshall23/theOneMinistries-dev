console.log('load-data.js now running');

const mongoose = require('mongoose');
const Encourage = require('../models/Encourage');
const Study = require('../models/Study');
const Script = require('../models/Script.js');
const Charity = require('../models/Charity');
const studyData = require('./studies-data-noId.json');
const scriptData = require('./scrip_seed.json');
const charityData = require('./charity_seed.json');
const encourageData = require('./encourage_seed.json');

mongoose.connect('mongodb://localhost:27017/the-one-ministries-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to the-one-ministries-db");

  // Array to gather all upsert promises
  const promises = [];

  // Upsert for the Study collection
  for (let obj of studyData) {
    // use unique update for Study Group collection

    const p = Study.findOneAndUpdate(
      { 'content.docTitle': obj.content.docTitle }, // filter by a unique field
      obj,                  // update document with the new data
      { new: true, upsert: true } // options: return the updated doc, create if missing
    )
      .then((doc) => {
        console.log("Study upserted:", doc);
      })
      .catch((err) => {
        console.error("Error upserting study data:", err);
      });
    promises.push(p);
  }

  // Upsert for the Script collection
  for (let obj of scriptData) {
    const p = Script.findOneAndUpdate(
      { quote: obj.quote },
      obj,
      { new: true, upsert: true }
    )
      .then((doc) => {
        console.log("Script upserted:", doc);
      })
      .catch((err) => {
        console.error("Error upserting script data:", err);
      });
    promises.push(p);
  }

  // Upsert for the Charity collection
  for (let obj of charityData) {
    const p = Charity.findOneAndUpdate(
      { title: obj.title },
      obj,
      { new: true, upsert: true }
    )
      .then((doc) => {
        console.log("Charity upserted:", doc);
      })
      .catch((err) => {
        console.error("Error upserting charity data:", err);
      });
    promises.push(p);
  }

  // Upsert for the Encourage collection
  for (let obj of encourageData) {
    const p = Encourage.findOneAndUpdate(
      { title: obj.title },
      obj,
      { new: true, upsert: true }
    )
      .then((doc) => {
        console.log("Encourage upserted:", doc);
      })
      .catch((err) => {
        console.error("Error upserting encourage data:", err);
      });
    promises.push(p);
  }

  // Wait for all upsert operations to complete before disconnecting
  return Promise.all(promises)
    .then(() => {
      console.log("All data upserted successfully.");
      return mongoose.disconnect();
    })
    .then(() => {
      console.log("Disconnected from the database");
    });
})
.catch((err) => {
  console.error("Database connection error:", err);
});
