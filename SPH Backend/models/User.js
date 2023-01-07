const mongoose = require('mongoose')
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    //student_id: {
    //    type: String,
    //    required: true
    //},
    email:{ 
        type: mongoose.SchemaTypes.Email, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ["Student"]
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema)
