const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{
        type:String,
        requires:true
    },
    price:{
        type: Number,
        required: true
    }
}, {timestamp:true});

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;