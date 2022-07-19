const express = require('express');
const router = express.Router();

const pblshCompsHandler = require('./pblsh_compnies.handler.js');

router.get('/', async (req, res) => {
    res.json(await pblshCompsHandler.searchPblshComps());
});

router.get('/:id', async (req, res) =>{
    res.json(await pblshCompsHandler.searchPblshCompsId(req.params.id))
});

router.post('/', async (req, res) =>{
    const { name } = req.body;
    res.json(await pblshCompsHandler.create(name));
});

router.put('/:id', async (req,res) =>{
    const { name } = req.body;
    res.json(await pblshCompsHandler.create(name, req.params.id))
});

router.delete('/:id', async (req, res) =>{
    res.json(await pblshCompsHandler.remove(req.params.id));
});

module.exports = router;