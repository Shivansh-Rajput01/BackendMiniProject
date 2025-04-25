const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/miniproject`);

let userSchema = mongoose.Schema({
    name : String,
    username : String,
    age : Number,
    password : String,
    email : String,
    profilePicture : {
        type : String,
        default : "default.png"
    },
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'
        }
    ]
});

module.exports = mongoose.model('user', userSchema);