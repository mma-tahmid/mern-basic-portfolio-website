const mongoose = require('mongoose')

const navbarSchema = new mongoose.Schema({

    key: { type: String, required: true, unique: true }, // NEW FIELD

    menuItems: {
        type: [{ type: String }],
        required: true,          // Makes the entire array required
        // validate: [arrayMinLength, 'At least one menu item is required.']
    },

    buttonText: { type: String },
    buttonShow: { type: Boolean, default: true },
    logo: { type: String }

},

    { timestamps: true, versionKey: false }
)

const navbarModels = mongoose.model("navbar", navbarSchema);
module.exports = navbarModels;


// Array (best practice)

// applications: {
//     type: [mongoose.Schema.Types.ObjectId],
//     ref: "application",
//     default: []
// }



// menuItems: [
//     {
//         type: String,       // Array of strings
//         // required: true // here required
//         // This makes each individual item in the array required(not the whole array), and even that doesn’t work as expected for validation.
//     }
// ]

// this one is also correct but there are some drawbacks