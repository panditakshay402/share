const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        MinKey: 6,
        MaxKey: 25,
    },          
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },

},
{timestamps: true}
);


module.exports = mongoose.model('User', userSchema);
