const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const commentSchema = new Schema({
    username: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
});

commentSchema.virtual('timestamp_formatted').get(function(){
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('Comment', commentSchema);