console.log('load-data.js now running');

require('../database/mongoose-connection.js');

const mongoose = require('mongoose');
const Encourage = require('../models/Encourage');
const Study = require('../models/Study');
const Script = require('../models/Script');
const User = require('../models/User');
const Charity = require('../models/Charity');
// const Encourage = require('../models/Encourage');
const studyData = require('./study_seed.json');
const scriptData = require('./scrip_seed.json');
// const userData = require('./user_seed.json');
const charityData = require('./charity_seed.json');
const encourageData = require('./encourage_seed.json');

const db = mongoose.connect('mongodb://127.0.0.1:27017/the-one-ministries-db', {})
  .then(() => {
    console.log('Connected!')
  }
  );

module.exports = mongoose.connection.on('open', () => {
  console.log(`Connected to the-one-ministries-db collection`);
  listCollections();
});
module.exports = mongoose.connection.on('close', () => {
  console.log(`Disconnected from collection`);
});
// mongoose.disconnect(); // Disconnect from the database

async function listCollections() {
  try {
    // Connect to the MongoDB database
    // await mongoose.connect('mongodb://localhost:27017/competency', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    // Get the database connection object
    // const db = mongoose.connection.db;

    // List all collections in the database
    const collections = await db.listCollections().toArray();

    console.log('Collections:');
    // collections.forEach((collection) => {
    //   console.log(collection.name);
    // });
    console.log('Add documents to Collections:');
    collections.forEach((collection) => {
      console.log(collection.name);
      collName = collection.name;
      if (collName === 'studies') {
        console.log('studies collection found');
        // studyData.forEach(async (study) => {
        //   await Study.create(study);
        //   console.log('A study document added to the studies collection:', study);
        // });
        console.log('All study documents added to the studies collection:');
      } else if (collName === 'scriptures') {
        scriptData.forEach(async (script) => {
          await Script.create(script);
          console.log('A Script document added to the scripts collection:', script);
        });
        console.log('All Script documents added to the scripts collection:');
      } else if (collName === 'users') {
        console.log('users collection found');
        // *** will be added for initial users added. Hash passwords using bcrypt
        // const bcrypt = require('bcryptjs');
        // const password = '56789'; // Replace with your desired password
        // const saltRounds = 10;

        // bcrypt.hash(password, saltRounds, (err, hash) => {
        //   if (err) {
        //     console.error('Error hashing password:', err);
        //   } else {
        //     console.log('Hashed password:', hash);
        //   }
        // });

        // userData.forEach(async (user) => {
        //   await User.create(user);
        //   console.log('A User document added to the users collection:', user);
        // });
        console.log('No User documents added to the users collection:');
      } else if (collName === 'charities') {
        console.log('charities collection found');
        charityData.forEach(async (charity) => {
          await Charity.create(charity);
          console.log('A Charity document added to the charities collection:', charity);
        });
        console.log('All Charity documents added to the charities collection:');
      } else if (collName === 'encourages') {
        console.log('encourages collection found');
        encourageData.forEach(async (encourage) => {
          await Encourage.create(encourage);
          console.log('An Encourage document added to the encourages collection:', encourage);
        });
        console.log('All Encourage documents added to the encourages collection:');
      }

    });

    // Close the connection
    // await mongoose.disconnect();
  } catch (error) {
    console.error('Error listing collections:', error);
  }
}

// Call the function
// listCollections();
