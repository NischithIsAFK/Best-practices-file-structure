const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middleware/authenticateToken");
router.get("/", authenticateToken, userController.getAllUsers);
router.get("/:id", authenticateToken, userController.getUserById);
router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.put("/:id", authenticateToken, userController.updateUserById);
router.delete("/:id", authenticateToken, userController.deleteUserById);

module.exports = router;
