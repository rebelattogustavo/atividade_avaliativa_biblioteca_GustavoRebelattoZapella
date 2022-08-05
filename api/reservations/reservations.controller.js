const express = require('express');
const router = express.Router();

const reservationsHandler = require('./reservations.handler')

router.get('/', async (req, res) => {
    res.json(await reservationsHandler.searchReservations());
});

router.get('/:id', async (req, res) =>{
    res.json(await reservationsHandler.searchReservationsId(req.params.id))
});

router.post('/', async (req, res) => {
    const { idLivros, idClient } = req.body;
    res.json(await reservationsHandler.create(idLivros, idClient));
});

router.put('/:id', async (req, res) =>{
    const { idLivros, idClient } = req.body;
    res.json(await reservationsHandler.create(idLivros, idClient, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await reservationsHandler.remove(req.params.id));
});

module.exports = router;