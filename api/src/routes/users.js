const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../middleware/auth");
const { saveLog } = require("../middleware/logs");

const {
  registerUser,
  loginUser,
  logoutUser
} = require("../controllers/users");

router.post("/api/register", saveLog, registerUser);
router.post("/api/login", saveLog, loginUser);
router.post("/api/logout", saveLog, verifyToken, logoutUser);

module.exports = router;