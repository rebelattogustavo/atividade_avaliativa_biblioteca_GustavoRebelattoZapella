const express = require('express');
const router = express.Router();

const clientsHandler = require('./clients.handler');

router.get('/', async (req, res) => {
    res.json(await clientsHandler.searchClients());
});

router.get('/:id', async (req, res) =>{
    res.json(await clientsHandler.searchClientsId(req.params.id))
});

router.post('/', async (req, res) => {
    const { name, lastName, age, email, cellphone } = req.body;
    res.json(await clientsHandler.create(name, lastName, age, email, cellphone));
});

router.put('/:id', async (req, res) =>{
    const { name, lastName, age, email, cellphone } = req.body;
    res.json(await clientsHandler.create(name, lastName, age, email, cellphone, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await clientsHandler.remove(req.params.id));
});

module.exports = router;