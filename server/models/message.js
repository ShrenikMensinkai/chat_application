var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var messageSchema = new Schema({
    _id: { type: objectId, auto: true },
    text:{type:String,required:true},
    // belongs_to_group: { type: String, required: true },
    // users:[String],
    created_by:{type:String,required:true},
    created_date: { type: Date, required: true },
    modified_date: { type: Date, required: true }
});

var message = mongoose.model('messages', messageSchema);

module.exports = message;