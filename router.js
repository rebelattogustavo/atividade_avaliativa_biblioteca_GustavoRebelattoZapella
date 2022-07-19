const express = require("express");
const router = express.Router();

const authors = require("./api/authors/authors.controller.js");
const pblsh_companies = require("./api/pblsh_compnies/pblsh_companies.controller.js");
const books = require("./api/books/books.controller.js")

router.use("/authors" , authors);
router.use("/pblsh_companies", pblsh_companies);
router.use("/books", books);

module.exports = router;