const express = require("express");
const router = express.Router();

const authors = require("./api/authors/authors.controller.js");
const pblsh_companies = require("./api/pblsh_compnies/pblsh_companies.controller.js");
const books = require("./api/books/books.controller.js")
const books_authors = require("./api/book_authors/book_authors.controller.js")

router.use("/authors" , authors);
router.use("/pblsh_companies", pblsh_companies);
router.use("/books", books);
router.use("/books_authors", books_authors);

module.exports = router;