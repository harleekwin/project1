"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var book_1 = require("../models/book");
var router = express.Router();
router.get('/publisher/:name', function (req, res) {
    book_1.default.find({ comicPublisher: req.params["name"] }, function (err, comics) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(comics);
        }
    });
});
router.get('/', function (req, res) {
    book_1.default.find().then(function (comics) {
        res.json(comics);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/:id', function (req, res) {
    book_1.default.findById(req.params['id']).then(function (comic) {
        res.json(comic);
    });
});
router.post('/', function (req, res) {
    console.log(req.body);
    if (req.body._id) {
        var comicId = req.body._id;
        book_1.default.findById(comicId).then(function (comic) {
            comic.comicName = req.body.comicName;
            comic.comicIssue = req.body.comicIssue;
            comic.comicPublisher = req.body.comicPublisher;
            comic.save().then(function (updatedComic) {
                res.json(updatedComic);
            }).catch(function (err) {
                res.status(400).json(err);
            });
        }).catch(function () {
            res.sendStatus(404);
        });
    }
    else {
        var comic_1 = new book_1.default();
        comic_1.comicName = req.body.comicName;
        comic_1.comicIssue = req.body.comicIssue;
        comic_1.comicPublisher = req.body.comicPublisher;
        comic_1.save().then(function (newComic) {
            res.json(newComic);
        }).catch(function (err) {
            console.log(err);
            res.status(400).json(err);
        });
    }
});
router.post('/:id', function (req, res) {
});
router.delete('/:id', function (req, res) {
    var comicId = req.params.id;
    book_1.default.remove({ _id: comicId }).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
exports.default = router;
