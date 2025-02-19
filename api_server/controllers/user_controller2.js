const User = require('../models/User'); // Adjust the path to your User model


  const updateUser= async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a URL parameter
    const updateData = req.body; // Assuming the update data is passed in the request body
    console.log('Incoming PUT request for /update_user/:id');
    console.log('userId:', userId);
    console.log('updateData:', updateData);
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
      console.log('User successfully updated:', updatedUser);
      res.status(200).send(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Internal server error');
    }
  }
  // Other controller functions...

module.exports = {
    updateUser,
    // Other controller functions...
    };
