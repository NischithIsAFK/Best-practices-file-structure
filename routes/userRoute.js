const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserById);
router.post("/register",userController.registerUser);
router.put("/:id",userController.updateUserById);
router.delete("/:id",userController.deleteUserById);

module.exports=router