const express = require('express');
const router = express.Router();

const booksAuthorsHandler = require('./book_authors.handller');

router.get('/', async (req, res) => {
    res.json(await booksAuthorsHandler.searchBookAuthor());
});

router.get('/:id', async (req, res) =>{
    res.json(await booksAuthorsHandler.searchBooksAuthorsId(req.params.id))
});

router.post('/', async (req, res) => {
    const { idAuthor, idBook } = req.body;
    res.json(await booksAuthorsHandler.create(idAuthor, idBook));
});

router.put('/:id', async (req, res) =>{
    const { idAuthor, idBook } = req.body;
    res.json(await booksAuthorsHandler.create(idAuthor, idBook, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await booksAuthorsHandler.remove(req.params.id));
});

module.exports = router;