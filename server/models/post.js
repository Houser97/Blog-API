const { DateTime } = require('luxon');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required:true},
    body: {type: String, required:true},
    comments: {type: Schema.Types.ObjectId, ref: 'Comment'},
    timestamp: {type: Date, default: Date.now},
    published: {type: Boolean, require:true}
})

postSchema.virtual('timestamp_formatted').get(function(){
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model('Post', postSchema);