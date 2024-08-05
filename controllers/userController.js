const userModel = require("../model/userModel");
const { validateEmail, validatePassword } = require("../utils/validate");
const { validate: isUuid } = require("uuid");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({ message: "Invalid password format" });
    }

    const existingUser = await userModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = await userModel.createUser(email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  if (!isUuid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    if (!validateEmail(email) || !validatePassword(password)) {
      return res
        .status(400)
        .json({ message: "Invalid email or password format" });
    }

    const updatedUser = await userModel.updateUserById(id, email, password);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.deleteUserById(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
