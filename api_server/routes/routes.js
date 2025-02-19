const express = require('express');
const router = express.Router();
const user_Controller = require('../controllers/user_controller')
// const user_Controller2 = require('../controllers/user_controller2')

const scrip_Controller = require('../controllers/scrip_controller.js')

const encourage_Controller = require('../controllers/encourage_controller')

const charity_Controller = require('../controllers/charity_controller')

const contirbution_Controller = require('../controllers/contribution_controller')

const study_Controller = require('../controllers/study_controller')
const authenticateToken = require('../helper/authMiddleware');

// const authenticateToken = require('../helper/verifyJWT')
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/user_controller');


// Update user route with authentication middleware
// router.put('/updateUser/:id', authenticateToken, userController.updateUserData);

// module.exports = router;

module.exports = (app) => {
    // navigation tools //

// app.post('/create_user', user_Controller.createUser);
// app.post('/login', user_Controller.login);
// app.post('/contribution', authenticateToken,contirbution_Controller.createContribution);

// ******** new user routes *********//
app.post('/subscribe', user_Controller.subscribe);

app.get('/get_charity', charity_Controller.getCharity)
app.get('/get_scriptures', scrip_Controller.getScriptures)
app.get('/get_encourage', encourage_Controller.getEncourage)
app.get('/get_studies', study_Controller.getStudies)
// app.get('/get_user/:id', user_Controller.getUser)
// app.get('/get_contribution/:id', contirbution_Controller.getContribution)

// app.put('/updateUser/:id', user_Controller.updateUserData)

app.put('/update_user/:id', user_Controller.updateUser)

// app.put('/add_moral/:id', user_Controller.addMoral)

// app.delete('/delete_Moral/:id/:index', user_Controller.deleteMoral)
// app.delete('/delete_user/:id', user_Controller.deleteUser)

}
