const { Router } = require("express");
const { getBookById } = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Author ID: ${bookId}`);
});
bookRouter.get("/:bookId", getBookById);

module.exports = bookRouter;