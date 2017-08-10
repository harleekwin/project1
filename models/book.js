"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var comicSchema = new mongoose.Schema({
    comicName: {
        type: String,
        required: true,
        minlength: 3
    },
    comicIssue: {
        type: Number,
        required: true,
        minlength: 2
    },
    comicPublisher: {
        enum: ['Marvel', 'DC', 'Image'],
        type: String,
        required: true
    }
});
exports.default = mongoose.model('Comic', comicSchema);
