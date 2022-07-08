const { Router } = require("express");
const router = Router();

const {
  getLogs
} = require("../controllers/logs");

router.get("/api/logs", getLogs);

module.exports = router;