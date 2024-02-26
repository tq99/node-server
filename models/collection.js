// const mongoose = require('mongoose');

// //user collection
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         // required:true
//     },
//     first_name: {
//         type: String,
//         // required:true
//     },
//     last_name: {
//         type: String,
//         // required:true
//     },
//     email: {
//         type: String,
//         // required:true
//     },
//     address: {
//         type: String,
//     },
//     city: {
//         type: String,
//     },
//     country: {
//         type: String,
//     },
//     postal_code: {
//         type: String,
//     },
//     about_me: {
//         type: String,
//     },
//     password:{
//         type: String,
//     }
// }
// )
// const user = mongoose.model("user", userSchema);


// module.exports={user}

const mongoose = require('mongoose'); // Import mongoose

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // required:true
    },
    first_name: {
        type: String,
        // required:true
    },
    last_name: {
        type: String,
        // required:true
    },
    email: {
        type: String,
        // required:true
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    postal_code: {
        type: String,
    },
    about_me: {
        type: String,
    },
    password:{
        type: String,
    }
});

const User = mongoose.model("User", userSchema); // Define and export the model

module.exports = User;
