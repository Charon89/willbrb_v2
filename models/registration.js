const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registration_schema = new Schema({
       email: {
               type: String,
               required: true
           },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    subscription: {
        type: String,
        required: true
    },
     date_created: {
         type:Date,
         default: Date.now()
     }
});

const registration_model = mongoose.model("registration", registration_schema);
module.exports = registration_model;