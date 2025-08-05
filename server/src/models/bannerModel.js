const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({

    heading: { type: String,  required: true},
    subHeading: { type: String,  required: true },
    paragraph: { type: String, required: true },
    buttonText: { type: String },
    buttonShow: { type: Boolean, default: true },
},

    { timestamps: true, versionKey: false }
)

const bannerModels = mongoose.model("banner", bannerSchema);
module.exports = bannerModels;


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