const User = require('../models/User'); // Adjust the path to your User model
const bcrypt = require('bcryptjs');

module.exports = {
    createUser(req, res) {
        console.log('Preparing to create user with req.body:', req.body);
        // Password hashing is performed in the User model with 'pre' middleware
        const { firstName, lastName, username, email, role, password, studyStartDate, giftType, giftAmount, charities } = req.body;
        if (!firstName || !lastName || !username || !email || !password || !studyStartDate || !giftType || !giftAmount || !charities) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }
        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            role,
            password, // Password will be hashed in the User model
            studyStartDate,
            giftType,
            giftAmount,
            charities
        });
        newUser.save()
            .then(user => {
                console.log('New user created:', user);
                res.status(200).json({
                    success: true,
                    message: 'User created successfully',
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        studyStartDate: user.studyStartDate,
                        giftType: user.giftType,
                        giftAmount: user.giftAmount,
                        charities: user.charities
                    }
                });
            })
    },
    getUsers(req, res) {
        User.find()
            .then(users => {
                res.status(200).json({
                    success: true,
                    users: users.map(user => ({
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        studyStartDate: user.studyStartDate,
                        giftType: user.giftType,
                        giftAmount: user.giftAmount,
                        charities: user.charities
                    }))
                });
            })
            .catch(err => {
                console.error('Error fetching users:', err);
                res.status(500).json({
                    success: false,
                    message: 'Error fetching users',
                    error: err.message
                });
            });
    }
}
