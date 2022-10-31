const express = require("express");
const router = express.Router();

// Either of the two works thesame
const { registerUser, loginUser } = require("../controllers/userControlers");
const userControlers = require("../controllers/userControlers");

router.post("/", registerUser);

router.post("/login", userControlers.loginUser);

module.exports = router;
