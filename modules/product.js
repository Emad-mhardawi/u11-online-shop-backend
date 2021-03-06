const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type: String,
        required: true,
    },

    imgeUrl:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    price:{
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Product', productSchema )