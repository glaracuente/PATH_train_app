const router = require("express").Router();
const pathController = require("../../controllers/pathController");

router
  //matches with /api/times
  .route("/")
  .get(pathController.getTimes);

/*router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
*/
module.exports = router;
