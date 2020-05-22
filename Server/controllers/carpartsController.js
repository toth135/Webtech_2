const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Carparts } = require('../models/carparts');

// => localhost:3000/carparts/
router.get('/', (req, res) => {
    Carparts.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Carparts :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Carparts.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Carparts :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var parts = new Carparts({
        name: req.body.name,
        car_type: req.body.car_type,
        description: req.body.description,
        price: req.body.price,
    });
    parts.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Carpart Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var parts = {
        name: req.body.name,
        car_type: req.body.car_type,
        description: req.body.description,
        price: req.body.price,
    };
    Carparts.findByIdAndUpdate(req.params.id, { $set: parts }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Carpart Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Carparts.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Carpart Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;