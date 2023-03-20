const mongoose = require('mongoose')
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
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
    department: {
        type: [String],
        default: [" "]
    },
    tenure: {
        type: [String],
        default: ["Regular"]
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema)
