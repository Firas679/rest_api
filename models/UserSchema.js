const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Type your name' ]
    },
    lname: String,
    age: Number,
    town: String
})

module.exports = mongoose.model('User', UserSchema)