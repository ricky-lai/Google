const router = require("express").Router();
const booksRoutes = require("./books");

// Books routes
router.use("/books", booksRoutes);

module.exports = router;
