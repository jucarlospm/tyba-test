const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../middleware/auth");
const { saveLog } = require("../middleware/logs");

const {
  searchRestaurants
} = require("../controllers/geolocation");

router.get("/api/restaurants", saveLog, verifyToken, searchRestaurants);

module.exports = router;