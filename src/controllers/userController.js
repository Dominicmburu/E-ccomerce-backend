const { getUserById, updateUserDetails } = require('../services/userService');

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    if (!username || !email) {
      return res.status(400).json({ message: 'Username and email are required' });
    }

    const updatedUser = await updateUserDetails(id, username, email);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({message: 'User updated successfully', updatedUser});
  } catch (error) {
    console.error('Error in updateUserDetails:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUser,
  updateUser,
};
