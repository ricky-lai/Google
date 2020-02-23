const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/search"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/search/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;