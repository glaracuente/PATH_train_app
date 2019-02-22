const router = require("express").Router();
const pathController = require("../../controllers/pathController");

router
  .route("/:routeid/:dir")
  .get(pathController.getTimes)
  .post(pathController.saveLastRoute);

module.exports = router;
