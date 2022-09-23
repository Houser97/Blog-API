const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required:true},
    body: {type: String, required:true},
    comments: {type: Schema.Types.ObjectId, ref: 'Comment'},
    timestamp: {type: Date, default: Date.now},
})

