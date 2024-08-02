const userModel = require("../model/userModel");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await userModel.createUser(email, password);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.getUserById(id);
    res.json(user);
  } catch (e) {
    console.log(e);
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const updatedUser = await userModel.updateUserById(id, email, password);
    res.json(updatedUser);
  } catch (e) {
    console.log(e);
  }
};
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.deleteUserById(id);
    res.json(deletedUser);
  } catch (e) {
    console.log(e);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  registerUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
