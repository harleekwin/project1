"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
router.post('/', function (req, res) {
    var comic = req.body;
    comic._id = new mongodb.ObjectID(req.body._id);
});
router.get('/', function (req, res) {
    database.db.collection('movies').find().toArray().then(function (movies) {
        res.json(movies);
    });
});
router.delete('/:id', function (req, res) {
    var movieId = new mongodb.ObjectID(req.params['id']);
    database.db.collection('movies').remove({ _id: movieId }).then(function () {
        res.end();
    });
});
exports.default = router;
