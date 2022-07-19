const express = require('express');
const router = express.Router();

const authorsHandler = require('./authors.handler.js');

router.get('/', async (req, res) => {
    res.json(await authorsHandler.searchAuthors());
});

router.get('/:id', async (req, res) =>{
    res.json(await authorsHandler.searchAuthorsId(req.params.id))
});

router.post('/', async (req, res) => {
    const { name, lastName, age } = req.body;
    res.json(await authorsHandler.create(name, lastName, age));
});

router.put('/:id', async (req, res) =>{
    const { name, lastName, age } = req.body;
    res.json(await authorsHandler.create(name, lastName, age, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await authorsHandler.remove(req.params.id));
});

module.exports = router;