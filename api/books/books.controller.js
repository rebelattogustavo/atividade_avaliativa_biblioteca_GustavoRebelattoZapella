const express = require('express');
const router = express.Router();

const booksHandler = require('./books.handler.js');
const pblshComp = require('../pblsh_compnies/pblsh_compnies.handler.js')

router.get('/', async (req, res) => {
    res.json(await booksHandler.searchBooks());
});

router.get('/:id', async (req, res) =>{
    res.json(await booksHandler.searchBooksId(req.params.id))
});

router.post('/', async (req, res) => {
    const { title, amount, pblsh_comp } = req.body;
    res.json(await booksHandler.create(title, amount, pblsh_comp));
});

router.put('/:id', async (req, res) =>{
    const { title, amount, pblsh_comp } = req.body;
    res.json(await booksHandler.create(title, amount, pblsh_comp, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await booksHandler.remove(req.params.id));
});

module.exports = router;