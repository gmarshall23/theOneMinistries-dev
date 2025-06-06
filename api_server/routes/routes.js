const express = require('express');
const router = express.Router();
const user_Controller = require('../controllers/user_controller')
// const user_Controller2 = require('../controllers/user_controller2')

const scrip_Controller = require('../controllers/scrip_controller.js')
const encourage_Controller = require('../controllers/encourage_controller')
const charity_Controller = require('../controllers/charity_controller')
const contirbution_Controller = require('../controllers/contribution_controller')
const study_Controller = require('../controllers/study_controller');
const events_Controller = require('../controllers/events_controller');

// const authenticateToken = require('../helper/authMiddleware');

// const authenticateToken = require('../helper/verifyJWT')
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/user_controller');


// Update user route with authentication middleware
// router.put('/updateUser/:id', authenticateToken, userController.updateUserData);

// module.exports = router;

module.exports = (app) => {

// ******** Study routes *********//
app.get('/get_studies', study_Controller.getStudies)
app.get('/study_content', study_Controller.getStudyContent)
app.post('/create_study', study_Controller.createStudy)
app.put('/update_study/:id', study_Controller.updateStudy)
app.put('/add_study_info', study_Controller.addStudyInfo)
// app.delete('/delete_study/:id', study_Controller.deleteStudy)

// app.post('/create_user', user_Controller.createUser);
// app.post('/login', user_Controller.login);
// app.post('/contribution', authenticateToken,contirbution_Controller.createContribution);

// ******** user routes *********//
app.post('/subscribe', user_Controller.subscribe);

// ******** charity routes *********//
app.post('/create_charity', charity_Controller.createCharity);
app.put('/update_charity/:id', charity_Controller.updateCharity)
app.get('/get-charities', charity_Controller.getCharities)
// ******** scripture routes *********//
app.get('/get_scriptures', scrip_Controller.getScriptures)
// ******** encourage routes *********//
app.get('/get_encourage', encourage_Controller.getEncourage)
// ******** Events routes *********//
app.post('/create_event',events_Controller.createEvent);
app.get('/get_events', events_Controller.getEvents);
// app.put('/update_event/:id', events_Controller.updateEvent);
// app.delete('/delete_event/:id', events_Controller.deleteEvent);


// app.get('/get_user/:id', user_Controller.getUser)
// app.get('/get_contribution/:id', contirbution_Controller.getContribution)

// app.put('/updateUser/:id', user_Controller.updateUserData)

app.put('/update_user/:id', user_Controller.updateUser)

// app.put('/add_moral/:id', user_Controller.addMoral)

// app.delete('/delete_Moral/:id/:index', user_Controller.deleteMoral)
// app.delete('/delete_user/:id', user_Controller.deleteUser)

}
