const express = require("express");
const router = express.Router(); // Corrected usage
const user = require("../controllers/logic"); // Ensure this path is correct
const jwtMiddleware = require("../middleware/jwtMiddleware"); // Ensure this path is correct

// User Register
router.post("/users/register", user.register);

// Login
router.post("/user/login", user.login);

// Edit Profile
router.put("/user/edit-profile", jwtMiddleware, user.editProfile);

// Add Invoice (Uncomment and correct the path as necessary)
// router.post('/user/add-project', jwtMiddleware, user.addProject);

module.exports = router;
