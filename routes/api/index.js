const router = require("express").Router();
const trains = require("./trains");

router.use("/trains", trains);

module.exports = router;
