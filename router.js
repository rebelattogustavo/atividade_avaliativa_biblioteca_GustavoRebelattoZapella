const express = require("express");
const router = express.Router();

const usuarios = require("./api/autores/autores.controller");


router.use("/usuarios" , usuarios);

module.exports = router;